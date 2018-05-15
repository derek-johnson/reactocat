import * as THREE from 'three';
import * as Stats from 'stats-js';
import {
  EffectComposer,
  GlitchPass,
  RenderPass,
  DotScreenPass,
  // ShaderPass,
} from 'postprocessing';

import SceneSubject from './SceneSubject';

export default canvas => {
  const clock = new THREE.Clock();

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height,
  };

  const mousePosition = {
    x: 0,
    y: 0,
  };

  // scene
  function buildScene() {
    const scene = new THREE.Scene();

    // refactored GeneralLights
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0.5, 0.5, 0.5);
    scene.add(directionalLight);

    const color = 0x404040;
    const intensity = 1;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);

    scene.fog = new THREE.Fog(0x000000, 100, 1);

    return scene;
  }
  const scene = buildScene();

  // renderer
  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1.0);
    // renderer.autoClear = false;

    return renderer;
  }
  const renderer = buildRender(screenDimensions);

  // stats
  const stats = new Stats();
  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);

  setInterval(() => {
    stats.begin();
    stats.end();
  }, 1000 / 60);

  // camera
  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 20;
    const nearPlane = 1;
    const farPlane = 10000;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    camera.position.z = 2500;
    // camera.lookAt(scene.position);

    return camera;
  }
  const camera = buildCamera(screenDimensions);

  // PostProcessing
  function postProcessing() {
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);

    const effectDot = new DotScreenPass({
      scale: 30,
      angle: Math.PI * 0.5,
      intensity: 0.2,
    });
    effectDot.renderToScreen = false;

    // const effectRGB = new ShaderPass(RGBShiftShader);
    // // effectRGB.uniforms.amount.value = 0.01;
    // effectRGB.uniforms.value = 0.01;
    // effectRGB.renderToScreen = true;
    // composer.addPass(effectDot);

    const effectGlitch = new GlitchPass(64);
    effectGlitch.renderToScreen = true;

    composer.addPass(renderPass);
    composer.addPass(effectDot);
    composer.addPass(effectGlitch);
    // composer.addPass(effectRGB);

    const pixelRatio = window.devicePixelRatio;
    composer.setSize(
      window.innerWidth * pixelRatio,
      window.innerHeight * pixelRatio
    );

    return composer;
  }
  const composer = postProcessing(screenDimensions);

  // postprocessing
  //   composer = new THREE.EffectComposer( renderer );
  //   composer.addPass( new THREE.RenderPass( scene, camera ) );
  //
  //   var effect = new THREE.ShaderPass( THREE.DotScreenShader );
  //   effect.uniforms[ 'scale' ].value = 30;
  //   composer.addPass( effect );
  //
  //   var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
  //   effect.uniforms[ 'amount' ].value = 0.01;
  //   effect.renderToScreen = true;
  //
  //   composer.addPass( effect );
  //   composer.addPass( effect );
  //
  //   var glitch = new THREE.GlitchPass(100);
  //   glitch.renderToScreen = true;
  //   composer.addPass(glitch);

  // sceneSubjects
  function createSceneSubjects() {
    const sceneSubjects = [new SceneSubject(scene)];

    return sceneSubjects;
  }
  const sceneSubjects = createSceneSubjects(scene);

  function updateCameraPositionRelativeToMouse() {
    camera.position.x += (mousePosition.x * 0.1 - camera.position.x) * 0.1;
    camera.position.y += (-(mousePosition.y * 0.1) - camera.position.y) * 0.1;
    // camera.position.x += (mousePosition.x - camera.position.x) * 0.05;
    // camera.position.y += (-mousePosition.y - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
  }

  function update() {
    const elapsedTime = clock.getElapsedTime();

    /* eslint-disable no-plusplus */
    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime);
    /* eslint-enable no-plusplus */

    updateCameraPositionRelativeToMouse();

    composer.render(clock.getDelta());
    // renderer.render(scene, camera);
  }

  function onWindowResize() {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

  function onMouseMove(x, y) {
    mousePosition.x = x;
    mousePosition.y = y;
  }

  return {
    update,
    onWindowResize,
    onMouseMove,
  };
};

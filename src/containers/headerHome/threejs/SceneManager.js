import * as THREE from 'three';
import * as Stats from 'stats-js';
import SceneSubject from './SceneSubject';
// import GeneralLights from './GeneralLights';

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
    renderer.setClearColor(0xffffff);
    // renderer.gammaInput = true;
    // renderer.gammaOutput = true;

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
    const camera = new THREE.Camera(aspectRatio);

    camera.position.z = 1;

    return camera;
  }
  const camera = buildCamera(screenDimensions);

  // sceneSubjects
  function createSceneSubjects() {
    const sceneSubjects = [new SceneSubject(scene)];

    return sceneSubjects;
  }
  const sceneSubjects = createSceneSubjects(scene);

  // function updateCameraPositionRelativeToMouse() {
  //   camera.position.x += (mousePosition.x * 0.01 - camera.position.x) * 0.01;
  //   camera.position.y += (-(mousePosition.y * 0.01) - camera.position.y) * 0.01;
  //   camera.lookAt(origin);
  // }

  function update() {
    const elapsedTime = clock.getElapsedTime();

    /* eslint-disable no-plusplus */
    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime);
    /* eslint-enable no-plusplus */

    // updateCameraPositionRelativeToMouse();

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    // camera.updateProjectionMatrix();

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

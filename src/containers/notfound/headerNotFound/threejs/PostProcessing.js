import * as THREE from 'three';

// PostProcessing
/* eslint-disable */
export default scene => {
  const composer = new THREE.EffectComposer(renderer);
  composer.addPass(new THREE.RenderPass(scene, camera));

  var effect = new THREE.ShaderPass(THREE.DotScreenShader);
  effect.uniforms.scale.value = 30;
  composer.addPass(effect);

  var effect = new THREE.ShaderPass(THREE.RGBShiftShader);
  effect.uniforms.amount.value = 0.01;
  effect.renderToScreen = true;

  composer.addPass(effect);
  composer.addPass(effect);

  const glitch = new THREE.GlitchPass(100);
  glitch.renderToScreen = true;
  composer.addPass(glitch);
};
/* esint-enable */

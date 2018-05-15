import * as THREE from 'three';

export default scene => {
  // startTime
  const startTime = Date.now();

  // Group
  const group = new THREE.Group();

  // Geometry
  const subjectGeometry = new THREE.PlaneBufferGeometry(2, 2);

  // Uniforms
  // const subjectUniforms = {
  //   iGlobalTime: { type: 'f', value: 1.0 },
  //   iResolution: { type: 'v1', value: new THREE.Vector2() },
  // };
  const subjectUniforms = {
    iTime: { type: 'f', value: 1.0 },
    iResolution: { type: 'v1', value: new THREE.Vector3() },
  };

  // Material
  const subjectMaterial = new THREE.ShaderMaterial({
    uniforms: subjectUniforms,
    vertexShader: document.getElementById('vertexShader3').text,
    fragmentShader: document.getElementById('fragmentShader3').text,
  });
  subjectMaterial.needsUpdate = true;

  // Mesh
  const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

  group.add(subjectMesh);
  scene.add(group);

  // Update
  function update() {
    const currentTime = Date.now();
    subjectUniforms.iTime.value = (currentTime - startTime) * 0.0005;
  }

  return {
    update,
  };
};

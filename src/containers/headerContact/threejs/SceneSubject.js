import * as THREE from 'three';

export default scene => {
  // startTime
  const startTime = Date.now();

  // Group
  const group = new THREE.Group();

  // Geometry
  const subjectGeometry = new THREE.PlaneGeometry(256, 256, 256, 256);

  // Uniforms
  const subjectUniforms = {
    time: { type: 'f', value: 0 },
  };

  // Material
  const subjectMaterial = new THREE.RawShaderMaterial({
    uniforms: subjectUniforms,
    vertexShader: document.getElementById('vertexShader2').text,
    fragmentShader: document.getElementById('fragmentShader2').text,
    transparent: true,
  });
  subjectMaterial.needsUpdate = true;

  // Mesh
  const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

  group.add(subjectMesh);
  scene.add(group);

  // Update
  function update() {
    const currentTime = Date.now();
    subjectUniforms.time.value = (currentTime - startTime) * 0.0008;
  }

  return {
    update,
  };
};

import * as THREE from 'three';

export default scene => {
  // Group
  const group = new THREE.Group();
  const group1 = new THREE.Group();
  const group2 = new THREE.Group();

  // Geometry
  const subjectSphereGeometry = new THREE.SphereGeometry(10, 16, 8, 1);

  // const faceIndices = ['a', 'b', 'c', 'd'];
  // const color, f, p, n, vertexIndex,

  const radius = 180;
  const subjectIcoGeometry = new THREE.IcosahedronGeometry(radius, 3);

  const subjectRingGeometry = new THREE.TorusGeometry(210, 1, 100, 50);

  // Material
  const subjectSphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
  });
  subjectSphereMaterial.needsUpdate = true;

  // const subjectIcoMaterial = new THREE.MeshLambertMaterial({
  //   color: 0xf5f5f5,
  //   flatShading: THREE.FlatShading,
  //   vertexColors: THREE.VertexColors,
  // });
  // subjectIcoMaterial.needsUpdate = true;

  const subjectIcoMaterial = new THREE.MeshPhongMaterial({
    color: 0x191919,
    emissive: 0x181818,
    // specular: 0xebebeb,
    // specular: 0xde3e3e,
    // specular: 0xd42424,
    specular: 0xf5f5f5,
    shininess: 1,
    flatShading: THREE.FlatShading,
    vertexColors: THREE.VertexColors,
  });
  subjectIcoMaterial.needsUpdate = true;

  const subjectRingMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    flatShading: THREE.SmoothShading,
    vertexColors: THREE.VertexColors,
    side: THREE.DoubleSide,
  });
  subjectRingMaterial.needsUpdate = true;

  // Mesh
  const subjectSphereMesh = new THREE.Mesh(
    subjectSphereGeometry,
    subjectSphereMaterial
  );

  const subjectIcoMesh = new THREE.Mesh(subjectIcoGeometry, subjectIcoMaterial);

  const subjectRingMesh = new THREE.Mesh(
    subjectRingGeometry,
    subjectRingMaterial
  );

  // Sphere Group
  group.add(subjectSphereMesh);
  scene.add(group);

  // Icosahedron Group
  // group1 = THREE.SceneUtils.createMultiMaterialObject(subjectIcoMesh);
  group1.add(subjectIcoMesh);
  group1.position.x = 0;
  scene.add(group1);

  // Ring Group
  group2.add(subjectRingMesh);
  scene.add(group2);

  // Update
  function update() {
    const time = Date.now();
    const speed = 0.001;

    const timeTravel = time * speed;

    // group.rotation.y = timeTravel;

    // group1.rotation.x = timeTravel;
    // group1.rotation.y = timeTravel / 2;
    group1.rotation.z = timeTravel / 2 + 45;

    group2.rotation.x = timeTravel;
    group2.rotation.y = 45;
  }

  return {
    update,
  };
};

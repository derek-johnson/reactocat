import Detector from './Detector';
import SceneManager from './SceneManager';

// 404 Distortion
export default container => {
  if (!Detector.webgl) Detector.addGetWebGLMessage();

  // createCanvas
  function createCanvas(document) {
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    return canvas;
  }
  const canvas = createCanvas(document, container);

  const sceneManager = new SceneManager(canvas);

  let canvasHalfWidth;
  let canvasHalfHeight;

  // resizeCanvas
  function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvasHalfWidth = Math.round(canvas.offsetWidth / 2);
    canvasHalfHeight = Math.round(canvas.offsetHeight / 2);

    sceneManager.onWindowResize();
  }

  // mouseMove
  function mouseMove({ screenX, screenY }) {
    sceneManager.onMouseMove(
      screenX - canvasHalfWidth,
      screenY - canvasHalfHeight
    );
  }

  // bindEventListeners
  function bindEventListeners() {
    window.onresize = resizeCanvas;
    window.onmousemove = mouseMove;
    resizeCanvas();
  }
  bindEventListeners();

  // Render
  function render() {
    requestAnimationFrame(render);
    sceneManager.update();
  }
  render();
};

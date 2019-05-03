const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

/**
 * @param {number} width
 * @param {number} height
 */
function initCanvas(width, height) {
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);
}

/**
 * @param {SVGElement} svg
 * @return {string} base64
 */
function svgToBase64(svg) {
  alert(svg);
  const data = new XMLSerializer().serializeToString(svg);
  return (
    "data:image/svg+xml;charset=utf-8;base64," +
    btoa(unescape(encodeURIComponent(data)))
  );
}

/**
 * download
 * @param {string} src
 * @param {string} fileName
 */
function download(src, fileName = "setsu.png") {
  const downloadLink = document.createElement("a");
  downloadLink.href = src;
  downloadLink.download = fileName;
  downloadLink.click();
}

export default {
  /**
   * download svg to png
   * @param {SVGElement} svg
   * @param {number} width
   * @param {number} height
   */
  svg(svg, width, height) {
    const tmpImage = new Image();
    initCanvas(width, height);

    tmpImage.onload = () => {
      new Promise(resolve => {
        ctx.drawImage(tmpImage, 0, 0, width, height);
        console.log(ctx);
        resolve();
      }).then(() => {
        download(canvas.toDataURL("image/png"));
      });
    };

    tmpImage.src = svgToBase64(svg);
  }
};

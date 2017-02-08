(function ComponentsDicomEditorCanvasModule() {
  class Canvas extends React.Component {
    render() {
      return (
        <div ref={e => this.container = e} className="dicom-editor-canvas">
          <canvas
            ref={e => this.canvas = e}
            className="dicom-editor-canvas__image"
          />
        </div>
      );
    }

    componentWillUpdate(props) {
      this.setImage(props.image);
    }

    componentDidMount() {
      this.setImage(this.props.image);
    }

    setImage(image) {
      if (image.newImgData) {
        this.canvas.width = image.newImgData.width;
        this.canvas.height = image.newImgData.height;

        this.canvas.getContext('2d').putImageData(image.newImgData, 0, 0);
      } else {
        this.initImageData(image);
      }

      this.setCanvasPosition(image.width, image.height);
    }

    setZoom(zoom) {
      const newWidth = this.canvas.width * zoom;
      const newHeight = this.canvas.height * zoom;

      this.canvas.style.width = newWidth + 'px';
      this.canvas.style.height = newHeight + 'px';

      this.setCanvasPosition(newWidth, newHeight);
    }

    rotate(degs) {
      this.canvas.style.transform = `rotate(${degs}deg)`;
    }

    initImageData(image) {
      const img = new Image,
            ctx = this.canvas.getContext('2d');

      this.canvas.width = image.width;
      this.canvas.height = image.height;

      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        image.imgData = ctx.getImageData(0, 0, image.width, image.height);
        image.newImgData = ctx.getImageData(0, 0, image.width, image.height);
      }
      img.src = image.originalPath;
    }

    setCanvasPosition(width, height) {
      return null;
      const containerRect = this.container.getBoundingClientRect();

      this.canvas.style.left = this.calcPosition(containerRect.width, width);
      this.canvas.style.top = this.calcPosition(containerRect.height, height);
    }

    calcPosition(container, img) {
      return ((container - img) * 100) / (container * 2) + '%';
    }
  }

  Canvas.propTypes = {

  };

  Canvas.defaultProps = {

  };

  Components.DicomEditor.Canvas = Canvas;
})();

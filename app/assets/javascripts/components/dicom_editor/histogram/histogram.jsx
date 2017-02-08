(function ComponentsDicomEditorHistogramModule() {
  class Histogram extends React.Component {
    render() {
      return (
        <div className="panel panel-default dicom-editor-panel
                        dicom-editor-histogram panel-body-margin">
          <div className="panel-heading">
            Histogram
          </div>

          <div className="panel-body dicom-editor-panel__body
                          dicom-editor-panel__body_overflow panel-body-margin">
            <canvas ref={e => this.canvasRed = e}/>
            <canvas ref={e => this.canvasGreen = e}/>
            <canvas ref={e => this.canvasBlue = e}/>
          </div>
        </div>
      );
    }

    componentDidMount() {
      this.canvasRed.width = 256;
      this.canvasRed.height = 80;
      this.ctxRed = this.canvasRed.getContext('2d');
      this.canvasRed.style.width = '100%';

      this.canvasGreen.width = 256;
      this.canvasGreen.height = 80;
      this.ctxGreen = this.canvasGreen.getContext('2d');
      this.canvasGreen.style.width = '100%';

      this.canvasBlue.width = 256;
      this.canvasBlue.height = 80;
      this.ctxBlue = this.canvasBlue.getContext('2d');
      this.canvasBlue.style.width = '100%';

      this.setImage(this.props.image)
    }

    componentWillUpdate(props) {
      this.setImage(props.image);
    }

    setImage(image) {
      if (image.histogram) {
        Lib.ImageFilter.histogram(image);

        this.drawHistogram(this.ctxRed, image.histogram.red, 'red');
        this.drawHistogram(this.ctxGreen, image.histogram.green, 'green');
        this.drawHistogram(this.ctxBlue, image.histogram.blue, 'blue');

      } else {
        this.initHistogram(image);
      }
    }

    drawHistogram(ctx, histogram, fillStyle) {
      const height = 80,
            coef = Math.max(...histogram) / height;

      ctx.clearRect(0, 0, 256, height);
      ctx.fillStyle = fillStyle;
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let i = 0; i < 256; i++) {
        ctx.lineTo(i, height - histogram[i] / coef);
      }

      ctx.lineTo(256, height);
      ctx.closePath();
      ctx.fill();
    }

    initHistogram(image) {
      if (!image.newImgData) return null;

      image.histogram = {
        red: new Int32Array(256),
        green: new Int32Array(256),
        blue: new Int32Array(256)
      };

      Lib.ImageFilter.histogram(image);
    };

  }

  Histogram.propTypes = {

  };

  Histogram.defaultProps = {

  };

  Components.DicomEditor.Histogram = Histogram;
})();

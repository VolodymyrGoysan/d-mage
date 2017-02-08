(function ComponentsDicomEditorModule() {
  class DicomEditor extends React.Component {
    constructor(props) {
      super(props);

      this.state = { image: props.images[0] };

      this.handleImageSelect = this.handleImageSelect.bind(this);
      this.handleImageDataChange = this.handleImageDataChange.bind(this);
      this.handleZoomChange = this.handleZoomChange.bind(this);
      this.handleRotateChange = this.handleRotateChange.bind(this);
    }

    render() {
      if (!this.state.image) return null;

      return (
        <div className="row dicom-editor">
          <div className="col-md-3 column-no-padding" style={{ height: '100%' }}>
            <div className="panel-body-margin">
              <DicomEditor.Filters
                onImageDataChange={this.handleImageDataChange}
                image={this.state.image}
              />
            </div>
          </div>

          <div className="col-md-7 column-no-padding"
               style={{ height: '100%' }}>
            <div className="panel-body-margin">
              <div className="panel panel-default panel-overflow dicom-editor__container">

                <div className="panel-heading">
                  <DicomEditor.ControlPanel
                    onZoomChange={this.handleZoomChange}
                    onRotateChange={this.handleRotateChange}
                  />
                </div>

                <div className="panel-body dicom-editor__body
                                panel-overflow__body scrollbar-os-x">
                  <DicomEditor.Canvas
                    ref="canvas"
                    image={this.state.image}
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-2 column-no-padding">
            <div className="panel-body-margin">
              <DicomEditor.Histogram
                ref='histogram'
                image={this.state.image}
              />
              <DicomEditor.Images
                images={this.props.images}
                selected={this.state.image}
                onSelect={this.handleImageSelect}
              />
            </div>
          </div>
        </div>
      );
    }

    handleImageSelect(image) {
      this.setState({ ...this.state, image });
      this.refs.canvas.initImageData(image);
    }

    handleImageDataChange(image) {
      this.refs.canvas.setImage(image);
      this.refs.histogram.setImage(image);
    }

    handleZoomChange(e) {
      this.refs.canvas.setZoom(parseFloat(e.target.value));
    }

    handleRotateChange(degs) {
      this.refs.canvas.rotate(degs);
    }
  }

  DicomEditor.propTypes = {

  };

  DicomEditor.defaultProps = {
    // filters: ['Brightness', 'HorizontalFlip', 'ColorsInvertor',
    //           'Threshold', 'VerticalFlip', 'GrayScale']
  };

  Components.DicomEditor = DicomEditor;
})();

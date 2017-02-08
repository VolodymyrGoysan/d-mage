(function ComponentsDicomEditorImageModule() {
  class Image extends React.Component {
    render() {
      return (
        <div ref={e => this.imgContainerEl = e} className="dicom-editor__image-container">
          <img
            ref={e => this.imgEl = e}
            className="img-responsive"
            src={this.props.image.originalPath}
          />
        </div>
      );
    }

    componentDidMount() {
      const containerRect = this.imgContainerEl.getBoundingClientRect()

      this.imgContainerEl.style.position = 'relative'

      this.imgContainerEl.style.left = this.imgCenter(
          containerRect.width,
          this.props.image.width
      );

      this.imgContainerEl.style.top = this.imgCenter(
        containerRect.height,
        this.props.image.height
      );

      this.imgContainerEl.style.width = this.props.image.width + 'px';
    }

    imgCenter(container, img) {
      return ((container - img) * 100) / (container * 2) + '%';
    }
  }

  Image.propTypes = {

  };

  Image.defaultProps = {

  };

  Components.DicomEditor.Image = Image;
})();

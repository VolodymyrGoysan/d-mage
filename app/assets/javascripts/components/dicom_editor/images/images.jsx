(function ComponentsDicomEditorImagesModule() {
  class Images extends React.Component {
    render() {
      const images = this.props.images.map((image, index) => {
        const selected = (image === this.props.selected);
// onSelect
        return (
          <Images.Image
            key={image.id}
            image={image}
            selected={selected}
            onClick={this.props.onSelect}
            id={index}
          />
        );
      });

      return (
        <div className="panel panel-default dicom-editor-panel dicom-editor-images">
          <div className="panel-heading">
            Images
          </div>

          <div className="panel-body dicom-editor-panel__body dicom-editor-panel__body_overflow scrollbar-os-x">
            <ul className="list-group dicom-editor-panel__list">
              {images}
            </ul>
          </div>
        </div>
      );
    }
  }

  Images.propTypes = {

  };

  Images.defaultProps = {
    images: [],
    position: { float: 'right', right: 30, top: 100 },
  }

  Components.DicomEditor.Images = Images;
})();

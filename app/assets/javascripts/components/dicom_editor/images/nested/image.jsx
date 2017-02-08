(function ComponentsDicomEditorImagesImageModule() {
  class Image extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.handleDownload = this.handleDownload.bind(this);
    }

    render() {
      const classNames = ['list-group-item', 'dicom-editor-panel__li'];

      if (this.props.selected) classNames.push('dicom-editor-panel__li_selected');

      return (
        <li onClick={this.handleClick} className={classNames.join(' ')}>
          <div className="media">

            <div className="media-left">
              <img className="media-object" src={this.props.image.thumb50} />
            </div>

            <div className="media-body">
              <h6 className="media-heading">Image {this.props.id + 1}</h6>
              <button className="btn btn-default btn-sm"
                      onClick={this.handleReset}
              >
                <i className="fa fa-refresh" aria-hidden="true">&nbsp;</i>
                Full reset
              </button>
              <a className="btn btn-default btn-sm"
                  onClick={this.handleDownload}
                  download={`image${this.props.image.id}.jpg`}
              >
                <i className="fa fa-download" aria-hidden="true">&nbsp;</i>
                Download
              </a>
            </div>
          </div>
        </li>
      );
    }

    handleClick() {
      this.props.onClick(this.props.image);
    }

    handleReset() {
      this.props.image.imgData = null;
      this.props.image.newImgData = null;

      this.props.onClick(this.props.image);
    }

    handleDownload(e) {
      const canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            imgData = this.props.image.imgData;

      canvas.width = imgData.width;
      canvas.height = imgData.height;

      ctx.putImageData(imgData, 0, 0);

      e.target.href = canvas.toDataURL('image/jpeg');
    }
  }

  Image.propTypes = {
    image: React.PropTypes.object,
  };

  Image.defaultProps = {
  }

  Components.DicomEditor.Images.Image = Image;
})();

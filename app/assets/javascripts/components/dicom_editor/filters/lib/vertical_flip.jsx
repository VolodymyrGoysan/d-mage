(function ComponentsDicomEditorFiltersVerticalFlipModule() {
  class VerticalFlip extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleFlip = this.handleFlip.bind(this);
    }

    render() {
      return (
        <div>
          <label>horizontal flip</label>
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleFlip}
            additional='Flip'
          />
        </div>
      );
    }

    handleFlip() {
      Lib.ImageFilter.filterImage(
        'verticalFlip',
        this.props.image.imgData,
        this.props.image.newImgData,
      )

      this.props.onImageDataChange(this.props.image);
    }
  }

  VerticalFlip.propTypes = {

  }

  VerticalFlip.defaultProps = {

  }

  Components.DicomEditor.Filters.VerticalFlip = VerticalFlip;
})();

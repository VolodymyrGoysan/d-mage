(function ComponentsDicomEditorFiltersGrayScaleModule() {
  class GrayScale extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleGrayScale = this.handleGrayScale.bind(this);
    }

    render() {
      return (
        <div>
          <label>grayscale</label>
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleGrayScale}
            additional='Make grey'
          />
        </div>
      );
    }

    handleGrayScale() {
      Lib.ImageFilter.filterImage(
        'grayScale',
        this.props.image.imgData,
        this.props.image.newImgData,
      )

      this.props.onImageDataChange(this.props.image);
    }
  }

  GrayScale.propTypes = {

  }

  GrayScale.defaultProps = {

  }

  Components.DicomEditor.Filters.GrayScale = GrayScale;
})();

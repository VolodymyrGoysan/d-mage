(function ComponentsDicomEditorFiltersGaussianBlurModule() {
  class GaussianBlur extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>gaussian blur</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="20"
            min="0"
            value="0"
            label="radius"
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(radius) {
      Lib.ImageFilter.filterImage(
        'gaussianBlur',
        this.props.image.imgData,
        this.props.image.newImgData,
        { radius: radius }
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  GaussianBlur.propTypes = {

  }

  GaussianBlur.defaultProps = {

  }

  Components.DicomEditor.Filters.GaussianBlur = GaussianBlur;
})();

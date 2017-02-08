(function ComponentsDicomEditorFiltersPixelateModule() {
  class Pixelate extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>pixelate</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="10"
            min="1"
            value="1"
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
        'pixelate',
        this.props.image.imgData,
        this.props.image.newImgData,
        { radius: radius },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Pixelate.propTypes = {

  }

  Pixelate.defaultProps = {

  }

  Components.DicomEditor.Filters.Pixelate = Pixelate;
})();

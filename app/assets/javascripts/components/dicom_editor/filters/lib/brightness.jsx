(function ComponentsDicomEditorFiltersBrightnessModule() {
  class Brightness extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>brightness</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            label='value'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(adjust) {
      Lib.ImageFilter.filterImage(
        'brightness',
        this.props.image.imgData,
        this.props.image.newImgData,
        { adjust: adjust },
      );

      this.props.onImageDataChange(this.props.image);
    }
  }

  Brightness.propTypes = {

  }

  Brightness.defaultProps = {

  }

  Components.DicomEditor.Filters.Brightness = Brightness;
})();

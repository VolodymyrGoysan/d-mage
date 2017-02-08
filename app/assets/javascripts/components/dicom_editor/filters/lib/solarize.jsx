(function ComponentsDicomEditorFiltersSolarizeModule() {
  class Solarize extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>solarize</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="150"
            min="0"
            value="0"
            label="threshold"
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(threshold) {
      Lib.ImageFilter.filterImage(
        'solarize',
        this.props.image.imgData,
        this.props.image.newImgData,
        { threshold: threshold }
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Solarize.propTypes = {

  }

  Solarize.defaultProps = {

  }

  Components.DicomEditor.Filters.Solarize = Solarize;
})();

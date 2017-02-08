(function ComponentsDicomEditorFiltersEdgeDetectModule() {
  class EdgeDetect extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>edge deetection</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="5"
            min="-5"
            value="0"
            step="0.1"
            label='multiplier'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(multiplier) {
      Lib.ImageFilter.filterImage(
        'edgeDetect',
        this.props.image.imgData,
        this.props.image.newImgData,
        { multiplier: multiplier },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  EdgeDetect.propTypes = {

  }

  EdgeDetect.defaultProps = {

  }

  Components.DicomEditor.Filters.EdgeDetect = EdgeDetect;
})();

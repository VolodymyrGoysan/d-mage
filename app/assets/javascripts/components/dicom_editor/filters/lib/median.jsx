(function ComponentsDicomEditorFiltersMedianModule() {
  class Median extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>median</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            label='radius'
            min='1'
            max='6'
            value='0'
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
        'median',
        this.props.image.imgData,
        this.props.image.newImgData,
        { radius: radius },
      );

      this.props.onImageDataChange(this.props.image);
    }
  }

  Median.propTypes = {

  }

  Median.defaultProps = {

  }

  Components.DicomEditor.Filters.Median = Median;
})();

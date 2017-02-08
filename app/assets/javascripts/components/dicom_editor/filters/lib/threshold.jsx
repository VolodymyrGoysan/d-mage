(function ComponentsDicomEditorFiltersThresholdModule() {
  class Threshold extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.state = { high: 255, low: 0, threshold: 50 }
      this.handleThresholdChange = this.handleThresholdChange.bind(this);
      this.handleHighChange = this.handleHighChange.bind(this);
      this.handleLowChange = this.handleLowChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>threshold</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleThresholdChange}
            value="50"
            max="255"
            min="1"
            label='value'
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleLowChange}
            max="255"
            min="0"
            value="0"
            label='low'
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleHighChange}
            max="255"
            min="0"
            value="255"
            label='high'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleThresholdChange(threshold) {
      const newState = { threshold: threshold };
      this.setState(newState);
      this.applyFilter(this.state);
    }

    handleHighChange(high) {
      const newState = { high: high };
      this.setState(newState);
      this.applyFilter(this.state);
    }

    handleLowChange(low) {
      const newState = { low: low };
      this.setState(newState);
      this.applyFilter(this.state);
    }

    applyFilter(filterOptions) {
      Lib.ImageFilter.filterImage(
        'threshold',
        this.props.image.imgData,
        this.props.image.newImgData,
        filterOptions
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Threshold.propTypes = {

  }

  Threshold.defaultProps = {

  }

  Components.DicomEditor.Filters.Threshold = Threshold;
})();

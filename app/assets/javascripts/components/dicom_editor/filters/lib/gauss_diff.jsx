(function ComponentsDicomEditorFiltersGaussDiffModule() {
  class GaussDiff extends Components.DicomEditor.Filters.BaseFilter {

    constructor(props) {
      super(props);

      this.state = { high: 0.35, low: 0.12, threshold: 255 }
      this.handleThresholdChange = this.handleThresholdChange.bind(this);
      this.handleHighChange = this.handleHighChange.bind(this);
      this.handleLowChange = this.handleLowChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>difference by gauss</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleThresholdChange}
            value="1"
            max="255"
            min="1"
            label='threshold'
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleLowChange}
            max="0.5"
            min="0"
            value="0.12"
            step="0.01"
            label='low'
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleHighChange}
            max="2"
            min="0"
            value="0.35"
            step="0.01"
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
        'gaussDiff',
        this.props.image.imgData,
        this.props.image.newImgData,
        filterOptions
      )

      this.props.onImageDataChange(this.props.image);
    }
  };

  GaussDiff.propTypes = {

  }

  GaussDiff.defaultProps = {

  }

  Components.DicomEditor.Filters.GaussDiff = GaussDiff;
})();

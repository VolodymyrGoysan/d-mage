(function ComponentsDicomEditorFiltersEqualizationModule() {
  class Equalization extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.state = { high: 255, low: 0 };
      this.handleHighChange = this.handleHighChange.bind(this);
      this.handleLowChange = this.handleLowChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>equalization</label>
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
            min="1"
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
        'equalization',
        this.props.image.imgData,
        this.props.image.newImgData,
        filterOptions
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Equalization.propTypes = {

  }

  Equalization.defaultProps = {

  }

  Components.DicomEditor.Filters.Equalization = Equalization;
})();

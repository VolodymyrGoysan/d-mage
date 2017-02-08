(function ComponentsDicomEditorFiltersNoiseModule() {
  class Noise extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.state = { upper: 0, lower: 0, level: 100 };

      this.handleUpperChange = this.handleUpperChange.bind(this);
      this.handleLowerChange = this.handleLowerChange.bind(this);
      this.handleLevelChange = this.handleLevelChange.bind(this);
    }

    render() {
      return (
        <div>
        <label>noise</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleUpperChange}
            max="255"
            min="-255"
            label="upper"
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleLowerChange}
            max="255"
            min="-255"
            label="lower"
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleLevelChange}
            max="100"
            min="0"
            value='100'
            label="level"
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleUpperChange(upper) {
      const newState = { upper: upper };
      this.setState(newState);
      this.applyFilter(this.state);
    }

    handleLowerChange(lower) {
      const newState = { lower: lower };
      this.setState(newState);
      this.applyFilter(this.state);
    }

    handleLevelChange(level) {
      const newState = { level: level };
      this.setState(newState);
      this.applyFilter(this.state);
    }

    applyFilter(filterOptions) {
      Lib.ImageFilter.filterImage(
        'noise',
        this.props.image.imgData,
        this.props.image.newImgData,
        filterOptions
      )
      this.props.onImageDataChange(this.props.image);
    }

  }

  Noise.propTypes = {

  }

  Noise.defaultProps = {

  }

  Components.DicomEditor.Filters.Noise = Noise;
})();

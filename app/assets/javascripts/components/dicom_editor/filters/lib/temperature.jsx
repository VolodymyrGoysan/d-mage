(function ComponentsDicomEditorFiltersTemperatureModule() {
  class Temperature extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>temperature</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="400"
            min="1"
            value="66"
            label='temp'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(temperature) {
      Lib.ImageFilter.filterImage(
        'temperature',
        this.props.image.imgData,
        this.props.image.newImgData,
        { temperature: temperature },
      )

      this.props.onImageDataChange(this.props.image);
    }


  }

  Temperature.propTypes = {

  }

  Temperature.defaultProps = {

  }

  Components.DicomEditor.Filters.Temperature = Temperature;
})();

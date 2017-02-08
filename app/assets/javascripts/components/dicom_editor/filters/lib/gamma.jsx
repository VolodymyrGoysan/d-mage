(function ComponentsDicomEditorFiltersGammaModule() {
  class Gamma extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>gamma</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            value="1"
            max="5"
            min="0.01"
            step="0.01"
            label='level'
           />
           <Components.DicomEditor.Filters.ButtonGroup
             handleApply={this.handleApply}
             handleReset={this.handleReset}
           />
        </div>
      );
    }

    handleRangeChange(amount) {
      Lib.ImageFilter.filterImage(
        'gamma',
        this.props.image.imgData,
        this.props.image.newImgData,
        { amount: amount },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Gamma.propTypes = {

  }

  Gamma.defaultProps = {

  }

  Components.DicomEditor.Filters.Gamma = Gamma;
})();

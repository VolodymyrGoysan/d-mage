(function ComponentsDicomEditorFiltersLaplaceModule() {
  class Laplace extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>laplace</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="2"
            min="-0.3"
            value="0"
            step="0.01"
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
        'laplace',
        this.props.image.imgData,
        this.props.image.newImgData,
        { multiplier: multiplier },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Laplace.propTypes = {

  }

  Laplace.defaultProps = {

  }

  Components.DicomEditor.Filters.Laplace = Laplace;
})();

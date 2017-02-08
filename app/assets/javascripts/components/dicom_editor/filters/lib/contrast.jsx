(function ComponentsDicomEditorFiltersContrastModule() {
  class Contrast extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>contrast</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="10"
            min="0.01"
            value="1"
            step="0.01"
            label='amount'
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
        'contrast',
        this.props.image.imgData,
        this.props.image.newImgData,
        { amount: amount },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Contrast.propTypes = {

  }

  Contrast.defaultProps = {

  }

  Components.DicomEditor.Filters.Contrast = Contrast;
})();

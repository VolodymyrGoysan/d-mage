(function ComponentsDicomEditorFiltersSharpenModule() {
  class Sharpen extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>sharpen</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="12"
            min="0"
            step="0.1"
            value="0"
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(amout) {
      Lib.ImageFilter.filterImage(
        'sharpen',
        this.props.image.imgData,
        this.props.image.newImgData,
        { amount: amout },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Sharpen.propTypes = {

  }

  Sharpen.defaultProps = {

  }

  Components.DicomEditor.Filters.Sharpen = Sharpen;
})();

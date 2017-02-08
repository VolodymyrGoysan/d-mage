(function ComponentsDicomEditorFiltersSobelModule() {
  class Sobel extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>sobel</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="5"
            min="-5"
            value="0"
            step="0.1"
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
        'sobel',
        this.props.image.imgData,
        this.props.image.newImgData,
        { multiplier: multiplier },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Sobel.propTypes = {

  }

  Sobel.defaultProps = {

  }

  Components.DicomEditor.Filters.Sobel = Sobel;
})();

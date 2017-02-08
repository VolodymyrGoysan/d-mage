(function ComponentsDicomEditorFiltersEmbossModule() {
  class Emboss extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>emboss</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="108"
            min="1"
            value="1"
            label='wight'
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
        'emboss',
        this.props.image.imgData,
        this.props.image.newImgData,
        { amount: amount },
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Emboss.propTypes = {

  }

  Emboss.defaultProps = {

  }

  Components.DicomEditor.Filters.Emboss = Emboss;
})();

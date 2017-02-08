(function ComponentsDicomEditorFiltersPosterizeModule() {
  class Posterize extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>posterize</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            value="1"
            label="colors"
            max="255"
            min="1"
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(colors) {
      Lib.ImageFilter.filterImage(
        'posterize',
        this.props.image.imgData,
        this.props.image.newImgData,
        { colors: colors},
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Posterize.propTypes = {

  }

  Posterize.defaultProps = {

  }

  Components.DicomEditor.Filters.Posterize = Posterize;
})();

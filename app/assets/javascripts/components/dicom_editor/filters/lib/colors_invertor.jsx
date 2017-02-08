(function ComponentsDicomEditorFiltersColorsInvertorModule() {
  class ColorsInvertor extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleInvert = this.handleInvert.bind(this);
    }

    render() {
      return (
        <div>
          <label>invert colors</label>
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleInvert}
            additional='Invert'
          />
        </div>
      );
    }

    handleInvert() {
      Lib.ImageFilter.filterImage(
        'colorsInvertor',
        this.props.image.imgData,
        this.props.image.newImgData
      )

      this.props.onImageDataChange(this.props.image);
    }
  }

  ColorsInvertor.propTypes = {

  }

  ColorsInvertor.defaultProps = {

  }

  Components.DicomEditor.Filters.ColorsInvertor = ColorsInvertor;
})();

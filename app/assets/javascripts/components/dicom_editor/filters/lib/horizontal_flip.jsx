(function ComponentsDicomEditorFiltersHorizontalFlipModule() {
  class HorizontalFlip extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleFlip = this.handleFlip.bind(this);
    }

    render() {
      return (
        <div>
          <label>horizontal flip</label>
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleFlip}
            additional='Flip'
          />
        </div>
      );
    }

    handleFlip() {
      Lib.ImageFilter.filterImage(
        'horizontalFlip',
        this.props.image.imgData,
        this.props.image.newImgData,
      )

      this.props.onImageDataChange(this.props.image);
    }
  }

  HorizontalFlip.propTypes = {

  }

  HorizontalFlip.defaultProps = {

  }

  Components.DicomEditor.Filters.HorizontalFlip = HorizontalFlip;
})();

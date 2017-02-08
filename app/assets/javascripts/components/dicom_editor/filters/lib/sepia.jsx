(function ComponentsDicomEditorFiltersSepiaModule() {
  class Sepia extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleSepia = this.handleSepia.bind(this);
      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>sepia</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="2"
            min="0.8"
            value="0.8"
            step="0.1"
            label='multiplier'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleSepia}
            additional='Make'
          />
        </div>
      );
    }

    handleRangeChange(multiplier) {
      Lib.ImageFilter.filterImage(
        'sepia',
        this.props.image.imgData,
        this.props.image.newImgData,
        { multiplier: multiplier },
      )

      this.props.onImageDataChange(this.props.image);
    }

    handleSepia(e) {
      Lib.ImageFilter.filterImage(
        'sepia',
        this.props.image.imgData,
        this.props.image.newImgData
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  Sepia.propTypes = {

  }

  Sepia.defaultProps = {

  }

  Components.DicomEditor.Filters.Sepia = Sepia;
})();

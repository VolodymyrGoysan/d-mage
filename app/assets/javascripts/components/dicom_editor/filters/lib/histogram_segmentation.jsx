(function ComponentsDicomEditorFiltersHistogramSegmentationModule() {
  class HistogramSegmentation extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>HistogramSegmantation</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            label='tones'
            max='30'
            min='2'
            value='30'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
          />
        </div>
      );
    }

    handleRangeChange(tones) {
      Lib.ImageFilter.filterImage(
        'histogram_segmentation',
        this.props.image.imgData,
        this.props.image.newImgData,
        { tones: tones },
      );

      this.props.onImageDataChange(this.props.image);
    }
  }

  HistogramSegmentation.propTypes = {

  }

  HistogramSegmentation.defaultProps = {

  }

  Components.DicomEditor.Filters.HistogramSegmentation = HistogramSegmentation;
})();

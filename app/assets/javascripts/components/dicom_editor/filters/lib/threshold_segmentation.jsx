(function ComponentsDicomEditorFiltersThresholdSegmentationModule() {
  class ThresholdSegmentation extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>threshold segmentation</label>
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
        'threshold_segmentation',
        this.props.image.imgData,
        this.props.image.newImgData,
        { tones: tones },
      );

      this.props.onImageDataChange(this.props.image);
    }
  }

  ThresholdSegmentation.propTypes = {

  }

  ThresholdSegmentation.defaultProps = {

  }

  Components.DicomEditor.Filters.ThresholdSegmentation = ThresholdSegmentation;
})();

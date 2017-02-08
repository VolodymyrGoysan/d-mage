(function ComponentsDicomEditorFiltersRegionGrowingModule() {
  class RegionGrowing extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.state = { startPoint: [100, 100], threshold: 1 };
      this.handleRangeChange = this.handleRangeChange.bind(this);
      this.handleRegionGrowing = this.handleRegionGrowing.bind(this);
      this.handleMatrixChange = this.handleMatrixChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>region growing</label>
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max='100'
            min='1'
            value='1'
            label='threshold'
          />
          <Components.DicomEditor.InputMatrix
            onChange={this.handleMatrixChange}
            maxLength='2'
            name='Start point'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleRegionGrowing}
            additional='Growe'
          />
        </div>
      );
    }

    handleMatrixChange(startPoint) {
      this.setState({ startPoint: startPoint });
      // this.handleRegionGrowing(this.state);
    }

    handleRangeChange(threshold) {
      this.setState({ threshold: threshold });
      this.handleRegionGrowing(this.state);
    }

    handleRegionGrowing(e) {
      Lib.ImageFilter.filterImage(
        'regionGrowing',
        this.props.image.imgData,
        this.props.image.newImgData,
        { startPoint: this.state.startPoint, threshold: this.state.threshold }
      )

      this.props.onImageDataChange(this.props.image);
    }

  }

  RegionGrowing.propTypes = {

  }

  RegionGrowing.defaultProps = {

  }

  Components.DicomEditor.Filters.RegionGrowing = RegionGrowing;
})();

(function ComponentsDicomEditorFiltersModule() {
  class Filters extends React.Component {
    constructor(props) {
      super(props);

      this.state = { filter: props.filters[0] };

      this.handleFilterSelect = this.handleFilterSelect.bind(this);
    }

    render() {
      return (
        <div className="panel panel-default dicom-editor-panel">
          <div className="panel-heading">
            Filters
          </div>

          <div className="panel-body dicom-editor-panel__body">
            <Filters.List
              onSelect={this.handleFilterSelect}
              filters={this.props.filters}
              filter={this.state.filter}
            />

            <Filters.Filter
              filter={this.state.filter}
              image={this.props.image}
              onImageDataChange={this.props.onImageDataChange}
            />
          </div>
        </div>
      );
    }

    handleFilterSelect(filter) {
      this.setState({ ...this.state, filter });
    }
  }

  Filters.propTypes = {

  };

  Filters.defaultProps = {
    position: { float: 'left', left: 30, top: 60 },
    filters: ['Brightness', 'Contrast', 'GrayScale', 'Emboss', 'EdgeDetect',
              'Threshold', 'ColorsInvertor', 'Sobel', 'Gamma', 'GaussianBlur',
              'HorizontalFlip', 'VerticalFlip', 'Laplace', 'Noise', 'Pixelate',
              'Posterize', 'Sepia', 'Sharpen', 'Solarize', 'Convolve',
              'ColoredThreshold', 'Highlight', 'RegionGrowing',
              'Temperature', 'GaussDiff', 'Median', 'ThresholdSegmentation',
              'HistogramSegmentation', 'Equalization', 'EqualizationInner']
  }

  Components.DicomEditor.Filters = Filters;
})();

(function ComponentsDicomEditorFiltersConvolveModule() {
  class Convolve extends Components.DicomEditor.Filters.BaseFilter {
    constructor(props) {
      super(props);

      this.state = { convolve_matrix: [], multiplier: 1 };
      this.handleConvolve = this.handleConvolve.bind(this);
      this.handleMatrixChange = this.handleMatrixChange.bind(this);
      this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    render() {
      return (
        <div>
          <label>convolving</label>
          <Components.DicomEditor.InputMatrix
            onChange={this.handleMatrixChange}
            name='Kernel matrix'
          />
          <Components.DicomEditor.Filters.RangeControl
            onChange={this.handleRangeChange}
            max="5"
            min="-5"
            value="1"
            step="0.01"
            label='multiplier'
          />
          <Components.DicomEditor.Filters.ButtonGroup
            handleApply={this.handleApply}
            handleReset={this.handleReset}
            handleMake={this.handleConvolve}
            additional='Convolve'
          />
        </div>
      );
    }

    handleMatrixChange(convolve_matrix) {
      this.setState({ convolve_matrix: convolve_matrix });
    }

    handleConvolve(e) {
      Lib.ImageFilter.filterImage(
        'convolve',
        this.props.image.imgData,
        this.props.image.newImgData,
        { weightsMatrix: this.state.convolve_matrix,
          opaque: true,
          multiplier: this.state.multiplier
        }
      )

      this.props.onImageDataChange(this.props.image);
    }

    handleRangeChange(multiplier) {
      this.setState({ multiplier: multiplier });
    }

  }

  Convolve.propTypes = {

  }

  Convolve.defaultProps = {

  }

  Components.DicomEditor.Filters.Convolve = Convolve;
})();

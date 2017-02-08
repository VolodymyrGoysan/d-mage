(function ComponentsDicomEditorInputMatrixModule() {
  class InputMatrix extends React.Component {
    constructor(props) {
      super(props);

      this.state = { matrix: [] };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      let matrix = e.target.value.match(/[+-]?([0-9]*[.])?[0-9]+/g) || [];
      if (matrix.length <= this.props.maxLength) {
        matrix = matrix.map((i) => { return parseFloat(i) });
        this.setState({ ...this.state, matrix });
      } else {
        matrix = this.state.martix;
      }
      this.props.onChange(matrix);
    }

    render() {
      return (
        <div className="row">
          <form className="col-md-10 col-md-offset-1 col-xs-8 col-xs-offset-2"
                onSubmit={this.handleSubmit}
          >

            <p>{this.props.name}:</p>
            <input className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </div>
      );
    }

  };

  InputMatrix.propTypes = {

  };

  InputMatrix.defaultProps = {
    matrix: [],
    maxLength: 1000,
  };

  Components.DicomEditor.InputMatrix = InputMatrix;
})();

(function ComponentsDicomEditorRangeControlModule() {
  class RangeControl extends React.Component {
    constructor(props) {
      super(props);

      this.state = { value: props.value }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      let value = parseFloat(e.target.value) || this.props.value;

      if (value > this.props.max) {
        value = this.props.max;
      } else if (value < this.props.min) {
        value = this.props.min;
      }

      this.setState({ ...this.state, value })
      this.props.onChange(value);
    }

    render() {
      return(
        <div>
          <form className="form-inline range-group-inline">
            <div className="form-group range-group-inline__label">
              <div className="range-group-inline__label-margin">{this.props.label}</div>
            </div>
            <div className="form-group range-group-inline__range">
              <input
                type="range"
                className="range-input"
                max={this.props.max}
                min={this.props.min}
                onChange={this.handleChange}
                value={this.state.value}
                step={this.props.step}
              />
            </div>
            <div className="form-group range-group-inline__number">
              <input
                type="number"
                className="number-input"
                max={this.props.max}
                min={this.props.min}
                value={this.state.value}
                onChange={this.handleChange}
                step={this.props.step}
              />
            </div>
          </form>
        </div>
      )
    };
  };

  RangeControl.propTypes = {

  };

  RangeControl.defaultProps = {
    max: '255',
    min: '-255',
    value: '0'
  };

  Components.DicomEditor.Filters.RangeControl = RangeControl;
})();

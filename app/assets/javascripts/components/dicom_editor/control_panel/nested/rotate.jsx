(function ComponentsDicomEditorControlPanelRotateModule() {
  class Rotate extends Components.DicomEditor.Filters.RangeControl {
    render() {
      return (
        <div className="col-md-4">
          <form className="form-inline">
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
      );
    }
  }

  Components.DicomEditor.ControlPanel.Rotate = Rotate;
})();

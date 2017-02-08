(function ComponentsDicomEditorControlPanelZoomModule() {
  class Zoom extends React.Component {
    render() {
      return (
        <div className="col-md-2">
          <span className="fa fa-search" style={{ marginRight: '4px' }} />
          <select onChange={this.props.onChange} defaultValue='1'
                  className="select-component"
          >

            <option value="0.25">25%</option>
            <option value="0.5">50%</option>
            <option value="0.75">75%</option>
            <option value="1">100%</option>
            <option value="1.5">150%</option>
            <option value="2">200%</option>
            <option value="2.5">250%</option>
            <option value="3">300%</option>
            <option value="4">400%</option>
            <option value="5">500%</option>
          </select>
        </div>
      );
    }
  }

  Components.DicomEditor.ControlPanel.Zoom = Zoom;
})();

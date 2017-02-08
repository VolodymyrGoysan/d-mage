(function ComponentsDicomEditorControlPanelModule() {
  class ControlPanel extends React.Component {
    render() {
      return (
        <div className="row">
          <ControlPanel.Zoom
            onChange={this.props.onZoomChange}
          />

          <ControlPanel.Rotate
            label="rotate"
            min="0"
            max="360"
            value="0"
            onChange={this.props.onRotateChange}
          />
        </div>
      );
    }
  }

  ControlPanel.propTypes = {

  };

  ControlPanel.defaultProps = {

  };

  Components.DicomEditor.ControlPanel = ControlPanel;
})();

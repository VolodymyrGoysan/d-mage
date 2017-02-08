(function ComponentsDraggablePanelModule() {
  class DraggablePanel extends React.Component {
    constructor(props) {
      super(props);

      this.state = { position: this.props.position }
    }

    render() {
      const style = {
        left: this.state.position.left + 'px',
        top: this.state.position.top + 'px',
        right: this.state.position.right + 'px',
      }

      return (
        <div style={style} className="panel panel-default panel-draggable">

          <DraggablePanel.Heading heading={this.props.heading} />

          <div className="panel-body panel-draggable__body">
            {this.props.children}
          </div>

        </div>
      );
    }
  }

  DraggablePanel.propTypes = {

  };

  DraggablePanel.defaultProps = {
    position: { float: 'left', left: 10, top: 10 }
  };

  Components.DraggablePanel = DraggablePanel;
})();

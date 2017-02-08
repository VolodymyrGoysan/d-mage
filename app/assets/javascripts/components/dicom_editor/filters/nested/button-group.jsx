(function ComponentsDicomEditorButtonGroupModule() {
  class ButtonGroup extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      const additional = () => {
        if (this.props.additional) {
          return (
            <div className="button-group__line">
              <div className="button-group__item">
                <button className="btn btn-default btn-sm"
                 onClick={this.props.handleMake}
                >
                  {this.props.additional}
                </button>
              </div>
            </div>
          )
        }
      }

      return(
        <div className="button-group">
          {additional()}
          <div className="button-group__line">
            <div className="button-group__item">
              <button className="btn btn-success btn-sm"
               onClick={this.props.handleApply}
              >
                Apply
              </button>
            </div>
            <div className="button-group__item">
              <button className="btn btn-default btn-sm"
               onClick={this.props.handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  ButtonGroup.propTypes = {

  };

  ButtonGroup.defaultProps = {

  };

  Components.DicomEditor.Filters.ButtonGroup = ButtonGroup;
})();

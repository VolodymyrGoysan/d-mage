(function ComponentsDicomEditorFiltersRowModule() {
  class Row extends React.Component {
    constructor(props) {
      super(props);

      this.handeClick = this.handeClick.bind(this);
    }
    render() {
      return (
        <p onClick={this.handeClick}>{this.props.name}</p>
      );
    }

    handeClick() {
      this.props.onSelect(this.props.name);
    }
  }

  Row.propTypes = {

  };

  Row.defaultProps = {
  }

  Components.DicomEditor.Filters.Row = Row;
})();

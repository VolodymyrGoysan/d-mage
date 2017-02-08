(function ComponentsDicomEditorFiltersListModule() {
  class List extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }

    render() {
      const filters = this.props.filters.map((filter) => {
        const classNames = ['list-group-item', 'dicom-editor-panel__li'];

        if (this.props.filter === filter) {
          classNames.push('dicom-editor-panel__li_selected');
        }

        return (
          <li
            onClick={this.handleClick}
            className={classNames.join(' ')}
            data-name={filter}
            key={filter}
          >

            {filter}

          </li>
        );
      })

      return (
        <ul className="list-group dicom-editor-panel__list
                       dicom-editor-panel__list_overflow
                       scrollbar-os-x">
          {filters}
        </ul>
      );
    }

    handleClick(e) {
      this.props.onSelect(e.target.getAttribute('data-name'));
    }
  }

  List.propTypes = {

  };

  List.defaultProps = {

  };

  Components.DicomEditor.Filters.List = List;
})();

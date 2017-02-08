(function ComponentsDicomEditorFiltersFilterModule() {
  class Filter extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (!this.props.filter) return null;

      const FilterComponent = Components.DicomEditor.Filters[this.props.filter];

      return (
        <div className="pager dicom-editor-filters">
          <FilterComponent
            onImageDataChange={this.props.onImageDataChange}
            image={this.props.image}
          />
        </div>
      );
    }
  }

  Filter.propTypes = {

  };

  Filter.defaultProps = {
  }

  Components.DicomEditor.Filters.Filter = Filter;
})();

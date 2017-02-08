(function ComponentsDicomEditorFiltersBaseFilterModule() {
  class BaseFilter extends React.Component {
    constructor(props) {
      super(props);

      this.handleApply = this.handleApply.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }

    handleApply() {
      const data = this.props.image.imgData.data,
            newData = this.props.image.newImgData.data;

      for (let i = 0; i < data.length; i++) {
        data[i] = newData[i];
      }

      // send changes to server

      this.props.onImageDataChange(this.props.image);
    }

    handleReset() {
      const data = this.props.image.imgData.data,
            newData = this.props.image.newImgData.data,
            len = this.props.image.imgData.data.length;

      for (let i = 0; i < len; i++) {
        newData[i] = data[i];
      }

      this.props.onImageDataChange(this.props.image);
    }

  }

  BaseFilter.propTypes = {

  };

  BaseFilter.defaultProps = {

  };

  Components.DicomEditor.Filters.BaseFilter = BaseFilter;
})();

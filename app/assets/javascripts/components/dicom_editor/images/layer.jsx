(function ComponentsDicomEditorLayerModule() {
  class Layer extends React.Component {
    constructor(props) {
      super(props);

      this.handeClick = this.handeClick.bind(this);
    }
    render() {
      return (
        <div
          onClick={this.handeClick}
          style={{ float: 'left', margin: '1px' }}
        >
          <img className="img-responsive" src={this.props.image.thumb50} />
        </div>
      );
    }

    handeClick() {
      this.props.onSelect(this.props.image);
    }
  }

  Layer.propTypes = {

  };

  Layer.defaultProps = {
    position: { float: 'right', right: 10, top: 10 },
  }

  Components.DicomEditor.Layer = Layer;
})();

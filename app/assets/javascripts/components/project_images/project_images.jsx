(function ComponentsProjectImagesModule() {
  class ProjectImages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {imgIndex: 0}

      this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleImageChange(imgIndex) {
      const image = this.props.images[imgIndex];
      this.setState({...this.state, imgIndex})
      this.refs.imageInfo.setImage(image);
    }

    render() {
      return (
        <div className="row">
          <div className="col-lg-8">
            <Components.Swiper
              images={this.props.images}
              onChange={this.handleImageChange}
            />
          </div>

          <div className="col-lg-4">
            <Components.ProjectImageInfo
              ref="imageInfo"
              image={this.props.images[this.state.imgIndex]}
              index={this.state.imgIndex}
            />
          </div>
        </div>
      );
    }
  }

  ProjectImages.propTypes = {

  };

  ProjectImages.defaultProps = {

  };

  Components.ProjectImages = ProjectImages;
})();

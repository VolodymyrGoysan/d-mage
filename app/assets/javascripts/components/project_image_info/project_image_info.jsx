(function ComponentsProjectImageInfoModule() {

  class ProjectImageInfo extends React.Component {
    constructor(props) {
      super(props);

      this.state = { image: props.image };
    }

    setImage(image) {
      this.setState({  ...this.state, image });
    }

    render() {
      return (
        <div>
          <h4>Image info: </h4>
          <p>id: {this.props.index}</p>
          <p>width: {this.state.image.width}</p>
          <p>height: {this.state.image.height}</p>

          <h4>Download:</h4>
          <a href={this.state.image.url_50}
             download={`image_${this.state.image.id}.jpg`}
             className='btn btn-default btn-sm'
          >
            Image thumpnail 50px
          </a>
          <br />
          <a href={this.state.image.url_400}
             download={`image_${this.state.image.id}.jpg`}
             className='btn btn-default btn-sm'
          >
            Image thumbnail 400px
          </a>
          <br />
          <a href={this.state.image.url}
             download={`image_${this.state.image.id}.jpg`}
             className='btn btn-default btn-sm'
          >
            Original image
          </a>
        </div>
      );
    }
  }

  ProjectImageInfo.propTypes = {

  };

  ProjectImageInfo.defaultProps = {

  };

  Components.ProjectImageInfo = ProjectImageInfo;
})();

(function ComponentsSwiperModule() {
  class Swiper extends React.Component {
    componentDidMount() {
      const galeryTop = this.refs.galeryTop.gallery;
      const galleryThumbs = this.refs.galleryThumbs.gallery;

      console.log(this.props.images);

      galeryTop.params.control = galleryThumbs;
      galleryThumbs.params.control = galeryTop;
    }

    render() {
      return (
        <div className="swipers-container">
          <Swiper.GalleryTop ref="galeryTop" images={this.props.images} />
          <br />
          <Swiper.GalleryThumbs
            ref="galleryThumbs"
            display={this.props.images.length > 1}
            images={this.props.images}
            onChange={this.props.onChange}
          />
        </div>
      );
    }
  }

  Swiper.propTypes = {

  };

  Swiper.defaultProps = {
    images: []
  };

  Components.Swiper = Swiper;
})();

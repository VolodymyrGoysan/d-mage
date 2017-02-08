(function ComponentsSwiperGalleryTopModule() {
  class GalleryTop extends React.Component {
    componentDidMount() {
      const galleryTop = new Swiper(this.element, {
        effect: 'fade',
        mousewheelControl: true,
        keyboardControl: true,
        grabCursor: true,
        iOSEdgeSwipeDetection: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        nextButton: this.nextBtn,
        prevButton: this.prevBtn
      });

      this.gallery = galleryTop;
    }
    render() {
      const images = this.props.images.map((image) => {
        return (
          <div key={image.id} className="swiper-slide">
            <img src={image.url_400} />
          </div>
        );
      })

      return (
        <div ref={e => this.element = e} className="swiper-container">
          <div className="swiper-pagination" />

          <br />

          <div className="swiper-wrapper">
            {images}
          </div>

          <div ref={e => this.nextBtn = e} className="swiper-button-next" />
          <div ref={e => this.prevBtn = e} className="swiper-button-prev" />
        </div>
      );
    }
  }

  GalleryTop.propTypes = {

  };

  GalleryTop.defaultProps = {

  };

  Components.Swiper.GalleryTop = GalleryTop;
})();

(function ComponentsSwiperGalleryThumbsModule() {
  class GalleryThumbs extends React.Component {
    componentDidMount() {
      const galleryThumbs = new Swiper(this.element, {
        scrollbar: this.scrollBar,
        scrollbarHide: false,
        scrollbarDraggable: true,
        mousewheelControl: true,
        iOSEdgeSwipeDetection: true,
        spaceBetween: 0,
        slidesPerView: 20,
        centeredSlides: true,
        touchRatio: 1,
        slideToClickedSlide: true,
        breakpoints: {
          1680: { slidesPerView: 16, spaceBetween: 0 },
          1480: { slidesPerView: 14, spaceBetween: 0 },
          1280: { slidesPerView: 9, spaceBetween: 0 },
          1080: { slidesPerView: 8, spaceBetween: 0 },
          880: { slidesPerView: 6, spaceBetween: 0 },
          580: { slidesPerView: 3, spaceBetween: 0 },
        },

        onSlideChangeStart: (galleryTop) => { this.props.onChange(galleryTop.activeIndex) },
      });

      this.gallery = galleryThumbs;
    }

    render() {
      if (!this.props.display) return null;

      const images = this.props.images.map((image) => {
        return (
          <div key={image.id} className="swiper-slide">
            <img src={image.url_50} />
          </div>
        );
      })

      return (
        <div ref={e => this.element = e} className="swiper-container" >
          <div className="swiper-wrapper" >
            {images}
          </div>

          <br />

          <div ref={e => this.scrollBar = e} className="swiper-scrollbar" />
        </div>
      );
    }
  }

  GalleryThumbs.propTypes = {

  };

  GalleryThumbs.defaultProps = {

  };

  Components.Swiper.GalleryThumbs = GalleryThumbs;
})();

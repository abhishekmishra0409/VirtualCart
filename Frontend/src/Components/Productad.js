import React from 'react';
import './Productad.css'
export default function Productad() {
  return (
    <div >
      <div className="CSSgal">
        {/* Use div elements instead of self-closing */}
        <div id="s1"></div>
        <div id="s2"></div>
        <div id="s3"></div>
        <div id="s4"></div>
        <div className="slider">
          <div>
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-product-red_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656720516973" alt="" />
          </div>
          <div >
            <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
          </div>
          <div >
            <img src="https://www.whatmobile.com.pk/control/news/assets/30102021/847bd041adc0220e63e02b81a446ffb2.jpg" alt="" />
          </div>
          <div >
            <img src="https://baymard.com/api/og/article/ux-product-image-categories" alt="" />
          </div>
        </div>
        <div className="prevNext">
          <div><a href="#s4" > <span className="carousel-control-prev-icon" aria-hidden="true"></span></a><a href="#s2"><span className="carousel-control-next-icon" aria-hidden="true"></span> </a></div>
          <div><a href="#s1"> <span className="carousel-control-prev-icon" aria-hidden="true"></span></a><a href="#s3"> <span className="carousel-control-next-icon" aria-hidden="true"></span></a></div>
          <div><a href="#s2"> <span className="carousel-control-prev-icon" aria-hidden="true"></span></a><a href="#s4"><span className="carousel-control-next-icon" aria-hidden="true"></span> </a></div>
          <div><a href="#s3"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> </a><a href="#s1"><span className="carousel-control-next-icon" aria-hidden="true"></span> </a></div>
        </div>
        <div className="bullets">
          <a href="#s1"> </a>
          <a href="#s2"> </a>
          <a href="#s3"> </a>
          <a href="#s4"> </a>
        </div>
      </div>
    </div>
  );
}

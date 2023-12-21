import React from "react";
import '../styles/style.css';
import '../images/sewenqa.jpg';


const images = [
  { src: 'sewenqa.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image4.jpg', alt: 'Image 4' },
  { src: 'image5.jpg', alt: 'Image 5' }
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default Gallery;
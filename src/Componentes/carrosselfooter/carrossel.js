import React, { useState, useEffect } from "react";
import './carrossel.css'
function CarouselB() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://i.pinimg.com/originals/b5/fd/3f/b5fd3fbe984103e08b9482471484394b.gif',
    "https://i.pinimg.com/originals/8a/e8/26/8ae826dba6a224dba3e49bf045583254.gif",
    "https://wallpaperaccess.com/full/775140.gif",
    "https://i.pinimg.com/originals/61/a8/9e/61a89e1643066aa3c4dc3ea0d44fcee0.gif",
    "https://magenta.github.io/lofi-player/assets/background/city-sunset.gif",
    "https://img.freepik.com/vetores-gratis/ilustracoes-de-gradiente-lo-fi_52683-82981.jpg",
    "https://media.csesoc.org.au/content/images/2021/10/Screen-Shot-2021-10-20-at-20.09.33.png",
    "https://img.freepik.com/free-vector/gradient-lo-fi-illustration_23-2149375747.jpg?w=2000",
    "https://img.freepik.com/free-vector/gradient-lo-fi-illustration_23-2149375747.jpg?w=2000",
  ];

  const handleClickPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {images.slice(currentIndex, currentIndex + 1).map((image, index) => (
          <img className="imagensCarrrosel" key={index} src={image} alt={`Imagem ${index}`} />
        ))}
      </div>
      <button className="prev" onClick={handleClickPrev}>
        &#8249;
      </button>
      <button className="next" onClick={handleClickNext}>
        &#8250;
      </button>
    </div>
  );
}


export default CarouselB;
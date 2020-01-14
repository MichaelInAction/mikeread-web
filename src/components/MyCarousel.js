import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import styled from 'styled-components';

function MyCarousel(props) {
  const carouselImages = props.slides.map((slide, index) => (
    <CarouselItem>
      <CarouselImage src={ slide.image } alt={ slide.label } />
      <Carousel.Caption>
        <h5 className="bordered-text">{ slide.label }</h5>
      </Carousel.Caption>
    </CarouselItem>
  ));
  return (
    <CarouselComponent>
      { carouselImages }
    </CarouselComponent>
  );
}

const CarouselComponent= styled(Carousel)`
  background-color: rgb(160, 160, 160);
  border: 1px solid ${props => props.theme.colors.black};
`;

const CarouselItem = styled(Carousel.Item)`
  text-align: center;
  height: ${props => props.theme.sizes.carouselHeight};
  vertical-align: middle;
`;

const CarouselImage = styled.img`
  max-height: ${props => props.theme.sizes.carouselHeight};
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export default MyCarousel;

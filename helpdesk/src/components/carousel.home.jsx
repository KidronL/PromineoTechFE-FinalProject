import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

const images = [
    {
        src: require("../images/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg"),
        altText: "Air Max 90",
    },
    {
        src: require("../images/daniel-storek-JM-qKEd1GMI-unsplash.jpg"),
        altText: "Air Jordan 1",
    },
    {
        src: require("../images/nelson-ndongala-kKObh7tUPNc-unsplash.jpg"),
        altText: "Retro 89 adidas",
    }
]

export default function SneakerCarousel() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
    <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect} id="c-item">

            {images.map((image, i) => {
                return (
                <Carousel.Item key={image.src}>
                    <img id = "c-img"
                        className="d-block w-100"
                        src={image.src}
                        alt={image.altText}
                    />
                </Carousel.Item>
                )
                })}
        </Carousel>
    </div>
    );
}
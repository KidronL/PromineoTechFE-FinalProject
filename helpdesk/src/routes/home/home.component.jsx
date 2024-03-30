import React from "react";
import SneakerCarousel from "../../components/carousel.home";
import TikTokEmbed from "../../components/tiktok.home";

//Code for home page
export default function Home(){
    return <div>
            <h1 id="title">
                Home
            </h1>
            <SneakerCarousel />
            <TikTokEmbed username="nicekicks"/>
        </div>;
};
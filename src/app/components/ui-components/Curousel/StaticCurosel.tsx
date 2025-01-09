import { Carousel } from "flowbite-react";
import React from "react";
import CardBox from "../../shared/CardBox";
import StaticCuroselCode from "./Code/StaticCuroselCode";

const StaticCurosel = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Static Carousel</h4>
          <StaticCuroselCode />
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slide={false}>
            <img src="/images/blog/blog-img1.jpg" alt="..." />
            <img src="/images/blog/blog-img2.jpg" alt="..." />
            <img src="/images/blog/blog-img3.jpg" alt="..." />
            <img src="/images/blog/blog-img4.jpg" alt="..." />
            <img src="/images/blog/blog-img5.jpg" alt="..." />
          </Carousel>
        </div>
      </CardBox>
    </div>
  );
};

export default StaticCurosel;

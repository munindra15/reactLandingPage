import React from "react";
import Slider from "react-slick";
import { ReasonGrids } from "./reasonGrid";

const featureCards = [
  {
    id: 1,
    img: "/assets/quality.png",
    title: "Quality",
    text: "With a custom-built computer, you're getting a machine specifically designed to meet your specific needs, ensuring that it will operate faster and longer than a standard computer.",
  },
  {
    id: 2,
    img: "/assets/tools.png",
    title: "Easy Fix",
    text: "You are more familiar with each component of the PC you created. Thus it is simpler to spot a problem when one occurs. Purchasing separate computer parts frequently include extra spare parts absent from pre-built machines.",
  },
  {
    id: 3,
    img: "/assets/work-schedule.png",
    title: "Flexibility",
    text: "Whether you wish to quadruple your memory capacity or improve graphics performance, a custom-built PC can be easily upgradeable in the future. Cheap computers have a reputation for being more challenging to upgrade and extend.",
  },
  {
    id: 4,
    img: "/assets/save-money.png",
    title: "Save Money",
    text: "Building a PC will save you money in the long run because you may not need to replace or repair components as often as you would with a pre-built one.",
  },
];

const sliderSettings = {
  
};

const Carousel = () => {
  return (
    <section>
      <div className="content">
        <Slider {...sliderSettings}>
          {/* {featureCards.map((reason) => {
          return (
            <div key={reason.id}>
              <img src="/assets/gpu.png" alt="alt" />
            </div>
          );
        })} */}
          <div>
            <img src="/assets/gpu.png" alt="alt" />
          </div>
          <div>
            <img src="/assets/gpu.png" alt="alt" />
          </div>
          <div>
            <img src="/assets/gpu.png" alt="alt" />
          </div>
          <div>
            <img src="/assets/gpu.png" alt="alt" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export { Carousel };

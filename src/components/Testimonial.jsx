

import React, { useEffect, useState } from "react";
import TestimonialCarousel from "./sections/InfiniteMovingCards";


export function Testimonial() {
  return (
    <div >
      <div className="flex justify-center items-center px-4 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal bg-gradient-custom bg-clip-text text-transparent leading-relaxed lg:leading-relaxed text-center">
          Have a
          <span className="animate-slide bg-gradient-to-r from-purple-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-purple-700 rounded-none focus:outline-none ml-3 inline-block">
            Look
          </span>
          At what
          <span className="animate-slide bg-gradient-to-r from-orange-500/20 to-purple-500/5 hover:bg-gradient-to-r text-white px-2 py-1 border-l-4 border-orange-700 rounded-none focus:outline-none ml-3 inline-block">
            Others Say
          </span>
        </h1>
      </div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-customDarkGray dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>


  );
}const testimonials = [
  {
    quote:
      "ZORA has completely transformed the way I manage my digital life. From handling my emails to managing calls efficiently, it's like having a personal assistant 24/7. Highly recommend!",
    name: "Priya K.",
    title: "Game-changing AI assistant!",
    productCategory: ["ZORA"]
  },
  {
    quote:
      "I found it to be a customer-centric product and the software application is wonderful. The aesthetics are really good and more features down the line, it looks absolutely breakthrough.",
    name: "VP ",
    title: "Lodha Group",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "This is going to be a major breakthrough. That is for sure. Because there is no single entity who is actually giving you all the connections. So if at all you are able to make it, then it is going to be surely a breakthrough.",
    name: "Head MEP",
    title: "Commercial Real Estate Dev",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "ZOSS has taken home automation to the next level. The seamless integration with ZORA for real-time updates and control is simply amazing. My home feels smarter and safer!",
    name: "Rahul M.",
    title: "Revolutionizing Smart Homes",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "ZORA listens, learns, and adapts to my preferences effortlessly. It's the most personalized AI assistant I've ever used. My productivity has skyrocketed!",
    name: "Neha S.",
    title: "Unmatched Personalization\n",
    productCategory: ["ZORA"]
  },
  {
    quote:
      "ZOSS's intelligent sensors and ZORA's real-time data updates provide an unparalleled smart home experience. It's like living in the future. Excellent work by ZebiOps!",
    name: "Sunita P",
    title: "Innovative and Smart",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "The combination of ZORA and ZOSS has made my life so much easier. From managing daily tasks to controlling my smart home, everything is just a voice command away. Truly efficient!",
    name: "Amit R.",
    title: "Efficiency at its best",
    productCategory: ["ZORA ","ZOSS"]
  },
  {
    quote:
      "It's a lifestyle changing product and people in India need to adopt it. A part of this I’ve seen while residing in Middle East which will change the course of leading life in India. It seems to be a great product with innovative features.",
    name: "VP MEP",
    title: "Oberoi Realty",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "Overall, it’s a great product with innovative features. It has a huge potential with great adaptability in future",
    name: " Project Director Strategy & PL",
    title: "Godrej Properties",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "I will say that the product seems to be excellent. In developing country like India where multiple level of developments are happening especially in the luxury segment. India is moving now especially in the eight major cities Delhi, Bombay, Madras, Cochin, Goa, Hyderabad, Coimbatore, Mysore, Bangalore. So, they are developing and there are people who may love to use this system. So, there is a possibility of it, but you will have a limited user for this. You must understand the customer, you will have a limited user that is very important. It can be used in the commercial, it can be used in Super luxury essentials.",
    name: "Sr. VP",
    title: "DLF",
    productCategory: ["ZOSS"]
  },
  {
    quote:
      "I absolutely loved the product. The cost of 1.5 lacs is on the higher side, which is my cause for concern. This is good for high end market in Mumbai only. Also, how many switchboards are needed in a home is also something that needs to be reduced as again the overall cost of the product goes on the higher side. As mentioned, the product is functional and easy to use. It adds a touch of luxury to the home as well. Although I would like to see the product in person to get a better understanding of the same.",
    name: "CSO",
    title: "JP Infra",
    productCategory: ["ZOSS"]
  },
];

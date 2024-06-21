

import React, { useEffect, useState } from "react";
import InfiniteMovingCards from "./sections/InfiniteMovingCards";


export function Testimonial() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-customDarkGray dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Priya K.",
    title: "Game-changing AI assistant!",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Rahul M.",
    title: "Revolutionizing Smart Homes",
  },
  {
    quote: "ZORA listens, learns, and adapts to my preferences effortlessly. It's the most personalized AI assistant I've ever used. My productivity has skyrocketed!",
    name: "Neha S.",
    title: "Unmatched Personalization",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: " Amit R.",
    title: "Efficiency at its best",
  },
  {
    quote:
      "ZOSS's intelligent sensors and ZORA's real-time data updates provide an unparalleled smart home experience. It's like living in the future. Excellent work by ZebiOps!",
    name: "Sunita P.",
    title: "Innovative and Smart",
  },
];

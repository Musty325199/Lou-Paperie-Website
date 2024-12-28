import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="container font-roboto mx-auto py-8 min-h-96 px-4 md:px-10">
      <h1 className="font-raleway text-5xl text-center">About Lou</h1>
      <hr className="h-[1px] bg-black border-none w-full my-5" />
      <div className="flex md:flex-row flex-col gap-5 w-full p-5 mt-10">
        <div className="md:w-2/4">
          <img src={assets.about_bg} alt="" className="object contain" />
        </div>
        <div className="md:w-2/4 flex flex-col md:px-10 text-[14px] text-justify justify-center">
          <p>
            At Lou Paperie, we believe that the power of a beautifully crafted
            notebook, the elegance of a unique note cover, and the artistry of a
            striking print can inspire creativity and elevate everyday moments.
            Whether you're jotting down thoughts, organizing plans, or
            expressing your personal style, Lou Paperie offers premium products
            that bring a sense of artistry to your life. Our collection is
            designed for those who appreciate the finer details — from
            meticulously crafted notebooks with smooth, durable paper to
            beautifully designed note covers that protect and personalize your
            stationery. Each piece is thoughtfully created with quality
            materials and a passion for design, ensuring that you not only have
            a functional product, but one that sparks joy every time you use it.
          </p>
          <h3 className="font-semibold text-lg mt-5">What We Offer:</h3>
          <ul className="flex flex-col gap-3 text-xs">
            <li><b>- Notebooks:</b> Available in a variety of sizes and designs, our notebooks are perfect for writers, students, artists, and anyone who enjoys putting pen to paper. </li>
            <li><b>- Note Covers:</b> Give your notebooks a unique touch with our range of elegant, stylish note covers.</li>
            <li><b>- Prints: </b>Add an artistic flair to your workspace, home, or gift collection with our curated prints. Featuring original artwork and beautiful designs, our prints bring color, creativity, and inspiration into any space.</li>
          </ul>
          <p className="mt-3">At Lou Paperie, we believe in the power of quality stationery to inspire productivity, creativity, and personal expression.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

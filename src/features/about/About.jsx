import React from "react";
import "../../css/_about.scss";

export default function About() {
  const aboutTitle = `Hi,I’m Andrei. Nice to meet you.`;
  const aboutTitleChars = aboutTitle.split("");
  return (
    <section className="section__about" id="about">
      {/* <h3 className="about__title">Hi, I’m Andrei. Nice to meet you.</h3> */}
      <h3 className="about__title">
        {aboutTitleChars.map((char, index) => (
          <span key={index} className="about__title-char">
            {char}
          </span>
        ))}
      </h3>
      <p className="about__text">
        My first connection with the technology started from childhood when I
        was fascinated by video games. A few years ago I decided that I want to
        spent my time to learn new things about this field, so I started to
        follow some IT courses. My journey has begun with IT essentials, where I
        have learned how computers work, and how to maintain them. After this
        time, I have started to learn about networking. This course was more
        complex and taught me all about computer networks.
      </p>
      <p className="about__text">
        I liked these courses but I was not very enthusiastic about them, so
        approximately 2 years ago I decided to give a chance to the programming.
        This time my learning path was different because I wanted to learn all
        by myself. The first thing was to learn from www.w3schools.com about
        HTML and CSS. In the meantime I have applied for an internship offered
        by Pentalog for React technology, where I have seen the basics of
        JavaScript and React. The next step was to buy some more advanced
        courses from Udemy. These courses teached me alot of new things about
        web development, and they gave me the skills and confidence to make my
        own application. Now I have more than 1000 hours of self-taught
        learning.
      </p>
    </section>
  );
}

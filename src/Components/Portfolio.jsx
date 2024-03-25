/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Snippet Safe Project",
    description:
      "A tool to organize and find code snippets. This project was won the first prize in Frost Hacks.",
    url: "https://devpost.com/software/snippetsafe",
  },
  {
    title: "Hades Quest",
    description:
      "A gamified todo-list to make completing your tasks more FUN",
    url: "https://github.com/siddarth2810/Hades-Quest",
  },
  {
    title: "My Resume",
    description:
      "Link containing my resume information.",
    url: "https://drive.google.com/file/d/1YzU88rddWTz0mX4CdbGwZELsl4-rPheh/view?usp=sharing",
  },
  {
    title: "Hackerabad",
    description:
      "A core team member of Hackerabad, a community of developers in Hyderabad.",
    url: "https://twitter.com/hackerabad/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

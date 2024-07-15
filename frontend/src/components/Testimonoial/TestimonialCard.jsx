import React from "react";
import "./TestimonialCard.css";

const testimonials = [
  {
    text: "Interview Buzz helped me ace my job interview. The resources and tips provided were invaluable, and I felt fully prepared and confident.",
    markedText: "Interview Buzz helped me ace my job interview.",
    name: "Emily Ewing",
    role: "Designer at CompanyX",
    imgSrc:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
  },
  {
    text: "The mock interviews were a game-changer, and the feedback was extremely helpful. I got my dream job thanks to Interview Buzz.",
    markedText: "The mock interviews were a game-changer",
    name: "James Powell",
    role: "Developer at CompanyY",
    imgSrc:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
  },
  {
    text: "The resources on Interview Buzz were exactly what I needed. Highly recommend to anyone preparing for interviews.",
    markedText: "Highly recommend to anyone preparing for interviews.",
    name: "Olivia Gribben",
    role: "CEO at CompanyZ",
    imgSrc:
      "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
  },
];

const TestimonialCard = () => {
  return (
    <section>
      <div className="ta0-container ta0-max-width-adaptive-lg">
        <h1 className="ta0-text-center ta0-margin-bottom-lg">
          Hear it from our users.
        </h1>
        <div className="ta0-grid ta0-gap-sm">
          {testimonials.map((testimonial, index) => (
            <div
              className="ta0-bg-contrast-lower ta0-bg-opacity-30% ta0-radius-md ta0-padding-md ta0-flex@md ta0-flex-column@md ta0-col-4@md"
              key={index}
            >
              <svg
                className="ta0-icon ta0-icon--xl ta0-color-contrast-low ta0-margin-bottom-2xs"
                aria-hidden="true"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <polygon points="2 36 17 2 26 2 15 36 26 36 26 62 2 62 2 36" />
                <polygon points="38 36 53 2 62 2 51 36 62 36 62 62 38 62 38 36" />
              </svg>
              <blockquote className="ta0-line-height-md ta0-margin-bottom-md">
                {testimonial.text.split(testimonial.markedText)[0]}
                <mark>{testimonial.markedText}</mark>
                {testimonial.text.split(testimonial.markedText)[1]}
              </blockquote>
              <footer className="ta0-flex ta0-flex-wrap ta0-items-center ta0-margin-top-auto@md">
                <figure
                  className="ta0-flex-shrink-0 ta0-margin-right-2xs"
                  aria-hidden="true"
                >
                  <img
                    className="ta0-block ta0-width-lg ta0-height-lg ta0-radius-50% ta0-border ta0-border-2 ta0-border-bg"
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                  />
                </figure>
                <cite className="ta0-text-sm">
                  <strong>{testimonial.name}</strong>
                  <span className="ta0-block ta0-color-contrast-medium ta0-margin-top-4xs">
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;

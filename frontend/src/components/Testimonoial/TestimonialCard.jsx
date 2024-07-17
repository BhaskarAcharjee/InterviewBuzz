import React, { useEffect, useState } from "react";
import "./TestimonialCard.css";
import { testimonials } from "../../constants/testimonials";

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();

    const autoScrollInterval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(testimonials.length / itemsToShow)
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => {
      clearInterval(autoScrollInterval);
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, [itemsToShow]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const paginationDots = Array.from(
    { length: Math.ceil(testimonials.length / itemsToShow) },
    (_, index) => (
      <span
        key={index}
        className={`ta0-pagination-dot ${
          currentIndex === index ? "ta0-pagination-dot--active" : ""
        }`}
        onClick={() => handleDotClick(index)}
      />
    )
  );

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsToShow,
    currentIndex * itemsToShow + itemsToShow
  );

  return (
    <section>
      <div className="ta0-container ta0-max-width-adaptive-lg">
        <h3 className="ta0-text-center ta0-margin-bottom-lg">
          Hear it from our users.
        </h3>
        <div className="ta0-grid ta0-gap-sm">
          {currentTestimonials.map((testimonial, index) => (
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
        <div className="ta0-pagination">{paginationDots}</div>
      </div>
    </section>
  );
};

export default TestimonialCard;

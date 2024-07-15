import React from "react";
import "./BlogCard.css";
import blog_item_1 from "../../assets/images/blog-item-01.png";
import blog_item_2 from "../../assets/images/blog-item-02.png";
import blog_item_3 from "../../assets/images/blog-item-03.png";

const BlogCard = () => {
  const cards = [
    {
      imgSrc: blog_item_1,
      learning: "Learning",
      date: "Published 21 Dec 2023",
      title: "Ace Your Technical Interviews",
      description: "Master the skills needed to excel in technical interviews with our comprehensive guides and practice problems.",
      authorImg: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
      authorName: "John Doe"
    },
    {
      imgSrc: blog_item_2,
      learning: "Preparation",
      date: "Published 15 Jan 2024",
      title: "Behavioral Interview Strategies",
      description: "Learn how to effectively communicate your experiences and demonstrate your skills during behavioral interviews.",
      authorImg: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
      authorName: "Jane Smith"
    },
    {
      imgSrc: blog_item_3,
      learning: "Tips & Tricks",
      date: "Published 28 Feb 2024",
      title: "Top Mistakes to Avoid in Interviews",
      description: "Discover the common pitfalls candidates face in interviews and how to avoid them to make a lasting impression.",
      authorImg: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
      authorName: "Greg Hooper"
    }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt="Blog item" className="card__image" />
          <h4 className="card__learning">{card.learning}</h4>
          <p className="card__date">{card.date}</p>
          <h1 className="card__title">{card.title}</h1>
          <p className="card__description">{card.description}</p>
          {/* <!-- author section --> */}
          <div className="author-info">
            <img
              src={card.authorImg}
              alt="Author"
              className="author-info__image"
            />
            <span className="author-info__name">{card.authorName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;

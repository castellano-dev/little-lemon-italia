import React from "react";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Max",
    review:
      "The food at this restaurant is amazing. I've never tasted such delicious dishes before!",
  },
  {
    id: 2,
    name: "Jane",
    review:
      "Great atmosphere and friendly staff. I highly recommend dining here for any occasion.",
  },
  {
    id: 3,
    name: "Michael",
    review:
      "I love the variety of dishes available. There's something for everyone on the menu.",
  },
  {
    id: 4,
    name: "Camila",
    review:
      "The service is top-notch. The staff goes above and beyond to make your dining experience special.",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials">
      {testimonialsData.map((testimonial) => (
        <div className="testimonial" key={testimonial.id}>
          <p className="review">{testimonial.review}</p>
          <p className="name">{testimonial.name}</p>
        </div>
      ))}
    </div>
  );
}

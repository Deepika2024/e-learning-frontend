import React from "react";
import "./Products.css";

// Import images
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import sparePart1 from "../assets/sparePart1.jpg";
import sparePart2 from "../assets/sparePart2.jpg";
import sparePart3 from "../assets/sparePart3.jpg";
import sparePart4 from "../assets/sparePart4.jpg";
import commercial1 from "../assets/commercial1.png";
import commercial2 from "../assets/commercial2.png";
import commercial3 from "../assets/commercial3.png";
import commercial4 from "../assets/commercial4.png";
import sparePart5 from "../assets/sparePart5.png";
import sparePart6 from "../assets/sparePart6.jpg";
import sparePart7 from "../assets/sparePart7.jpg";
import sparePart8 from "../assets/sparePart8.jpg";
import otherProduct1 from "../assets/otherProduct1.jpg";
import otherProduct2 from "../assets/otherProduct2.jpg";
import otherProduct3 from "../assets/otherProduct3.png";
import otherProduct4 from "../assets/otherProduct4.jpg";

// Product sections
const productSections = [
  {
    title: "Domestic Water Purifiers",
    link: "#",
    items: [
      { id: 1, bgImage: `url(${product1})` },
      { id: 2, bgImage: `url(${product2})` },
      { id: 3, bgImage: `url(${product3})` },
      { id: 4, bgImage: `url(${product4})` },
    ],
  },
  {
    title: "Domestic Water Purifier Spare Parts",
    link: "#",
    items: [
      { id: 1, bgImage: `url(${sparePart1})` },
      { id: 2, bgImage: `url(${sparePart2})` },
      { id: 3, bgImage: `url(${sparePart3})` },
      { id: 4, bgImage: `url(${sparePart4})` },
    ],
  },
  {
    title: "Commercial Water Purifiers",
    link: "#",
    items: [
      { id: 1, bgImage: `url(${commercial1})` },
      { id: 2, bgImage: `url(${commercial2})` },
      { id: 3, bgImage: `url(${commercial3})` },
      { id: 4, bgImage: `url(${commercial4})` },
    ],
  },
  {
    title: "Commercial Water Purifier Spare Parts",
    link: "#",
    items: [
      { id: 1, bgImage: `url(${sparePart5})` },
      { id: 2, bgImage: `url(${sparePart6})` },
      { id: 3, bgImage: `url(${sparePart7})` },
      { id: 4, bgImage: `url(${sparePart8})` },
    ],
  },
  {
    title: "Other Products",
    link: "#",
    items: [
      { id: 1, bgImage: `url(${otherProduct1})` },
      { id: 2, bgImage: `url(${otherProduct2})` },
      { id: 3, bgImage: `url(${otherProduct3})` },
      { id: 4, bgImage: `url(${otherProduct4})` },
    ],
  },
];

const Products = () => {
  return (
    <div className="products-container">
      {productSections.map((section, index) => (
        <section className="product-section" key={index}>
          <div className="section-header">
            <h2>{section.title}</h2>
            <a href={section.link} className="view-all">
              View All
            </a>
          </div>
          <div className="product-grid">
            {section.items.map((item) => (
              <div
                key={item.id}
                className="product-item"
                style={{ backgroundImage: item.bgImage }}
              ></div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;

import React from "react";
import "./ComparisonTable.css";

const ComparisonTable = () => {
  return (
    <div className="comparison-container">
      <h2>Experience the BluLife</h2>
      <div className="comparison-table">
        <div className="column">
          <h3>Ordinary water Purifiers</h3>
          <ul>
            <li>Max 1 year warranty</li>
            <li>Frequent breakdown inline filters</li>
            <li>Support up to 1000 TDS max</li>
            <li>No AMC and Service charges are high</li>
            <li>No customer support</li>
            <li>RO+UV</li>
          </ul>
        </div>
        <div className="column highlighted">
          <h3>BluLife Water Purifiers</h3>
          <ul>
            <li>5 Years warranty</li>
            <li>High Performance Inline filters</li>
            <li>Lifetime Service Free</li>
            <li>Supports up to 5000 TDS</li>
            <li>5 Years AMC (zero maintenance)</li>
            <li>24/7 Customer Support</li>
            <li>RO+UV+UF+MTDS+COPPER+ZINC+MINERAL+ALKALINE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;

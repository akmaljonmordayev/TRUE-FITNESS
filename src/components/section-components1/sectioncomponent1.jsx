import React from 'react'
import './sectioncomponent1.css'
function sectioncomponent({ backgroundImage, title, description }) {
    return (
    <div
      className="feature-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="feature-overlay">
        <h1 className="feature-title">{title}</h1>
        <div className="feature-line"></div>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}

export default sectioncomponent
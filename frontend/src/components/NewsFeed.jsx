// frontend/src/components/NewsFeed.jsx
import React from "react";

function NewsFeed({ news = [], loading, error }) {
  if (loading) return <p className="status">Loading news...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (!news.length) return <p className="status">No news available.</p>;

  return (
    <div className="news-grid">
      {news.map((item, idx) => (
        <div key={idx} className="news-card">
          {/* do NOT show image if none; hide broken images using onError */}
          {item.urlToImage ? (
            <img
              src={item.urlToImage}
              alt={item.title}
              className="news-image"
              onError={(e) => { e.target.style.display = "none"; }}
              loading="lazy"
            />
          ) : null}

          <div className="news-content">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-desc">{item.description || "No description available."}</p>
            <a className="read-more" href={item.url} target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;


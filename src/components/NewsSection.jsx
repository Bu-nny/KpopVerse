
import React from "react";

const dummyNews = [
  { title: "NewJeans drops comeback teaser!", group: "NewJeans" },
  { title: "BTS Jin completes military service", group: "BTS" },
  { title: "ZB1 announces world tour dates", group: "ZB1" }
];

function NewsSection() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Latest K-pop News</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {dummyNews.map((news, idx) => (
          <div key={idx} style={{
            padding: "1rem",
            borderRadius: "12px",
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <h3>{news.title}</h3>
            <p><strong>Group:</strong> {news.group}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;

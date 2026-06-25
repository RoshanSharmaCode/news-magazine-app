import image from "../assets/global-news.png";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light h-100 shadow-sm mt-3"
      style={{
        width: "22rem",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        src={src || image}
        className="card-img-top"
        alt={title || "News"}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {title
            ? title.length > 60
              ? title.slice(0, 60) + "..."
              : title
            : "No Title Available"}
        </h5>

        <p className="card-text flex-grow-1">
          {description
            ? description.length > 100
              ? description.slice(0, 100) + "..."
              : description
            : "No description available for this article."}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

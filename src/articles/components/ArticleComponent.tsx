import React from "react";
import { Article } from "../services/ArticleApi";

function ArticleComponent({
  article,
  right,
}: {
  article: Article;
  right: boolean;
}) {
  return (
    <div className="d-flex w-75 my-5 justify-content-center">
      <div className="w-75">
        <img
          src={article.imageUrl}
          alt={`article_${article.id}`}
          style={{
            margin: right ? "0 0 0 2em" : "0 2em 0 0",
            height: "auto",
            float: right ? "right" : "left",
            width: "20em",
          }}
        />

        <div>
          <h4>{article.title}</h4>
        </div>

        <div className="d-flex justify-content-center">
          <p style={{ marginRight: "4em" }}>
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>

          <p>{article.newsSite}</p>
        </div>

        <div className="d-flex row">
          <div>
            <p>{article.summary}</p>
          </div>
          <div>
            <a
              href="/"
              className="btn btn-secondary btn-small active"
              role="button"
              aria-pressed="true"
            >
              Ver mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleComponent;

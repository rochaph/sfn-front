import React from "react";
import { Article } from "../services/ArticleApi";
import ArticleComponent from "./ArticleComponent";

function ListArticles({ articles }: { articles: Article[] }) {
  return (
    <div className="w-100 row justify-content-center">
      {articles.map((article, index) => (
        <ArticleComponent
          key={article.id}
          article={article}
          right={index % 2 === 0}
        />
      ))}
    </div>
  );
}

export default ListArticles;

import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import ListArticles from "../articles/components/ListArticles";
import ArticleAPI from "../articles/services/ArticleApi";
import rocket from "../assets/rocket.svg";
import Divider from "../shared/components/Divider";
import Sort from "../articles/components/SortArticle";
import "./App.scss";

function App() {
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(0);
  const [newest, setNewest] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    ArticleAPI.listArticles(offset, 10, newest, title).then((data) => {
      if (offset > 0) {
        setArticles(articles.concat(data));
      } else {
        setArticles(data);
      }
    });
  }, [newest, offset]);

  useEffect(() => {
    ArticleAPI.listArticles(0, 10, newest, title).then((data) => {
      setArticles(data);
    });
  }, [title]);

  return (
    <div className="App">
      <header className="mt-2">
        <nav className="navbar mx-5 bg-transparent justify-content-end">
          <input
            type="text"
            style={{ marginRight: "1em" }}
            onInput={debounce((e) => setTitle(e.target.value), 1000)}
          />
          <Sort
            older={() => {
              setNewest(false);
              setOffset(0);
            }}
            newest={() => {
              setNewest(true);
              setOffset(0);
            }}
          />
        </nav>
        <div className="my-5">
          <div className="d-flex justify-content-center mb-4">
            <div className="border rounded-circle w-auto">
              <img className="rocket" src={rocket} alt="earth" />
            </div>
          </div>
          <h5>
            <strong> Space Flight News</strong>
          </h5>
        </div>
        <Divider />
      </header>
      <main>
        <ListArticles articles={articles} />
      </main>
      <footer className="mt-3 mb-5">
        <button
          type="button"
          className="btn btn-dark"
          style={{
            backgroundColor: "#302E53",
          }}
          onClick={() => setOffset(offset + 10)}
        >
          Carregar mais
        </button>
      </footer>
    </div>
  );
}

export default App;

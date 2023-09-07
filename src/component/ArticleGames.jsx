import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ArticleGames() {
  const [articles, setArticles] = useState();
  const { getContent } = useContentful();

  useEffect(() => {
    getContent("article").then((response) => setArticles(response));
  }, []);

  if (!articles) {
    return "Loading...";
  }

  return (
    <>
      <div>
        {articles
          ? articles.items.map((article, key) => {
              return (
                <div className="article" key={key}>
                  <h2>{article.fields.title}</h2>
                  {documentToReactComponents(article.fields.richText)}
                </div>
              );
            })
          : "No Results"}
      </div>
    </>
  );
}

export default ArticleGames;

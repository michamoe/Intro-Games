import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import NavBar from "./NavBar";

function ArticleGames() {
  const [articles, setArticles] = useState();
  const { getContent } = useContentful();

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // render the EMBEDDED_ASSET as you need
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
    },
  };

  useEffect(() => {
    getContent("article").then((response) => setArticles(response));
  }, []);

  if (!articles) {
    return "Loading...";
  }

  return (
    <>
      <NavBar />
      <div>
        {articles
          ? articles.items.map((article, key) => {
              return (
                <div className="article" key={key}>
                  <h2>{article.fields.title}</h2>
                  {documentToReactComponents(
                    article.fields.richText,
                    renderOptions
                  )}
                </div>
              );
            })
          : "No Results"}
      </div>
    </>
  );
}

export default ArticleGames;

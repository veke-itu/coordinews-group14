import { useState } from "react";

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <input
        placeholder="Search Article Titles"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {props.data
        .filter((article) => {
          if (searchQuery === "") {
            return article;
          } else if (
            props.data.title.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return article;
          }
        })
        .map((article, index) => (
          <div className="box" key={index}>
            <p>{article.title}</p>
            <p>{article.author}</p>
          </div>
        ))}
    </div>
  );
}

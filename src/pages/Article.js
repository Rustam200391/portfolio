import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export const Article = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((res) => res.json())
          .then((data) => { 
            console.log(data);
            setPosts(data);
          })
          .catch((err) => {
              console.log(err.message)
          });
    }, []);

    const {articleId} = useParams()
    const thisArticle = posts.find(post => post.id === Number(articleId))

  return (
    <div>
      <h2 style={{textAlign: "center"}}>Article:</h2>
      <h3>Title:{thisArticle?.title}</h3>
      <h3>Description: {thisArticle?.body}</h3>
      <h3>ID: {thisArticle?.id}</h3>
      </div>
  );
}
 





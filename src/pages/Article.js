import React, { useEffect, useState } from 'react';


export const Article = () => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((res) => res.json())
        .then((data) => { 
        console.log(data);
        setArticle(data);
        })
    }, [])

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => res.json())
    .then((data) => {
       console.log(data);
       setArticle(data);
    })
    .catch((err) => {
       console.log(err.message);
    });

  return (
    <div>Article</div>
  )
}
 





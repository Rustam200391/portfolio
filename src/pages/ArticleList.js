import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" ;


export const ArticleList = () => {
   const [posts, setPosts] = useState([]); 
   // // создаем состояние для хранения
   // // данных,извлеченных из API и 
   // // задаем значение по умолчанию в пустой массив

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
         .then((res) => res.json())
         // преобразовываем then в json с помощью метода json
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   //в состоянии useEffect  данные / записи извлекаются сразу после загрузки приложения. Запрос на выборку выдает обещание, которое мы можем либо принять, либо отклонить


   return (
      <>
         <div className="add-post-container">
            <form>
               <input type="text" className="form-control" />
               <textarea className="form-control" cols="10" rows="8"></textarea>
               <button type="submit">Add Post</button>
            </form>
         </div>
         <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h2 className="post-title">{post.title}</h2>
                     <p className="post-body">{post.body}</p>
                     <div className="button">
                        <div className="delete-btn">Delete</div>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
   );
};




import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


export const ArticleList = () => {
   const [posts, setPosts] = useState([]); 


   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);



   return (
      <>
         <Form>
            <Form.Group className='mb-3'>
               <input type="text" className="form-control" />
               <textarea className="form-control" cols="10" rows="8"></textarea>
               <Button variant="success">Add Post</Button>
            </Form.Group>
         </Form>
         <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                  <Accordion defaultActiveKey={['0']} alwaysOpen>
                     <Accordion.Item eventKey="0">
                     <Accordion.Header>{post.title}</Accordion.Header>
                        <Accordion.Body>{post.body}</Accordion.Body>
                        <Button variant="danger">
                           Delete
                        </Button>
                        </Accordion.Item>
                     </Accordion>
                  </div>
               );
            })}
         </div>
      </>
   );
};




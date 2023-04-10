/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css" ;


export const ArticleList = () => {
  const [articlelist,setArticlelist] = useState([])
  const fetchUsers = async () => {
    const response = await fetch(process.env.REACT_APP_BASE_URL)
    const articlelist = await response.json()
    setArticlelist(articlelist)
  }
    useEffect(() => {
        fetchUsers()
    }, [])
  
  
    return (
    <div>
        <h1>ArticleList</h1>

        <div>
            {articlelist.map((userId) => {
                const {id} = userId
                return (
                    <article key={id}>
                        <title>{title}</title>
                    </article>
                )
                })}

        </div>
    </div>
  )
}

 


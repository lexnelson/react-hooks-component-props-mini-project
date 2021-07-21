import React from "react";
import Article from "./Article"

function ArticleList({posts}){
  //console.log(props)

    return (
       <main>
          {posts.map((post) => <Article title={post.title} key={post.id} date={post.date} preview={post.preview} minutes={post.minutes}/>)}
       </main>

    )
}

export default ArticleList;
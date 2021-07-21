import React from "react"

function Article({ title, date="January 1, 1970", preview, minutes }){
   // console.log(props)
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>

        </article>

    )
}

export default Article;
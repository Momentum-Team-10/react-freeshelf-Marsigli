import React, { useState } from 'react'

const Book = (props) => {
    const { title, author, shortDescription, url, publisher, publicationDate, detailedDescription, coverImageUrl } = props
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="book">
            <h1>{title}</h1>
            <h4>{author}</h4>
            <p>{shortDescription}</p>
            { expanded ? <button onClick={() => setExpanded(false)}>Less Information</button> : <button onClick={() => setExpanded(true)}>More Information</button> }
            { expanded ? 
            (<div>
                <a href ={url}>{url}</a>
                <p>{publisher}</p>
                <p>{publicationDate}</p>
                <p>{detailedDescription}</p>
                <img src={coverImageUrl} alt="Image of Book Cover"/>
            </div>) : null}
        </div>
    )
}

export default Book
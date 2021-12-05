import React, { useState } from 'react'

const Book = (props) => {
    const { title, author, shortDescription, url, publisher, publicationDate, detailedDescription, coverImageUrl } = props
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="book">
            <div>
                <h1 className="title">{title}</h1>
            </div>
            <div className="container">
                <div className="left">
                    <h4>{author}</h4>
                    <p>{shortDescription}</p>
                </div>
                <div className="right">
                    <img src={coverImageUrl} alt="Book Cover"/>
                </div>
            </div>
            { expanded ? <button onClick={() => setExpanded(false)}>>   Less Information</button> : <button onClick={() => setExpanded(true)}>>   More Information</button> }
            { expanded ? 
            (<div className="info">
                <a href ={url}>{url}</a>
                <p>{publisher}</p>
                <p>{publicationDate}</p>
                <p>{detailedDescription}</p>
                
            </div>) : null}
        </div>
    )
}

export default Book
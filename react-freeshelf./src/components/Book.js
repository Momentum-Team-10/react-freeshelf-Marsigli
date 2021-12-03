import React, { useState } from 'react'

const Book = (props) => {
    const { title, author, shortDescription, url, publisher, publicationDate, detailedDescription } = props
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="book">
            <h1>{title}</h1>
            <h4>{author}</h4>
            <p>{shortDescription}</p>
            { expanded ? <p onClick={() => setExpanded(false)}>Less Information</p> : <p onClick={() => setExpanded(true)}>More Information</p> }
            { expanded ? 
            (<div>
                <p>{url}</p>
                <p>{publisher}</p>
                <p>{publicationDate}</p>
                <p>{detailedDescription}</p>
            </div>) : null}
        </div>
    )
}

export default Book
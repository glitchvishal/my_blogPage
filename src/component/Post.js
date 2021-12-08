import React from 'react'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="Img/header_img1.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    lorem ipsum dolor sit am
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesp">
            lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.lorem ipsum dolor sit am. lorem ipsum dolor sit.
            </p><hr/>
        </div>
    )
}

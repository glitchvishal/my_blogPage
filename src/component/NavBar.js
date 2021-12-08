import React from 'react'
import { Link } from 'react-router-dom'
// import img1 from '.Img/index.png';

export default function NavBar() {
    const user = false;
    return (
        <div className = "navbar">
            <div className = "topLeft">
            <i className=" topIcon fab fa-facebook-square"></i>
            <i className=" topIcon fab fa-twitter-square"></i>
            <i className=" topIcon fab fa-github-square"></i>
            <i className=" topIcon fab fa-instagram-square"></i>
            </div>
            <div className = "topCenter">
                <ul className="topList"> 
                    <li className ="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className ="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className ="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className ="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className ="topListItem">{user && "LOGIN"}</li>
                </ul>
            </div>
            <div className = "topRight">
                    {
                        user ? (
                            <img className ="topImg"
                            src="Img/index.png" alt=""  
                            />
                        ) : (
                            <ul className ="topList">
                                <li className ="topListItem">
                                <Link className ="link" to="/login">LOGIN</Link>
                                </li>
                                <li className ="topListItem">
                                <Link className ="link" to="/register">SINGUP</Link>
                                </li>
                            </ul>
                        )
                    }
                
                <i className="searchIcon topSearchIcone fas fa-search"></i>
            </div>
        </div>
    )
}

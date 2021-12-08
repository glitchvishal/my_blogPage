import React from 'react'

export default function SideBar() {
    return (
        <div className="sideBar">
            {/* <span className="sideBarTitle">ABOUT ME</span>  */}
            <div className="sideBarTitle">ABOUT</div>
            <div>
                <img className="sideBarImg" src="Img/img5.jpg" alt=""/>
                <p className="sideBarPara">lorean ujhwferuoihwdf fewijhfuisdaf hijhsdfiujasd asdfkjhasdfoasdf sdfaidfiuhdsfi sdfaiujjduh</p>
            </div>
            {/* <div className="sideBarItem"> */}
            <div className="sideBarTitle">CATREGORIES</div>
            <ul className="sideBarList">
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">LIFE</li>
                <li className="sideBarListItem">LIFE</li>
            </ul>
            {/* </div> */}
            <div className="sideBarTitle">FOLLOW ME</div>
            <div className="sideBarSocial">
            <i className=" topIcon fab fa-facebook-square"></i>
            <i className=" topIcon fab fa-twitter-square"></i>
            <i className=" topIcon fab fa-github-square"></i>
            <i className=" topIcon fab fa-instagram-square"></i>
            </div>
        </div>
    )
}

import React from 'react'
import Sidebar from '../component/SideBar'
import SinglePost from '../component/SinglePost'


export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

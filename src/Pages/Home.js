import React from 'react'
import Header from '../component/Header'
import Posts from '../component/Posts'
import SideBar from '../component/SideBar'

export default function Home() {
    return (
        <>
        <Header/>
            <div className="home">
                <Posts/>
                <SideBar/>
            </div>
        </>
    )
}

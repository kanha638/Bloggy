import React from 'react'
import { PostDetail } from '../../PostDetail/PostDetail'
import { SideBar } from '../../SideBar/SideBar'
import "./PostView.css"

export const PostView = () => {
  return (
    <div className="viewcontainer">
          <PostDetail />
          <SideBar/>
    </div>
  )
}

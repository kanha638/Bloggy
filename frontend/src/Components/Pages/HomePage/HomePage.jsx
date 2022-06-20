import React from 'react';
import { Blogs } from '../../Blogs/Blogs';
import { ImageHead } from '../../ImageHead/ImageHead';
import { SideBar } from '../../SideBar/SideBar';
import "./HomePage.css";

export const HomePage = () => {
  return (<>
    <ImageHead />
    <div className="content">
      <Blogs />
      <SideBar/>
    </div>
    </>
  )
}

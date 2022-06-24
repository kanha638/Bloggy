import React from "react";
import "./About.css"
import HowToWrite from "../../../Images/HowToWrite.png"

export const About = () => {
    return (
        <>
        <div className="layout">
        {/* {/* <div>
            <p>hii there is jay A page format contains formatting controls
             for your data set that indicate where and how text, and 
             optionally, page overlays and page segments are to be placed 
             on the page. The page format is defined relative to the origin 
            of the sheet specified in the form definition.</p>
        </div> */}
        
            <div><h3 className="head">Do you know what a blog is?</h3></div>
            <div>
            <p className="para">If you don’t, then you’ve come to the right place.
             In 1994, when blogs began, a blog was more of a personal diary 
             that people shared online. In this online journal, you could 
             talk about your daily life or share about things that you were 
             doing. Then, people saw an opportunity to communicate information
              in a new way online.
             Thus began the beautiful world of blogging.</p>
             </div>

             <div><h3 className="head">What is a Blog?</h3></div>
            <div>
            <p className="para">A blog (a shortened version of “weblog”) 
            is an online journal or informational website displaying 
            information in reverse chronological order, with the latest 
            posts appearing first, at the top. It is a platform where a 
            writer or a group of writers
             share their views on an individual subject</p>
             </div>
        
             <div><h3 className="head">What is the purpose of a blog?</h3></div>
            <div>
            <p className="para">There are many reasons to start a blog
             for personal use and only a handful of strong ones for 
             business blogging. Blogging for business, projects, or 
             anything else that might bring you money has a very 
             straightforward purpose – to rank your website higher in
             Google SERPs, a.k.a. increase your visibility.</p>
             <p className="para">As a business, you rely on consumers to keep buying your
              products and services. As a new business, you rely on blogging
             to help you get to potential consumers and grab their 
             attention. Without blogging, your website would remain
             invisible, whereas running a blog
             makes you searchable and competitive.</p>
             <p className="para">So, the main purpose of a blog is to
              connect you to the relevant audience. Another one is to boost 
              your traffic
              and send quality leads to your website.</p>
              <p className="para">The more frequent and better your 
              blog posts are, the higher the chances for your website to
               get discovered and visited by your target audience. This 
               means that a blog is an effective lead generation tool. Add a
                great call to action (CTA) to your content, and it will 
                convert your website traffic into high-quality leads. A blog
                 also allows you to showcase 
              your niche authority and build a brand.</p>
              <p className="para">When you use your niche knowledge for 
              creating informative and engaging posts, it builds trust with
               your audience. Great blogging makes your business look more 
               credible, which is especially important if your brand is still
                young and fairly unknown. It ensures presence online and
               niche authority at the same time.</p>
             </div>

             <div><h3 className="head">Why are many people blogging today?</h3></div>
            <div>
            <p className="para">Most people today are creating blogs for a 
            variety of reasons. Every human being has their own story to 
            tell. Through the internet, bloggers can 
            communicate with a massive number of people</p>
             </div> 

             <div><h3 className="head">Why is our blog website is so popular?</h3></div>
            <div>
            <p className="para">It’s important to mention that the 
            popularity of blogging grows with each passing day!To answer
             the question ‘why is our blog is so popular’, we need to look at the factors
             behind its rise.</p>
             
             <h5 className="list">
                1. People Of Any Skill Level Can Create a Blog
             </h5>
             <h5 className="list">
             2. Blogging Allows You To Show Off Your Skills
             </h5>
             <h5 className="list">
             3. Blog Help You To Get Your Name Out There
             </h5>
             <h5 className="list">
             4. Expressing Your Personality Is Made Easy With a Blog
             </h5>
             <p className="para">In the early stages, blogs became
              mainstream, as news services began using them as tools
               for outreach and opinion forming. 
             They became a new source of information.</p>
             </div>

             <div><h3 className="head">Want to start a blog on your own?</h3></div>
            <div>
            <img src={HowToWrite} className="image" alt="" />
            <p className="para">Creating your own personal blog 
            takes a few steps.  Then, you need 
            to go in write section from our task bar .First, you need to decide on a name 
            for your blog, also called a domain name. And then you have to write title onclicking "Write your Title" on the top-right
            of the screen bellow the nav-bar and then you can  post image related to your title and we also recommend you to 
            write something in pink pink description box for your post.
            And Lastly you can post by Clicking on the "submit button".
            </p>
            <p className="para"></p>
            
             </div>

             <div><h3 className="head">Conclusion</h3></div>
            <div>
            <p className="para">We hope that you’ve learned some helpful
             information about the world of blogging. If you’ve managed to
              start a blog, then your next step is to work on your blog
               content in order to keep your future readers satisfied and
                engaged. Feel free to check out our extensive list of
                 blogging resources which will help 
            you to run and grow your new blog</p>
             </div> 

        </div>
            
        </>
    );
}
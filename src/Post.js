import React from 'react';
import './Post.css';
import {Avatar } from '@material-ui/core';
import  {ChatBubbleOutline , NearMe , ExpandMoreOutlined , ThumbUp , AccountCircle } from '@material-ui/icons';


function Post({profilePic , image , username , timestamp, message}) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar"/>
                <div className="post-topInfo">
                    <h3>{username}</h3>
                   <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    {/* to always add the current date use these line of code these code will automatically add the current date */}
                  
                </div>
            </div>

            <div className="post-bottom">
                <p>{message}</p>
            </div>

            <div className="post-image">
                <img src={image} alt=""/>
            </div>

            <div className="post-options">
                <div className="post-option">
                    <ThumbUp />
                    <p>Like</p>
                </div>

                <div className="post-option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>

                <div className="post-option">
                    <NearMe />
                    <p>Share</p>
                </div>

                <div className="post-option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>

                
            </div>

        </div>
    );
}

export default Post;

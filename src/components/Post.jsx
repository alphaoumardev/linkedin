import React from 'react';
// import { Avatar } from '@mui/material';
import '../css/post.css'
import {ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import Options from "./Options";

const Post = ({name,description, photoUrl, message}) =>
{
    return (
        <div className="post">
            <div className="post-body">
                {/*<p>{message}</p>*/}
            </div>
            <div className="post-button">
                <Options Icon={ThumbUpAltOutlined} title="Like"/>
                <Options Icon={ChatOutlined} title="Comments"/>
                <Options Icon={ShareOutlined} title="Share"/>
                <Options Icon={SendOutlined} title="Send"/>
            </div>
        </div>
    );
}

export default Post;

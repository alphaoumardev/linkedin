import React,{useState,useEffect} from 'react';
import '../css/feed.css'
import {Avatar, Card} from "@mui/material";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DescriptionIcon from '@mui/icons-material/Description';
import Options from "./Options";
import Post from './Post';
import { db } from '../firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { query, orderBy, onSnapshot} from "firebase/firestore"


const Feed = () =>
{
    const [post, setPost] = useState([])
    const [input, setInput]= useState("")
    const sendPost=async (e) => {
        e.preventDefault()
        // try {
        //     await addDoc(collection(db, 'posts'),
        //     {
        //         title: "Diallo",
        //         description: "This is the description",
        //         message: input,
        //         photoUrl:'',
        //         timestamp: Timestamp.now()
        //     })
        //     // onClose()
        //     setInput("")
        // }
        // catch (err)
        // {
        //     console.log(err)
        // }

    }
    useEffect(() =>
    {
        // db.collection("posts").onSnapshot(snapshots=>
        //     (
        //         setPost(snapshots.docs.map((doc)=>
        //             (
        //                 {
        //                     id:doc.id,
        //                     data:doc.data()
        //                 }
        //             )))
        //     ))
    //
    },[])
    return (
        <div className="container">
            <div className="feed">
                <Card className="card">
                    <div className="top">
                        <Avatar className="a"/>
                        <input type="text" className="a" placeholder="  Start a Post"/>
                        {/* <Create className="a" /> */}

                        <button type="submit" onClick={sendPost} onChange={e => setInput(e.target.value)}>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
                                    </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>
                    </div>
                    <div className="downOptions">
                        <Options title="Photo" Icon={InsertPhotoIcon} color="blue"/>
                        <Options title="Video" Icon={SlowMotionVideoIcon} color="green" />
                        <Options title="Events" Icon={EventNoteIcon} color="orange" />
                        <Options title="Write Articles" Icon={DescriptionIcon} color="pink" />
                    </div>
                </Card>
                <div className="post-header">
                    <Avatar />
                    <div className="info">
                        <h3>Alpha oumar</h3>
                        <p>description</p>
                    </div>
                </div>
                <hr />
                <Card className="post">
                    {post.map(({id,data:{name, message, photoUrl, description}}) =>
                    (
                        <Post key={id}
                              name={name}
                              description={description}
                              message={message}
                              photoUrl={photoUrl}
                        />
                    ))}
                    <Post/>
                </Card>
            </div>
        </div>
    );
}

export default Feed;

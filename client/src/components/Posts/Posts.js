import React,{useState, useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { Button } from '@material-ui/core';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(posts);
    
    return (
      <div>
      <br></br><br></br><br></br><br></br>
      {user ? (
        <div>
      <h1>Hi {user.result.name},</h1>
      <h1>Welcome!</h1>
      <h2>Below are main features available:</h2>
      <div>
      <Button variant="contained" href="https://jiit-meet-video.herokuapp.com/"  target="_blank">
  Call, Chat and Meet
   </Button> <span></span><span>
     </span>
   <Button variant="contained" href="https://activity-scheduling.herokuapp.com/"  target="_blank">
  Timetable Scheduler
   </Button>
   <span></span><span>
     </span> 
   <Button variant="contained" href="#contained-buttons">
  Calendar
   </Button>
   </div>
   <br/>
   <div>
   <Button variant="contained" href="#contained-buttons">
  CGPA Predictor
   </Button>
   <span></span><span>
     </span> 
   <Button variant="contained" href="#contained-buttons">
  General Polls 
   </Button>
   </div>
      </div>)
      :
      (
      <h1> Please Sign in </h1>)
      }
      </div>
       /* !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <Post post={post} setCurrentId = {setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )*/

    );
}

export default Posts;
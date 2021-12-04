import React,{useState, useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import decode from 'jwt-decode';
import img1 from '../../images/jiit meet.jpg';
import img2 from '../../images/oat.jpg';
import img3 from '../../images/m.png';
import img4 from '../../images/n.png';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { Button } from '@material-ui/core';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    //console.log(posts);
    console.log(img1);
    return (
      <div>
      <br></br><br></br><br></br><br></br>
      <div>
     <img height="30%" src={img4} alt="Logo" /> 
      <img src={img3} alt="Logo" />
      </div>
     
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
   <Button variant="contained" href="https://react-google-calendar-clone.netlify.app/" target="_blank">
  Calendar
   </Button>
   </div>
   <br/>
   <div>
   <Button variant="contained" href="https://cgpaforecaster.vercel.app/" target="_blank">
  CGPA Calculator
   </Button>
   <span></span><span>
     </span> 
   <Button variant="contained" href="#contained-buttons" target="_blank">
  General Polls 
   </Button>
   </div>
      </div>)
      :
      (
      <h1> Please Sign in </h1>)
      }
      <br></br>
       <img src={img2} alt="Logo" style={{"width":"160%"}}/>
      <br></br><br></br><br></br><br></br>
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
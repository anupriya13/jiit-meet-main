import React,{useState, useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import useStyles from './styles';

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
import React, { useState, useEffect }from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost , updatePost} from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {


    const [postData, setPostData] = useState({ shop: '', category: '', caption: '', location: '', mode: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
   
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  
    const clear = () => {
      setCurrentId(null);
       setPostData({ shop: '', category: '', caption: '', location: '', mode: '', selectedFile: '' });
      };

      
    const handleSubmit = (e) =>{
        e.preventDefault();

       
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
    };

    if (!user?.result?.name) {
      return (
        <br></br>
        /* 
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own post and like other's posts.
          </Typography>
        </Paper>*/
      );
    }

    return (

  <br></br>
      /*  <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
            <Typography variant="h6"> {currentId ? 'Editing' : 'Creating'} a Post</Typography>
            
            <TextField name = "shop" variant = "outlined" label = "Heading"fullWidth value = {postData.shop} onChange = {(e) => setPostData({ ...postData, shop: e.target.value })}/>
            
            <TextField name = "caption" variant = "outlined" label = "Caption"fullWidth value = {postData.caption} onChange = {(e) => setPostData({ ...postData, caption: e.target.value })}/>
            
            <TextField name = "category" variant = "outlined" label = "Category"fullWidth value = {postData.category} onChange = {(e) => setPostData({ ...postData, category: e.target.value })}/>
          
            <TextField name = "location" variant = "outlined" label = "Location"fullWidth value = {postData.location} onChange = {(e) => setPostData({ ...postData, location: e.target.value })}/>
            
            <TextField name = "mode" variant = "outlined" label = "Hashtags (use comma to separate)"fullWidth value = {postData.mode} onChange = {(e) => setPostData({ ...postData, mode: e.target.value.split(',') })}/>


        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>*/
    );
}

export default Form;

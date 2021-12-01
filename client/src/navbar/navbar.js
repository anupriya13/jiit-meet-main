import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link,useHistory, useLocation} from 'react-router-dom';
import { SidebarData } from '../sidebar/sidebar';
import './navbar.css';
import { IconContext } from 'react-icons';
import crhm from '../images/lll.png';
import SubMenu from '../sidebar/submenu';

import {AppBar, Avatar, Button, Typography,Toolbar} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';




function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const reload = () =>  window.location.reload();
  const classes = useStyles();
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const logout =  () => {
      dispatch({ type: 'LOGOUT'});
  
      history.push('/auth');
  
      setUser(null);
    };

  useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

  return (
    <>
      <IconContext.Provider value={{ color: '	#8e4555' }}>
   
        <div className='navbar'>
        <IconContext.Provider value={{ color: '#a5abbd' , size: '20px' }}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}  />
            
          </Link>
          </IconContext.Provider>
          <span/>
          <Link to='/' style={{
          textDecoration:"none"
        }}>
    
     
          <text >JIIT Meet</text></Link>
          <span></span>
          <img src = {crhm} className="crhm" alt="crhm"></img>
      <span style ={{ marginRight: '30%'}}></span>
     

 
      <Toolbar className={classes.toolbar}>
            {user ? (
                <div className = {classes.profile}>
                    <Avatar className = {classes.purple} alt = {user.result.name} src = {user.result.imageUrl}> {user.result.name.charAt(0)} </Avatar>
                    <Typography className = {classes.userName} variant = "h9" style ={{ color: 'white'}}>{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick = {logout}>Logout</Button>
                </div> 
            ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
      <span></span><span></span>
      <Link to='#'>
      <FaIcons.FaRedoAlt  onClick={reload} style={{ color: '#a5abbd' }}/></Link>
        </div>
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
         
              <Link to='#' className='menu-bars'>             
                <AiIcons.AiOutlineClose  onClick={showSidebar} />
              </Link>
        
            </li>
            {SidebarData.map((item, index) => {
          
                return <SubMenu item={item} key={index} />;
              
            })}
          </ul>
         
        </nav>
      
      </IconContext.Provider>
     
    </>
  );
}

export default Navbar;
/*
<a href='http://localhost:3000/' target="_blank" ><Button style={{color:'white'}}>Virtual Meeting</Button></a><span></span>
<Link to='/stage'  style={{textDecoration:'none'}}><Button  style={{color:'white'}}>Stage</Button></Link><span></span>
*/ /*    <a href='https://teacheasy5.herokuapp.com/' target="_blank" ><Button style={{color:'white'}}>Join</Button></a><span></span>
*/
      /*<a href='https://jiit-meet-video.herokuapp.com/' target="_blank" ><Button style={{color:'white'}}>Call</Button></a><span></span>
*/
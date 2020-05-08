import React from 'react';
import {Grid,Typography, Box,Button, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoCard from './Infocard.js';
import ReactTypingEffect from 'react-typing-effect';
import {Data} from './dataStore.js';
import './App.css';


const useStyles = makeStyles({
    baseColor: {
        backgroundColor: '#298DE9',
    },
    baseIconColor: {
        color:'#298DE9',
    },
    baseHeight: {
        height:'100vh',
    },
    heightAdapt: {
        height:'100%',
    },
    headingColor: {
        color:'#298DE9',
        fontFamily:'Poppins',
        fontWeight:600,
    },
    heroText: {
        fontFamily:'Poppins',
        color:'#555',
        fontWeight:600,
    },
    widthProp: {
        maxWidth: '50%',
    },
  
    buttonStyle: {
        color:'#298DE9',
        backgroundColor:'#fff',
        transition: 'transform 0.3s',
        '&:hover': {
            color:'white',
            backgroundColor:'#298DE9',
            transform:'translateY(-5px)',
        },
    },
    linkStyles: {
        textDecoration:'none',
    },
    horizontalBox: {
        display:'flex',
    },

})

export default function App() {
    const classes = useStyles();

    return (
        <Grid container className={classes.baseHeight}>
            <Grid item xs={12} sm={6}>
                <Grid container justify="center" alignItems="center" className={classes.heightAdapt}>
                    <Grid item  className={classes.widthProp}>
                            <Box className={classes.boxFlex} mt={4}>
                                <Typography variant="h5" className={classes.headingColor}><ReactTypingEffect speed="100" eraseDelay="1250" typingDelay="100" text={["Ambadi Ritik","Developer","Designer"]}/></Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography variant="body1" className={classes.heroText}>Computer Science Undergrad and passionate web developer. Works with React and Node. UX/UI Designer.</Typography>  
                            </Box>
                            <Box mt={4}>
                                <a href="mailto:ambadiritik@gmail.com" className={classes.linkStyles}><Button variant="contained" className={classes.buttonStyle}>GET IN TOUCH</Button></a>
                            </Box>
                            <Box mt={2} className={classes.horizontalBox}>
                                <IconButton>
                                    <a href="https://www.linkedin.com/in/ambadi-ritik-017b6318b"><LinkedInIcon  className={classes.baseIconColor}/></a>
                                </IconButton>
                                <IconButton>
                                    <a href="https://www.facebook.com/ambadiritik.krishnan"><FacebookIcon  className={classes.baseIconColor}/></a>
                                </IconButton>
                                <IconButton>
                                    <a href="https://www.instagram.com/ambadi_ritik/"><InstagramIcon className={classes.baseIconColor}/></a>
                                </IconButton>
                               
                                <IconButton>
                                    <a href="https://github.com/ARitik"><GitHubIcon  className={classes.baseIconColor}/></a>
                                </IconButton>
                            </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.baseColor}>
               <Grid container direction="column" justify="center" alignItems="center" className={classes.heightAdapt}>
                    {Data.map(({title,description})=>{
                        return(
                            <InfoCard title={title} description={description} />
                        )
                    })}
               </Grid>
            </Grid>
        </Grid>
    )
}

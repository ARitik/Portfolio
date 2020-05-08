import React from 'react';
import {Typography,Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    minBox: {
        maxWidth:'50%',
    },
    textStyle: {
        color:'#fff',
        fontFamily:'Poppins',
        fontWeight:'600',
        marginTop:'5px',
    },
})

export default function Infocard({title,description}) {
    const classes = useStyles();
    
    return (
        <Box className={classes.minBox} mt={6} mb={6}>
            <Typography variant="h6" className={classes.textStyle}>{title}</Typography>
            <Typography variant="body2" className={classes.textStyle}>
            {description}
            </Typography>
        </Box>
    )
}

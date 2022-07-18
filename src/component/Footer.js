import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => 
    createStyles({
        footer: {
            backgroundColor: 'rgba(52, 56, 58, 1)',
            height: '10vh'
        },
        container:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        contact: {
            paddingLeft: '1.6rem',
            fontSize: 25,
            color: 'orange',
            cursor: 'default',
            [theme.breakpoints.down('sm')]:{
                paddingLeft: '0',
                fontSize: 20
            }
        },
       paletteName:{
            marginLeft: 'auto',
            marginRight: '1rem',
            fontSize: '1.3rem',
            color: 'white',
            [theme.breakpoints.down('sm')]:{
                fontSize: 18,
                marginLeft:'0',
            }
        }
    })
)

export default function Footer({name, emoji}) {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Box className={classes.container}>
                <Typography className={classes.contact}>Connect with us</Typography>

                <div className={classes.paletteName}>
                    {name} <span style={{marginLeft: '0.5rem'}}>{emoji}</span>
                </div>
                
            </Box>


            
        </footer>
    )
}

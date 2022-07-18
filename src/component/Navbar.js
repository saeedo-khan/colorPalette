import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton, AppBar, FormControl } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css'
import { PaletteContext } from '../context/PaletteContext';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => 
    createStyles({
        navbar:{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            height: '6vh',
            width: '100%',
            backgroundColor: '#34383A',
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]:{
                
            }
        },
        logo:{
            marginRight: '15px',
            padding: '0 0.8rem',
            fontSize: '1.4rem',
            backgroundColor: '#34383A',
            fontFamily: 'Roboto, sans-serif',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            '& a':{
                textDecoration: 'none',
                fontSize: '1.5rem',
                color: '#DA7758'   
            },
            [theme.breakpoints.down('sm')]:{
                display: 'none'
            }
        },
        sliderContainer:{
            marginRight:'auto',
            marginLeft: '1rem',
            '& span': {
                marginRight: '0.8rem'
            }
        },
        slider:{
            width: '25vw',
            margin: '0 10px',
            display: 'inline-block',
        },
        selectContainer:{
            marginRight: '1rem',
            padding: '0.2rem'
        },
        select: {
            color: 'white',
            backgroundColor:'rgba(0,0,0,0.2)',
            padding: '0.1rem 0.4rem'
        }
    })
    
)




function Navbar() {

    // change value of levels
    // change dropdown value
    // open and clost snackbar

    const classes = useStyle()
    const {format, setFormat, level, handleLevel} = React.useContext(PaletteContext)
    const [toggle, setToggle] = useState(false)
    
    const changeFormat = e => {
        setFormat(e.target.value)
        setToggle(true)
        setTimeout(() => {
            setToggle(false)
        }, 2000)
        
    }

    return (
        <AppBar className={classes.navbar}>

            <div className={classes.logo}>
                <Link exact to='/'>ColorPalette</Link>
            </div>

            <div className={classes.sliderContainer}>
                <span>Levels: {level}</span>
                <div className={classes.slider}>
                    <Slider                            
                    defaultValue={level}
                    min={100}
                    max={900}
                    onAfterChange={handleLevel}
                    step={100} />
                </div>
            </div>

            <FormControl className={classes.selectContainer}>
                <Select value={format} onChange={changeFormat} className={classes.select}>
                    <MenuItem value='hex'>Hex Color</MenuItem>
                    <MenuItem value='rgb'>Rgb</MenuItem>
                    <MenuItem value='rgba'>Rgba</MenuItem>
                </Select>
            </FormControl>

            <Snackbar 
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            open={toggle}
            autoHideDuration={3000}
            message={<span>Format Changed To {format}</span>}
            ContentProps={{'aria-describedby' : 'message-id'}}
            action={[
                <IconButton 
                    color="inherit"
                    key="close"
                    aria-label="close" >
                    <CloseIcon />
                </IconButton>
            ]} />
        </AppBar>
    )
}


export default memo(Navbar)
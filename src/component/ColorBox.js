import { makeStyles, createStyles } from '@material-ui/core'
import React, { memo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { motion } from 'framer-motion/dist/framer-motion'

const useStyle = makeStyles((theme) => 
    createStyles({
        colorBox:{
            width: '20%',
            height: '196px',
            position: 'relative',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            '&:hover button': {
                opacity: '1',
                transition: 'opacity 0.3s ease-out'
            },
            
            [theme.breakpoints.down('md')]:{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }
        },
        details: {
            display:'flex',
            justifyContent:'space-between',
            alignItems: 'flex-end',
            height: '100%',
            [theme.breakpoints.down('md')]:{
                flexDirection: 'column',
                alignItems: 'center'
            }
    
        },
        moreColors: {
            backgroundColor: 'rgba(0,0,0,0.2)',
            fontSize: '1rem',
            padding:'0.4rem',
            cursor: 'pointer',
            zIndex: '5',
            color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : 'white'
        },
        colorName:{
            padding: '0.5rem',
            color: props => chroma(props.background).luminance() >= 0.6 ? 'rgba(0,0,0,0.6)' : 'white',
            fontSize: 16,
            [theme.breakpoints.down('sm')]:{
                display: 'none'
            }
        },
        copyButton:{
            color: props => chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
            width: '30%',
            height: '16%',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            fontSize: '1rem',
            lineHeight: '20px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'pointer',
            opacity: '0',
            [theme.breakpoints.down('sm')]: {
                display:'none'
            }
    
        },
        overlay: {
            width: '100%',
            height:'100%',
            transform: 'scale(0.1)',
            position: 'absolute',
            zIndex: '0',
            opacity: '0'
        },
        showOverlay:{
            transform: 'scale(40)',
            zIndex: '100',
            opacity: '1',
            position:'absolute',
            transition: 'transform 0.5s ease-in-out'
        },
        copyMsg: {
            position: 'fixed',
            top: '0',
            left: '0',
            right:'0',
            bottom:'0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontSize: '3rem',
            color: 'white',
            transform:'scale(0)',
            opacity: '0',
            '& h1':{
                fontWeight: '400',
                textShadow: '1px 2px black',
                background: 'rgba(255, 255, 255, 0.3)',
                width: '100%',
                textAlign: 'center',
                marginBottom: '0',
                padding: '1rem',
                color: props => chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '4.5rem'
                }
            },
            '& p':{
                fontsize: '2rem',
                fontweight: '100',
                color: props => chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '2rem'
                }
            }
        },
        showMsg: {
            opacity: '1',
            transform: 'scale(1)',
            zIndex:'100',
            transition: 'transform 0.5s ease-in-out',
        }
    })
)



function ColorBox(props) {
    const classes = useStyle(props)

    const {background, name} = props;
    const [copied, setCopied] = useState(false)

    // change copied state to show overlay and message
    const changeCopyState = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }


    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
        <div 
        className={classes.colorBox} 
        style={{background}}
        >
            
            {/* overlay and message */}
            <div className={`${classes.overlay} ${copied && classes.showOverlay}`} style={{background}}></div>

            <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                    <h1>Copied!</h1>
                    <p className='color'>{background}</p>
            </div>
            {/* end */}

            <motion.button 
            className={classes.copyButton}
            initial={{scale: 0.1}}
            animate={{scale: 1}}
            whileHover={{scale: 1.1}}
            transition={{type: 'spring', sniffess: 100}}
            >
                Copy!
            </motion.button>

            <div className={classes.details}>
                <span className={classes.colorName}>{name}</span>

            </div>
        </div>
        </CopyToClipboard>
    )
}


export default memo(ColorBox)
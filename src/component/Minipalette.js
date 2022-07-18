import { makeStyles, createStyles } from '@material-ui/core'
import React from 'react'
import { motion} from 'framer-motion/dist/framer-motion'

const useStyle = makeStyles((theme) => 
    createStyles({
        container:{
            backgroundColor: 'rgba(255,255,255,0.3)',
            width: '300px',
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '1rem',
            borderRadius: '10px',
            [theme.breakpoints.down('sm')]:{
                height: '270px'
            }
        },
        thumbnails: {
            width: '80%',
            height: '70%',
            backgroundColor: 'red',
            borderRadius: '5px',
            cursor: 'pointer',
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]:{
                height: '60%'
            }
        },
        paletteName:{
            marginTop: '0.5rem',
            fontSize: '1.2rem',
            cursor: 'default',
            textAlign: 'center',
            '& span':{
                [theme.breakpoints.down('sm')]:{
                    display: 'block',
                    textAlign: 'center'
                }
            }
        },
        miniColor:{
            width: '20%',
            height: '25%',
            display: 'inline-block',
            margin: '0 auto',
            position: 'relative',
            marginBottom: '-4px'
        }
    })
)

export default function Minipalette(props){
    const classes = useStyle()

    const { paletteName,emoji, colors, handleClick } = props;

    const miniColors = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor:color.color}}>

        </div>
    ))

    return (
        <motion.div 
        className={classes.container}
        initial={{x: '100vw', opacity: 0}}
        animate={{x: '0', opacity: 1}}
        transition={{type: 'spring', stiffness: 60}}
        onClick={handleClick}
        >
            <motion.div 
            className={classes.thumbnails}
            whileHover={{scale: 1.1}}
            transition={{type: 'spring', stiffness: 100}}
            > {miniColors} </motion.div>

            <h3 className={classes.paletteName}>{paletteName} <span>{emoji}</span></h3>
        </motion.div>
    )
}

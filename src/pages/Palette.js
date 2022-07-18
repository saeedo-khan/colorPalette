import React, { useContext } from 'react'
import ColorBox from '../component/ColorBox'
import Navbar from '../component/Navbar'
import { PaletteContext } from '../context/PaletteContext';
import { makeStyles } from '@material-ui/core';
import Footer from '../component/Footer';
import { motion } from 'framer-motion/dist/framer-motion'


const useStyle = makeStyles({
    wrapApp: {
        display: 'flex',
        flexDirection: 'column'
    },
    nav: {
        marginBottom: '3.5rem'
    },
    boxes:{
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    footer:{
        marginTop:'auto'
    }
})

export default function Palette({paletteColor}){
    const classes = useStyle()
    const {level, format} = useContext(PaletteContext)

    return (
        <div className={classes.wrapApp}>

            <motion.nav 
            className={classes.nav}
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            transition={{type: 'spring', sniffess: 100}}
            >
            <Navbar />
            </motion.nav>

            <motion.div 
            className={classes.boxes}
            initial={{x : '100vw'}}
            animate={{x: 0}}
            transition
            >
                {paletteColor.colors[level].map(color => (
                        <ColorBox background={color[format]} name={color.name} key={color.id}/>
                ))}
            </motion.div>

            <motion.footer 
            className={classes.footer}
            initial={{y: '100vh'}}
            animate={{y: 0}}
            transition={{type: 'spring', sniffness: 100, delay: 0.1}}    
            >
            <Footer name={paletteColor.name} emoji={paletteColor.emoji}/>
            </motion.footer>
        </div>
    )
}

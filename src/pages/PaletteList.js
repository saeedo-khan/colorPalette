import React from 'react';
import {  makeStyles } from '@material-ui/core';
import Minipalette from '../component/Minipalette';

const useStyles = makeStyles({
    homepage: {
        minHeight: '100vh',
        backgroundColor: '#e4aa04',
        width: '100%'
    },
    palettelist:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: '1300px',
        width: '70%',
        height: '100%',
        margin: '0 auto'
    }

})

export default function PaletteList(props) {
    const classes = useStyles()

    const { palettes } = props;

    const goToPalette = id => {
        props.history.push(`/palette/${id}`)
    }


    const colorBoxes = palettes.map(palette => (
        <Minipalette {...palette} handleClick={() => goToPalette(palette.id)} key={palette.id}/>
    ) )

    return (
        <div className={classes.homepage}>
            <div className={classes.palettelist}>
                {colorBoxes}
            </div>
        </div>
    )
}

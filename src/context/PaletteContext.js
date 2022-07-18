import {useState, createContext} from 'react';


export const PaletteContext = createContext()


export function PaletteProvider(props){

    const [format, setFormat] = useState('hex')
    const [level , setLevelVal] = useState(600)


    const handleLevel = (level) => {
        setLevelVal(level)
    }


    return(
        <PaletteContext.Provider value={{ format, setFormat, level, handleLevel}}>
            {props.children}
        </PaletteContext.Provider>
    )
}
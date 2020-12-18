import React, { useState, useEffect } from 'react'

const Color = ({rgb, weight, hex, index}) => {
    const [ alert, setAlert ] = useState(false)
    const bgc = rgb.join(",")
    const hexValue = `#${hex}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        },2000)
        return ()=> clearInterval(timeout)

    }, [alert])


    const copyToClipBoard = (hex) => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
    }
    return (
            <article 
                className={`color ${ index >= 10 && 'color-light'}`} 
                style={{backgroundColor: `rgb(${bgc})`}}
                onClick={() => copyToClipBoard(hexValue)}
            >
               <p className="percent-value">
                   {weight}%
               </p>
               <p className='color-value'>{hexValue}</p> 
               { alert && <p className='alert'>copied to clipboard</p> }
            </article>
    )
}

export default Color

import React, { useRef, useEffect, useState } from "react";
import { Input, Placeholder, Wrapper } from "./Style";

function Fieldbox({ value, setValue, type, placeholder }) {
    const inputRef = useRef(null)
    const [isClicked, setIsClick] = useState(false)

    useEffect(() => {
        if (isClicked) {
            inputRef.current.focus()
        }
        else {
            inputRef.current.blur()
        }
    }, [isClicked])

    return (
        <Wrapper
            onClick={() => {
                setIsClick(true)
            }}
            onMouseOutCapture={() => {
                if (value === "") {
                    setIsClick(false)
                } else {
                    setIsClick(true)
                }
            }}
        >
            <Input value={value} onChange={e => setValue(e.target.value)} type={type} ref={inputRef} />
            <Placeholder
                animate={{
                    y: isClicked ? -18 : 0,
                    background: isClicked ? "rgb(247,247,247)" : "",
                }}
                transition={{
                    type: "tween",
                    duration: 0.2
                }}
            >
                {placeholder}
            </Placeholder>
        </Wrapper>
    )
}


export default Fieldbox
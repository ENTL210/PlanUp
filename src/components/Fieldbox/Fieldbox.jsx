import React, { useRef, useEffect, useState } from "react";
import { Input, Placeholder, Wrapper } from "./FieldBoxStyle";

function Fieldbox({ value, setValue, type, placeholder }) {
    const inputRef = useRef(null)
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => {
        if (isFocus) {
            inputRef.current.focus()
        }
        else {
            inputRef.current.blur()
        }
    }, [isFocus])

    return (
        <Wrapper
            onClick={() => {
                setIsFocus(true)
            }}
            onBlur={() => {
                if (value === "") {
                    setIsFocus(false)
                } else {
                    setIsFocus(true)
                }
            }}
        >
            <Input type={type} value={value} onChange={e => setValue(e.target.value)} ref={inputRef} />
            <Placeholder
                animate={{
                    y: isFocus ? -18 : 0,
                    background: isFocus ? "#eeeeee" : "",
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
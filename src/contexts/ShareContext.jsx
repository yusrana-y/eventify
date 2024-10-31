import React, { createContext, useState } from 'react'
export const addVideoResponseContext = createContext()
export const deleteVideoResponseContext = createContext()


const ShareContext = ({ children }) => {
    const [videoAddedResponse, setVideoAddedResponse] = useState("")
    const [videoDeleteResponse, setVideoDeleteResponse] = useState("")
    return (
        <addVideoResponseContext.Provider value={{ videoAddedResponse, setVideoAddedResponse }}>
            <deleteVideoResponseContext.Provider value={{ videoDeleteResponse, setVideoDeleteResponse }}>
                {children}
            </deleteVideoResponseContext.Provider>

        </addVideoResponseContext.Provider>
    )
}

export default ShareContext


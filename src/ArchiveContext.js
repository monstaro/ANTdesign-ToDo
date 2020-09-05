import React, { useState, createContext } from 'react';

export const ArchiveContext = createContext();

export const ArchiveProvider = props => {
    const [archive, setArchive] = useState([

    ])
    return (
        <ArchiveContext.Provider value={[archive, setArchive]}>
            {props.children}
        </ArchiveContext.Provider>
    )
}


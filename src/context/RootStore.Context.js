// Use Context or Redux don't both
// Example Context
import { createContext, useState } from "react";

// state
const ContextRootState = createContext(null);
// setState
const ContextRootDispatch = createContext(null);

function RootStoreContext({children}) {
    const [rootState, setRootState] = useState({
        testValue: 'keyValue'
    });

    return (
        // rootState
        <ContextRootState.Provider value={rootState}>
            {/* setRootState */}
            <ContextRootDispatch.Provider value={setRootState}>
                {children}
            </ContextRootDispatch.Provider>
        </ContextRootState.Provider>
    )
}

export {RootStoreContext, ContextRootState, ContextRootDispatch}
import { createContext } from "react";
import useWidth from '../Hooks/useWidth'

const DataContext = createContext({})

export const DataProvider =({children})=>{
//Custom hooks for finding screen width
const {width} = useWidth()

    return(
        <DataContext.Provider value={ width }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
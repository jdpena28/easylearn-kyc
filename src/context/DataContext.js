import {createContext,useState} from 'react'

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [enrollee,setEnrollee] = useState({
        LastName:'',
        FirstName:'',
        MiddleName:'',
        Email:'',
    });
    return (
    <DataContext.Provider value={{enrollee, setEnrollee}}>{children}</DataContext.Provider>
    )
}

export default DataContext; 
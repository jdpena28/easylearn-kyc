import {createContext,useState} from 'react'

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [enrollee,setEnrollee] = useState({
        LastName:'',
        FirstName:'',
        MiddleName:'',
        Email:'',
    });
    const [id,setID] = useState('');
    return (
    <DataContext.Provider value={{enrollee, setEnrollee,setID,id}}>{children}</DataContext.Provider>
    )
}

export default DataContext; 
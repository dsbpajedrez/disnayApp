
import { createContext , useState} from "react";

export const ctxUser = createContext('')

const SaveUser =({children})=>{
    const [user, setUser ]=useState()
    return(
        <ctxUser.Provider value={{user,setUser}} >
            {children}
        </ctxUser.Provider>
    )
}
export default SaveUser;
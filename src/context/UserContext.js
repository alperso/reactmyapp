import {createContext,useState} from 'react';
//BİRDEN COK CONTEXT KULLANABİLRİM
const UserContext = createContext();
//Bu contextin bir provide olmak zorudna sağlayıcısı yani

export const UserProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const values = {user,setUser};

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}

export default UserContext;
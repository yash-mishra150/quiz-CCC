import React, { useState } from 'react'
import UserContext from './UserContext'



const UserContextProvider = ({children}) => {
    const [State,SetState] = useState({
        
    });
  return (
    <UserContext.Provider value={{State, SetState}}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider

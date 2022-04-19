import * as React from 'react';

import { UserContextType, User } from '../models/models';

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [subs, setSubs] = React.useState<Array<number>>([]);

  const saveSub = (sub: number) => {
    const newSub = sub;
    setSubs([...subs, newSub])
  }

  const deleteSub = (sub: number) => {
    const newSubs = subs.filter(element => element !== sub);
    setSubs(newSubs)
  }


  const updateSubs = (subArray: Array<number>) => {

    setSubs(subArray)

  }

  return (
    <UserContext.Provider value={{ user, subs, saveSub, deleteSub , updateSubs }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
import * as React from 'react';

import { SubsContextType } from '../models/models';

export const SubsContext = React.createContext<SubsContextType | null>(null);

const SubsProvider: React.FC<React.ReactNode> = ({ children }) => {
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
    <SubsContext.Provider value={{ subs, saveSub, deleteSub ,updateSubs }}>
      {children}
    </SubsContext.Provider>
  );
};

export default SubsProvider;
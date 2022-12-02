import React, { useState,FC } from "react";

export interface AppContextInterface {
    id: number;
    name: string;
    relationtype: number;
}


export type ProviderType= {
    relationships: [number, number][];
    setRelationships: React.Dispatch<React.SetStateAction<[number, number][]>>;
    peoples: AppContextInterface[];
    setpeoples: React.Dispatch<React.SetStateAction<AppContextInterface[]>>;
}

export const Context = React.createContext<ProviderType | null >(null);

const PeopleContext = ({children}:any) => {
    const [relationships, setRelationships] = useState<[number, number][]>([])
    const [peoples, setpeoples] = useState<AppContextInterface[]>([{ id: 0, name: 'shivam soni', relationtype: 1 }, { id: 1, name: 'hariom soni', relationtype: 1 }, { id: 2, name: 'astha soni', relationtype: 1 }])


    let contextValue: ProviderType = {
        relationships,
        setRelationships,
        peoples,
        setpeoples
    };

    return (
        <>
            <Context.Provider value={contextValue}>
                {children}
            </Context.Provider>
        </>
    );
};

export default PeopleContext;
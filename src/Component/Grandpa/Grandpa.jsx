
import { createContext } from 'react';
import Uncle from '../Uncle/Uncle';
import Brother from '../Brother/Brother';


export const AssetContex=createContext("gold");

const Grandpa = () => {
    return (
        <div>
            <h1>grandpa</h1>
            <Uncle></Uncle>

            <AssetContex.Provider value='gold'>
                <Uncle></Uncle>
                <Brother></Brother>
            </AssetContex.Provider>
        </div>
    );
};

export default Grandpa;
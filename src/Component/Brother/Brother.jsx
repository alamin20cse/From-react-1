
import { useContext } from 'react';
import Spechial from '../Spechial/Spechial';
import { AssetContex } from '../Grandpa/Grandpa';

const Brother = () => {

    const gift=useContext(AssetContex);

    return (
        <div>
            <h4>Brother</h4>
            <h1>gift =:{gift} </h1>
            <Spechial></Spechial>
        </div>
    );
};

export default Brother;
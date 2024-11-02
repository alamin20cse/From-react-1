import { useContext } from "react";
import { AssetContex } from "../Grandpa/Grandpa";


const Spechial = () => {
const gift=useContext(AssetContex)

    return (
        <div>
            <h4>Spechial gift: {gift}</h4>
            
        </div>
    );
};

export default Spechial;
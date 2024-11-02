import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef=useRef(null);
    const passwordRef=useRef(null);
    const emalilRef=useRef(null);
    useEffect(()=>{

        nameRef.current.focus();
    },[])


    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emalilRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} defaultValue={"alamin"} type="text" placeholder="Name" name="name" />
                <br />
                <input ref={emalilRef} type="email" placeholder="Email" name="email"/> <br />
                <input ref={passwordRef} type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />


                
            </form>
        </div>
    );
};

export default RefForm;
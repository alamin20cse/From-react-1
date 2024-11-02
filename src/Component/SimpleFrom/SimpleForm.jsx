import { useState } from "react";

const SimpleForm = () => {

    const [name,setname]=useState(null);
    const [Email,setEmail]=useState(null);
    const [Password,setPassword]=useState(null);
    const [error,seterror]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log("submitted");
        if(Password.length<6)
           {
            seterror("password must be 6 character or laonger");

           }
           else
           {
            seterror('');
           }
        console.log(name,Email,Password)
       

    }

    const handelNameChange=(e)=>
    {

        setname(e.target.value);
    }

    const handelEmailChange=(e)=>
    {

        // console.log(e.target.value)
        setEmail(e.target.value);

    }
    const handelPassword=(e)=>{
        setPassword(e.target.value);


    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={handelNameChange}/>
                <br />
                <input type="email" placeholder="Email" name="email" onChange={handelEmailChange}/> <br />
                <input type="password" name="password" onChange={handelPassword} />
                <br />
                <input type="submit" value="Submit" />


                {
                    error&& <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default SimpleForm;

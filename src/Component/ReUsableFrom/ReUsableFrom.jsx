

const ReUsableFrom = ({fromTitle,submitButtonText='submit',handleSubmit,children}) => {
    const handelLocalsubmit=(e)=>
    {
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data);
    }

   
    return (
        <div>
            <h2>{children}</h2>

<form onSubmit={handelLocalsubmit}>
                <input  type="text" placeholder="Name" name="name" />
                <br />
                <input  type="email" placeholder="Email" name="email"/> <br />
                <input  type="password" name="password"/>
                <br />
                <input type="submit" value={submitButtonText} />


                
            </form>
            
        </div>
    );
};

export default ReUsableFrom;
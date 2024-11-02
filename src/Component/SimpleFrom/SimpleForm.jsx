const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        // console.log("submitted");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name"/>
                <br />
                <input type="email" placeholder="Email" name="email" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;

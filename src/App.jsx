
import './App.css'
import Grandpa from './Component/Grandpa/Grandpa'
// import RefForm from './Component/RefForm/RefForm'
import ReUsableFrom from './Component/ReUsableFrom/ReUsableFrom'
// import SimpleForm from './Component/SimpleFrom/SimpleForm'

function App() {


  // const handleSignUSubmit=(data)=>
  //   {
  //      console.log(data);
  //   }

  //   const handleUpdate=(data)=>
  //     {
  //        console.log(data);
  //     }

  return (
    <>
     


      <h1>Vite + React </h1>
      {/* <SimpleForm></SimpleForm> */}

      {/* <RefForm></RefForm> */}
{/* 
      <ReUsableFrom fromTitle={'Sign up from'} handleSubmit={handleSignUSubmit}> <h3>Sign up from it</h3> </ReUsableFrom>
      <ReUsableFrom fromTitle={'Login up from'} submitButtonText='Update' handleSubmit={handleUpdate}> <div>
        <h3>update form</h3>
        <h5>update the form</h5>
        </div> </ReUsableFrom>

 */}


 <Grandpa></Grandpa>


      
    </>
  )
}

export default App

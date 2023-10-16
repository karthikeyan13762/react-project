import Hello from "./components/hello"


const App=()=>{

  let age=25;


  return(
    <div>
    <h1>Heading for Dob</h1>

    <Hello name="Karthi" age={age} />
    <Hello name="Karthikeyan" age={age} />

    </div>
    

  )
}
export default App
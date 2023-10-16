const Hello=(props)=>{
return(

<p>Hello {props.name} your age is {props.age}</p>

)

}

const App=()=>{
  const age=25;

  return (

    
    <div>
     <h1>Greatings</h1>
     <Hello name="karthi" age ={age}/>
     <Hello name="Karthikeyan" age ={age}/>


    </div>

  )

  
}

export default App
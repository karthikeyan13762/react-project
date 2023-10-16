function Hello(props){
  return(

    <p>Hello {props.userName } your age is {props.userAge}</p>
  )
}

function App(){

  let name1="Karthikeyan";

  let age1=25;

  let name2="Karthi";

  let age2=26;

  return(

    <div>
      <h1>Greetings</h1>
      <Hello userName ={name1} userAge ={age1} />
      <Hello userName ={name2} userAge ={age2} />
    </div>

  )


}
export default App
import React from 'react'
import Note from './components/Note'
function App({notes}) {

const addNote=(enent)=>{
  enent.preventDefault()
  console.log("Button clicked"+enent);
}


  return (
    <div>
      
     <h1>Notes</h1> 
     <ul>{
      
      notes.map(note=>
        
        <Note key={note.id} note={note}/>
       
        )
      
      }
    
      
     </ul>

    <form action="" method="get" onSubmit={addNote}>
      <input type="text" />
      <button type='submit'>Send</button>
    </form>


    </div>

    
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes=[

  {id:1,
  
  content:'content1',
  important:true
  
  },
  {id:2,
  
    content:'content2',
    important:false
    
    },
    {id:3,
  
      content:'content3',
      important:true
      
    },
    {id:4,
  
        content:'content4',
        important:false
        
    },
    {id:5,
  
          content:'content5',
          important:false
          
    }
        
  ]


ReactDOM.createRoot(document.getElementById('root')).render(

    <App notes={notes}/>

)


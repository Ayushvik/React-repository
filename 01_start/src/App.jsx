
import './App.css'
import Card from "./components/Card.jsx"

function App() {
 

  return (
    <>
    <div className='flex gap-4'>
      <Card title = "python"
      image = "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
      ButtonText = "Buy python course"/>
     <Card  title = "java"
     image = "https://plus.unsplash.com/premium_photo-1669075651445-9ac958f84ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amF2YSUyMGxhbmd1YWdlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
     ButtonText = "Buy java course"/>
     <Card
     image = "https://plus.unsplash.com/premium_photo-1668902223894-053948883caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YyUyQiUyQiUyMGxhbmd1YWdlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
    
   
    </>
  )
}

export default App

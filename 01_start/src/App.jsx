
import './App.css'

function App() {
 

  return (
    <>
   
    <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
      <img
      className='w-full h-48 object-cover rounded-xl ' src="https://www.teacupsfull.com/cdn/shop/articles/Screenshot_2023-09-05_at_7.00.35_PM.png?v=1693987070&width=1100" alt="chai aur code" srcset="" />
      <div className='p-4'>
        <h2 className='text-large font-semibold text-black'>Card Title</h2>
        <p className='text-large text-gray-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ea veritatis necessitatibus quos quaerat corporis fugit asperiores sed odio, est ipsum adipisci, ratione repellendus ipsa.
          </p>
          <button className='my-2 bg-black border-2 p-3 rounded-xl font-semibold hover:not-even:bg-blue-600 text-slate-400'>Buy your coffee</button>
      </div>
    </div>
    </>
  )
}

export default App

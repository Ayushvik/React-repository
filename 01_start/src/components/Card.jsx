import Button from "./Button"
function Card({title = "Course",image,ButtonText}){
    return(
         <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
      <img
      className='w-full h-48 object-cover rounded-xl ' src={image} alt="chai aur code" srcset="" />
      <div className='p-4'>
        <h2 className='text-large font-semibold text-black'>{title}</h2>
        <p className='text-large text-gray-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ea veritatis necessitatibus quos quaerat corporis fugit asperiores sed odio, est ipsum adipisci, ratione repellendus ipsa.
          </p>
          <Button ButtonText={ButtonText}/>
      </div>
    </div>
    )
}
export default Card
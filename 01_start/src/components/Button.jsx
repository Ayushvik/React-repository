function Button({ButtonText = "Just Buy"}){
    return(
        <button className='my-2 bg-black border-2 p-3 rounded-xl font-semibold hover:not-even:bg-blue-600 text-slate-400'>{ButtonText}</button>
    )
}
export default Button;
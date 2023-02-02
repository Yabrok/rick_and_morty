

export const FilterBtn = ({key,index,text,name, setState}) => {

  return (
    <div key={key}>
      <input 
      onClick={()=> setState(text)}
      type="radio" 
      className="btn-check" 
      id={`${name}-${index}`} 
      autoComplete="off" 
      name={name}/>
      <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`} >{text}</label>
    </div>
  )
}
import React from 'react'
const Courseform=(props)=>{
  return(

    <div className="form">
<form onSubmit={props.addcourse}>
<input type="text" placeholder="add course" onChange={props.update} value={props.value}/>
<input className="submit" type="submit" value="add course" />
</form>
    </div>
  )
}
export default Courseform

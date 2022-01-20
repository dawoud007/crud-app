import React,{Component,Fragment} from 'react'

class Courselist extends Component{

state={
  edited:false
}

  renderCourse=()=>{
    return(
    <li className="listStyle">
    <span>{this.props.details.name}</span>
    <div className="btn">
      <button className="edit" onClick={()=>this.switch()} >Edit course</button>
     <button className="delete" onClick={()=>this.props.deletecourse(this.props.index)}>delete course</button>
</div>
    </li>
  )
  }
  newItem=(e)=>{
    e.preventDefault()
    this.props.updateCourse(this.props.index,this.input.value)
    this.switch()

  }
  switch=()=>{
    let {edited}=this.state
    this.setState({
      edited:!edited
    })
  }
  updatingCourse=()=>{
    return(
      <form className="form2" onSubmit={this.newItem}>
      <div>
      <input className="inUpdate" type="text"  ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
      <button className="update">Update </button>
      </div>
      </form>
    )
  }


  render(){
let {edited}=this.state
return(


<Fragment>
{ edited? this.updatingCourse():this.renderCourse()}
</Fragment>


)


  }
}
export default Courselist

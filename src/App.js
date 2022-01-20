
import React,{Component} from 'react'
import Courseform from './component/form'
import Courselist from './component/list'




class App extends Component{

state={
  courses:[
    {name:'html'},
    {name:'css'},
    {name:'jquery'},
    {name:'react'}



  ],
  curent:""
}
courseupdate=(e)=>{
  if(e.target.value==""){
    return false
  }else {
    this.setState({
      curent:e.target.value
    })
  }

}
addcourse=(e)=>{
  e.preventDefault()
let curent=this.state.curent
if(curent==""){
  alert('enter valid course')
}
else {
  let courses=this.state.courses
  courses.push({
    name:curent
  })
  this.setState({
    courses,
    curent:''
  })

}


}
deletecourse=(ix)=>{
let courses=this.state.courses
courses.splice(ix,1)
this.setState({
  courses
})

}
updateCourse=(i,val)=>{
let courses=this.state.courses
let course=courses[i]
course['name']=val
this.setState({
  courses
})

}

 render() {
   const {courses}=this.state

   const courselist=courses.map((course,index)=>{


     return  < Courselist  details={course} key={index} index={index} deletecourse={this.deletecourse} updateCourse={this.updateCourse}/>


   })
  return (
    <section className="App">
    <h2>Manage courses</h2>
<Courseform update={this.courseupdate} addcourse={this.addcourse} value={this.state.curent}/>
<ul>{courselist}</ul>
    </section>
  );
}
}

export default App;

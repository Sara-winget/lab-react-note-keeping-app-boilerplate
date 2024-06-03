

import React ,{Component}from "react";
import "./Editor.css"
class Pronote extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
        }
        this.handleChange=this.handleChange.bind(this);
    }
handleChange(e){
    this.setState({value:e.target.value},()=>{console.log(1)});
}
render(){
    return(
        <div className="container">
            <div className="input">
         <h3 id="h3">input text</h3>
         <textarea className="text" onChange={this.handleChange} defaultValue={this.state.value}/>
         </div>
         <div className="output">
         <h3>Pro note</h3>
         <div className="output-Text">{this.state.value}</div>
         </div></div>
    )
}
   
}
export default Pronote;
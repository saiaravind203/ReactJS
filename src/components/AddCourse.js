import React, { Component } from 'react';
import './AddCourse.css'
import './Display.css'

class AddCourse extends Component{
    
    state = {
        name: '',
        duration: '',
        description: ''
    }

    handleChange = (event) => {
        // console.log('Target Element =>', event.target.id)
        this.setState({
            [event.target.id]: event.target.value
        })
    }
   
    handleSubmit = (event) => {
        // console.log('This is handlesubmit =>',this.state)
        let name = this.state.name
        let duration = this.state.duration  
        let description = this.state.description
        // this.props.addCourse(this.state)
        // event.preventDefault();

        if(name && duration && description !== ""){
            // console.log("you entered the values")
            this.props.addCourse(this.state)
            event.preventDefault();
            this.resetInputfield();
            document.getElementById("eroors").style.display = "none";
        }
        else{
            console.log("please enter details",this.state)
            event.preventDefault();
            this.resetInputfield();
            document.getElementById("eroors").style.display = "block";
        }
       
    }
     resetInputfield = () =>{
        // console.log('Target Element before reset =>',this.state)
        this.setState({
            name: '',
            duration: '',
            description: ''
        })
        // console.log('Target Element after reset =>',this.state)
    }


    render(){
        console.log("This inside the render",this.state);
        return(
            <form onSubmit={this.handleSubmit} className='form'>
                <p style={{display:"none"}} id='eroors' > please fill all the Details</p>
                <label>Course Name</label><br />
                <input 
                    type='text' 
                    id='name' 
                    value={this.state.name} 
                    onChange={this.handleChange}
                    required>
                </input> <br />
                <label>Duration</label><br />
                <input 
                    type='text' 
                    id='duration' 
                    value={this.state.duration}   
                    onChange={this.handleChange}
                    required>
                </input> <br />
                <label>Description</label><br />
                <input 
                    type='text' 
                    id ='description' 
                    value={this.state.description}   
                    onChange={this.handleChange}
                    required>
                </input> 
                <br /> <br />
                <input type='submit' value='Add Course'></input>
            </form>
        )
    }
}

export default AddCourse;


// let obj = {
//     name: 'John',
//     age: 14
// }
// obj.name = obj['name']
// obj.age = obj['age']

 // handleName = (e) =>{
    //     console.log(e);
    //     console.log(e.target.value)
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleDuration = (e) =>{
    //     console.log('Duration')
    //     this.setState({
    //         duration: e.target.value
    //     })
    
    // }
    // handleDescription = (e) =>{
    //     console.log('Description')
    //     this.setState({
    //         description: e.target.value
    //     })
    // }
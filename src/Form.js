import React, {Component} from "react";
import "./style.css";

export class Form extends Component {

    state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        count:1,
        array:[]
    };


    onInputChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Worked")
        const temp_obj = {
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
            count:this.state.count
        };


        
        // this.state.array.push(temp_obj); //if line 41 doesn't work uncomment this line

        this.setState({
            clicked:true,
            name:"",
            dept:"",
            rating:"",
            array:[...this.state.array,temp_obj], //added now for trying
            count:this.state.count +1
        });    
    } 
    

    render(){
        return(
            <div id="form-conatiner">
                <form>
                    <label className="form_elements" htmlFor="name">Name :</label>
                    <input className="input_box form_elements" type="text" id="name" value={this.state.value} name="name" onChange={this.onInputChange}/>
                    <br />
                    <label className="form_elements" htmlFor="dept">Department :</label>
                    <input className="input_box form_elements" type="text" name="dept" value={this.state.value} id="dept" onChange={this.onInputChange}/>
                    <br />
                    <label className="form_elements" htmlFor="rate">Rating :</label>
                    <input className="input_box form_elements" type="number" id="rate" value={this.state.value} name="rating" onChange={this.onInputChange}/>
                    <br />
                </form>
                <button id="submit_button" type="submit" onClick={this.onFormSubmit.bind(this)}>Submit</button>
                <div id="data_container">
                    {this.state.array.length>0 && this.state.array.map( (ele) => {
                        return (
                            <div id="inner_container">
                                <h2> {ele.count} : {ele.name} || {ele.dept} || {ele.rating}</h2>
                            </div>
                        );
                    })}
                    </div>
            </div>
        )
    }
}

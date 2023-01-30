//to create and update the data
import React from "react";

class College extends React.Component{
    constructor(props){
        super(props)
        this.state={
            College_Name:"BPTC",
            College_Fee: 15000,
            College_Address:"Bapatla",
            College_Journey:"Train",
            Passedot_Year:2019
        }
    }
    changeJourney = ()=>{
            this.setState({College_Journey:"Bus"})
    };

    render(){
        return(
            <div>
            <h1>My College:{this.state.College_Name}</h1>
            <p>My colege Fee is{this.state.College_Fee},it is in {this.state.College_Address},My Journey in {this.state.College_Journey},Year on{this.state.Passedot_Year}</p>
            <button type="button" onClick={this.changeJourney}>change Journey</button>

            </div>
        );
    }
}

export default College
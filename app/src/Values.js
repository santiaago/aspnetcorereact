import React, {Component} from 'react'
import $ from 'jquery'

class Values extends Component{
    constructor(props){
        super(props)
        this.state = {
            values: []
        }
    }
    getValues(){
        $.ajax({
            url: '/api/values',
            type: "GET",
            success: function(response){
                if(response){
                    this.setState({values: response})
                }
            }.bind(this),
            dataType: 'json'
	    })
    }

    render(){
        return <div>
            <div onClick={() => this.getValues()}>get values</div>
            <div>{this.state.values.map(x => x)}</div>
        </div>

    }
}
export default Values;
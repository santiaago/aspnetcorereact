import React, {Component} from 'react'
import $ from 'jquery'
import './Values.css'

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
            <div className='get-values' onClick={() => this.getValues()}>get values</div>
            <div className='values'>
                {this.state.values.map(x => <div className='value'>{x}</div>)}</div>
        </div>

    }
}
export default Values;
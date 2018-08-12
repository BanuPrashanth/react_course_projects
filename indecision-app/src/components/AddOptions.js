import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };
    
    handleAddOption = (e) => {
        e.preventDefault();
       const option =  e.target.elements.option.value.trim();
       const error = this.props.handleAddOption(option);
       this.setState(() => ({ error }))

       if(!error){
        e.target.elements.option.value='';
       }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <p>{this.state.error}</p>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

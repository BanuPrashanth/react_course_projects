import React from 'react';
import Options from './Options';
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOpion : undefined
    };
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }))
            }
        } catch(e){

        }
        
    };
    componentDidUpdate(preProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
    handleRemoveAll = () => {
        this.setState(() => ({options: []}))
    };
    handleRemove = (optionToBeRemoved) => {
        this.setState((prevState) => ({options: prevState.options.filter(option => optionToBeRemoved !== option)}))
    };
    handlePick = () => {
        let randomNumber = Math.floor(Math.random() * this.state.options.length);
            this.setState((prevState) => ({
                 selectedOpion: prevState.options[randomNumber]
            }));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter a Option to Add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOpion : undefined
        }));
    };
    render(){
        const subtitle = "Put your life in the hands of Computers..!";
        
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                 hasOptions={this.state.options.length > 0 ? true : false}
                 handlePick={this.handlePick}/>
                <Options
                 options={this.state.options}
                 handleRemoveAll={this.handleRemoveAll}
                 handleRemove={this.handleRemove}/>
                <AddOptions 
                    handleAddOption={this.handleAddOption}/>
                <OptionModal 
                    selectedOption={this.state.selectedOpion}
                    handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}

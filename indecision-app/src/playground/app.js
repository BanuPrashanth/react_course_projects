class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            options: []
        };
    }
    handleRemoveAll(){
        this.setState(() => ({options: []}))
    };
    handleRemove(optionToBeRemoved){
        this.setState((prevState) => ({options: prevState.options.filter(option => optionToBeRemoved !== option)}))
    };
    handlePick(){
        this.setState((prevState) => {
            let randomNumber = Math.floor(Math.random() * prevState.options.length);
            return (
                alert(prevState.options[randomNumber])
            );
        })
    };
    handleAddOption(option){
        if(!option){
            return 'Enter a Option to Add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
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
    render(){
        const subtitle = "Put your life in the hands of Computers";
        
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
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
};

Header.defaultProps = {
    title : 'INDECISION APP'
}

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtitle}</h3>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What Should I do?
            </button>
        </div>
    )
};

// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}>
//                     What Should I do?
//                     </button>
//             </div>
//         );
//     }
// }

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOption(e){
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

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get Started!</p>}
            {props.options.map((option) => 
                <Option 
                    key={option} 
                    optionText={option}
                    remove = {props.handleRemove}/>)}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => props.remove(props.optionText)}>remove</button>
        </div>
    );
};

// class Options extends React.Component {
//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
//                 {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
//             </div>
//         );
//     }
// }

// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


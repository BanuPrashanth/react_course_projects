class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }
    handleAddOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState({
            count: 0
        })
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={1000}/>, document.getElementById('app'));

// let count = 0,
//     myid = 'Hehe';

// const addOne = () => {
//     count++;
//     renderApp();
//     console.log("addOne");
// };
// const minusOne = () => {
//     count--;
//     renderApp();
//     console.log("minusOne");
// };
// const reset = () => {
//     count=0;
//     renderApp();
//     console.log("Reset!");
// };

// const renderApp = () => {
//     const templateThree = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={myid} className="button" onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset it!</button>   
//         </div>
//     );
//     ReactDOM.render(templateThree, appRoot);
// };


// const appRoot = document.getElementById('app');
// renderApp();

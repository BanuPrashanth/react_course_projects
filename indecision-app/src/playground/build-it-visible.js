class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.info = this.info.bind(this);
        this.state = {
            visibility: false
        }
    }
    info(){
        this.setState((prevState) =>{
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>VISIBILITY TOGGLE!</h1>
                <button onClick={this.info}>{this.state.visibility? 'Show details' : 'Hide details' }</button>
                {this.state.visibility && <p>Details Which will be Hidden or Shown Depending upon user</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = true;

// const info = () => {
//     visibility = !visibility;
//     renderFull();
// };

// const renderFull = () => {
//     const template = (
//         <div>
//             <h1>VISIBILITY TOGGLE!!</h1>
//             <button onClick={info}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && <p>Details Which will be Hidden or Shown Depending upon user</p>}
//         </div>
//     );
//     ReactDOM.render(template, root);
// }

// const root = document.getElementById('app');

// renderFull();



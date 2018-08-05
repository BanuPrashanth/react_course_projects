console.log("App.js is Running!!!");

//JSX - JAVASCRIPT XML

const app = {
    title: 'Indecison App',
   subtitle: 'Putting my life in the hands of computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        renderFun();
        e.target.elements.option.value ='';
    }
};

const removeAll = () => {
    app.options = [];
    renderFun();
};

const onMakeDecision = () => {
    let randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    alert(app.options[randomNum]);
};

const renderFun = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <button onClick={removeAll}>Remove All..!</button>
        <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I do?</button>
        {app.options && app.options.length >0 ? <div><p>Here are your options</p>
        <ol>
            {
                app.options.map((n) => <li key={n}>{n}</li>)
            }
        </ol> </div>
        : <p>No Options</p>}
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add Option</button>
        </form>
        </div>
        );
        
    ReactDOM.render(template, appRoot);
};



const appRoot = document.getElementById('app');

renderFun();

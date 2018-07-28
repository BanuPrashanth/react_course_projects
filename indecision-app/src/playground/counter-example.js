let count = 0,
    myid = 'Hehe';

const addOne = () => {
    count++;
    renderApp();
    console.log("addOne");
};
const minusOne = () => {
    count--;
    renderApp();
    console.log("minusOne");
};
const reset = () => {
    count=0;
    renderApp();
    console.log("Reset!");
};

const renderApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button id={myid} className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset it!</button>   
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};


const appRoot = document.getElementById('app');
renderApp();

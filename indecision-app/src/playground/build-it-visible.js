let val = true,
    buttonName = "Show details";

const info = () => {
    if(val == true && buttonName== "Show details"){
        val = false;
        buttonName = "Hide details";
    }else {
        val = true;
        buttonName= "Show details";
    }
   renderFull();
}

const renderFull = () => {
    const template = (
        <div>
            <h1>VISIBILITY TOGGLE!</h1>
            <button onClick={info}>{buttonName}</button>
            <p hidden={val}>Details Which will be Hidden or Shown Depending upon user</p>
        </div>
    );
    ReactDOM.render(template, root);
}

const root = document.getElementById('app');

renderFull();


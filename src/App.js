import React, {useState} from 'react';

import './App.css';


function useInput (initialValue = '') {
  const[value, setValue] = useState(initialValue);

  const handleChange = event => {
    setValue(event.target.value);
  };

    return [value, handleChange];
  
}

function App() {

  const [name, handleNameChange] = useInput('');
  const [surname, handleSurnameChange] = useInput('');

  const addEmployee = () => {

    let element = document.getElementById('table');
    
    let nameDiv = document.createElement('div');
    nameDiv.className = "firstColumn";
    nameDiv.innerText = `${name}`;
    element.append(nameDiv);

    let surnameDiv = document.createElement('div');
    surnameDiv.className = "SecondColumn";
    surnameDiv.innerHtml = `${surname}`;
    element.append(surnameDiv)

    let numberOfColumns = document.querySelectorAll('.firstColumn').length
    if(numberOfColumns === 5)
      document.getElementById("addButton").disabled = true

  }

  return (
    <div className="wrapper">
        <div className="header">A</div>
        <div className="middle">
          <div className="cElement">
            <div className="eElement">E</div>
          </div>
          <div id="table" className="gridTable">
            <div className="tableHeader">Pracownicy</div>
            <div className="firstColumn">Jan</div>
            <div className="secondColumn">Kowalski</div>
        </div>
        <div className="addEmployeeForm">
          <div>
          <input name="name" type="text" placeholder="Name" onChange={handleNameChange}>
           
          </input>
          </div>

          <div>
          <input name="surname" type="text" placeholder="Surname" onChange={handleSurnameChange}>
           
           </input>
           <div>
           <input id="addButton" type="button" onClick={addEmployee} value="Add" />
           </div>
          </div>

        </div>
        </div>
       
        <footer className="footer">E</footer>
    </div>
  );
}

export default App;

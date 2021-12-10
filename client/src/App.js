
import './App.css';
import AddNewCustomer from './components/addCustomer';
import ListCustomer from './components/listCustomer';
import React, {Fragment} from "react";



function App() {
  return (
    <Fragment>
      <AddNewCustomer/>
      <ListCustomer/>
    </Fragment>
    );
}

export default App;

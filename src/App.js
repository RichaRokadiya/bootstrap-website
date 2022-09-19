import './App.css';
import { useState } from 'react';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from './components/Table';

function App() {

  const [ company, setCompany ] = useState([]);

  const postData = (e) => {
    e.preventDefault();
    console.log('Prevent Default');
    axios.post('https://demo2211087.mockable.io/mock', {})
    .then(res => {
      console.log(res.data.companies);
      setCompany(res.data.companies);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className="App">
        <button onClick={postData}>DISPLAY TABLE</button>
        <table class="table">
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      {company ? company.map((props) => <Table name = {props.name} email = {props.email} status = {props.status} />) : "loading"}
    </div>
  );
}

export default App;

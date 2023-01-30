import Navbar from './state/Navbar';

import College from './state/College';

import Message from './state/Message';

import Product from './state/Product';

import Messageletfun from './state/Messageletfun';

import Productbind from './state/Productbind';

import Employees from './state/Employee/Employees';

import Login1 from './state/FORM HANDLING/Login1';

import Login2 from './state/FORM HANDLING/Login2';

import Login from './state/FORM HANDLING/Login';

import Registration from './state/FORM HANDLING/Registration';

import User from './state/FORM HANDLING/AxiosEx/User';
import Axios from 'axios';

function App(){
  return(
    <div>
    <Navbar/>
    
    <Message/><hr/>
    <College/><hr/>
    <Product/><hr/>
    <Messageletfun/><hr/>
    <Productbind/><hr/>
    <Employees/><hr/>
    <Login1/><hr/>
    <Login2/><hr/>
    <Login/><hr/>
    <Registration/><hr/>
    <User/><hr/>
    <Axios/>
    
    </div>
  );
}
export default App;


 
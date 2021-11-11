import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/listTodo';
import MyComponent from './Example/MyComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

    const App = () => {
    return (
        <Router>
            <div className="App">
            <header className="App-header">
                <Nav />

                <img src={logo} className="App-logo" alt="logo" />

                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/todo">
                        <ListTodo />
                    </Route>
                    <Route path="/about">
                        <MyComponent />
                    </Route>
                </Switch>

            </header>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            </div>
        </Router>
    );
    }

export default App;

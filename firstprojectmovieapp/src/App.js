import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { MainProvaider } from './context/MainContext';
import { Movie } from "./layout/Movie";
function App() {
    return (
        <Router basename='/React'>
            <React.Fragment>
                <Header />
                <MainProvaider>
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route path="/movie/:id">
                            <Movie />
                        </Route>
                    </Switch>
                </MainProvaider>
                <Footer />
            </React.Fragment>
        </Router>
    );
}

export default App;

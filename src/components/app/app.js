import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './app.css';
import ErrorBoundry from "../error-boundry";
import Header from '../header';
import SwapiService from "../../services/swapi-service";
import RandomPlanet from "../random-planet";
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetsPage, StarshipsPage,} from '../pages';


export default class App extends React.Component {
    swapiService = new SwapiService();

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className='stardb-app'>
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact/>
                                <Route path='/people/:id?' component={PeoplePage}/>
                                <Route path='/planets/:id?' component={PlanetsPage}/>
                                <Route path='/starships/:id?' component={StarshipsPage}/>

                                <Route render={() => <h2>Page not found!</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}


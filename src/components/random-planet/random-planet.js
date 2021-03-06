import React from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import './random-planet.css'
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    swapiService = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false,
        })
    };


    updatePlanet = () => {
        const id = Math.floor(Math.random()*20) + 1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        })
    };

    render() {
        const {planet, error, loading} = this.state;

        const errorMassage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <PlanetView planet={planet}/> : null;
        return (
            <div className='random-planet jumbotron rounded'>
                {errorMassage}
                {spinner}
                {content}
            </div>
        );
    };
};

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
  return (
      <React.Fragment>
          <img className='planet-image'
               src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='item'/>
          <div>
              <h4>{name}</h4>
              <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                      <span className='term'>Population</span>
                      <span>{population}</span>
                  </li>
                  <li className='list-group-item'>
                      <span className='term'>Rotation Period</span>
                      <span>{rotationPeriod}</span>
                  </li>
                  <li className='list-group-item'>
                      <span className='term'>Diameter</span>
                      <span>{diameter}</span>
                  </li>
              </ul>
          </div>
      </React.Fragment>
  )
};
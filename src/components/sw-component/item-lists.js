import React from "react";

import ItemList from "../item-list";
import {withData} from '../hoc-helpers';
import WithSwapiService from "../hoc-helpers/with-swapi-service";

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    }
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    }
};

const PersonList = WithSwapiService(
    withData(
        withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = WithSwapiService(
    withData(
        withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

const StarshipList = WithSwapiService(
    withData(
        withChildFunction(ItemList, renderNameAndModel)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList,
};
import React from "react";
import Row from "../row";
import {withRouter} from 'react-router-dom';
import {
    PlanetList,
    PlanetDetails,
} from '../sw-component';

const PlanetsPage = ({history, match}) => {
    const {id} = match.params;
    return (
        <div>
            <h2>Planets</h2>
            <Row
                left={<PlanetList onItemSelected={(id) => history.push(id)}/>
                }
                right={<PlanetDetails itemId={id}/>
                }
            />
        </div>
    )
};

export default withRouter(PlanetsPage)
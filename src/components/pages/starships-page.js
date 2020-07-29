import React from "react";
import {withRouter} from 'react-router-dom';
import Row from "../row";
import {
    StarshipList,
    StarshipDetails,
} from '../sw-component';

const StarshipsPage = ({history, match}) => {
    const {id} = match.params;
    return (
        <div>
            <h2>Starships</h2>
            <Row
                left={<StarshipList onItemSelected={(id) => history.push(id)}/>}
                right={<StarshipDetails itemId={id}/>}
            />
        </div>
    )
};

export default withRouter(StarshipsPage)
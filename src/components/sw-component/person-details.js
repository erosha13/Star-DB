import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import {WithSwapiService} from '../hoc-helpers';


const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender: '/>
            <Record field='eyeColor' label='Eye Color: '/>
            <Record field='birthYear' label='Birth Year: '/>
            <Record field='height' label='height: '/>
        </ItemDetails>
    )
};
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    }
};

export default WithSwapiService(PersonDetails, mapMethodsToProps)
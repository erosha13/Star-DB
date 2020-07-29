export default class SwapiService {

    getResourse = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    };

    getAllPeople = async () => {
        const res = await this.getResourse('https://swapi.dev/api/people/');
        return res.results.map(this._transformPerson)
    };

    getPerson = async (id) => {
        const person = await this.getResourse(`https://swapi.dev/api/people/${id}/`);
        return this._transformPerson(person)
    };

    getAllPlanets = async () => {
        const res = await this.getResourse('https://swapi.dev/api/planets/');
        return res.results.map(this._transformPlanet)
    };

    getPlanet = async (id) =>  {
        const planet = await this.getResourse(`https://swapi.dev/api/planets/${id}/`);
        return this._transformPlanet(planet)
    };

    getAllStarships = async () => {
        const res = await this.getResourse('https://swapi.dev/api/starships/');
        return res.results.map(this._transformStarship)
    };

    getStarship = async (id) => {
        const starship = await this.getResourse(`https://swapi.dev/api/starships/${id}/`);
        return this._transformStarship(starship)
    };
    _extractId = (item) => {
        const idRegEx = /\/([0-9]*)\/$/;
        return item.url.match(idRegEx)[1];
    };
    getPersonImage = ({id}) => {
      return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    };
    getStarshipImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    };
    getPlanetImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    };
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
        }
    };
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
        }
    };
    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            height: person.height,
        }
    };

}


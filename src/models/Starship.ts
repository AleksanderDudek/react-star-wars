// example data response for Starship
// {
//     name:CR90 corvette,
//     model:CR90 corvette,
//     manufacturer:Corellian Engineering Corporation,
//     cost_in_credits:3500000,
//     length:150,
//     max_atmosphering_speed:950,
//     crew:165,
//     passengers:600,
//     cargo_capacity:3000000,
//     consumables:1 year,
//     hyperdrive_rating:2.0,
//     MGLT:60,
//     starship_class:corvette,
//     pilots:[],
//     films:[
//         https://swapi.co/api/films/6/,
//         https://swapi.co/api/films/3/,
//         https://swapi.co/api/films/1/
//     ],
//     created:2014-12-10T14:20:33.369000Z,
//     edited:2014-12-22T17:35:45.408368Z,
//     url:https://swapi.co/api/starships/2/
// }

export default interface IStarship extends Object {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: Array<string>;
    films: Array<string>;
    created: string;
    edited: string;
    url: string;
}

//type guard
export const isStarship = (tbd: any) => {
    if (tbd.cargo_capacity !== undefined) return true;
    return false;
  };
// example data response for Character
// {
//     "name":"C-3PO",
//     "height":"167",
//     "mass":"75",
//     "hair_color":"n/a",
//     "skin_color":"gold",
//     "eye_color":"yellow",
//     "birth_year":"112BBY",
//     "gender":"n/a",
//     "homeworld":"https://swapi.co/api/planets/1/",
//     "films": [
//         "https://swapi.co/api/films/2/",
//         "https://swapi.co/api/films/5/",
//         "https://swapi.co/api/films/4/",
//         "https://swapi.co/api/films/6/",
//         "https://swapi.co/api/films/3/",
//         "https://swapi.co/api/films/1/"
//     ],
//     "species":[
//         "https://swapi.co/api/species/2/"
//     ],
//     "vehicles":[

//     ],
//     "starships":[

//     ],
//     "created":"2014-12-10T15:10:51.357000Z",
//     "edited":"2014-12-20T21:17:50.309000Z",
//     "url":"https://swapi.co/api/people/2/"
// }

export default interface ICharacter extends Object {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Array<string>;
    species: Array<string>;
    vehicles: Array<string>;
    starships: Array<string>;
    created: string;
    edited: string;
    url: string;
}

 //type guard
 export const isCharacter = (tbd: any) => {
    if (tbd.gender !== undefined) return true;
    return false;
  };
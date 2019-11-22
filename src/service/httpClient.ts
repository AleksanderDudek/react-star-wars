import Starship from '../models/Starship';
import Human from '../models/Human';

const swapiUris = {
    starShips: 'https://swapi.co/api/starships/',
    humans: 'https://swapi.co/api/people/'
};

function getRandomStarship (id: number = 1) {
    return fetch(swapiUris.starShips + id.toString(), {mode: 'no-cors'}).then(response => response.json());
}

function getRandomHuman (id: number = 2) {
    return fetch(swapiUris.humans + id.toString(), {mode: 'no-cors'}).then(response => response.json());

}

// function api<T>(url: string): Promise<T> {
//     return fetch(url,  {mode: 'no-cors'})
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.statusText);
//         }
//         return response.json() as Promise<{ data: T }>;
//       })
//       .then(data => {
//           return data.data;
//       });
// }

// function getRandomStarship (randomNumber: number = 1) {
//     return api<Starship>(swapiUris.starShips + randomNumber.toString());
// }

// function getRandomHuman (randomNumber: number = 2) {
//     return api<Human>(swapiUris.humans + randomNumber.toString());

// }

export { getRandomHuman, getRandomStarship };
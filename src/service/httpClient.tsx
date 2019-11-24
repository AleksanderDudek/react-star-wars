
import { useState, useEffect } from 'react';

const swapiUris = {
    starShips: 'https://swapi.co/api/starships/',
    humans: 'https://swapi.co/api/people/'
};

export function getRandomStarship (id: number = 1) {
    return fetch(swapiUris.starShips + id.toString());
}

export function getRandomHuman (id: number = 2) {
    return useFetch(swapiUris.humans, id.toString());
}

const useFetch = (url: string, randomId: string) => {
    const  [data, setData] = useState(null);

    useEffect(() => {
      fetch(url + randomId).then(response => response.json().then(rData => setData(rData)));
    }, [url, randomId]);

    return data;
  };
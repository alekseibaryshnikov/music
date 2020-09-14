interface SongType {
    id: number;
    band?: string;
    name?: string;
}

const getSongs = () => {
    return new Promise((res: Function, rej: Function) => {
        const random: number = Math.floor(Math.random() * 10);

        if (random === 3) {
            rej("Can't fetch data from server!");
        }

        setTimeout(() => {
            res(
                mock.filter(song => song.id && song.name && song.band)
            );
        }, 1000);
    });
}

const mock: Array<SongType> = [{
    id: 1,
    band: 'Tool',
    name: 'Fear Inoculum',
},
{
    id: 3,
    band: 'Tool',
    name: 'Pneuma',
},
{
    id: 9,
    band: 'Tool',
    name: 'Invincible',
},
{
    id: 2,
    band: 'Tool',
    name: 'Descending',
},
{
    id: 4,
    band: 'Tool',
    name: '7mpest',
}, {
    id: -1
},
{
    id: 0,
    band: 'SomeBand'
}];

export { getSongs };
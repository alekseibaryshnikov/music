const getSongs = () => {    
    return new Promise((res: Function, rej: Function) => {
        const random: number = Math.floor(Math.random() * 10);

        if(random === 3) {
            rej("Can't fetch data from server!");
        }

        setTimeout(() => {
            res(
                [{
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
                }]
            );
        }, 100);
    });
}

export { getSongs };
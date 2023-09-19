//全てのポケモンデータを取得する。
export const getAllPokemon = (url) => { 
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    })
};

//一つ一つの詳細なポケモンデータを取得する。
export const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => { 
                // console.log(data);
                resolve(data);
            });
    })
};
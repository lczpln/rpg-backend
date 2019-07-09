const items = require('./items');

setItem = (itemName) => {
    const itemList = [];

    for (let i = 0; i < itemName.length; i++) {
        const addItem = items.find(item => item.name === itemName[i].name) || null;

        if (!addItem) throw new Error(`Item ${itemName[i].toUpperCase()} não existe.`);

        itemList.push(Object.assign(
            addItem,
            {
                qtdMin: itemName[i].qtdMin ? itemName[i].qtdMin : 1,
                qtdMax: itemName[i].qtdMax ? itemName[i].qtdMax : 1,
                chance: itemName[i].chance ? itemName[i].chance : 40
            }
        ));
    }
    return itemList;
}

const monsters = [
    {
        "name": "rat",
        "hp": 25,
        "hpMax": 25,
        "atk": 10,
        "def": 6,
        "exp": 450,
        "level": 1,
        "items": setItem(itemName = [{ name: "cheese", chance: 60 }, { name: "worm", qtdMax: 3 }]),
        "img": "https://www.tibiawiki.com.br/images/a/af/Rat.gif",
        "imgDead": "https://vignette.wikia.nocookie.net/tibia/images/1/1a/Dead_Rat1.gif/revision/latest?cb=20080311020951&path-prefix=en"
    },
    {
        "name": "frog",
        "hp": 45,
        "hpMax": 45,
        "atk": 17,
        "def": 10,
        "exp": 1100,
        "level": 2,
        "items": setItem(itemName = [{ name: "worm", qtdMax: 5 }]),
        "img": "https://www.tibiawiki.com.br/images/9/90/Green_Frog.gif",
        "imgDead": "https://vignette.wikia.nocookie.net/tibia/images/b/be/Dead_Frog1.gif/revision/latest?cb=20091027120623&path-prefix=en"
    },
    {
        "name": "slime",
        "hp": 80,
        "hpMax": 80,
        "atk": 80,
        "def": 80,
        "exp": 80,
        "level": 3,
        "items": setItem(itemName = [{ name: "worm", qtdMax: 3 }]),
        "img": "https://www.tibiawiki.com.br/images/7/73/Strange_Slime.gif",
        "imgDead": "https://www.tibiawiki.com.br/images/c/cb/Poison_Gas.gif"
    },
    {
        "name": "parasite",
        "hp": 80,
        "hpMax": 80,
        "atk": 80,
        "def": 80,
        "exp": 80,
        "level": 4,
        "items": setItem(itemName = [{ name: "worm", qtdMax: 3 }]),
        "img": "https://www.tibiawiki.com.br/images/e/e6/Centipede.gif",
        "imgDead": "https://vignette.wikia.nocookie.net/tibia/images/4/49/Dead_Centipede1.gif/revision/latest?cb=20090913093416&path-prefix=en"
    },
    {
        "name": "troll",
        "hp": 80,
        "hpMax": 80,
        "atk": 80,
        "def": 80,
        "exp": 80,
        "level": 5,
        "items": setItem(itemName = [{ name: "wooden shield", chance: 70 }, { name: "worm", qtdMax: 7 }]),
        "img": "https://www.tibiawiki.com.br/images/1/11/Troll.gif",
        "imgDead": "https://vignette.wikia.nocookie.net/tibia/images/5/5e/Dead_Troll1.gif/revision/latest?cb=20091022160508&path-prefix=en"
    },
    {
        "name": "dark magician",
        "hp": 80,
        "hpMax": 80,
        "atk": 80,
        "def": 80,
        "exp": 80,
        "level": 6,
        "items": setItem(itemName = [{ name: "cheese", qtdMax: 1 }, { name: "worm", qtdMax: 5 }]),
        "img": "https://www.tibiawiki.com.br/images/f/f7/Dark_Magician.gif",
        "imgDead": "https://vignette.wikia.nocookie.net/tibia/images/4/47/Dead_Human1.gif/revision/latest?cb=20141122152925&path-prefix=en"
    }
]

module.exports = monsters;
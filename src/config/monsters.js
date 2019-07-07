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
    "img": "https://www.tibiawiki.com.br/images/a/af/Rat.gif"
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
    "img": "https://www.tibiawiki.com.br/images/9/90/Green_Frog.gif"
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
    "img": "https://www.tibiawiki.com.br/images/7/73/Strange_Slime.gif"
  },
  {
    "name": "dog",
    "hp": 80,
    "hpMax": 80,
    "atk": 80,
    "def": 80,
    "exp": 80,
    "level": 4,
    "items": setItem(itemName = [{ name: "worm", qtdMax: 3 }]),
    "img": "https://www.tibiawiki.com.br/images/9/99/Dog.gif"
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
    "img": "https://www.tibiawiki.com.br/images/1/11/Troll.gif"
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
    "img": "https://www.tibiawiki.com.br/images/f/f7/Dark_Magician.gif"
  }
]

module.exports = monsters;
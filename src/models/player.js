const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  account: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    default: 50,
  },
  hpMax: {
    type: Number,
    default: 50,
  },
  mp: {
    type: Number,
    default: 0,
  },
  mpMax: {
    type: Number,
    default: 0,
  },
  atk: {
    type: Number,
    default: 10,
  },
  def: {
    type: Number,
    default: 10,
  },
  exp: {
    type: Number,
    default: 0,
  },
  expMax: {
    type: Number,
    default: 750,
  },
  level: {
    type: Number,
    default: 1
  },
  gold: {
    type: Number,
    default: 0
  },
  inventary: {
    type: Array,
    default: []
  },
  gainPerLevel: {
    hp: {
      type: Number,
      required: true,
    },
    mp: {
      type: Number,
      required: true,
    },
    atk: {
      type: Number,
      required: true,
    },
    def: {
      type: Number,
      required: true,
    }
  },
  equiped: {
    handRight: {
      type: Object,
      default: '',
    },
    handLeft: {
      type: Object,
      default: '',
    },
    helmet: {
      type: Object,
      default: '',
    },
    armor: {
      type: Object,
      default: '',
    },
    legs: {
      type: Object,
      default: '',
    },
    boots: {
      type: Object,
      default: '',
    },
    rings: {
      type: Object,
      default: '',
    },
    amulet: {
      type: Object,
      default: '',
    },
  },
  spells: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Player', playerSchema);
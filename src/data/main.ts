const kanjis = [
  {
    kanji: '大',
    meanings: ['Grande'],
    readings: {
      kunyomis: [],
      onyomis: []
    },
    vocabulary: [
      ['大', 'grande']
    ]
  },
  {
    kanji: '水',
    meanings: ['Agua'],
    readings: {
      kunyomis: ['みず'],
      onyomis: ['スイ']
    },
    vocabulary: [
      ['水', 'agua']
    ]
  }
];

class Sensei {
  static getRandomKanji() {
    return kanjis[Math.floor(Math.random()*kanjis.length)];
  }
}

export default Sensei;
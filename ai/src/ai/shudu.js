// result = [
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []],
//   [[], [], [], [], [], [], [], [], []]
// ]

const data = [
  [
    [4, 0, 3],
    [0, 0, 0],
    [0, 0, 9]
  ],
  [
    [0, 0, 0],
    [7, 0, 1],
    [0, 0, 0]
  ],
  [
    [1, 0, 0],
    [0, 3, 0],
    [0, 0, 0]
  ],
  [
    [0, 2, 0],
    [0, 0, 0],
    [0, 0, 4]
  ],
  [
    [4, 0, 0],
    [0, 7, 0],
    [0, 3, 8]
  ],
  [
    [6, 0, 0],
    [0, 1, 8],
    [5, 0, 0]
  ],
  [
    [0, 4, 2],
    [0, 0, 6],
    [0, 0, 0]
  ],
  [
    [6, 0, 0],
    [9, 0, 0],
    [0, 0, 0]
  ],
  [
    [0, 8, 0],
    [3, 0, 0],
    [0, 0, 2]
  ]
]

const LINE = [1,2,3,4,5,6,7,8,9]

function getShuDu(data) {
  const result = Array.from({length: 9}, k => Array.from({length: 9}, n => Array(9).fill(n)))
  initResult(result, data);
  console.log(result)
}

// result[i][j] = data[Math.floor(i / 3) * 3 + Math.floor(j / 3) ][i % 3][j % 3]
// result[i][j] => result[i][j0-j8], result[i0-i8][j]  result[iMath.floor(i / 3) * 3-iMath.floor(i / 3) * 3 + 2][]


function initResult(result, data) {
  for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      result[i][j] = data[Math.floor(i / 3) * 3 + Math.floor(j / 3) ][i % 3][j % 3]
    }
  }
}
getShuDu(data)
// 45


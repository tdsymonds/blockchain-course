const path = require('path');
const fs = require('fs');
const solc = require('solc');

// makes sure path is valid irrelevant of os
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// 1 is the number of contracts to compile
module.exports = solc.compile(source, 1).contracts[':Lottery'];

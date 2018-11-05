const path = require('path');
const fs = require('fs');
const solc = require('solc');

// makes sure path is valid irrelevant of os
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// 1 is the number of contracts to compile
module.exports = solc.compile(source, 1).contracts[':Inbox'];

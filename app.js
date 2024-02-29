// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any projects
// npm install -g <packageName>

// package.json - manifest file (store important info about the project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip )
// npm init -y (everything default)


const _ = require('lodash');  // importing a library called lodash

const items = [1, [2, [3, [4, [5]]]]];    // nested array
const newItems = _.flattenDeep(items);   // flattens the array into one single dimension
console.log(newItems);                    



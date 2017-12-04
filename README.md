Node-english-irregular-verbs
=========================

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-image]][node-url]

## Description

node-english-irregular-verbs Is a very extensive list of english irregular verbs.

## Installation

```bash
npm install node-english-irregular-verbs
```

## Usage

```js
var irregularVerbs = require('node-english-irregular-verbs');

for (let i = 0; i < irregularVerbs.verbs.length; i++) {
    if (irregularVerbs.verbs[i].infinitive == "be") {
        console.log("Yes the verb is infinitive!");
        i = irregularVerbs.verbs.length;
    }
}
```
```
https://cdn.rawgit.com/Franceskynov/node-english-irregular-verbs/master/dist/list.json
```

## Examples 

The examples are located in example folder.
for run these examples:

```bash
npm install
node showVerbs.js
node isInfinitive.js
```

## License

(MIT License)

Copyright 2017,  <franceskynov@yandex.com> and <franceskynov@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[npm-version-image]: https://img.shields.io/npm/v/node-english-irregular-verbs.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/node-english-irregular-verbs.svg
[npm-url]: https://npmjs.org/package/node-english-irregular-verbs
[node-image]: https://img.shields.io/node/v/node-english-irregular-verbs.svg
[node-url]: http://nodejs.org/download/
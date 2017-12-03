/**
 * For run this example run `npm i`
 */

irregularVerbs = require('../list.json');
try {
    require('console.table');
    console.table(['Irregular verbs list'], irregularVerbs.verbs);

} catch (error) {
    console.log('Try run: npm i');
}
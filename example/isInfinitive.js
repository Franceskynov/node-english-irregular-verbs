/**
 * 
 */

irregularVerbs = require('../list.json');

for (let i = 0; i < irregularVerbs.verbs.length; i++) {
    if (irregularVerbs.verbs[i].infinitive == "be") {
        console.log("Yes the verb is infinitive!");
        i = irregularVerbs.verbs.length;
    }
}
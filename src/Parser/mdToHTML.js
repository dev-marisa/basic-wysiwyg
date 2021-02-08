let inList = false;


// TODO - rewrite the rules using regex as keys
const rules = {
    "# ": t => `<h1>${t.substring(2)}</h1>\n`,
    "## ": t => `<h2>${t.substring(3)}</h2>\n`,
    "### ": t => `<h3>${t.substring(4)}</h3>\n`,
    "#### ": t => `<h4>${t.substring(5)}</h4>\n`,
    "##### ": t => `<h5>${t.substring(6)}</h5>\n`,
    "###### ": t => `<h6>${t.substring(7)}</h6>\n`,
    // "* ": makeList,
}


// TODO - rebuild the working code into a linked list
// TODO - build in a history for ctrl+z and ctrl+y

// TODO - identify any lines that are already valid HTML (and parse)


const splitLines = raw => raw.split(/\r\n|\r|\n/);

function mdToHTML(rawCode) {

    let result = "";

    console.log(splitLines(rawCode));

    for(let line of splitLines(rawCode)) {
        let match = false;
        for(let rule in rules) {
            if(line.startsWith(rule)) {
                match = true;
                result += rules[rule](line);
                break;
            }
        }
        if(!match) {
            result += `<p>${line}</p>\n`;
        }
    }

    return result;

}

export default mdToHTML;
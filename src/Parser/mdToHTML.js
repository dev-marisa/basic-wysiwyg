import patterns from './rules';
let inList = false;

// TODO - rebuild the working code into a linked list
// TODO - build in a history for ctrl+z and ctrl+y
// TODO - identify any lines that are already valid HTML (and parse)


const splitLines = raw => raw.split(/\r\n|\r|\n/);

function mdToHTML(rawCode) {

    let result = "";

    console.log(splitLines(rawCode));

    for(let line of splitLines(rawCode)) {
        let match = false;
        for(let pattern of patterns) {
            if(pattern.re.test(line)) {
                match = true;
                result += pattern.fx(line);
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
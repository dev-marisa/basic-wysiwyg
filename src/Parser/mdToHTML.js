import {fullLinePatterns, innerPatterns} from './rules';
let inList = false;

// TODO - rebuild the working code into a linked list
// TODO - build in a history for ctrl+z and ctrl+y
// TODO - identify any lines that are already valid HTML (and parse)


const splitLines = raw => raw.split(/\r\n|\r|\n/);

function mdToHTML(rawCode) {

    let result = "";
    const working = [];

    console.log(splitLines(rawCode));

    for(let line of splitLines(rawCode)) {
        for(let pattern of fullLinePatterns) {
            if(pattern.re.test(line)) {
                // result += pattern.fx(line);
                working.push(pattern.fx(line));
                break;
            }
        }
    }

    // let's identify more patterns inside
    for(let line of working) {
        for(let pattern of innerPatterns) {
            if(pattern.re.test(line)) {
                console.log(pattern.tag, line);
                line = pattern.fx(line);
                // break;
            }
        }
        result += line;
    }

    return result;

}

export default mdToHTML;
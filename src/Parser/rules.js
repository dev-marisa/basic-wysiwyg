// full line patterns
export const fullLinePatterns = [
    {
        tag: "h1",
        re: /(#{1} ).*/, 
        fx: t => "<h1>"+/(?<=(#{1} )).*/.exec(t)[0]+"</h1>"
    },
    {
        tag: "h2",
        re: /(#{2} ).*/, 
        fx: t => "<h2>"+/(?<=(#{2} )).*/.exec(t)[0]+"</h2>"
    },
    {
        tag: "h3",
        re: /(#{3} ).*/, 
        fx: t => "<h3>"+/(?<=(#{3} )).*/.exec(t)[0]+"</h3>"
    },
    {
        tag: "h4",
        re: /(#{4} ).*/, 
        fx: t => "<h4>"+/(?<=(#{4} )).*/.exec(t)[0]+"</h4>"
    },
    {
        tag: "h5",
        re: /(#{5} ).*/, 
        fx: t => "<h5>"+/(?<=(#{5} )).*/.exec(t)[0]+"</h5>"
    },
    {
        tag: "h6",
        re: /(#{6} ).*/, 
        fx: t => "<h6>"+/(?<=(#{6} )).*/.exec(t)[0]+"</h6>"
    },
    {
        tag: "li",
        re: /^(\* ).*$/,
        fx: t => `<li>${t.substring(2)}</li>`
    },
    {
        tag: "tr",
        re: /^\|[^-*]*(.*\|)+\s*$/,
        fx: t => `<tr><td>TODO</td></tr>`
    },
    {
        tag: "p",
        re: /./,
        fx: t => `<p>${t}</p>`
    }
];

// add tags into a string
function addTags(line, toMatch, open, close) {
    let result = "";
    let started = false;
    for(let i=0; i<line.length; i++) {
        if(line.substring(i, i+toMatch.length) === toMatch) {
            if(started) {
                result += close;
            } else {
                result += open;
            }
            started = !started;
            i += toMatch.length-1;
        } else {
            result += line[i];
        }
    }
    if(started) {
        result += close;
    }
    return result;
}

export const innerPatterns = [
    {
        tag: "a",
        re: /\[.*\]\(".*"\)/, 
        fx: t => {
            let text = /\[(.*?)\]/.exec(t)[1];
            let href = /\("(.*?)"\)/.exec(t)[1];
            // this should do a find and replace probably
            return `<a href="${href}">${text}</a>`;
        }
    },
    {
        tag: "strong",
        re: /\*\*.*\*\*/,
        fx: t => addTags(t, "**", "<strong>", "</strong>")
    },
    {
        tag: "strong",
        re: /__.*__/,
        fx: t => addTags(t, "__", "<strong>", "</strong>")
    },
    {
        tag: "em",
        re: /\*.*\*/,
        fx: t => addTags(t, "*", "<em>", "</em>")
    },
    {
        tag: "em",
        re: /_.*_/,
        fx: t => addTags(t, "_", "<em>", "</em>")
    },
    {
        tag: "del",
        re: /~~.*~~/,
        fx: t => addTags(t, "~~", "<del>", "</del>")
    },
    {
        tag: "del",
        re: /~.*~/,
        fx: t => addTags(t, "~", "<del>", "</del>")
    },
]

// TODO - identify lists and deal with them somehow
// TODO - a, strong, em, del should all be allowed inside of other tags...
// TODO - should ins tag (underline) be included? 
// TODO - will have to read back through the doc to find code blocks
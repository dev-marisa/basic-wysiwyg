const patterns = [
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
        tag: "a",
        re: /\[.*\]\(\".*\"\)/, 
        fx: t => {
        let text = /\[(.*?)\]/.exec(t)[1];
        let href = /\("(.*?)"\)/.exec(t)[1];
        return `<a href="${href}">${text}</a>`;
        }
    },
    {
        tag: "strong",
        re: /\*\*.*\*\*/,
        fx: t => "<strong>TODO</strong>"
    },
    {
        tag: "strong",
        re: /__.*__/,
        fx: t => "<strong>TODO</strong>"
    },
    {
        tag: "em",
        re: /\*.*\*/,
        fx: t => "<em>TODO</em>"
    },
    {
        tag: "em",
        re: /_.*_/,
        fx: t => "<em>TODO</em>"
    },
    {
        tag: "del",
        re: /~.*~/,
        fx: t => "<del>TODO</del>"
    },
    {
        tag: "del",
        re: /~~.*~~/,
        fx: t => "<del>TODO</del>"
    },
];

// TODO - identify lists and deal with them somehow
// TODO - a, strong, em, del should all be allowed inside of other tags...
// TODO - should ins tag (underline) be included? 

export default patterns;
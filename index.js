
marked.setOptions({
    breaks: true
});

const renderer = new marked.Renderer();


function App(){
    const defaultHtml = `
# Header

## Sub-heading

[this is a link to Google](www.google.com)

Heres some code, \`<div></div>\`, between 2 backticks.

Here is some block code:
\`\`\`
let x = 1;

const randomFunc = () => {
  x++;
  return x;
}
\`\`\`


You can also make
> Block Quotes


and


**bold** and _italic_ text. Also try ~crossing out **bold** and _italic_ all together~

One can also make a list:
- Bulleted
- Lists


and 


1. Numbered
1. Lists


And images too
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

    const [text , setText] = React.useState(defaultHtml)

    return (
        <div className="text-center px-4">
            <h1 className="p-4">My MarkDown Previewer</h1>
            <textarea 
                name="text" 
                className="textarea"
                id="text" 
                rows="10" 
                value={text}
                onChange = {(e)=>setText(e.target.value)}
                >
                    
            </textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown = {text} />
        </div>
    )
}

function Preview({markdown}) {
    return (
        <div dangerouslySetInnerHTML={{
            __html: marked.parse(markdown, { renderer: renderer })
        }}
        id="preview">
        </div>
    );
}

ReactDOM.render(<App/> ,document.getElementById('root'));


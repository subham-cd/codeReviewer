import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import Editor from "react-simple-code-editor"
import axios from "axios"
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

import "./App.css";

function App() {
  const [code ,setCode] = useState(` function sum(){
      return 1+1;
  }`)

  const [ review ,setReview] = useState(``)
  useEffect(() => {
    Prism.highlightAll();
  },[]);

 async function reviewCode() {
    const response = await axios.post('https://codereviewer-4hep.onrender.com/ai/get-review',{code})
     setReview(response.data)
    
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => Prism.highlight(code ,Prism.languages.javascript,"javascript")}
            padding={10}
            style={{
              fontFamily:'"Fira code","Fira Mono",momospace',
              fontSize:16,
              border:"1px solid #ddd",
              borderRadius:"5px",
              height:"100%",
              width:"100%"
            }}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;

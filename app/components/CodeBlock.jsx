import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";


const CodeBlock = ({ language, value }) => {
  return (

    <SyntaxHighlighter language={language} style={synthwave84}>

      
            {value}
       
      
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
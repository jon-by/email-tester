import React from 'react'
import Editor from 'react-simple-code-editor'
import email from '../api/emailTester'
import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'

hljs.registerLanguage('json', json)

const SendEmail = ({ selectedTemplate }: { selectedTemplate: string }) => {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  )
  function handleClick() {
    email.sendEmail(selectedTemplate, JSON.parse(code))
  }

  return (
    <div>
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => hljs.highlight(code, { language: 'json' }).value}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      <button onClick={handleClick}>Clique</button>
    </div>
  )
}

export default SendEmail

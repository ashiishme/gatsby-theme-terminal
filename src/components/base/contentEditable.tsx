import React from 'react'
const ContentEditable = ({ className }) => {
  return (
    <>
      <div
        id="terminal-input"
        suppressContentEditableWarning
        contentEditable
        className={`w-auto text-sm font-normal ${className}`}
        onInput={(event) => console.log(event)}
      >
        whoami
      </div>
    </>
  )
}
export default ContentEditable

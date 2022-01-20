import React from 'react'
import useEventListener from '../../hooks/useEventListener'

const ContentEditable = ({ className }) => {
  const { elemRef } = useEventListener()

  return (
    <>
      <div
        id="terminal-input"
        suppressContentEditableWarning
        contentEditable
        className={`w-auto text-sm ${className}`}
        ref={elemRef}
      ></div>
    </>
  )
}
export default ContentEditable

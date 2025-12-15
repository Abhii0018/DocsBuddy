import React, { useRef, useState } from 'react'

export default function FileUploader({ onFiles }){
  const inputRef = useRef(null)
  const [isDrag, setIsDrag] = useState(false)

  function handleClick(){
    inputRef.current?.click()
  }

  function handleFiles(e){
    const files = Array.from(e.target.files || [])
    onFiles?.(files)
  }

  function handleDrop(e){
    e.preventDefault()
    setIsDrag(false)
    const files = Array.from(e.dataTransfer.files || [])
    onFiles?.(files)
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Upload reports</label>
      <div
        onClick={handleClick}
        onDragOver={e=>{ e.preventDefault(); setIsDrag(true) }}
        onDragLeave={()=>setIsDrag(false)}
        onDrop={handleDrop}
        className={"cursor-pointer rounded-lg border-2 p-6 flex items-center justify-center text-center transition-all " + (isDrag ? 'border-dashed border-blue-400 bg-blue-50 shadow-md' : 'border-dashed border-gray-200 bg-white hover:shadow-sm')}
      >
        <div>
          <div className="text-2xl">📎</div>
          <div className="mt-2 text-sm text-gray-600">Drag & drop files here, or click to select</div>
          <div className="mt-1 text-xs text-gray-400">You can upload multiple files (PDF, JPG, PNG)</div>
        </div>
      </div>
      <input ref={inputRef} type="file" multiple onChange={handleFiles} className="hidden" />
    </div>
  )
}

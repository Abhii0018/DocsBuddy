import React from 'react'

export default function ImagePreview({src, alt='preview'}){
  if (!src) return null
  return <img src={src} alt={alt} className="max-w-full rounded" />
}

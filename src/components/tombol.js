import React from 'react'

export default function Tombol({ text, ...props }) {
  console.log(props)
  return (
    <button {...props} className="relative bg-gray-500 text-white p-3 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible">
      {text}
    </button>
  )
}

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-grey-20 rounded-2xl p-4 pl-6 text-start text-sm font-semibold text-grey-70 mt-3">
      Copyright © {new Date().getFullYear()} Peterdraw
    </footer>
  )
}

export default Footer
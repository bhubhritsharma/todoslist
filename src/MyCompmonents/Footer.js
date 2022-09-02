import React from 'react'

const Footer = () => {
  let footerStyle ={
    width: "100%",
    padding: "20px 0 5px 0"
  }
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; mytodoslist.com
      </p>
    </footer>
  )
}

export default Footer

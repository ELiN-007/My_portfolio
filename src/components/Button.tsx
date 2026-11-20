import React from 'react'

interface Props {
   children: String;
   color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
   onClick: () => void;
}

const button = ({ children, onClick, color = 'warning' }: Props) => {
  const btnColor = color || "primary";
  return (
    <button className={`btn btn-` + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default button
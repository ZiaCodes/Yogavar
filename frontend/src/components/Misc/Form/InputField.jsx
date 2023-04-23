import React from 'react'

const InputField = ({name,label,placeholder,...rest}) => {
  return (
    <div className="input-container">

        {label}
        <input
        placeholder={placeholder}
        name={name}
        id={name}
        {...rest}
        />
    </div>
  )
}

export default InputField
import React from 'react'

export default function Button({children,...rest}) {
  return (
    <>
      <button className="btn btn-primary mx-1 my-1" {...rest} >{children}</button>
    </>
  )
}

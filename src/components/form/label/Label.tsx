import React from 'react'

type Props = {
    text: string
}

const Label = ({text}: Props) => {
  return (
    <label className="capitalize pb-2 text-lg">{text}</label>
  )
}

export default Label
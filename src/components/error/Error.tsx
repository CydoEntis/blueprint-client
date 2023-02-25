import React from 'react'

type Props = {
    message: string;
}

const Error = ({ message }: Props) => {
  return (
    <p className="my-2 rounded-md border border-red-30 bg-red-10 px-2 py-1 text-center text-red-40">
    {message}
  </p>
  )
}

export default Error
import React from 'react'

type Props = {
    children: React.ReactNode;
  };

const FlexCol = ({children}: Props) => {
  return (
    <div className="flex flex-col">{children}</div>
  )
}

export default FlexCol
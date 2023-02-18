import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ContentWrapper = ({children}: Props) => {
  return (
    <div className="relative lg:p-12">
        {children}
  </div>
  )
}

export default ContentWrapper
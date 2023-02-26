import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ContentWrapper = ({children}: Props) => {
  return (
    <div className="relative lg:px-6 lg:py-2 h-[calc(100vh-108px)]">
        {children}
  </div>
  )
}

export default ContentWrapper
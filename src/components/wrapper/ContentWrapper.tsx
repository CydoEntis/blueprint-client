import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ContentWrapper = ({children}: Props) => {
  return (
    <div className="relative lg:px-4 xl:px-12 xl:py-12">
        {children}
  </div>
  )
}

export default ContentWrapper
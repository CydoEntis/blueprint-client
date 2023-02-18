import React from 'react'

type Props = {
    children: React.ReactNode;
}

const FormButtonWrapper = ({children}: Props) => {
  return (
    <div className="flex h-[70px] w-full items-end gap-2 md:w-1/2">
        {children}
    </div>
  )
}

export default FormButtonWrapper
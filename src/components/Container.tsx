import React from 'react'

interface ContainerProps {
  children: React.ReactNode,
  customClass?: string,
}

export const Container = ({ children, customClass }: ContainerProps) => {
  return (
    <div className={`container px-3 ${customClass}`}>
      {children}
    </div>
  )
}

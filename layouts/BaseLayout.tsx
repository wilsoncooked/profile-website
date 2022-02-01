import React from 'react'
import { Footer, Logo, Navigation } from '../components'

export default function BaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Logo />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

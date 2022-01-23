import React from 'react'
import { Footer, Navigation } from '../components'

export default function BaseLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

import { ReactNode } from 'react'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }) => (
  <div className='font-spartan min-h-screen bg-theme-dark-blue'>
    <Header />

    {children}
  </div>
)

export default Layout

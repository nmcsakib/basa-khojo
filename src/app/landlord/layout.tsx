'use client'
import SideBar from "./Sidebar"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className='flex w-full'>
        <SideBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
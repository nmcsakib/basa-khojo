'use client'
import SideBar from "./Sidebar"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className='flex w-full overflow-y-hidden h-[calc(100vh-56px)]'>
        <SideBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
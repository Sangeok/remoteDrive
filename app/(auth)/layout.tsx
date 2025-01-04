import React from 'react'

const Layout = ({children}: {children : React.ReactNode}) => {
  return (
    <div className="flex min-h-screen">
    <section className="bg-brand p-10 w-1/2 lg:flex items-center justify-center">    
        <div>
            <div className="space-y-5 text-white">
                <h1 className="h1">Manage your files the best way</h1>
                <p className="body-1">This is a place where you can store all your documents</p>
            </div>
            
        </div>
    </section>
    <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        {children}
    </section>
    </div>
  )
}

export default Layout

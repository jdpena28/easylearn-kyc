import Head from "next/head"
import Image from "next/image"
import React from "react"

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Step 1 - Personal Information</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <div className="h-screen bg-gray-100 px-8">
          <nav className="py-3">
            <Image src={"/logo.png"} width={144} height={69} />
          </nav>
          <section className="font-primary px-24">
            {children}
          </section>
      </div>
    </>
  )
}

export default Layout

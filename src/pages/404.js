import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <StaticImage className="p-4" src="../images/not-found-image.svg" alt="Page not found"/>
      </main>
    </Layout>
  )
}

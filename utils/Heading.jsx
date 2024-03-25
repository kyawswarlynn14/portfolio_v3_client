import React from 'react'

const Heading = ({title}) => {
  return (
    <>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Welcome to my portfolio website. Explore my work and experience." />
        <meta name='keywords' content="Web Developer, Software Developer, Web Development, MERN Stack, React Js, Next Js, Node Js, Express Js, Flutter" />
        <meta property="og:image" content="https://github.com/kyawswarlynn14/portfolio/blob/main/public/images/ksl-new.jpg?raw=true" />
        <meta property="og:type" content="website" />
    </>
  )
}

export default Heading
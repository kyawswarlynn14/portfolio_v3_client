import React from 'react'

const Heading = ({title}) => {
  return (
    <>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Welcome to my portfolio website. Explore my work and experience." />
        <meta name='keywords' content="Web Developer, Software Developer, Web Development, MERN Stack, React Js, Next Js, Node Js, Express Js, Flutter" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/se-reactjs.appspot.com/o/portfolio%2Fksl-new.jpg1719305767936?alt=media&token=9e0b92f3-d28b-4677-a087-cdaf230bb195" />
        <meta property="og:type" content="website" />
    </>
  )
}

export default Heading
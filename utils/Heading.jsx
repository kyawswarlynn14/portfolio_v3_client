import React from 'react'

const Heading = ({title}) => {
  return (
    <>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Welcome to my portfolio website. Explore my work and experience." />
        <meta name='keywords' content="Web Developer, Software Developer, Web Development, React Js, Next Js, Node Js, Flutter" />
        <meta property="og:image" content="https://scontent.fmdl4-2.fna.fbcdn.net/v/t1.6435-9/89940419_511555066427184_5823615473123590144_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeH2oolw_kiv15gvKQ0sbBLziwOUoYqYAzKLA5ShipgDMnzOErLSoASro5Uu0c_0OoATOl9k2W3HGLN5nHRkmlib&_nc_ohc=HB17LF8FgKEAX_kC0pK&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfCOgBKkNoj5Xte73IJKwH4BBgKGr6X0c8Hm_1P5svrn7Q&oe=657E8AA6" />
        <meta property="og:type" content="website" />
    </>
  )
}

export default Heading
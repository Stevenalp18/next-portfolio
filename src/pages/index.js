import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import ProjectsCard from '../components/ProjectsCard'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const data = [
    {
        key: 1,
        projectName: "Personal Website Portfolio",
        projectImage: "https://github.com/Stevenalp18/web-dev-images/blob/main/Next-portfolio/Next-Portfolio.jpg?raw=true",
        alt:"Personal Website Portfolio",
        description: "I made this as my personal website with React, Tailwind, NextJs to showcase my other projects. I used local props to make these showcase components.",
        techUsed: "React, Astro, and Tailwind",
        link: "stevenalp.com"
    }, 
    {
        key: 2,
        projectName: "Travel Journey",
        projectImage: "https://github.com/Stevenalp18/web-dev-images/blob/main/Next-portfolio/Travel-journey.jpg?raw=true",
        alt: "Travel Journey",
        description: "A brief summarized description of the nicer places I have been to, the highlights as some may say. I used React, Vite, and Tailwind, it was my first Project with Tailwind CSS.",
        techUsed: "React, Vite, Tailwind",
        link: "https://travel-journey-stevenalp18.netlify.app/"
    }, 
    {
        key: 3,
        projectName: "About Me",
        projectImage: "https://github.com/Stevenalp18/web-dev-images/blob/main/Next-portfolio/About-me-card.jpg?raw=true",
        alt: "About Me Card",
        description: "My first project ever built with React and Vite. I made a brief summary about myself, introducing who I am and what I like. A predecessor to my current portfolio.",
        techUsed: "React, Vite",
        link: "https://about-me-stevenalp18.netlify.app/"
    }
  ]
  const dataMap = data.map(x => {
      return(
        <ProjectsCard
        key={x.key}
        projectName={x.projectName}
        projectImage={x.projectImage}
        alt={x.alt}
        description={x.description}
        techUsed={x.description}
        link={x.link}
        />
      )
    })

  return (
    <>
      <Head>
        <title>Steven Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Shantell+Sans&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <About />
      <Projects 
        projectsCard={dataMap}
      />
      <Contact />
      <Footer />
    </>
  )
}
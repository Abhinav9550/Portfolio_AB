import { useEffect, useState } from 'react'
import projImg1 from '../../assets/images/timerack.jpeg'
import projImg2 from '../../assets/images/Travelxp.jpeg'
import projImg3 from '../../assets/images/Sunwing.jpeg'
import projImg4 from '../../assets/images/Tranquilo.jpeg'
import projImg5 from '../../assets/images/coopervision.jpeg'
import 'animate.css'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [selectedProject, setSelectedProject] = useState('Timerack')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const projects = [
    {
      title: 'Sunwing',
      description: `Provides information about various destinations so that people can choose their destinations wisely.
         They also help users in booking tickets and finding the best itinerary for your trip`,
      imgUrl: projImg3,
    },
    {
      title: 'Coopervision',
      description: `CooperVision is one of the world's leading contact lens companies, serving eye care professionals and lens wearers in over 130 countries.`,
      imgUrl: projImg5,
    },
    {
      title: 'Timerack',
      description: 'Time & Attendance, Payroll Intefrations and HR Services',
      imgUrl: projImg1,
    },
    {
      title: 'TravelXp',
      description: `Provides information about various destinations so that people can choose their destinations wisely.
         They also help users in booking tickets and finding the best itinerary for your trip`,
      imgUrl: projImg2,
    },
    {
      title: 'Tranquilo',
      description: 'Android and IOS application Design & Development',
      imgUrl: projImg4,
    },
  ]

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <ul>
            {projects.map((project, index) => (
              <li
                className="project-list"
                key={index}
                onClick={() => setSelectedProject(project.title)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="project-wrap">
          <ProjectCard {...projects.find((c) => c.title === selectedProject)} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

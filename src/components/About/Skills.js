import { useEffect, useState } from 'react'
import meter1 from '../../assets/images/meter1.svg'
import meter2 from '../../assets/images/meter2.svg'
import meter3 from '../../assets/images/meter3.svg'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import AnimatedLetters from '../AnimatedLetters'

export const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="row">
          <div className="col-12">
            <div>
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    '',
                    '',
                    'M',
                    'y',
                    '',
                    'S',
                    'k',
                    'i',
                    'l',
                    'l',
                    's',
                  ]}
                  idx={15}
                />
              </h1>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter1}
                    alt="Image"
                  />
                  <h2>Dot Net Core Web API</h2>
                </div>
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter2}
                    alt="Image"
                  />
                  <h2>Ethereum Blockchain</h2>
                </div>
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter1}
                    alt="Image"
                  />
                  <h2>React, HTML & CSS</h2>
                </div>
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter3}
                    alt="Image"
                  />
                  <h2>SQL & NoSQL DBs</h2>
                </div>
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter2}
                    alt="Image"
                  />
                  <h2 style={{ paddingLeft: '50px' }}>Azure / AWS</h2>
                </div>
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter2}
                    alt="Image"
                  />
                  <h2 style={{ paddingLeft: '76px' }}>Docker</h2>
                </div>
                <div className="item">
                  <img
                    className="text-animate-hover"
                    src={meter1}
                    alt="Image"
                  />
                  <h2 style={{ paddingLeft: '94px' }}>Git</h2>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

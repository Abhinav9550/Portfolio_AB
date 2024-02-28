import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [isSending, setIsSending] = useState(false)

  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(form.current?.li?.name)
    emailjs.init('KghSIJJqi0H5hU0D_')

    emailjs
      .send('service_f89xm34', 'template_2q9hq9o', {
        to_name: 'Abhinav',
        from_name: name,
        subject: subject,
        message: message + ` from ${email}`,
        from_email: email,
        reply_to: 'abhinavmushthyala@gmail.com',
      })
      .then(
        () => {
          alert('Message successfully sent!')
          setIsSending(false)
          window.location.reload(false)
        },
        () => {
          setIsSending(false)
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Full Stack Developer Roles - especially in large
            projects. However, if you have any other requests or questions,
            don't hesitate to contact me using below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    disabled={isSending}
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          CCC Corner,
          <br />
          Naspur,
          <br />
          Mancherial, Telangana <br />
          Zip : 504302 <br />
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.86167, 79.484205]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.86167, 79.484205]}>
              <Popup>
                Abhinav lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

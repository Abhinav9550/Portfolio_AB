export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <>
      <div className="proj-imgbx">
        <h2>{title}</h2>
        <p
          style={{
            fontSize: '15px',
            letterSpacing: '2px',
            fontFamily: 'sans-serif',
            marginLeft: '4%',
            lineHeight: '20px',
            marginRight: '10%',
            paddingBottom: '5px',
          }}
        >
          {description}
        </p>
        <img
          style={{
            marginLeft: '4%',
            marginBottom: '5%',
            width: '80%',
            borderRadius: '10px',
          }}
          src={imgUrl}
        />
      </div>
    </>
  )
}

import './index.css'

const TeamCard = props => {
  const {name, teamImageUrl} = props
  console.log(name)
  console.log(teamImageUrl)

  return (
    <div className="teamCard-container">
      <img className="image" src={teamImageUrl} alt={`${name}`} />
      <h2 className="heading">{name}</h2>
    </div>
  )
}

export default TeamCard

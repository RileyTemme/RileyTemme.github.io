const Card = ({ title, description, repoUrl }) => {
    return (
        <a className="card" href={repoUrl} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="card__link">View Project &rarr;</span>
        </a>
    )
}

export default Card

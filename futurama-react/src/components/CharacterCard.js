import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character/${props.characters.id}`}>
        <img
          className="card__img"
          src={props.characters.image}
          alt={`Foto de ${props.characters.name}`}
          title={`Foto de ${props.characters.name}`}
        />
        <h4 className="card__title">{props.characters.name}</h4>
        <p className="card__description">{props.characters.job}</p>
      </Link>
    </>
  );
};

export default CharacterCard;

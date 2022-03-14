import { Link } from 'react-router-dom';

const User = (props) => {
  const getGender = () => {
    return props.user.gender === 'female' ? 'Mujer' : 'Hombre';
  };

  return (
    <>
      <Link to={`/user/${props.user.id}`}>
        <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name} `}
        />
        <h4 className="card__title">Nombre: {props.user.name}</h4>
        <p className="card__description">Ciudad: {props.user.city}</p>
        <p className="card__description">Edad: {props.user.age}</p>
        <p className="card__description">Género: {getGender()}</p>
      </Link>
    </>
  );                                                                                                                                                                                                                                                                                                                         
};
export default User;

import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

if (props.character=== undefined){
    return (
    
          <div className="modal__content">
            <header className="modal__header">
              <h2 className="modal__title">Usuario no encontrado <i class="fa-solid fa-circle-xmark"></i></h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <p>Búscate la vida</p>
            </section>
          </div>
  
    );
    
} else {
  return (
    <>
      <div className="modal__container">
        <header className="modal__header">
          <h2 className="modal__title">{props.character.name}</h2>
          <Link className="modal__text" to="/">
            Volver al inicio
            <i className="modal__close icon fas fa-times"></i>
          </Link>
        </header>

        <section className="modal__card">
          <img
            className="card__img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          />
          <ul className="modal__card-text">
            <li></li>
            <li>Ocupación:{props.character.job} </li>
            <li>Especie:{props.character.species} </li>
            <li>Género: {props.character.gender}</li>
            <li>Planeta:{props.character.planet} </li>
          </ul>
        </section>
      </div>
    </>
  );
}
};
export default CharacterDetail;

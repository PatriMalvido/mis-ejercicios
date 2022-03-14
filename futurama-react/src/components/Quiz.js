import { Link } from 'react-router-dom';



const Quiz = () => {
  return (
    <>
      <Link className="modal__text" to="/">
        Volver al inicio
        <i  className="modal__close icon fas fa-times"></i>
      </Link>
     
    </>
  );
};
export default Quiz;

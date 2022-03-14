import { Link } from 'react-router-dom';

const AboutFuturama = () => {
  return (
    <>
      <header className="modal__header">
        <Link className="modal__text" to="/">
          Volver al inicio
          <i className="modal__close icon fas fa-times"></i>
        </Link>
      </header>
      <div className="container__about">
        <section className="modal__about">
          <h3 className="modal__about-title">Historia</h3>
          <p className="modal__about-text">
            Futurama es una serie de televisión animada creada por Matt
            Groening, creador de la popular serie humorística Los Simpson. Fue
            producida por Matt Groening y David X. Cohen para la cadena Fox y
            Comedy Central. La serie sigue las aventuras de un repartidor de
            pizza, Philip Fry, quien el 31 de diciembre de 1999 tropieza
            accidentalmente y cae por casualidad en una cápsula criogénica y
            despierta mil años después. En Estados Unidos la serie comenzó a
            emitirse por Fox desde el 28 de marzo de 1999 hasta su cancelación
            el 10 de agosto de 2003. Posteriormente, fue renovada por Comedy
            Central y se emitió en ese canal desde 2008 hasta 2013, cuando se
            emitió el último episodio, titulado «Meanwhile».
          </p>
          <h3 className="modal__about-title">Ajustes</h3>
          <p className="modal__about-text">
            Futurama se desarrolla durante el siglo XXXI, un siglo lleno de
            maravillas tecnológicas. Con diversos dispositivos y estructuras
            similares a un diseño futurista. El calentamiento de la atmósfera,
            la inflexible burocracia y el abuso de sustancias son algunos de los
            temas dados en el siglo XXXI, en un mundo donde los problemas de la
            Tierra se han convertido en los más comunes y más extremos. En la
            serie se muestran los prejuicios de los humanos contra los mutantes,
            que se han visto obligados a vivir bajo tierra en las alcantarillas.
            El hogar de los personajes principales que habitan en la tierra es
            la ciudad de Nueva Nueva York, construida sobre las ruinas de la
            actual ciudad de Nueva York, denominado la "Vieja Nueva York".
          </p>

          <h3 className="modal__about-title">Cultura y Sociedad</h3>
          <p className="modal__about-text">
          La Tierra se representa como multicultural en la medida en que hay una amplia gama de recursos humanos, para robots, y además los seres extraterrestres en la serie interactúan con los personajes principales. De alguna manera el futuro se presenta como socialmente más avanzado. Los robots constituyen la mayor "minoría" de la serie. A menudo son tratados como ciudadanos de segunda clase, mientras que unos pocos robots ricos son presentados como miembros de la clase alta. La mayoría de robots son auto-conscientes y se han concedido la libertad y la libre voluntad. Sin embargo, en tiempos de crisis, son obligados a servir a los seres humanos. Muchos de los robots viven en apartamentos especialmente construidos para robots, con habitaciones del tamaño de un armario pequeño y armarios del tamaño de un gran departamento.Hasta el capítulo 12 de la sexta temporada, "The Mutants Are Revolting", los seres humanos mutados de alcantarilla que eran relegados en las alcantarillas por la ley son aceptados legalmente en la superficie.
          La religión es todavía parte de la sociedad, a pesar de haber cambiado mucho. Las principales religiones se han fusionado para convertirse en una única. Las figuras religiosas de la serie son el Papa Espacial, el Diablo Robot y el reverendo Preacherbot (aunque Jesús sigue siendo venerado). Aunque muy pocos episodios se centran exclusivamente en los cambios religiosos en el universo de Futurama.
          </p>
          <h3 className="modal__about-title">Críticas</h3>
          <p className="modal__about-text">
          La serie recibió elogios de la crítica. La primera temporada tiene un 89% de aprobación en el sitio agregador de reseñas Rotten Tomatoes, basado en 18 reseñas, una calificación media de 8,75/10. El consenso de la crítica dice: "¡Buenas noticias, todos! Futurama es una mirada inventiva, divertida y a veces conmovedora al mundo del mañana". La 5ª temporada tiene una valoración del 100%, basada en siete críticas, y una puntuación media de 8,67/10. La sexta temporada tiene un índice de aprobación del 100%, basado en 16 críticas, y la puntuación media es de 8,31/10. El consenso de la crítica de la página web afirma: "¡Buenas noticias para todos! Futurama es tan divertida y entrañable como siempre en su sexta temporada". La última temporada recibió una valoración del 92%, y una puntuación media de 8,24/10 basada en 12 críticas.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutFuturama;

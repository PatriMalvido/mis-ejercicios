//FILTRAR Y BUSCAR ARRAYS

/*Ejemplo de un listado de series con las siguientes funcionalidades:
  - al pulsar una serie se des/marca como favorita
  - hay un input de texto ara filtrar por el nombre de la serie
  - hay un filtro de checkbox para mostrar solo las favoritas
*/

import '../styles/App.css';
import { useState } from 'react';

function App() {
  //ESTADOS
  const [series, setSeries] = useState([
    { id: '123', isFavorite: false, name: 'Juego de Tronos' },
    { id: '456', isFavorite: false, name: 'Las chicas Gilmore' },
    { id: '678', isFavorite: false, name: 'Gambita de Dama' },
  ]);
  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  //EVENTOS

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    foundSerie.isFavorite = !foundSerie.isFavorite;
    setSeries([...series]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };

  //FUNCIONES RENDERIZADO

  const renderSeries = () => {
    return (
      series
        //filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        //filtramos por favorito
        .filter((serie) => {
          if (setSearchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        // mapeamos: es la manera para pintar un array en react. Se mete el código en una función y debe retornar una o varias etiquetas de HTML (debe incluir la propiedad key, que es única)
        .map((serie) => {
          return (
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
            </li>
          );
        })
    );
  };

  return (
    <div>
      <h1>Lista de series favoritas:</h1>
      <ul>{renderSeries()}</ul>
      <form>
        <label htmlFor="searchName">Buscar por nombre de serie</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
        <input
          type="checkbox"
          id="searchIsFavorite"
          value={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
}

export default App;

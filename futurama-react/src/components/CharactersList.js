import CharacterCard from './CharacterCard';

const CharactersList = (props) => {
  const charactersElements = props.characters.map((characters, index) => {
    return (
      <li key={index} className="card">
        <CharacterCard characters={characters}/>
      </li>
    );
  });
  return (
    <section className="section__cards">
      <ul className="cards">{charactersElements}</ul>
    </section>
  );
};
export default CharactersList;

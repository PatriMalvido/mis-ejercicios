import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByAge from './FilterByAge';
import FilterByCities from './FilterByCities';

const Filters = (props) => {
  return (
    <section>
      <form className='form'>
        <FilterByName handleFilter={props.handleFilter} />
        {/* <label className="form__label display-block" htmlFor="name">
          Filtar por nombre:
        </label>
        <input className="form__input-text" type="text" name="name" id="name" /> */}

        <FilterByAge handleFilter={props.handleFilter} />
        {/* <label className="form__label display-block" htmlFor="name">
          Filtar por edad:
        </label>
        <input className="form__input-text" type="text" name="age" id="age" /> */}

        <FilterByGender handleFilter={props.handleFilter} />

        {/* <label htmlFor="gender">Género</label>
        <select className="form__input-text" name="gender" id="gender">
          <option value="">Mujer</option>
          <option value="">Hombre</option>
        </select> */}

        <FilterByCities cities={props.cities} handleFilter={props.handleFilter} />
        
        {/* <p>
          <label htmlFor="city">Ciudad</label>
        </p>
        <p>
          <input type="checkbox" name="location" value="all" />
          Todas
        </p>
        <p>
          <input type="checkbox" name="location" value="all" />
          Madrid
        </p>
        <p>
          <input type="checkbox" name="location" value="all" />
          Barcelona
        </p> */}
      </form>
    </section>
  );
};
export default Filters;

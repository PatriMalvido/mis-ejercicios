const FilterByAge = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'age',
    });
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtar por edad:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="age"
        id="age"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByAge;

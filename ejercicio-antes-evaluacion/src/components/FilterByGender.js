const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'gender',
    });
  };

  return (
    <>
      <label className="form__label" htmlFor="gender">Género</label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
};
export default FilterByGender;

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.currentTarget.value,
      key: 'name',
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filtar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;

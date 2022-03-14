const FilterByCities=(props)=>{
    const handleChange = ev => {
        props.handleFilter ({
            value: ev.currentTarget.value,
            key: 'location',
            checked:ev.currentTarget.checked
        });
    };

    const citiesElements = props.cities.map((city,index)=>{
        return (
            
            <label className="display-ckeckbox" key={index}>
                <input className='display-checkbox' type="checkbox" name='location' value={city} onChange={handleChange} />
                {city}
            </label>
                                                                                                
        );
    });
    return (
        <>
        <label className="form__label" htmlFor="cities">
            Ciudad
        </label>
        {citiesElements}
        </>
    );
};
export default FilterByCities;
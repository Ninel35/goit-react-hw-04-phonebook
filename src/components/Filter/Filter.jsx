const Filter = ({handlerFilter}) => {
    return (
        <>
         
            <p>Find contacts by name</p>
            <input onChange={handlerFilter} type="text" name="filter" />
           
        </>
     
    );
};
export default Filter;
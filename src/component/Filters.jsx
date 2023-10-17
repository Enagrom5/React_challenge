function Filters({ addCart, setFilter1, sum }) {
  const changeFilter1 = (e) => setFilter1(e.target.value);

  return (
    <>
      <div className="Filters">
        <input
          className="search"
          onChange={changeFilter1}
          defaultValue={"Filters"}
        />

        <div id="button">
          <button type="button" className="panier">
            <br />
            <h4>{addCart}</h4>
          </button>
        </div>
        <h3>Total price : {sum} euros</h3>
      </div>
    </>
  );
}
export default Filters;

import logo from "../../public/images/logo.png";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        <img src={logo} />
        <h1>Perfect Duck</h1>
        <ul>
          <li>Home</li>
          <li>E-shop</li>
          <li>Cart</li>
          <li>Contacts</li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <h1 className="text-xl font-bold">CarRental</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-6 mt-10">
      <h2 className="text-lg font-bold mb-3">Pages</h2>

      <div className="flex gap-4 flex-wrap">
        <p>Home</p>
        <p>About</p>
        <p>Cars</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        © 2026 Car Rental. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
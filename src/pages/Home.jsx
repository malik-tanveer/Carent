const Home = () => {
  return (
    <div className="p-6">

      {/* Hero */}
      <h1 className="text-4xl font-bold">
        Quick and affordable car rentals
      </h1>
      <p className="mt-2">
        Enjoy flexibility and unbeatable rates with our city car rentals
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div>
          <h2 className="font-bold">Well maintained vehicles</h2>
          <p>Safe and smooth driving experience.</p>
        </div>

        <div>
          <h2 className="font-bold">Easy online booking</h2>
          <p>Fast, simple, and convenient!</p>
        </div>

        <div>
          <h2 className="font-bold">Affordable pricing</h2>
          <p>No hidden fees.</p>
        </div>

        <div>
          <h2 className="font-bold">24/7 support</h2>
          <p>We’re always here to help.</p>
        </div>
      </div>

      {/* Cars */}
      <h2 className="text-2xl font-bold mt-10">Our rental cars</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <div className="border p-4">
          <h3>Compact city cruiser</h3>
          <p>$150/day</p>
        </div>

        <div className="border p-4">
          <h3>Spacious SUV</h3>
          <p>$195/day</p>
        </div>

        <div className="border p-4">
          <h3>Luxury Sedan</h3>
          <p>$210/day</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
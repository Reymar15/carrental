export default function Home() {

  const cars = [
    {
      name: "Range Rover Sport",
      price: "$95/day",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
      name: "BMW M4 Coupe",
      price: "$120/day",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    },
    {
      name: "Ferrari 488",
      price: "$450/day",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
    }
  ];

  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">DRIVE<span>LUX</span></h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>Browse Cars</li>
          <li>My Bookings</li>
          <li>Sign In</li>
          <button className="browse-btn">Browse Cars</button>
        </ul>
      </nav>


      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">

          <h1>Drive Your <span>Dream Car</span></h1>

          <p>
            Premium car rental service with luxury vehicles for every occasion.
          </p>

          <div className="buttons">
            <button className="btn-yellow">Browse Cars</button>
            <button className="btn-dark">My Bookings</button>
          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="card">
          <h3>Fully Insured</h3>
          <p>All vehicles come with comprehensive insurance coverage.</p>
        </div>

        <div className="card">
          <h3>24/7 Support</h3>
          <p>Round-the-clock customer support for your convenience.</p>
        </div>

        <div className="card">
          <h3>Premium Fleet</h3>
          <p>Handpicked luxury and performance vehicles.</p>
        </div>

      </section>


      {/* FEATURED CARS */}
      <section className="cars">

        <h2>Featured Cars</h2>

        <div className="car-container">

          {cars.map((car, index) => (
            <div key={index} className="car-card">

              <img src={car.image} alt={car.name} />

              <h3>{car.name}</h3>

              <p>{car.price}</p>

              <button>View Details</button>

            </div>
          ))}

        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <p>© 2026 DriveLux. All rights reserved.</p>
      </footer>

    </main>
  );
}
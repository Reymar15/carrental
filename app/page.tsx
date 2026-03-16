<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DriveLux</title>
<link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>

<body>

<!-- NAVBAR -->
<nav class="navbar">
    <h2 class="logo">DRIVE<span>LUX</span></h2>

    <ul>
        <li>Home</li>
        <li>Browse Cars</li>
        <li>My Bookings</li>
        <li>Sign In</li>
        <button class="browse-btn">Browse Cars</button>
    </ul>
</nav>

<!-- HERO SECTION -->
<section class="hero">
    <div class="hero-text">
        <h1>Drive Your <span>Dream Car</span></h1>
        <p>Premium car rental service with luxury vehicles for every occasion.</p>

        <div class="buttons">
            <button class="btn-yellow">Browse Cars</button>
            <button class="btn-dark">My Bookings</button>
        </div>
    </div>
</section>

<!-- FEATURES -->
<section class="features">

<div class="card">
<h3>Fully Insured</h3>
<p>All vehicles come with comprehensive insurance coverage.</p>
</div>

<div class="card">
<h3>24/7 Support</h3>
<p>Round-the-clock customer support for your convenience.</p>
</div>

<div class="card">
<h3>Premium Fleet</h3>
<p>Handpicked luxury and performance vehicles.</p>
</div>

</section>

<!-- FEATURED CARS -->
<section class="cars">

<h2>Featured Cars</h2>

<div class="car-container">

{% for car in cars %}
<div class="car-card">

<img src="{{ url_for('static', filename='images/' + car.image) }}">

<h3>{{ car.name }}</h3>

<p>{{ car.price }}</p>

<button>View Details</button>

</div>
{% endfor %}

</div>

</section>

<footer>
<p>© 2026 DriveLux. All rights reserved.</p>
</footer>

</body>
</html>
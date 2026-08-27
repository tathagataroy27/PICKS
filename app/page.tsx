import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PICKS | Burgers & Korean Fusion in Montreal",
  description:
    "PICKS Montreal — fresh burgers made your way, Korean fusion favourites, crispy sides and more. Build your burger with fresh ingredients, free veggies and sauces.",
  keywords: [
    "PICKS Montreal",
    "PICKS burgers Montreal",
    "burger Montreal",
    "custom burger Montreal",
    "build your own burger Montreal",
    "Korean fusion Montreal",
    "Korean burger Montreal",
    "Kogo Montreal",
  ],
};

const fusionItems = [
  {
    title: "Kogos",
    description: "Korean-inspired street food with a PICKS twist.",
    image: "/Kogo.jpeg",
  },
  {
    title: "K-Taco",
    description: "Korean-inspired tacos packed with flavour.",
    image: "/Taco.jpeg",
  },
  {
    title: "Kimchi Burger",
    description: "Our burger with a bold Korean-inspired kick.",
    image: "/Kimchi Burger.PNG",
  },
];

const burgerChoices = [
  { title: "PICKS Burger", image: "/Picks Chicken Burger.jpg" },
  { title: "Double Burger", image: "/Double Burger.png" },
  { title: "Steak Burger", image: "/steak burger.jpg" },
];

const freeVeggies = [
  "Lettuce",
  "Tomato",
  "Pickles",
  "Onions",
  "Coleslaw",
  "Relish",
];

const freeSauces = [
  "Ketchup",
  "Mustard",
  "Mayonnaise",
  "Wasabi Mayo",
  "Chipotle Mayo",
  "Honey Mustard",
  "Spicy Ketchup",
  "Garlic Mayo",
  "Grilled Red Pepper",
  "Dried Tomato, Basil & Aioli",
];

const paidToppings = [
  { name: "Egg", price: "$1.49" },
  { name: "Steak", price: "$4.49" },
  { name: "Bacon", price: "$1.49" },
  { name: "Olives", price: "$0.49" },
  { name: "Kimchi", price: "$1.29" },
  { name: "Sautéed Mushrooms", price: "$0.99" },
  { name: "Caramelised Onions", price: "$0.99" },
  { name: "Deep Fried Onions", price: "$1.29" },
  { name: "Grilled Red Peppers", price: "$1.29" },
  { name: "Cheddar", price: "$0.99" },
  { name: "Mozzarella", price: "$0.99" },
  { name: "Provolone", price: "$0.99" },
  { name: "Swiss", price: "$1.29" },
  { name: "Smoked Gouda", price: "$1.29" },
  { name: "Brie", price: "$1.29" },
];

const cheeseNames = [
  "Cheddar",
  "Mozzarella",
  "Provolone",
  "Swiss",
  "Smoked Gouda",
  "Brie",
];

const menuCategories = [
  {
    title: "Burgers",
    description: "Fresh burgers. Built your way.",
    image: "/Picks Chicken Burger.jpg",
  },
  {
    title: "Korean Fusion",
    description: "Bold Korean-inspired flavours.",
    image: "/Kimchi Burger.PNG",
  },
  {
    title: "Kogos",
    description: "Street food with a PICKS twist.",
    image: "/Kogo.jpeg",
  },
  {
    title: "K-Tacos",
    description: "Korean-inspired tacos.",
    image: "/Taco.jpeg",
  },
  {
    title: "Sides",
    description: "Fries, poutine & more.",
    image: "/Fries.png",
  },
  {
    title: "Chicken",
    description: "Crispy, golden & satisfying.",
    image: "/Chicken Nuggets 2.jpg",
  },
];

const deliveryPlatforms = [
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com/ca",
    logo: "/delivery/uber-eats.png",
    alt: "Uber Eats logo",
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/en-CA/food-delivery/",
    logo: "/delivery/doordash.png",
    alt: "DoorDash logo",
  },
  {
    name: "Skip",
    href: "https://www.skipthedishes.com/",
    logo: "/delivery/skip.png",
    alt: "Skip logo",
  },
  {
    name: "Fantuan",
    href: "https://order.fantuan.ca/delivery/city/montreal/ca",
    logo: "/delivery/fantuan.png",
    alt: "Fantuan logo",
  },
  {
    name: "HungryPanda",
    href: "https://www.hungrypanda.co/",
    logo: "/delivery/HungryPanda.png",
    alt: "HungryPanda logo",
  },
];

const hours = [
  ["Monday", "11:30 a.m. – 9:30 p.m."],
  ["Tuesday", "11:30 a.m. – 9:30 p.m."],
  ["Wednesday", "11:30 a.m. – 7:00 p.m."],
  ["Thursday", "11:30 a.m. – 9:30 p.m."],
  ["Friday", "11:30 a.m. – 11:00 p.m."],
  ["Saturday", "2:00 p.m. – 11:00 p.m."],
  ["Sunday", "3:00 p.m. – 10:00 p.m."],
];

export default function Home() {
  const premiumToppings = paidToppings.filter(
    (item) => !cheeseNames.includes(item.name)
  );

  const cheeseToppings = paidToppings.filter((item) =>
    cheeseNames.includes(item.name)
  );

  return (
    <main>
      {/* =====================================================
          HERO ARTWORK
          Save the approved homepage artwork as:
          public/hero-home.png
      ===================================================== */}
      <section className="hero-home" aria-label="PICKS homepage hero">
        <Image
          src="/hero-home.png"
          alt="PICKS — Your Burger, Your Way"
          width={1536}
          height={1024}
          priority
          className="hero-home-image"
        />

        {/* Clickable zones over the artwork */}
        <Link
          href="#korean-fusion"
          className="hero-hotspot hero-hotspot-korean"
          aria-label="Korean Fusion"
        />
        <Link
          href="#build"
          className="hero-hotspot hero-hotspot-build-nav"
          aria-label="Build Your Burger"
        />
        <Link
          href="/menu"
          className="hero-hotspot hero-hotspot-menu-nav"
          aria-label="Menu"
        />
        <Link
          href="#visit"
          className="hero-hotspot hero-hotspot-visit"
          aria-label="Visit Us"
        />
        <Link
          href="/menu"
          className="hero-hotspot hero-hotspot-order"
          aria-label="Order Now"
        />
        <Link
          href="#build"
          className="hero-hotspot hero-hotspot-build-button"
          aria-label="Build your burger"
        />
        <Link
          href="/menu"
          className="hero-hotspot hero-hotspot-menu-button"
          aria-label="View menu"
        />
      </section>

      {/* =====================================================
          KOREAN FUSION
      ===================================================== */}

      <section className="fusion-section" id="korean-fusion">
        <div className="section-container">
          <div className="fusion-heading">
            <div>
              <p className="eyebrow orange">OUR SIGNATURE TWIST</p>
              <h2>
                KOREAN
                <span>FUSION.</span>
              </h2>
            </div>

            <p className="fusion-intro">
              Korean-inspired flavours meet the PICKS way of doing things.
              <strong>
                Bold flavours. Fun combinations. Worth coming back for.
              </strong>
            </p>
          </div>

          <div className="fusion-grid">
            {fusionItems.map((item) => (
              <article className="fusion-card" key={item.title}>
                <div className="fusion-image">
                  <Image
                    src={item.image}
                    alt={`${item.title} at PICKS Montreal`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="fusion-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BUILD YOUR BURGER
      ===================================================== */}

      <section className="build-section" id="build">
        <div className="section-container">
          <div className="build-heading">
            <p className="eyebrow">THE PICKS WAY</p>

            <h2>
              BUILD IT.
              <span>LOVE IT.</span>
            </h2>

            <p>
              No complicated rules. Pick your burger, choose your favourites
              and make something that&apos;s completely yours.
            </p>
          </div>

          <div className="build-steps">
            <div className="build-step build-step-dark">
              <div className="step-number">01</div>
              <p className="step-label">START WITH</p>
              <h3>YOUR BURGER</h3>

              <div className="mini-burgers">
                {burgerChoices.map((burger) => (
                  <div className="mini-burger" key={burger.title}>
                    <div className="mini-burger-image">
                      <Image
                        src={burger.image}
                        alt={burger.title}
                        fill
                        sizes="120px"
                      />
                    </div>
                    <strong>{burger.title}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="build-step">
              <div className="step-number orange-number">02</div>
              <p className="step-label">THEN ADD</p>
              <h3>FREE VEGGIES</h3>

              <p className="step-description">
                Load it up with the fresh stuff you love.
              </p>

              <div className="ingredient-pills">
                {freeVeggies.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <span className="free-badge">INCLUDED</span>
            </div>

            <div className="build-step">
              <div className="step-number orange-number">03</div>
              <p className="step-label">FINISH WITH</p>
              <h3>YOUR SAUCE</h3>

              <p className="step-description">
                Creamy, spicy, classic — pick your favourite.
              </p>

              <div className="ingredient-pills sauce-pills">
                {freeSauces.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <span className="free-badge">INCLUDED</span>
            </div>
          </div>

          <details className="extras-details">
            <summary>
              <span>
                <small>MAKE IT YOURS</small>
                <strong>See all topping options</strong>
              </span>
              <b>+</b>
            </summary>

            <div className="extras-panel">
              <p>
                A few favourites for when you want to take your burger
                somewhere different.
              </p>

              <div className="topping-group">
                <h4>PREMIUM ADD-ONS</h4>

                <div className="paid-pills">
                  {premiumToppings.map((item) => (
                    <span key={item.name}>
                      <b>{item.name}</b>
                      <em>{item.price}</em>
                    </span>
                  ))}
                </div>
              </div>

              <div className="topping-group cheese-group">
                <h4>CHEESE</h4>

                <div className="paid-pills">
                  {cheeseToppings.map((item) => (
                    <span key={item.name}>
                      <b>{item.name}</b>
                      <em>{item.price}</em>
                    </span>
                  ))}
                </div>
              </div>

              <Link href="/menu#build-options" className="text-link">
                SEE ALL OPTIONS →
              </Link>
            </div>
          </details>
        </div>
      </section>

      {/* =====================================================
          COMBO
          One finished collage artwork.
          Save it as:
          public/combo-home.png
      ===================================================== */}

      <section className="combo-section" id="combos">
        <div className="combo-container">
          <div className="combo-copy">
            <p className="eyebrow orange">FEEL LIKE MAKING IT A MEAL?</p>

            <h2>
              BURGER.
              <span>FRIES. DRINK.</span>
            </h2>

            <p>
              Got your burger? Add crispy fries and a drink and make it a
              proper PICKS meal.
            </p>

            <div className="combo-price">
              <strong>+$4.99</strong>
              <span>FRIES + DRINK</span>
            </div>

            <Link href="/menu#combos" className="button button-yellow">
              MAKE IT A COMBO <span>→</span>
            </Link>
          </div>

          <div className="combo-artwork">
            <Image
              src="/combo-home.png"
              alt="PICKS burger, fries and drink combo"
              fill
              sizes="(max-width: 800px) 100vw, 58vw"
              className="combo-artwork-image"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          OPEN UNTIL LATE PROMO
      ===================================================== */}

      <section className="late-promo-section">
        <div className="late-promo-container">
          <div className="late-promo-image">
            <Image
              src="/OpenTillLate.png"
              alt="PICKS is open until 11 PM on Friday and Saturday"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MENU PREVIEW
      ===================================================== */}

      <section className="menu-section">
        <div className="section-container">
          <div className="menu-heading">
            <div>
              <p className="eyebrow">COME HUNGRY.</p>

              <h2>
                MORE THAN
                <span>BURGERS.</span>
              </h2>
            </div>

            <p>
              Burgers, Korean fusion, crispy chicken, fries, poutine and more.
              Something for every kind of craving.
            </p>
          </div>

          <div className="menu-grid">
            {menuCategories.map((item) => (
              <article className="menu-card" key={item.title}>
                <div className="menu-card-image">
                  <Image
                    src={item.image}
                    alt={`${item.title} at PICKS`}
                    fill
                    sizes="(max-width: 700px) 50vw, 16vw"
                  />
                </div>

                <div className="menu-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="menu-button-wrap">
            <Link href="/menu" className="button button-primary">
              SEE THE FULL MENU <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT
      ===================================================== */}

      <section className="visit-section" id="visit">
        <div className="visit-container">
          <div className="visit-brand">
            <Image
              src="/logo.png"
              alt="PICKS Montreal"
              width={120}
              height={120}
              className="footer-logo"
            />

            <h2>
              COME GRAB
              <span>A PICK.</span>
            </h2>

            <p>Fresh. Custom. Delicious.</p>
          </div>

          <div className="visit-info">
            <div className="info-item">
              <span className="info-icon">📍</span>

              <div>
                <small>FIND US</small>

                <strong>
                  1407 Rue St Marc
                  <br />
                  Montréal, QC H3H 2G4
                </strong>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>

              <div>
                <small>OPENING HOURS</small>

                <div className="hours-list">
                  {hours.map(([day, time]) => (
                    <div key={day}>
                      <span>{day}</span>
                      <strong>{time}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>

              <div>
                <small>CALL FOR PICK-UP</small>

                <a href="tel:+15149371937" className="pickup-phone">
                  514-937-1937
                </a>

                <p className="pickup-note">
                  Call ahead and we&apos;ll have your PICKS ready.
                </p>
              </div>
            </div>

            <div className="delivery-block">
              <small>ORDER DELIVERY</small>
              <p>Find PICKS on your favourite delivery platform.</p>

              <div className="delivery-logo-grid">
                {deliveryPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                    className="delivery-platform-card"
                    aria-label={`Order PICKS on ${platform.name}`}
                  >
                    <div className="delivery-platform-logo">
                      <Image
                        src={platform.logo}
                        alt={platform.alt}
                        fill
                        sizes="110px"
                      />
                    </div>

                    <strong>{platform.name}</strong>
                    <span>ORDER NOW ↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="visit-buttons">
              <a href="tel:+15149371937" className="button button-yellow">
                CALL FOR PICK-UP <span>→</span>
              </a>

              <a
                href="https://www.instagram.com/picks.mtl/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
                aria-label="Follow PICKS on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>

                <span>@picks.mtl</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL MENU PDF
      ===================================================== */}

      <section className="full-menu-pdf-section" id="full-menu">
        <div className="section-container">
          <div className="full-menu-pdf-content">
            <p className="eyebrow orange">WANT TO SEE EVERYTHING?</p>

            <h2>
              THE COMPLETE
              <span>MENU.</span>
            </h2>

            <p>
              View our complete menu with all items, prices and options.
            </p>

            <a
              href="/menu/full-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              VIEW FULL MENU PDF <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

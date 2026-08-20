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
  {
    title: "PICKS Burger",
    image: "/Picks Chicken Burger.jpg",
  },
  {
    title: "Double Burger",
    image: "/Double Burger.png",
  },
  {
    title: "Steak Burger",
    image: "/steak burger.jpg",
  },
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
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/en-CA/food-delivery/",
    logo: "/delivery/doordash.png",
  },
  {
    name: "Skip",
    href: "https://www.skipthedishes.com/",
    logo: "/delivery/skip.png",
  },
  {
    name: "Fantuan",
    href: "https://order.fantuan.ca/delivery/city/montreal/ca",
    logo: "/delivery/fantuan.png",
  },
  {
    name: "HungryPanda",
    href: "https://www.hungrypanda.co/",
    logo: "/delivery/hungrypanda.png",
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
          HEADER
      ===================================================== */}

      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="PICKS home">
            <Image
              src="/logo.png"
              alt="PICKS"
              width={110}
              height={70}
              priority
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="#korean-fusion">Korean Fusion</Link>
            <Link href="#build">Build Your Burger</Link>
            <Link href="/menu">Menu</Link>
            <Link href="#delivery">Delivery</Link>
            <Link href="#visit">Visit Us</Link>
          </nav>

          <Link href="/menu" className="header-button">
            ORDER NOW <span>→</span>
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">FRESH. CUSTOM. DELICIOUS.</p>

            <h1>
              YOUR BURGER.
              <span>YOUR WAY.</span>
            </h1>

            <p className="hero-description">
              Start with a great burger. Pick your toppings, load it with
              fresh veggies, choose your favourite sauce and make it yours.
              <strong>
                Fresh ingredients, bold flavour and made exactly the way you
                like it.
              </strong>
            </p>

            <div className="hero-buttons">
              <Link href="#build" className="button button-primary">
                BUILD YOUR BURGER <span>→</span>
              </Link>

              <Link href="/menu" className="button button-outline">
                VIEW MENU
              </Link>
            </div>

            <div className="hero-highlight">
              <span>✦</span>

              <p>
                Fresh ingredients,
                <strong>made your way.</strong>
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-yellow-shape" />

            <div className="hero-image-wrap">
              <Image
                src="/Burger.JPG"
                alt="Fresh PICKS burger"
                fill
                priority
                sizes="(max-width: 800px) 90vw, 55vw"
                className="hero-image"
              />
            </div>

            <div className="hero-sticker">
              <span>YOU</span>
              <strong>PICK</strong>
              <span>IT.</span>
            </div>

            <div className="hero-doodle">MAKE IT YOURS!</div>
          </div>
        </div>
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
      ===================================================== */}

      <section className="combo-section" id="combos">
        <div className="combo-container">
          <div className="combo-copy">
            <p className="eyebrow orange">
              FEEL LIKE MAKING IT A MEAL?
            </p>

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

            <Link
              href="/menu#combos"
              className="button button-yellow"
            >
              MAKE IT A COMBO <span>→</span>
            </Link>
          </div>

          <div className="combo-visual">
            <div className="combo-circle" />

            <div className="combo-food burger-food">
              <Image
                src="/Picks Chicken Burger.jpg"
                alt="PICKS burger"
                fill
                sizes="260px"
              />
            </div>

            <div className="combo-food fries-food">
              <Image
                src="/Fries.png"
                alt="PICKS fries"
                fill
                sizes="220px"
              />
            </div>

            <div className="combo-food drink-food">
              <Image
                src="/Pop.png"
                alt="Soft drink"
                fill
                sizes="120px"
              />
            </div>

            <span className="combo-word combo-word-one">
              BURGER.
            </span>

            <span className="combo-word combo-word-two">
              FRIES.
            </span>

            <span className="combo-word combo-word-three">
              DRINK.
            </span>
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
            <Link
              href="/menu"
              className="button button-primary"
            >
              SEE THE FULL MENU <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY
      ===================================================== */}

      <section className="delivery-section" id="delivery">
        <div className="delivery-container">
          <div className="delivery-header">
            <p className="delivery-eyebrow">
              ORDER DELIVERY
            </p>

            <h2>
              PICKS.
              <span>DELIVERED.</span>
            </h2>

            <p>
              Craving PICKS but staying home? Find us on your favourite
              delivery platform and get your burger, fries and Korean
              favourites delivered to you.
            </p>
          </div>

          <div className="delivery-platforms">
            {deliveryPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="delivery-platform"
                aria-label={`Order PICKS on ${platform.name}`}
              >
                <div className="delivery-platform-logo">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    loading="lazy"
                  />
                </div>

                <p className="delivery-platform-name">
                  {platform.name}
                </p>

                <span className="delivery-platform-action">
                  ORDER NOW ↗
                </span>
              </a>
            ))}
          </div>

          <div className="delivery-bottom">
            <div className="delivery-pickup">
              <div className="delivery-pickup-icon">
                ☎
              </div>

              <div className="delivery-pickup-copy">
                <small>OR PICK IT UP</small>

                <strong>
                  Call us at 514-937-1937
                </strong>
              </div>
            </div>

            <a
              href="https://www.instagram.com/picks.mtl/"
              target="_blank"
              rel="noopener noreferrer"
              className="delivery-instagram"
              aria-label="Follow PICKS on Instagram"
            >
              <span className="delivery-instagram-icon">
                ◎
              </span>

              <span>@picks.mtl</span>

              <span>↗</span>
            </a>
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

            <p>
              Fresh. Custom. Delicious.
            </p>
          </div>

          <div className="visit-info">
            <div className="info-item">
              <span className="info-icon">
                📍
              </span>

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
              <span className="info-icon">
                🕐
              </span>

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
              <span className="info-icon">
                📞
              </span>

              <div>
                <small>CALL FOR PICK-UP</small>

                <a
                  href="tel:+15149371937"
                  className="pickup-phone"
                >
                  514-937-1937
                </a>

                <p className="pickup-note">
                  Call ahead and we&apos;ll have your PICKS ready.
                </p>
              </div>
            </div>

            <div className="visit-buttons">
              <a
                href="tel:+15149371937"
                className="button button-yellow"
              >
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
    </main>
  );
}

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
  "Mayo",
  "Wasabi Mayo",
  "Chipotle Mayo",
  "Honey Mustard",
  "Spicy Ketchup",
  "Aioli",
];

const paidToppings = [
  "Cheese",
  "Bacon",
  "Egg",
  "Steak",
  "Kimchi",
  "Sautéed Mushrooms",
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

export default function Home() {
  return (
    <main>
      {/* HEADER */}
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
            <Link href="#visit">Visit</Link>
          </nav>

          <Link href="/menu" className="header-button">
            SEE MENU <span>→</span>
          </Link>
        </div>
      </header>

      {/* HERO */}
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
              <strong>Good ingredients. Big flavour. Zero boring.</strong>
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

      {/* KOREAN FUSION */}
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

      {/* BUILD YOUR BURGER */}
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
              and make something that's completely yours.
            </p>
          </div>

          <div className="build-steps">
            {/* STEP 1 */}
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

            {/* STEP 2 */}
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

            {/* STEP 3 */}
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

          {/* PAID TOPPINGS */}
          <details className="extras-details">
            <summary>
              <span>
                <small>WANT TO GO ALL IN?</small>
                <strong>See all topping options</strong>
              </span>

              <b>+</b>
            </summary>

            <div className="extras-panel">
              <p>
                Add something extra when you feel like taking your burger to
                the next level.
              </p>

              <div className="paid-pills">
                {paidToppings.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <Link href="/menu#build-options" className="text-link">
                SEE ALL OPTIONS →
              </Link>
            </div>
          </details>
        </div>
      </section>

      {/* COMBO */}
      <section className="combo-section" id="combos">
        <div className="combo-container">
          <div className="combo-copy">
            <p className="eyebrow orange">FEEL LIKE MAKING IT A MEAL?</p>

            <h2>
              ADD FRIES.
              <span>ADD A DRINK.</span>
            </h2>

            <p>
              Got your burger? Make it a combo and keep the good stuff coming.
            </p>

            <div className="combo-price">
              <strong>+$4.99</strong>
              <span>FRIES + DRINK</span>
            </div>

            <Link href="/menu#combos" className="button button-yellow">
              MAKE IT A COMBO <span>→</span>
            </Link>
          </div>

          <div className="combo-visual">
            <div className="combo-circle" />

            <div className="combo-food burger-food">
              <Image
                src="/Picks Chicken Burger.jpg"
                alt="PICKS burger combo"
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

            <span className="combo-word combo-word-one">BURGER.</span>
            <span className="combo-word combo-word-two">FRIES.</span>
            <span className="combo-word combo-word-three">DRINK.</span>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
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

      {/* VISIT */}
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
                <strong>YOUR PICKS ADDRESS HERE</strong>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>

              <div>
                <small>OPENING HOURS</small>
                <strong>YOUR HOURS HERE</strong>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>

              <div>
                <small>CALL US</small>
                <strong>514.937.1937</strong>
              </div>
            </div>

            <div className="visit-buttons">
              <Link href="/menu" className="button button-yellow">
                VIEW MENU <span>→</span>
              </Link>

              <a
                href="https://www.instagram.com/picks.mtl/"
                target="_blank"
                rel="noreferrer"
                className="instagram-link"
              >
                @picks.mtl ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

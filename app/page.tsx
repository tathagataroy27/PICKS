import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PICKS | Burgers, Korean Fusion & More in Montreal",
  description:
    "Fresh, customizable burgers, Korean fusion street food, Kogos, K-Tacos, chicken, fries and more at PICKS in Montreal. Build your burger your way.",
  keywords: [
    "PICKS Montreal",
    "burger Montreal",
    "custom burgers Montreal",
    "build your own burger Montreal",
    "Korean fusion Montreal",
    "Korean burger Montreal",
    "Kogo Montreal",
    "K-Taco Montreal",
    "fries Montreal",
  ],
  openGraph: {
    title: "PICKS | Fresh. Custom. Delicious.",
    description:
      "Build your burger your way. Discover Korean fusion street food and more at PICKS Montreal.",
    type: "website",
  },
};

const koreanItems = [
  {
    title: "Kogos",
    price: "$6.49",
    description: "Korean-inspired street food with a PICKS twist.",
    image: "/Kogo.jpeg",
  },
  {
    title: "K-Taco",
    price: "$7.99–$8.99",
    description: "Korean fusion tacos with your choice of filling.",
    image: "/Taco.jpeg",
  },
  {
    title: "Kimchi Burger",
    price: "PICKS style",
    description: "A bold burger with Korean-inspired flavour.",
    image: "/Kimchi Burger.PNG",
  },
];

const burgers = [
  {
    title: "PICKS Burger",
    price: "$7.99",
    image: "/Picks Chicken Burger.jpg",
  },
  {
    title: "PICKS Double",
    price: "$10.59",
    image: "/Double Burger.png",
  },
  {
    title: "Steakburger",
    price: "$9.99",
    image: "/steak burger.jpg",
  },
];

const menuItems = [
  {
    title: "Burgers",
    text: "Freshly made your way.",
    image: "/Picks Chicken Burger.jpg",
  },
  {
    title: "Korean Fusion",
    text: "Bold flavours. PICKS style.",
    image: "/Kimchi Burger.PNG",
  },
  {
    title: "Kogos",
    text: "A little different. Very tasty.",
    image: "/Kogo.jpeg",
  },
  {
    title: "K-Tacos",
    text: "Korean-inspired street food.",
    image: "/Taco.jpeg",
  },
  {
    title: "Sides",
    text: "Fries, poutine & more.",
    image: "/Fries.png",
  },
  {
    title: "Chicken",
    text: "Crispy, saucy and satisfying.",
    image: "/Chicken Nuggets 2.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">FRESH. CUSTOM. DELICIOUS.</p>

            <h1>
              BUILD YOUR
              <span>PERFECT BURGER.</span>
            </h1>

            <p className="hero-description">
              Fresh ingredients, bold flavours and plenty of ways to make it
              yours. Build your burger exactly the way you like it.
            </p>

            <div className="hero-buttons">
              <Link href="#build" className="button button-primary">
                BUILD YOUR BURGER <span>→</span>
              </Link>

              <Link href="#menu" className="button button-outline">
                VIEW MENU
              </Link>
            </div>

            <div className="hero-points">
              <span>✓ Fresh ingredients</span>
              <span>✓ Free veggies</span>
              <span>✓ Free sauces</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-yellow-shape" />

            <div className="hero-image-wrap">
              <Image
                src="/Burger.JPG"
                alt="Freshly made PICKS burger with fries"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                className="hero-image"
              />
            </div>

            <div className="hero-sticker">
              <span>FRESH</span>
              <strong>MADE</strong>
              <span>FOR YOU</span>
            </div>

            <div className="hero-doodle">GOOD FOOD.</div>
          </div>
        </div>
      </section>

      {/* =========================
          KOREAN FUSION
      ========================== */}
      <section className="fusion-section" id="korean-fusion">
        <div className="section-container">
          <div className="fusion-heading">
            <div>
              <p className="eyebrow orange">A LITTLE DIFFERENT.</p>

              <h2>
                KOREAN
                <span>FUSION.</span>
              </h2>
            </div>

            <p className="fusion-intro">
              Korean-inspired flavours meet our PICKS-style street food.
              <strong> Bold, fun and seriously tasty.</strong>
            </p>
          </div>

          <div className="fusion-grid">
            {koreanItems.map((item) => (
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
                  <div className="card-title-row">
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                  </div>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          BUILD YOUR BURGER
      ========================== */}
      <section className="build-section" id="build">
        <div className="section-container">
          <div className="build-heading">
            <p className="eyebrow">YOUR BURGER. YOUR RULES.</p>

            <h2>
              YOU PICK.
              <span>YOU BUILD.</span>
            </h2>

            <p>
              Start with your burger. Add your favourite free veggies and
              sauces. Then make it extra if you feel like it.
            </p>
          </div>

          <div className="build-steps">
            {/* STEP 1 */}
            <div className="build-step build-step-dark">
              <div className="step-number">01</div>

              <div>
                <p className="step-label">START WITH</p>
                <h3>YOUR BURGER</h3>
              </div>

              <div className="mini-burgers">
                {burgers.map((burger) => (
                  <div className="mini-burger" key={burger.title}>
                    <div className="mini-burger-image">
                      <Image
                        src={burger.image}
                        alt={burger.title}
                        fill
                        sizes="150px"
                      />
                    </div>

                    <strong>{burger.title}</strong>
                    <span>{burger.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 2 */}
            <div className="build-step">
              <div className="step-number orange-number">02</div>

              <div>
                <p className="step-label">THEN ADD</p>
                <h3>FREE VEGGIES</h3>
              </div>

              <p className="step-description">
                Load it up. Your favourite fresh veggies are included.
              </p>

              <div className="ingredient-pills">
                <span>🥬 Lettuce</span>
                <span>🍅 Tomato</span>
                <span>🥒 Pickles</span>
                <span>🧅 Onions</span>
                <span>Coleslaw</span>
                <span>Relish</span>
              </div>

              <span className="free-badge">FREE</span>
            </div>

            {/* STEP 3 */}
            <div className="build-step">
              <div className="step-number orange-number">03</div>

              <div>
                <p className="step-label">FINISH WITH</p>
                <h3>YOUR SAUCE</h3>
              </div>

              <p className="step-description">
                Pick your favourite sauce. Go classic or try something
                different.
              </p>

              <div className="ingredient-pills sauce-pills">
                <span>Ketchup</span>
                <span>Mustard</span>
                <span>Mayonnaise</span>
                <span>Wasabi Mayo</span>
                <span>Chipotle Mayo</span>
                <span>Honey Mustard</span>
                <span>Spicy Ketchup</span>
                <span>Aioli</span>
              </div>

              <span className="free-badge">FREE</span>
            </div>
          </div>

          {/* EXTRAS — deliberately understated */}
          <div className="extras">
            <div>
              <p className="extras-kicker">FEELING EXTRA?</p>
              <h3>Add a little more to your burger.</h3>
              <p>
                Egg, bacon, steak, kimchi, cheese, sautéed mushrooms and more.
              </p>
            </div>

            <Link href="#menu" className="text-link">
              SEE ALL OPTIONS →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          COMBO
      ========================== */}
      <section className="combo-section">
        <div className="combo-container">
          <div className="combo-copy">
            <p className="eyebrow orange">HUNGRY HUNGRY?</p>

            <h2>
              MAKE IT
              <span>A MEAL.</span>
            </h2>

            <p>
              Add fries + a drink to your burger and turn your PICK into a
              proper meal.
            </p>

            <div className="combo-price">
              <span>ONLY</span>
              <strong>+$4.99</strong>
            </div>

            <Link href="#menu" className="button button-yellow">
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
                sizes="250px"
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

      {/* =========================
          MENU
      ========================== */}
      <section className="menu-section" id="menu">
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
              Burgers, Korean fusion, crispy chicken, loaded sides and more.
              There is always something good to pick.
            </p>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
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
                  <p>{item.text}</p>
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

      {/* =========================
          VISIT US
      ========================== */}
      <section className="visit-section" id="visit">
        <div className="visit-container">
          <div className="visit-brand">
            <Image
              src="/logo.png"
              alt="PICKS Montreal logo"
              width={130}
              height={130}
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
                <strong>Montreal, Quebec</strong>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <small>COME BY</small>
                <strong>Open daily</strong>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <small>CALL FOR PICK-UP</small>
                <strong>514.937.1937</strong>
              </div>
            </div>

            <div className="visit-buttons">
              <Link href="#menu" className="button button-yellow">
                ORDER NOW <span>→</span>
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

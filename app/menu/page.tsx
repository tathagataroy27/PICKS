import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | PICKS Montreal",
  description:
    "Explore the PICKS menu in Montreal — customizable burgers, Korean fusion, Kogos, tacos, chicken, fries, poutine and more.",
};

const burgers = [
  {
    name: "PICKS Burger",
    description: "Our classic PICKS burger.",
    price: "$7.99",
    image: "/Picks Chicken Burger.jpg",
  },
  {
    name: "Double Burger",
    description: "Double the burger. Double the fun.",
    price: "$10.59",
    image: "/Double Burger.png",
  },
  {
    name: "Steak Burger",
    description: "A hearty steak burger.",
    price: "$9.99",
    image: "/steak burger.jpg",
  },
];

const korean = [
  {
    name: "Kogo",
    description: "Korean-inspired street food.",
    image: "/Kogo.jpeg",
  },
  {
    name: "Kimchi Burger",
    description: "A burger with a Korean-inspired kick.",
    image: "/Kimchi Burger.PNG",
  },
  {
    name: "K-Taco",
    description: "Korean-inspired tacos.",
    image: "/Taco.jpeg",
  },
];

const sides = [
  {
    name: "Fries",
    description: "Golden, crispy fries.",
    price: "$3.99",
    image: "/Fries.png",
  },
  {
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries.",
    price: "$5.49",
    image: "/Sweet Potato Fries.png",
  },
  {
    name: "Poutine",
    description: "Classic comfort food.",
    price: "$7.99",
    image: "/Poutine_only.png",
  },
  {
    name: "Onion Rings",
    description: "Crispy golden onion rings.",
    price: "$5.49",
    image: "/OnionRings.png",
  },
];

const chicken = [
  {
    name: "Chicken Nuggets",
    description: "Crispy chicken nuggets.",
    price: "$4.99",
    image: "/Chicken Nuggets 2.jpg",
  },
  {
    name: "Chicken Wings",
    description: "Crispy wings.",
    price: "$9.99",
    image: "/images/Chicken Wings.png",
  },
];

const paidToppings = [
  "Cheese",
  "Bacon",
  "Egg",
  "Steak",
  "Kimchi",
  "Sautéed Mushrooms",
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

function MenuCard({
  item,
}: {
  item: {
    name: string;
    description: string;
    price?: string;
    image?: string;
  };
}) {
  return (
    <article className="full-menu-card">
      {item.image && (
        <div className="full-menu-image">
          <Image
            src={item.image}
            alt={`${item.name} at PICKS Montreal`}
            fill
            sizes="(max-width: 700px) 45vw, 25vw"
          />
        </div>
      )}

      <div className="full-menu-content">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>

        {item.price && <strong>{item.price}</strong>}
      </div>
    </article>
  );
}

export default function MenuPage() {
  return (
    <main className="full-menu-page">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand">
            <Image
              src="/logo.png"
              alt="PICKS"
              width={110}
              height={70}
              priority
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="/#korean-fusion">Korean Fusion</Link>
            <Link href="/#build">Build Your Burger</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#visit">Visit</Link>
          </nav>

          <Link href="/" className="header-button">
            HOME <span>→</span>
          </Link>
        </div>
      </header>

      <section className="menu-hero">
        <div className="section-container">
          <p className="eyebrow orange">COME HUNGRY.</p>

          <h1>
            THE PICKS
            <span>MENU.</span>
          </h1>

          <p>
            Burgers your way. Korean-inspired favourites. Crispy sides.
            Plenty to pick from.
          </p>
        </div>
      </section>

      {/* BURGERS */}
      <section className="full-menu-section">
        <div className="section-container">
          <div className="full-menu-title">
            <p className="eyebrow">THE MAIN EVENT</p>
            <h2>
              BURGERS
              <span>YOUR WAY.</span>
            </h2>
          </div>

          <div className="full-menu-grid">
            {burgers.map((item) => (
              <MenuCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* BUILD OPTIONS */}
      <section className="build-options-section" id="build-options">
        <div className="section-container">
          <div className="build-options-header">
            <p className="eyebrow orange">MAKE IT YOURS</p>

            <h2>
              PICK YOUR
              <span>FAVOURITES.</span>
            </h2>

            <p>
              Every burger starts with your pick. Then make it yours.
            </p>
          </div>

          <div className="option-columns">
            <div className="option-box">
              <span className="option-label">INCLUDED</span>

              <h3>FREE VEGGIES</h3>

              <div className="option-list">
                {freeVeggies.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="option-box">
              <span className="option-label">INCLUDED</span>

              <h3>FREE SAUCES</h3>

              <div className="option-list">
                {freeSauces.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="option-box option-box-yellow">
              <span className="option-label">ADD EXTRA</span>

              <h3>TOPPINGS</h3>

              <div className="option-list">
                {paidToppings.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KOREAN */}
      <section className="full-menu-section korean-menu-section">
        <div className="section-container">
          <div className="full-menu-title">
            <p className="eyebrow orange">OUR SPECIAL TWIST</p>

            <h2>
              KOREAN
              <span>FUSION.</span>
            </h2>
          </div>

          <div className="full-menu-grid">
            {korean.map((item) => (
              <MenuCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* COMBO */}
      <section className="menu-combo-banner" id="combos">
        <div>
          <p className="eyebrow orange">HUNGRY?</p>

          <h2>
            MAKE IT
            <span>A COMBO.</span>
          </h2>

          <p>
            Add fries + a drink to your burger for just <strong>+$4.99</strong>
          </p>
        </div>

        <Image
          src="/Burger.JPG"
          alt="PICKS burger combo"
          width={350}
          height={300}
        />
      </section>

      {/* SIDES */}
      <section className="full-menu-section">
        <div className="section-container">
          <div className="full-menu-title">
            <p className="eyebrow">ON THE SIDE</p>

            <h2>
              SIDES &
              <span>MORE.</span>
            </h2>
          </div>

          <div className="full-menu-grid">
            {sides.map((item) => (
              <MenuCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* CHICKEN */}
      <section className="full-menu-section">
        <div className="section-container">
          <div className="full-menu-title">
            <p className="eyebrow">CRISPY GOODNESS</p>

            <h2>
              CHICKEN
              <span>LOVE.</span>
            </h2>
          </div>

          <div className="full-menu-grid">
            {chicken.map((item) => (
              <MenuCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="menu-bottom-cta">
        <Image
          src="/logo.png"
          alt="PICKS"
          width={110}
          height={110}
        />

        <h2>
          READY TO
          <span>PICK?</span>
        </h2>

        <Link href="/" className="button button-primary">
          BACK HOME <span>→</span>
        </Link>
      </section>
    </main>
  );
}

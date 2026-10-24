
const products = [
  {
    name: "Street Runner",
    category: "SNEAKERS",
    price: 1899,
    color: "LIME",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Urban Classic",
    category: "EVERYDAY",
    price: 1499,
    color: "WHITE",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Night Shift",
    category: "SPORT",
    price: 2199,
    color: "BLACK",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
  },
];

const egp = (price: number) =>
  new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(price);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#151515]">
      <div className="bg-[#c8ff32] px-4 py-2 text-center text-xs font-bold tracking-wide">
        KAHASTORE — YOUR NEXT FAVORITE PAIR STARTS HERE.
      </div>

      <header className="flex items-center justify-between border-b border-black/10 px-5 py-5 md:px-12">
        <a href="#" className="text-2xl font-black tracking-tighter">
          KAHA<span className="text-[#719900]">STORE</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#shop">Shop all</a>
          <a href="#story">Our story</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#shop"
          className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white"
        >
          EXPLORE ↗
        </a>
      </header>

      <section className="grid min-h-[560px] items-center gap-8 px-5 py-12 md:grid-cols-2 md:px-12 md:py-16">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-black tracking-[0.3em] text-[#668a00]">
            BUILT FOR YOUR EVERYDAY
          </p>
          <h1 className="max-w-2xl text-6xl font-black leading-[0.9] tracking-[-0.07em] sm:text-7xl md:text-8xl">
            MOVE
            <br />
            <span className="text-[#729b00]">DIFFERENT.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-black/65">
            Your style. Your pace. Find your next favorite pair at KAHASTORE.
          </p>
          <a
            href="#shop"
            className="mt-8 inline-flex rounded-full bg-[#c8ff32] px-7 py-4 text-sm font-black transition hover:bg-black hover:text-white"
          >
            SHOP THE COLLECTION ↗
          </a>
          <p className="mt-10 text-xs font-bold tracking-widest text-black/45">
            STYLE THAT MOVES WITH YOU · EGYPT
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-2 -top-2 z-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-[#c8ff32] text-center text-xs font-black">
            NEW
            <br />
            DROP
          </div>
          <img
            src={products[0].image}
            alt="Red sneaker from the featured collection"
            className="h-[360px] w-full rounded-[2rem] object-cover sm:h-[480px]"
          />
          <div className="mt-3 flex items-center justify-between text-xs font-bold">
            <span>THE STREET EDIT / 001</span>
            <span>MADE TO STAND OUT.</span>
          </div>
        </div>
      </section>

      <section id="shop" className="bg-white px-5 py-16 md:px-12 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-black tracking-[0.25em] text-[#719900]">
              YOUR ROTATION STARTS HERE
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              THE PICKS<span className="text-[#719900]">.</span>
            </h2>
          </div>
          <span className="text-xs font-bold text-black/50">
            03 FEATURED STYLES
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.name} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-[#f1f1eb]">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-2 text-[10px] font-black">
                  {index === 0 ? "BESTSELLER" : product.color}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-3 pt-4">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-black/45">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-lg font-black">{product.name}</h3>
                </div>
                <p className="pt-4 text-sm font-black">{egp(product.price)}</p>
              </div>
              <a
                href="#contact"
                className="mt-4 flex w-full items-center justify-center rounded-full border border-black/15 px-4 py-3 text-xs font-black transition hover:bg-black hover:text-white"
              >
                ASK ABOUT THIS PAIR ↗
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs leading-6 text-black/50">
          Preview prices and sample products only. Confirm actual availability,
          sizes and prices before accepting customer orders.
        </p>
      </section>

      <section
        id="story"
        className="grid gap-8 bg-[#151515] px-5 py-16 text-white md:grid-cols-2 md:items-center md:px-12 md:py-20"
      >
        <h2 className="text-5xl font-black leading-none tracking-tight sm:text-7xl">
          NOT JUST
          <br />
          A PAIR.
          <br />
          <span className="text-[#c8ff32]">YOUR MOVE.</span>
        </h2>
        <p className="max-w-lg text-base leading-8 text-white/65">
          KAHASTORE brings together everyday essentials and standout styles.
          We are building a collection for people who make every step count.
        </p>
      </section>

      <footer
        id="contact"
        className="flex flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12"
      >
        <a href="#" className="text-xl font-black tracking-tighter">
          KAHASTORE<span className="text-[#719900]">.</span>
        </a>
        <p className="text-xs text-black/55">
          Questions about sizes, stock or delivery? Contact our team.
        </p>
        <span className="text-xs font-bold">MADE FOR EVERY MOVE.</span>
      </footer>
    </main>
  );
}

import Link from "next/link";
import style from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div className={style.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={style.hero}>
            <h1>Diarmore food for NextLevel People</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={style.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={style.section}>
          <h2>How it works</h2>
          <p>
            Diarmore Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Diarmore Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={style.section}>
          <h2>Why Diarmore Food?</h2>
          <p>
            Diarmore Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Diarmore Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

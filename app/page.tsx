import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-40">

  <div className="mx-auto max-w-4xl rounded-2xl bg-white p-16 shadow-sm">

    <div className="mb-6 h-1 w-16 rounded bg-black" />

    <h1 className="text-5xl font-bold tracking-tight">
      Aliate AGORO
    </h1>

    <p className="mt-4 text-lg text-gray-600">
      Alternance 2026 –- Master en Supply Chain Management
    </p>

    

    <p className="mt-8 text-lg leading-relaxed text-gray-700 max-w-3xl">
      Étudiante préparant un Master en Supply Chain Management pour la rentrée de 2026, je recherche une alternance afin de développer mon expertise en pilotage des opérations logistiques. Grâce à une expérience terrain, j’ai acquis des compétences en gestion des flux, optimisation des stocks et analyse de données.
    </p>

    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <a
    href="/projects"
    className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
  >
    Voir mes projets
  </a>

  <a
    href="/skills"
    className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
  >
    Voir mes compétences
  </a>

  <a
    href="/contact"
    className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
  >
    Me contacter
  </a>

  <a
    href="/cvaliate.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
  >
    Télécharger mon CV
  </a>
</div>



  </div>
</section>


    </main>
  );
}
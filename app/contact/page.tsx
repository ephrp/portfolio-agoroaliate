export default function ContactPage() {
  return (
    <main className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-4 text-gray-600">
            Disponible pour échanger sur des opportunités. Réponse rapide par email.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Retour à l’accueil
            </a>
            <a
              href="/projects"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Réalisations
            </a>
            <a
              href="/skills"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Compétences
            </a>
          </div>
        </div>

        {/* Card */}
        <section className="mt-16 rounded-2xl border bg-white p-10 shadow-sm">
          <h2 className="text-xl font-semibold">Me joindre</h2>
          <p className="mt-2 text-gray-600">
            Email, LinkedIn et CV. 
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Email */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a
                href="mailto:aagoroaliate@gmail.com"
                className="mt-2 block font-medium underline"
              >
                aagoroaliate@gmail.com
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Le meilleur moyen pour un premier contact.
              </p>
            </div>

            {/* Téléphone */}
<div className="rounded-xl border p-6">
  <p className="text-sm font-medium text-gray-500">Téléphone</p>
  <a
    href="tel:+330759545483"
    className="mt-2 block font-medium underline"
  >
    +33 07 59 54 54 83
  </a>
  <p className="mt-2 text-sm text-gray-600">
    Appel ou message, selon disponibilité.
  </p>
</div>


            {/* LinkedIn */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/aliate-agoro-426880225/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium underline"
              >
                Voir mon profil
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Parcours, expériences et réseau.
              </p>
            </div>

            {/* CV */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">CV</p>
              <a
                href="/cvaliate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium underline"
              >
                Télécharger mon CV (PDF)
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Version à jour en PDF.
              </p>
            </div>

            
          </div>

          {/* CTA mail */}
          <div className="mt-10">
            <a
              href="mailto:email@exemple.com?subject=Contact%20-%20Portfolio"
              className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Envoyer un email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="px-6 pt-20 pb-12 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Projets</h1>
          <p className="mt-4 text-gray-600">
            Trois projets illustrant ma capacité à concevoir des solutions orientées métier,
            fiabilité et impact.
          </p>

          {/* Nav */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Accueil
            </a>
            <a
              href="/skills"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Compétences
            </a>
            <a
              href="/contact"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          
          {/* Project 1 — AZIZA-PAY */}
          <article className="flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border">
              <Image
                src="/projects/azizapay.jpeg"
                alt="Plateforme AZIZA-PAY"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">AZIZA-PAY</h2>
              <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                Projet phare
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-700">
              Développement d’une plateforme de tiers de confiance (Digital Escrow) pour sécuriser
              les transactions sur des marketplaces, avec cantonnement des fonds jusqu’à résolution
              complète de la vente.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Séquestre transactionnel garantissant la sécurité des paiements</li>
              <li>• Machine à états orchestrant le cycle de vie de la transaction</li>
              <li>• Validation conditionnelle basée sur livraison et conformité</li>
              <li>• Logique métier garantissant l’atomicité des opérations</li>
            </ul>

            <div className="mt-auto" />
          </article>

          {/* Project 2 — OptiFlow */}
          <article className="flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">OptiFlow</h2>
              <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                Projet phare
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-700">
              Automatisation de processus métiers répétitifs afin de réduire le temps passé sur des tâches
              opérationnelles, avec une approche orientée workflows et amélioration continue.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Identification des tâches à forte charge et définition des règles d’automatisation</li>
              <li>• Orchestration de workflows et étapes de validation</li>
              <li>• Intégration de modules d’IA pour accélérer le traitement</li>
              <li>• Objectif : gains de temps mesurables et meilleure efficacité</li>
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              Axes : automatisation · workflows · IA · amélioration continue
            </p>

            <div className="mt-auto" />
          </article>

          {/* Project 3 — Pacman */}
          <article className="flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border">
              <Image
                src="/projects/pacman.jpg"
                alt="Projet Pacman"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">Pacman</h2>
              <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                Projet scolaire
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-700">
              Développement d’un jeu Pacman dans un cadre scolaire, mettant en œuvre des notions
              d’algorithmique, de gestion d’événements et de programmation orientée objets.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Déplacements du joueur et gestion des collisions</li>
              <li>• IA des fantômes (patterns de poursuite et d’évitement)</li>
              <li>• Système de score et états du jeu</li>
              <li>• Architecture modulaire facilitant l’évolution du projet</li>
            </ul>

            {/* Download button */}
            <a
              href="/projects/pacman.zip"
              download
              className="mt-6 inline-block rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Télécharger le projet (.zip)
            </a>

            <div className="mt-auto" />
          </article>
        </div>

        {/* Bottom CTA */}
        <section className="mt-14 rounded-2xl border bg-white p-10 text-center shadow-sm md:mt-20">
          <h3 className="text-xl font-semibold">Envie d’en discuter ?</h3>
          <p className="mt-2 text-gray-600">
            Je peux détailler l’architecture, les choix techniques et la logique métier de ces projets.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Me contacter
            </a>
            <a
              href="/cvaliate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Télécharger le CV
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="px-6 pt-20 pb-12 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Projets</h1>
          <p className="mt-4 text-gray-600">
            Deux projets phares illustrant ma capacité à concevoir des solutions orientées métier,
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
          {/* Project 1 */}
          <article className="flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
            {/* Image */}
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border">
              <Image
                src="/projects/azizapay.jpeg"
                alt="Plateforme AZIZA-PAY"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">AZIZA-PAY</h2>
              <span className="rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium">
                Projet phare
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 leading-relaxed text-gray-700">
              Développement d’une plateforme de tiers de confiance (Digital Escrow) pour sécuriser
              les transactions sur des marketplaces, avec cantonnement des fonds jusqu’à résolution
              complète de la vente.
            </p>

            {/* Key points */}
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Séquestre transactionnel garantissant la sécurité des paiements</li>
              <li>• Machine à états orchestrant le cycle de vie de la transaction</li>
              <li>• Validation conditionnelle basée sur livraison et conformité</li>
              <li>• Logique métier garantissant l’atomicité des opérations</li>
            </ul>

            {/* Spacer pour aligner la hauteur avec l'autre carte */}
            <div className="mt-auto" />
          </article>

          {/* Project 2 */}
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
              <li>• Intégration de modules d’IA (selon les cas d’usage) pour accélérer le traitement</li>
              <li>• Objectif : gains de temps mesurables et meilleure efficacité</li>
            </ul>

            {/* Petit complément pour éviter une carte trop courte (option pro) */}
            <p className="mt-6 text-sm text-gray-500">
              Axes : automatisation · workflows · IA · amélioration continue
            </p>

            {/* Spacer */}
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

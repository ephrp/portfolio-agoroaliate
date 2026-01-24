export default function SkillsPage() {
  return (
    <main className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Compétences</h1>
          <p className="mt-4 text-gray-600">
            Un aperçu clair des outils, méthodes et compétences mobilisées en gestion de projet,
            transformation digitale et pilotage.
          </p>

          <div className="mt-10">
            <a
              href="/projects"
              className="inline-block rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Voir mes projets
            </a>
          </div>
        </div>

        {/* Grille */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Gestion de projet & PMO */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Gestion de projet & PMO</h2>
            <p className="mt-2 text-gray-600">
              Organisation, coordination, suivi des livrables et communication projet.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Planning",
                "Suivi d’avancement",
                "Reporting",
                "KPI",
                "Gestion des risques",
                "Coordination équipes",
              ].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Structuration des tâches et priorisation</li>
              <li>• Animation de points de suivi et compte-rendus</li>
              <li>• Pilotage via indicateurs et tableaux de bord</li>
            </ul>
          </section>

          

          {/* Data & Analyse */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Data & Analyse</h2>
            <p className="mt-2 text-gray-600">
              Analyse, visualisation et suivi de la performance pour appuyer la décision.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Power BI", "Excel (avancé)", "Google Analytics", "Reporting"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Création de tableaux de bord et indicateurs</li>
              <li>• Analyse de tendances et synthèse de résultats</li>
              <li>• Présentation claire pour parties prenantes</li>
            </ul>
          </section>

          {/* Outils de gestion */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Outils projet</h2>
            <p className="mt-2 text-gray-600">
              Outils pour planifier, documenter, collaborer et organiser efficacement.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Notion", "Trello", "MS Project", "Google Workspace", "PowerPoint"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Organisation des tâches et suivi</li>
              <li>• Documentation de projet et livrables</li>
              <li>• Présentations et supports de communication</li>
            </ul>
          </section>

          {/* ERP / SAP */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">ERP / SAP</h2>
            <p className="mt-2 text-gray-600">
              Connaissances fonctionnelles autour des outils ERP et environnements SAP.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "SAP (notions)",
                "Intégration",
                "Processus métiers",
                "Transformation digitale",
              ].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Compréhension des flux et besoins métiers</li>
              <li>• Sensibilisation aux enjeux d’intégration</li>
              <li>• Approche orientée amélioration des processus</li>
            </ul>
          </section>

          
        </div>

        {/* Footer nav */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <a href="/" className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100">
            Retour à l’accueil
          </a>

          <a
            href="/projects"
            className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
          >
            Projets
          </a>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link'

interface SectionPageProps {
  title: string
  description: string
  icon: string
}

export default function SectionPage({ title, description, icon }: SectionPageProps) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8 text-sm font-medium">
          ← Voltar ao Dashboard
        </Link>
        <header className="mb-8">
          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-3xl font-bold text-amber-900 mb-2">{title}</h1>
          <p className="text-amber-700">{description}</p>
          <div className="mt-4 h-1 w-16 bg-amber-600 rounded" />
        </header>
        <div className="bg-white rounded-xl border border-amber-200 p-8 shadow-sm text-center text-gray-500">
          <p>Conteúdo em desenvolvimento...</p>
        </div>
      </div>
    </main>
  )
}

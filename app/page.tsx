import Link from 'next/link'

const sections = [
  {
    href: '/biblia',
    label: 'Bíblia Sagrada',
    description: 'Leitura e meditação dos textos bíblicos',
    icon: '📖',
    color: 'bg-blue-100 hover:bg-blue-200 border-blue-300',
  },
  {
    href: '/catecismo',
    label: 'Catecismo',
    description: 'Catecismo da Igreja Católica',
    icon: '✝️',
    color: 'bg-red-100 hover:bg-red-200 border-red-300',
  },
  {
    href: '/oracao',
    label: 'Orações',
    description: 'Orações diárias e devocionais',
    icon: '🙏',
    color: 'bg-purple-100 hover:bg-purple-200 border-purple-300',
  },
  {
    href: '/santos',
    label: 'Santos',
    description: 'Vidas dos santos e seus ensinamentos',
    icon: '⭐',
    color: 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300',
  },
  {
    href: '/liturgia',
    label: 'Liturgia',
    description: 'Calendário litúrgico e missas',
    icon: '⛪',
    color: 'bg-green-100 hover:bg-green-200 border-green-300',
  },
  {
    href: '/doutrina',
    label: 'Doutrina',
    description: 'Ensinamentos e documentos da Igreja',
    icon: '📜',
    color: 'bg-orange-100 hover:bg-orange-200 border-orange-300',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Paternoster</h1>
          <p className="text-amber-700 text-lg">Dashboard de Estudo Católico</p>
          <div className="mt-4 h-1 w-24 bg-amber-600 mx-auto rounded" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`block p-6 rounded-xl border-2 transition-all duration-200 ${section.color} shadow-sm hover:shadow-md`}
            >
              <div className="text-4xl mb-3">{section.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{section.label}</h2>
              <p className="text-gray-600 text-sm">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

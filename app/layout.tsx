import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paternoster - Estudo Católico',
  description: 'Dashboard de estudo católico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-amber-50">{children}</body>
    </html>
  )
}

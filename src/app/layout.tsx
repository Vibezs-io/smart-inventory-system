import './globals.css'

export const metadata = {
  title: 'Smart Inventory System',
  description: 'Smart Inventory System - AI-powered enterprise platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}
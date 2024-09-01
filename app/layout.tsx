import '../styles/globals.css'

export const metadata = {
  title: 'Secure Next.js Playground',
  description: 'Example of best practices for secure Next.js apps',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 dark:bg-slate-950 dark:text-slate-50 text-slate-950 flex flex-col min-h-screen items-center pt-24">
        {children}
      </body>
    </html>
  )
}

import { type ReactNode } from 'react'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function ExamplesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex space-x-10 items-center justify-center">
        <Link
          href="/"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ChevronLeft className="w-6 h-6" />
          <span className="text-lg font-semibold tracking-tight">Go back</span>
        </Link>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

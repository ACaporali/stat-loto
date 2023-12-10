/**
 * Composant du pied de page de l'application global
 */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className='bg-emerald-950 text-slate-200 px-20 py-8 grid grid-cols-2 gap-x-4'>
      <div className=''>
        <p>{date}</p>
      </div>
      <div className=''>
        <p>Grenoble</p>
      </div>
    </div>
  )
}

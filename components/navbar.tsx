'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { 
      name: "Home init", 
      path: "/" 
    },
    {
      name: "Accueil",
      path: "/accueil",
    },
    {
      name: "Bon à savoir",
      path: "/bon-a-savoir",
    },
  ];
  
  return (
    <div>
      <nav className='bg-emerald-300 text-white px-8 py-8'>     
          {navLinks.map((link, index) => {
            return (    
              <Link key={index} className={`px-4 py-3 font-medium hover:underline  underline-offset-8 hover:text-slate-900 ${pathname === link.path ? 'underline  underline-offset-8' : ''}`} href={link.path}>
                {link.name}
              </Link>
            );
          })}
      </nav>
    </div>
  )
}

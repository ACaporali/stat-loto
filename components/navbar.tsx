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
      name: "Test",
      path: "/test",
    },
  ];
  
  const callAPI = async () => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/1`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
  return (
    <div>
    <button onClick={callAPI}>Make API Call</button>
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

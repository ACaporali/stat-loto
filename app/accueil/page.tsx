import Image from 'next/image'
import type { Metadata } from 'next'
import LotoResult from '../components/lotoResult'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Page d\'accuel de l\'application',
}


export default function Accueil() {
  
  return (
    <div className='container mx-auto'>
      <p>Bonjour</p>
       
       <LotoResult />
    
    </div>
    		
  );
}


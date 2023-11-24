import Image from 'next/image'
import { use, useEffect } from "react";
import type { Metadata } from 'next'
import ShowLotoDraw from '../../components/showLotoDraw'
import getUserRepos from '../services/loto.service'

export const dynamic = 'force-dynamic'

export default function Accueil() {

  return (
    <div className='container mx-auto py-20'>
      <h1 className='text-xl'>Derniers resultats du loto</h1>    
        <ShowLotoDraw  />
    </div>
    		
  );
}


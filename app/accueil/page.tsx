import Image from 'next/image'
import { use, useEffect } from "react"
import type { Metadata } from 'next'
import Link from 'next/link'
import ShowLotoDraw from '../../components/showLotoDraw'
import getUserRepos from '../services/loto.service'

export const dynamic = 'force-dynamic'

export default function Accueil() {

  return (
    <div>
      <div className='container mx-auto py-10 text-center'>
        <h1 className='text-xl'>Statistiques relatives aux tirages du Loto Français</h1>
        <p>Application développée avec <Link href="https://nextjs.org/" target="_blank">Next.js 13</Link> et s'appuie sur les données fournies par une API de <Link href="https://data.opendatasoft.com/explore/dataset/resultats-loto-2019-a-aujourd-hui@agrall/" target="_blank">Opendatasoft</Link>.</p>
        <p>/!\ Le développement de cette application a pour objectif de m'auto-former sur le framework Next, aucun but commercial./!\</p>
      </div>
      <div className='container mx-auto py-10'>
        <h1 className='text-xl'>Derniers resultats du loto</h1>    
        <ShowLotoDraw  />
      </div>
    </div>
  );
}


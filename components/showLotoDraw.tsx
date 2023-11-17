'use client'

import Link from 'next/link';
import use from "react";
import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import {getAPILastDraws, getUserRepos, test} from '../services/loto.service';

export default function ShowLotoDraw() {
  const date = new Date().getFullYear()
  
  const listDraw = getAPILastDraws(3)
 

  if (listDraw.isError) return <p>Erreur lors de la recupération des résultats :s </p>;
  if (!listDraw.data) return <p>Chargement des résultats ...</p>;
  
  return (
    <div className=''>
      <ul>
        {listDraw.data.results.map(draw => (
          <li key={draw.annee_numero_de_tirage}>{draw.date_de_tirage}</li>
        ))}
      </ul>
    </div>
  )
}

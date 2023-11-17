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
    <div className='py-2'>
      <table className='table-draw w-full border-collapse rounded-md'>
        <thead>
          <tr className='bg-slate-300 text-left'>
            <th className='py-2'>Date</th>
            <th className='py-2'>Boule 1</th>
            <th className='py-2'>Boule 2</th>
            <th className='py-2'>Boule 3</th>
            <th className='py-2'>Boule 4</th>
            <th className='py-2'>Boule 5</th>
            <th className='py-2'>Numéro chance</th>
          </tr>
        </thead>
        <tbody>
          {listDraw.data.results.map(draw => (
            <tr key={draw.annee_numero_de_tirage} className='border-slate-300'>
              <td className='py-3'>{draw.date_de_tirage}</td>
              <td className='py-3'>{draw.boule_1}</td>
              <td className='py-3'>{draw.boule_2}</td>
              <td className='py-3'>{draw.boule_3}</td>
              <td className='py-3'>{draw.boule_4}</td>
              <td className='py-3'>{draw.boule_5}</td>
              <td className='py-3'>{draw.numero_chance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

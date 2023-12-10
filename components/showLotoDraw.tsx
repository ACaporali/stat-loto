'use client'

import Link from 'next/link';
import use from "react";
import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import { getAPILastDraws } from '../services/loto.service';

export default function ShowLotoDraw() {  
  const listDraw = getAPILastDraws(4)
  
  if (listDraw.isError) return <p>Erreur lors de la recupération des résultats :s </p>;
  if (!listDraw.data) return <p>Chargement des résultats ...</p>;
  
  return (
    <div className='py-2'>
      <table className='table-draw w-full border-collapse rounded-md'>
        <thead>
          <tr className='bg-gray-200 text-left'>
            <th>Date</th>
            <th>Boule 1</th>
            <th>Boule 2</th>
            <th>Boule 3</th>
            <th>Boule 4</th>
            <th>Boule 5</th>
            <th>Numéro chance</th>
          </tr>
        </thead>
        <tbody>
          {listDraw.data.results.map(draw => (
            <tr key={draw.annee_numero_de_tirage} className='border-gray-200'>
              <td>{draw.date_de_tirage}</td>
              <td>{draw.boule_1}</td>
              <td>{draw.boule_2}</td>
              <td>{draw.boule_3}</td>
              <td>{draw.boule_4}</td>
              <td>{draw.boule_5}</td>
              <td>{draw.numero_chance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

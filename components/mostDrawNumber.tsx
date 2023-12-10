'use client'

import Link from 'next/link'
import { getAPIAllNumber } from '../services/loto.service';


export default function MostDrawNumber() {
  const listNumber = getAPIAllNumber()
  var allNumber = {
    boule_1 : {},
    boule_2 : {},
    boule_3 : {},
    boule_4 : {},
    boule_5 : {},
    numero_chance : {},
  };
  
  
  if (listNumber.isError) return <p>Erreur lors de la recupération des résultats :s </p>;
  if (!listNumber.data) return <p>Chargement des résultats ...</p>;
  if (listNumber.data){
    if (listNumber.data.results){
      for (let result of listNumber.data.results) {
        for (let element in allNumber) {
          if (result[element] in allNumber[element]) {
            allNumber[element][result[element]] = allNumber[element][result[element]] +1          
          } else {
            allNumber[element][result[element]] = 1
          }
        }
      }
      console.log(allNumber)
    }
  }
  console.log(allNumber)
  console.log(listNumber)
  
  return (
    <div>
      <h1 className='text-xl py-2'>Les numéros qui ressortent le plus</h1>
    </div>
    
  );
}

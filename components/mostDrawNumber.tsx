import Link from 'next/link'
import {getAPILastDraws, getUserRepos, test} from '../services/loto.service';


export default function MostDrawNumber() {
  const listNumber = getAPIAllNumber()
  var allNumber = [
    { 
      boule_1: [],
    },
    {
      boule_2: [],
    },
    {
      boule_3: [],
    },
    {
      boule_4: [],
    },
    {
      boule_5: [],
    },
    {
      numero_chance: [],
    }
  ];
  
  if (listDraw.isError) return <p>Erreur lors de la recupération des résultats :s </p>;
  if (listDraw.data){
    listDraw.results.forEach( (element) => {
      allNumber.push(element)
    });
  }
  
  return (
    <div>
      <h1 className='text-xl'>Les numéros qui ressortent le plus</h1>
    </div>
    
  );
}

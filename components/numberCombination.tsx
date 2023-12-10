import Link from 'next/link'

/**
 * Composant qui affiche le nombre de combinaisons possibles d'un tirage simple du Loto
 */

/**
 * Fonction factoriel (!)
 * Multiplie tous les nombres de 1 au nombre entiers choisi.
 * ex : factorial(5) -> 1x2x3x4x5 = 120
 */
function factorial (num)
{
  var rval=1;
  for (var i = 2; i <= num; i++)
      rval = rval * i;
  return rval;
}

function getProbabilityWin ()
{
  var probabilityWin = 0
  
  //Calcul factorail 49!/5!(49-5)
  const fact49 = factorial(49)
  const fact5 = factorial(5)
  const fact44 = factorial(44) // 49-5 = 44
  const fact10 = factorial(10)
  const fact1 = factorial(1)
  const fact9 = factorial(9) // 10-1 = 9
  
  const probability5Number = fact49/(fact5*fact44)
  const probabilityLuckyNumber = fact10/(fact1*fact9)
  probabilityWin = Math.ceil(probability5Number * probabilityLuckyNumber)
  
  return probabilityWin
}

export default function NumberCombination() {
  const nFormat = new Intl.NumberFormat(); //formatage d'un nombre
  const probabilityWin = getProbabilityWin()
  
  const fProbabilityWin = nFormat.format(probabilityWin)
  const fCost = nFormat.format(probabilityWin * 2.20)
  
  return (
    <div>
      <h1 className='text-xl py-2'>Combien de combinaisons possibles ?</h1>
      <div>
        <p>Un tirage du Loto avec une grille simple se compose de <span className='font-bold'>5 numéros allant de 1 à 49 puis d'un numéro chance allant de 1 à 10</span>. Chaque fois qu'un numéro est tiré, il est mis de côté afin qu'il ne puisse pas sortir plusieurs fois.</p>
        <p>Pour gagner au 1er rang il faut avoir les 5 numéros gagnants ainsi que le numéro chance.</p>
      </div>
      <div className='grid grid-cols-3 gap-4 py-4 text-center'>
        <p>Il y a au total <span className='font-bold'>{fProbabilityWin} combinaisons possibles</span> !</p>
        <p>100% des gagnants ont joué</p>
        <p>Une grille simple coûte 2,20€, il faut donc débourser {fCost}€ pour gagner au Loto.</p>
      </div>
    </div>
  );
}

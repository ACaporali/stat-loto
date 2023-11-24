import Image from 'next/image'
import { use, useEffect } from "react"
import type { Metadata } from 'next'
import Link from 'next/link'
import ShowLotoDraw from '../../components/showLotoDraw'
import NumberCombination from '../../components/numberCombination'
import getUserRepos from '../services/loto.service'

export default function BonASavoir() {
  
  return (
    <div>
      <div className='container mx-auto py-10'>
        <NumberCombination />
      </div>
      <div className='container mx-auto py-10'>
        <h1 className='text-xl'>Les numéros qui ressortent le plus</h1>    
        
      </div>
    </div>
    
  );
}


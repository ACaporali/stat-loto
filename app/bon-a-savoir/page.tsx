'use client'

import Image from 'next/image'
import { use, useEffect } from "react"
import type { Metadata } from 'next'
import Link from 'next/link'
import ShowLotoDraw from '../../components/showLotoDraw'
import NumberCombination from '../../components/numberCombination'
import MostDrawNumber from '../../components/mostDrawNumber'

export default function BonASavoir() {
  
  return (
    <div>
      <div className='container mx-auto py-5'>
        <NumberCombination />
      </div>
      <div className='container mx-auto py-5'>
        <MostDrawNumber />
      </div>
    </div>
    
  );
}


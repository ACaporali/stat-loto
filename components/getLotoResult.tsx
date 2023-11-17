'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export async function getAPIResults(nbResult) {
  // fetch the blog posts from the mock API
  const apiResponse = await fetch('https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/resultats-loto-2019-a-aujourd-hui@agrall/records?limit=1');
  const data = await apiResponse.json();
  let response = null
  
  console.log(data.results)
  if (data.results) {
    response = data.results
  }
  
  return {
    response // props will be passed to the page
  };
}

export default function GetLotoResult() {
  const date = new Date().getFullYear()
  const lotoData = getAPIResults(1)
  return (
    {lotoData}
  )
}

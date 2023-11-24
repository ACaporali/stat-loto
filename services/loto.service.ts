/**
 * Service de requetage de l'API des résultats du Loto
 * Utilisation de l'API fournit par Open data soft
 * URL : https://data.opendatasoft.com/explore/dataset/resultats-loto-2019-a-aujourd-hui%40agrall/information/
 */

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export function getAPILastDraws(nbDraw=1) {
  const { data, error } = useSWR('https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/resultats-loto-2019-a-aujourd-hui@agrall/records?limit='+ nbDraw, fetcher);
  
  return {
    data: data,
    isError: error
  }
}

export function getAPIAllNumber() {
  const { data, error } = useSWR('https://data.opendatasoft.com//api/explore/v2.1/catalog/datasets/resultats-loto-2019-a-aujourd-hui@agrall/records?select=boule_1%2Cboule_2%2Cboule_3%2Cboule_4%2Cboule_5&limit=20 ', fetcher);
  
  return {
    data: data,
    isError: error
  }
}

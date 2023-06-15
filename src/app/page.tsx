import BASE_PATH_FORAPI from '@/components/shared/BasePath'
import Hero from '@/components/widgets/Hero'
import Newsletter from '@/components/widgets/Newsletter'
import Promotion from '@/components/widgets/Promotion'
import Unique from '@/components/widgets/Unique'
import Image from 'next/image'

async function getProductsData(){
  const res = await fetch(`${BASE_PATH_FORAPI}/api/products`);

  if(!res.ok){
    throw new Error("Failed to fetch")
  }
  return res.json();
}

export default async function Home() {
  const response = await getProductsData()
  console.log("res :", response)
  return (
  <>
  <Hero/>
  <Promotion/>
  <Unique/>
  <Newsletter/>
  </>
  )
}

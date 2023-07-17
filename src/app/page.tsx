import Hero from '@/components/widgets/Hero'
import Newsletter from '@/components/widgets/Newsletter'
import ProductList from '@/components/widgets/ProductList'
import Promotion from '@/components/widgets/Promotion'
import Unique from '@/components/widgets/Unique'
import StripeCheckOutButton from './Checkout'


export default async function Home() {
  return (
  <div>
    <StripeCheckOutButton/>
  <Hero/>
  <ProductList/>
  <Promotion/>
  <Unique/>
  <Newsletter/>
  </div>
  )
}

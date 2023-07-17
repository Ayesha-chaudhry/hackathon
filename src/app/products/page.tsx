import { Products } from '@/utils/mock'
import ProductCard from '@/components/shared/ProductCard'
import { StaticImageData } from 'next/image'

const products = () => {
  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap mx-32">
      {Products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  )
}

export default products
import { CollectionFragment, CollectionProductCardFragment } from 'storefrontapi.generated'
import { CollectionProps } from './types'
import ProductCard from '~/routes/($locale)._frame.collections.$handle/components/ProductCard'
import Container from '~/components/Container'

const Collection = ({ ...props }: CollectionProps) => {
  const { title, products } = props
  
  return (
    <section>
      <Container>
        <h2 className="text-[#030303] text-[32px] font-['Open Sans'] font-bold">{title}</h2>
        <ul className="flex gap-[18px]">
          {products.nodes.map(({ id, title, variants, images }: CollectionProductCardFragment) => (
            <li key={id}>
              <ProductCard
                title={title}
                image={images.nodes[0]}
                price={variants.nodes[0].price}
              ></ProductCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Collection

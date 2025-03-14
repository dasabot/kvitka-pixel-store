import { ProductCardProps } from './types'

const ProductCard = ({ title, price, image }: ProductCardProps) => (
  <div className="flex flex-col items-center justify-center bg-[#f1f1f1] px-[12px] py-[12px]">
    <img src={image.url}></img>
    <span className="white">{title}</span>
    <span>
      {price.amount} {price.currencyCode}
    </span>
  </div>
)

export default ProductCard

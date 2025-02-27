import { useRouteLoaderData } from '@remix-run/react'
import { FrameLayoutProps } from './types'
import { LoaderData } from '~/types/remix'
import { ROUTE_IDS } from '~/graphql/data/constants'
import Header from '../Header'

const FrameLayout = ({ children }: FrameLayoutProps) => {
  const { layout } = useRouteLoaderData<LoaderData['frame']>(ROUTE_IDS.FRAME) ?? {}
  const { headerMenu } = layout ?? {}

  return (
    <>
      <Header menu={headerMenu} />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
export default FrameLayout

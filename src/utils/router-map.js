import Layout from '@/layout'

const routerMap = {
  'Layout': Layout,
  'Tab': () => import('@/views/tab/index')
}
export default routerMap

import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { asyncRoutes } from '@/router/index'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  // 设置页面Title
  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const permissionRoutes = store.getters.permission_routes
      const { length, last = length - 1 } = permissionRoutes
      const hasMenu = permissionRoutes && permissionRoutes[last] && permissionRoutes[last].path === '*'
      // if (permissionRoutes && permissionRoutes[last]) {
      //   console.log(permissionRoutes, permissionRoutes[last], permissionRoutes[last].path)
      // }
      if (hasMenu) {
        next()
      } else {
        try {
          // const asyncRouter = [{ 'path': '/basic-data', 'component': 'Layout', 'name': 'BasicData', 'redirect': 'noRedirect', 'meta': { 'title': 'BasicData', 'icon': 'nested' }, 'children': [{ 'path': 'basic-information', 'redirect': 'noRedirect', 'component': 'BasicInformation', 'name': 'BasicInformation', 'meta': { 'title': 'BasicInformation' }, 'children': [{ 'path': 'company', 'component': 'Company', 'name': 'Company', 'meta': { 'title': 'Company' }, 'children': [{ 'path': 'added', 'component': 'CompanyAdded', 'name': 'CompanyAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'CompanyDetails', 'name': 'CompanyDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'staff-information', 'component': 'StaffInformation', 'name': 'StaffInformation', 'meta': { 'title': 'StaffInformation' }, 'children': [{ 'path': 'added', 'component': 'StaffInformationAdded', 'name': 'StaffInformationAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'StaffInformationDetails', 'name': 'StaffInformationDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'department', 'component': 'Department', 'name': 'Department', 'meta': { 'title': 'Department' }, 'children': [{ 'path': 'added', 'component': 'DepartmentAdded', 'name': 'DepartmentAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'DepartmentDetails', 'name': 'DepartmentDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'platform', 'component': 'Platform', 'name': 'Platform', 'meta': { 'title': 'Platform' }, 'children': [{ 'path': 'added', 'component': 'PlatformAdde', 'name': 'PlatformAdde', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'PlatformDetails', 'name': 'PlatformDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'site', 'component': 'Site', 'name': 'Site', 'meta': { 'title': 'Site' }, 'children': [{ 'path': 'added', 'component': 'SiteAdded', 'name': 'SiteAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SiteDetails', 'name': 'SiteDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }] }, { 'path': 'blurb', 'component': 'Blurb', 'name': 'Blurb', 'redirect': 'noRedirect', 'meta': { 'title': 'Blurb' }, 'children': [{ 'path': 'category', 'component': 'Category', 'name': 'Category', 'meta': { 'title': 'Category' }, 'children': [{ 'path': 'added', 'component': 'CategoryAdded', 'name': 'CategoryAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'CategoryDetails', 'name': 'CategoryDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'brand', 'component': 'Brand', 'name': 'Brand', 'meta': { 'title': 'Brand' }, 'children': [{ 'path': 'added', 'component': 'BrandAdded', 'name': 'BrandAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'BrandDetails', 'name': 'BrandDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'style', 'component': 'Style', 'name': 'Style', 'meta': { 'title': 'Style' }, 'children': [{ 'path': 'added', 'component': 'StyleAdded', 'name': 'StyleAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'StyleDetails', 'name': 'StyleDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'sku-material-component', 'component': 'SkuMaterialComponent', 'name': 'SkuMaterialComponent', 'meta': { 'title': 'SkuMaterialComponent' }, 'children': [{ 'path': 'added', 'component': 'SkuMaterialComponentAdded', 'name': 'SkuMaterialComponentAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SkuMaterialComponentDetails', 'name': 'SkuMaterialComponentDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'material-information', 'component': 'MaterialInformation', 'name': 'MaterialInformation', 'meta': { 'title': 'MaterialInformation' }, 'children': [{ 'path': 'added', 'component': 'MaterialInformationAdded', 'name': 'MaterialInformationAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'MaterialInformationDetails', 'name': 'MaterialInformationDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'color', 'component': 'Color', 'name': 'Color', 'meta': { 'title': 'Color' }, 'children': [{ 'path': 'added', 'component': 'ColorAdded', 'name': 'ColorAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'ColorDetails', 'name': 'ColorDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'size', 'component': 'Size', 'name': 'Size', 'meta': { 'title': 'Size' }, 'children': [{ 'path': 'added', 'component': 'SizeAdded', 'name': 'SizeAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SizeDetails', 'name': 'SizeDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'box', 'component': 'Box', 'name': 'Box', 'meta': { 'title': 'Box' }, 'children': [{ 'path': 'added', 'component': 'BoxAdded', 'name': 'BoxAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'BoxDetails', 'name': 'BoxDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'case', 'component': 'Case', 'name': 'Case', 'meta': { 'title': 'Case' }, 'children': [{ 'path': 'added', 'component': 'CaseAdded', 'name': 'CaseAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'CaseDetails', 'name': 'CaseDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'sku-other-information', 'component': 'SkuOtherInformation', 'name': 'SkuOtherInformation', 'meta': { 'title': 'SkuOtherInformation' }, 'children': [{ 'path': 'added', 'component': 'SkuOtherInformationAdded', 'name': 'SkuOtherInformationAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SkuOtherInformationDetails', 'name': 'SkuOtherInformationDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'sku', 'component': 'SKU', 'name': 'SKU', 'meta': { 'title': 'Sku' }, 'children': [{ 'path': 'added', 'component': 'SKUAdded', 'name': 'SKUAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SKUDetails', 'name': 'SKUDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'sku-platform', 'component': 'SkuPlatform', 'name': 'SkuPlatform', 'meta': { 'title': 'SkuPlatform' }, 'children': [{ 'path': 'added', 'component': 'SkuPlatformAdded', 'name': 'SkuPlatformAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SkuPlatformDetails', 'name': 'SkuPlatformDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }] }, { 'path': 'warehouse', 'component': 'Warehouse', 'name': 'Warehouse', 'redirect': 'noRedirect', 'meta': { 'title': 'Warehouse' }, 'children': [{ 'path': 'storage', 'component': 'Storage', 'name': 'Storage', 'meta': { 'title': 'Storage' }, 'children': [{ 'path': 'added', 'component': 'StorageAdded', 'name': 'StorageAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'StorageDetails', 'name': 'StorageDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'storage-area', 'component': 'StorageArea', 'name': 'StorageArea', 'meta': { 'title': 'StorageArea' }, 'children': [{ 'path': 'added', 'component': 'StorageAreaAdded', 'name': 'StorageAreaAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'StorageAreaDetails', 'name': 'StorageAreaDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'shelf', 'component': 'Shelf', 'name': 'Shelf', 'meta': { 'title': 'Shelf' }, 'children': [{ 'path': 'added', 'component': 'ShelfAdded', 'name': 'ShelfAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'ShelfDetails', 'name': 'ShelfDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'container', 'component': 'Container', 'name': 'Container', 'meta': { 'title': 'Container' }, 'children': [{ 'path': 'added', 'component': 'ContainerAdded', 'name': 'ContainerAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'ContainerDetails', 'name': 'ContainerDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'location', 'component': 'Location', 'name': 'Location', 'meta': { 'title': 'Location' }, 'children': [{ 'path': 'added', 'component': 'LocationAdded', 'name': 'LocationAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'LocationDetails', 'name': 'LocationDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'platform', 'component': 'Platform1', 'name': 'Platform1', 'meta': { 'title': 'WarehousePlatform' }, 'children': [{ 'path': 'added', 'component': 'PlatformAdded1', 'name': 'PlatformAdded1', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'PlatformDetails1', 'name': 'PlatformDetails1', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'job-group', 'component': 'JobGroup', 'name': 'JobGroup', 'meta': { 'title': 'JobGroup' }, 'children': [{ 'path': 'added', 'component': 'JobGroupAdded', 'name': 'JobGroupAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'JobGroupDetails', 'name': 'JobGroupDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }] }, { 'path': 'third-party', 'component': 'ThirdParty', 'name': 'ThirdParty', 'redirect': 'noRedirect', 'meta': { 'title': 'ThirdParty' }, 'children': [{ 'path': 'supplier', 'component': 'Supplier', 'name': 'Supplier', 'meta': { 'title': 'Supplier' }, 'children': [{ 'path': 'added', 'component': 'SupplierAdded', 'name': 'SupplierAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'SupplierDetails', 'name': 'SupplierDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }, { 'path': 'forwarder', 'component': 'Forwarder', 'name': 'Forwarder', 'meta': { 'title': 'Forwarder' }, 'children': [{ 'path': 'added', 'component': 'ForwarderAdded', 'name': 'ForwarderAdded', 'hidden': true, 'meta': { 'title': 'Added' }}, { 'path': 'details', 'component': 'ForwarderDetails', 'name': 'ForwarderDetails', 'hidden': true, 'meta': { 'title': 'Details' }}] }] }] }]
          const asyncRouter = asyncRoutes
          const accessRoutes = await store.dispatch('permission/createRoutes', asyncRouter)
          console.log(accessRoutes)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

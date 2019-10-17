import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * hidden: true                   当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']     设置该路由进入的权限，支持多个权限叠加
    title: 'title'                设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'              设置该路由的图标
    noCache: true                 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    affix: true                   如果设置为true，则标记将附加在标记视图中
    breadcrumb: false             如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/example/list'   如果设置路径，侧栏将突出显示您设置的路径
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/basic-data',
    component: Layout,
    name: 'BasicData',
    redirect: 'noRedirect',
    meta: {
      title: 'BasicData',
      icon: 'nested'
    },
    children: [
      {
        path: 'basic-information',
        redirect: 'noRedirect',
        component: () => import('@/views/basic-data/basic-information/index'),
        name: 'BasicInformation',
        meta: { title: 'BasicInformation' },
        children: [
          {
            path: 'company',
            component: () => import('@/views/basic-data/basic-information/company/index'),
            name: 'Company',
            meta: { title: 'Company' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/basic-information/company/added'),
                name: 'CompanyAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/basic-information/company/details'),
                name: 'CompanyDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'staff-information',
            component: () => import('@/views/basic-data/basic-information/staff-information'),
            name: 'StaffInformation',
            meta: { title: 'StaffInformation' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/basic-information/staff-information/added'),
                name: 'StaffInformationAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/basic-information/staff-information/details'),
                name: 'StaffInformationDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'department',
            component: () => import('@/views/basic-data/basic-information/department'),
            name: 'Department',
            meta: { title: 'Department' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/basic-information/department/added'),
                name: 'DepartmentAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/basic-information/department/details'),
                name: 'DepartmentDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'platform',
            component: () => import('@/views/basic-data/basic-information/platform'),
            name: 'Platform',
            meta: { title: 'Platform' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/basic-information/platform/added'),
                name: 'PlatformAdde',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/basic-information/platform/details'),
                name: 'PlatformDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'site',
            component: () => import('@/views/basic-data/basic-information/site'),
            name: 'Site',
            meta: { title: 'Site' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/basic-information/site/added'),
                name: 'SiteAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/basic-information/site/details'),
                name: 'SiteDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          }
        ]
      },
      {
        path: 'blurb',
        component: () => import('@/views/basic-data/blurb'),
        name: 'Blurb',
        redirect: 'noRedirect',
        meta: { title: 'Blurb' },
        children: [
          {
            path: 'category',
            component: () => import('@/views/basic-data/blurb/category'),
            name: 'Category',
            meta: { title: 'Category' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/category/added'),
                name: 'CategoryAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/category/details'),
                name: 'CategoryDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'brand',
            component: () => import('@/views/basic-data/blurb/brand'),
            name: 'Brand',
            meta: { title: 'Brand' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/brand/added'),
                name: 'BrandAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/brand/details'),
                name: 'BrandDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'style',
            component: () => import('@/views/basic-data/blurb/style'),
            name: 'Style',
            meta: { title: 'Style' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/style/added'),
                name: 'StyleAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/style/details'),
                name: 'StyleDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'sku-material-component',
            component: () => import('@/views/basic-data/blurb/sku-material-component'),
            name: 'SkuMaterialComponent',
            meta: { title: 'SkuMaterialComponent' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/sku-material-component/added'),
                name: 'SkuMaterialComponentAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/sku-material-component/details'),
                name: 'SkuMaterialComponentDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'material-information',
            component: () => import('@/views/basic-data/blurb/material-information'),
            name: 'MaterialInformation',
            meta: { title: 'MaterialInformation' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/material-information/added'),
                name: 'MaterialInformationAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/material-information/details'),
                name: 'MaterialInformationDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'color',
            component: () => import('@/views/basic-data/blurb/color'),
            name: 'Color',
            meta: { title: 'Color' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/color/added'),
                name: 'ColorAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/color/details'),
                name: 'ColorDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'size',
            component: () => import('@/views/basic-data/blurb/size'),
            name: 'Size',
            meta: { title: 'Size' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/size/added'),
                name: 'SizeAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/size/details'),
                name: 'SizeDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'box',
            component: () => import('@/views/basic-data/blurb/box'),
            name: 'Box',
            meta: { title: 'Box' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/box/added'),
                name: 'BoxAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/box/details'),
                name: 'BoxDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'case',
            component: () => import('@/views/basic-data/blurb/case'),
            name: 'Case',
            meta: { title: 'Case' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/case/added'),
                name: 'CaseAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/case/details'),
                name: 'CaseDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'sku-other-information',
            component: () => import('@/views/basic-data/blurb/sku-other-information'),
            name: 'SkuOtherInformation',
            meta: { title: 'SkuOtherInformation' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/sku-other-information/added'),
                name: 'SkuOtherInformationAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/sku-other-information/details'),
                name: 'SkuOtherInformationDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'sku',
            component: () => import('@/views/basic-data/blurb/sku'),
            name: 'SKU',
            meta: { title: 'Sku' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/sku/added'),
                name: 'SKUAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/sku/details'),
                name: 'SKUDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'sku-platform',
            component: () => import('@/views/basic-data/blurb/sku-platform'),
            name: 'SkuPlatform',
            meta: { title: 'SkuPlatform' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/blurb/sku-platform/added'),
                name: 'SkuPlatformAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/blurb/sku-platform/details'),
                name: 'SkuPlatformDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          }
        ]
      },
      {
        path: 'warehouse',
        component: () => import('@/views/basic-data/warehouse'),
        name: 'Warehouse',
        redirect: 'noRedirect',
        meta: { title: 'Warehouse' },
        children: [
          {
            path: 'storage',
            component: () => import('@/views/basic-data/warehouse/storage'),
            name: 'Storage',
            meta: { title: 'Storage' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/storage/added'),
                name: 'StorageAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/storage/details'),
                name: 'StorageDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'storage-area',
            component: () => import('@/views/basic-data/warehouse/storage-area'),
            name: 'StorageArea',
            meta: { title: 'StorageArea' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/storage-area/added'),
                name: 'StorageAreaAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/storage-area/details'),
                name: 'StorageAreaDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'shelf',
            component: () => import('@/views/basic-data/warehouse/shelf'),
            name: 'Shelf',
            meta: { title: 'Shelf' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/shelf/added'),
                name: 'ShelfAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/shelf/details'),
                name: 'ShelfDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'container',
            component: () => import('@/views/basic-data/warehouse/container'),
            name: 'Container',
            meta: { title: 'Container' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/container/added'),
                name: 'ContainerAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/container/details'),
                name: 'ContainerDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'location',
            component: () => import('@/views/basic-data/warehouse/location'),
            name: 'Location',
            meta: { title: 'Location' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/location/added'),
                name: 'LocationAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/location/details'),
                name: 'LocationDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'platform',
            component: () => import('@/views/basic-data/warehouse/platform'),
            name: 'Platform1',
            meta: { title: 'WarehousePlatform' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/platform/added'),
                name: 'PlatformAdded1',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/platform/details'),
                name: 'PlatformDetails1',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'job-group',
            component: () => import('@/views/basic-data/warehouse/job-group'),
            name: 'JobGroup',
            meta: { title: 'JobGroup' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/warehouse/job-group/added'),
                name: 'JobGroupAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/warehouse/job-group/details'),
                name: 'JobGroupDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          }
        ]
      },
      {
        path: 'third-party',
        component: () => import('@/views/basic-data/third-party'),
        name: 'ThirdParty',
        redirect: 'noRedirect',
        meta: { title: 'ThirdParty' },
        children: [
          {
            path: 'supplier',
            component: () => import('@/views/basic-data/third-party/supplier'),
            name: 'Supplier',
            meta: { title: 'Supplier' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/third-party/supplier/added'),
                name: 'SupplierAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/third-party/supplier/details'),
                name: 'SupplierDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          },
          {
            path: 'forwarder',
            component: () => import('@/views/basic-data/third-party/forwarder'),
            name: 'Forwarder',
            meta: { title: 'Forwarder' },
            children: [
              {
                path: 'added',
                component: () => import('@/views/basic-data/third-party/forwarder/added'),
                name: 'ForwarderAdded',
                hidden: true,
                meta: { title: 'Added' }
              },
              {
                path: 'details',
                component: () => import('@/views/basic-data/third-party/forwarder/details'),
                name: 'ForwarderDetails',
                hidden: true,
                meta: { title: 'Details' }
              }
            ]
          }
        ]
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

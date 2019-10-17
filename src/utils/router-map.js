import Layout from '@/layout'

const routerMap = {
  Layout,
  // 基础信息 router-view
  BasicInformation: () => import('@/views/basic-data/basic-information/index'),
  // 公司信息
  Company: () => import('@/views/basic-data/basic-information/company/index'),
  CompanyAdded: () => import('@/views/basic-data/basic-information/company/added'),
  CompanyDetails: () => import('@/views/basic-data/basic-information/company/details'),
  // 员工信息
  StaffInformation: () => import('@/views/basic-data/basic-information/staff-information'),
  StaffInformationAdded: () => import('@/views/basic-data/basic-information/staff-information/added'),
  StaffInformationDetails: () => import('@/views/basic-data/basic-information/staff-information/details'),
  // 部门管理
  Department: () => import('@/views/basic-data/basic-information/department'),
  DepartmentAdded: () => import('@/views/basic-data/basic-information/department/added'),
  DepartmentDetails: () => import('@/views/basic-data/basic-information/department/details'),
  // 平台管理
  Platform: () => import('@/views/basic-data/basic-information/platform'),
  PlatformAdde: () => import('@/views/basic-data/basic-information/platform/added'),
  PlatformDetails: () => import('@/views/basic-data/basic-information/platform/details'),
  // 站点管理
  Site: () => import('@/views/basic-data/basic-information/site'),
  SiteAdded: () => import('@/views/basic-data/basic-information/site/added'),
  SiteDetails: () => import('@/views/basic-data/basic-information/site/details'),
  // 商品信息 router-view
  Blurb: () => import('@/views/basic-data/blurb'),
  // 类别管理
  Category: () => import('@/views/basic-data/blurb/category'),
  CategoryAdded: () => import('@/views/basic-data/blurb/category/added'),
  CategoryDetails: () => import('@/views/basic-data/blurb/category/details'),
  // 品牌管理
  Brand: () => import('@/views/basic-data/blurb/brand'),
  BrandAdded: () => import('@/views/basic-data/blurb/brand/added'),
  BrandDetails: () => import('@/views/basic-data/blurb/brand/details'),
  // style管理
  Style: () => import('@/views/basic-data/blurb/style'),
  StyleAdded: () => import('@/views/basic-data/blurb/style/added'),
  StyleDetails: () => import('@/views/basic-data/blurb/style/details'),
  // sku材料组件管理
  SkuMaterialComponent: () => import('@/views/basic-data/blurb/sku-material-component'),
  SkuMaterialComponentAdded: () => import('@/views/basic-data/blurb/sku-material-component/added'),
  SkuMaterialComponentDetails: () => import('@/views/basic-data/blurb/sku-material-component/details'),
  // 材料信息
  MaterialInformation: () => import('@/views/basic-data/blurb/material-information'),
  MaterialInformationAdded: () => import('@/views/basic-data/blurb/material-information/added'),
  MaterialInformationDetails: () => import('@/views/basic-data/blurb/material-information/details'),
  // color管理
  Color: () => import('@/views/basic-data/blurb/color'),
  ColorAdded: () => import('@/views/basic-data/blurb/color/added'),
  ColorDetails: () => import('@/views/basic-data/blurb/color/details'),
  // size管理
  Size: () => import('@/views/basic-data/blurb/size'),
  SizeAdded: () => import('@/views/basic-data/blurb/size/added'),
  SizeDetails: () => import('@/views/basic-data/blurb/size/details'),
  // 盒子管理
  Box: () => import('@/views/basic-data/blurb/box'),
  BoxAdded: () => import('@/views/basic-data/blurb/box/added'),
  BoxDetails: () => import('@/views/basic-data/blurb/box/details'),
  // 箱规管理
  Case: () => import('@/views/basic-data/blurb/case'),
  CaseAdded: () => import('@/views/basic-data/blurb/case/added'),
  CaseDetails: () => import('@/views/basic-data/blurb/case/details'),
  // sku其他信息管理
  SkuOtherInformation: () => import('@/views/basic-data/blurb/sku-other-information'),
  SkuOtherInformationAdded: () => import('@/views/basic-data/blurb/sku-other-information/added'),
  SkuOtherInformationDetails: () => import('@/views/basic-data/blurb/sku-other-information/details'),
  // sku管理
  SKU: () => import('@/views/basic-data/blurb/sku'),
  SKUAdded: () => import('@/views/basic-data/blurb/sku/added'),
  SKUDetails: () => import('@/views/basic-data/blurb/sku/details'),
  // 平台sku管理
  SkuPlatform: () => import('@/views/basic-data/blurb/sku-platform'),
  SkuPlatformAdded: () => import('@/views/basic-data/blurb/sku-platform/added'),
  SkuPlatformDetails: () => import('@/views/basic-data/blurb/sku-platform/details'),
  // 仓库管理 router-view
  Warehouse: () => import('@/views/basic-data/warehouse'),
  // 仓库管理
  Storage: () => import('@/views/basic-data/warehouse/storage'),
  StorageAdded: () => import('@/views/basic-data/warehouse/storage/added'),
  StorageDetails: () => import('@/views/basic-data/warehouse/storage/details'),
  // 储区管理
  StorageArea: () => import('@/views/basic-data/warehouse/storage-area'),
  StorageAreaAdded: () => import('@/views/basic-data/warehouse/storage-area/added'),
  StorageAreaDetails: () => import('@/views/basic-data/warehouse/storage-area/details'),
  // 货架管理
  Shelf: () => import('@/views/basic-data/warehouse/shelf'),
  ShelfAdded: () => import('@/views/basic-data/warehouse/shelf/added'),
  ShelfDetails: () => import('@/views/basic-data/warehouse/shelf/details'),
  // 容器管理
  Container: () => import('@/views/basic-data/warehouse/container'),
  ContainerAdded: () => import('@/views/basic-data/warehouse/container/added'),
  ContainerDetails: () => import('@/views/basic-data/warehouse/container/details'),
  // 库位管理
  Location: () => import('@/views/basic-data/warehouse/location'),
  LocationAdded: () => import('@/views/basic-data/warehouse/location/added'),
  LocationDetails: () => import('@/views/basic-data/warehouse/location/details'),
  // 月台管理
  Platform1: () => import('@/views/basic-data/warehouse/platform'),
  PlatformAdded1: () => import('@/views/basic-data/warehouse/platform/added'),
  PlatformDetails1: () => import('@/views/basic-data/warehouse/platform/details'),
  // 作业组管理
  JobGroup: () => import('@/views/basic-data/warehouse/job-group'),
  JobGroupAdded: () => import('@/views/basic-data/warehouse/job-group/added'),
  JobGroupDetails: () => import('@/views/basic-data/warehouse/job-group/details'),
  // 第三方信息 router-view
  ThirdParty: () => import('@/views/basic-data/third-party'),
  // 供应商管理
  Supplier: () => import('@/views/basic-data/third-party/supplier'),
  SupplierAdded: () => import('@/views/basic-data/third-party/supplier/added'),
  SupplierDetails: () => import('@/views/basic-data/third-party/supplier/details'),
  // 货代管理
  Forwarder: () => import('@/views/basic-data/third-party/forwarder'),
  ForwarderAdded: () => import('@/views/basic-data/third-party/forwarder/added'),
  ForwarderDetails: () => import('@/views/basic-data/third-party/forwarder/details')
}
export default routerMap

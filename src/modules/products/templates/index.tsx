import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}


const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  // console.log(product);

  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
        {/* Left Column */}
        <div className="w-full small:w-1/2">
          <div className="">
            <div className="w-full relative">
              <ImageGallery images={product?.images || []} />
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full small:w-1/2">
          <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
            <ProductInfo product={product} />
            {/* <ProductTabs product={product} /> */}
            <ProductOnboardingCta />
            <Suspense
              fallback={<ProductActions product={product} region={region} />}
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>


      <div className="content-container my-16 small:my-32">
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate

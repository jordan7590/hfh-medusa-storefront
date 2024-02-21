import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getRegion } from "app/actions"
import { ProductCollectionWithPreviews } from "types/global"
import "font-awesome/css/font-awesome.min.css"

export const metadata: Metadata = {
  title: "Henry Ford Health | Custom Uniforms & Apparel",
  description:
    "Henry Ford Health's leading Uniform, Apparel, and Promotional Items supplier. Shop for custom HFH jackets, t-shirts, and more! Hoyt & Company.",
}

const getCollectionsWithProducts = async (
  countryCode: string
): Promise<ProductCollectionWithPreviews[] | null> => {
  const { collections } = await getCollectionsList(0, 3).then(
    (collections) => collections
  )

  if (!collections) {
    return null
  }

  const collectionIds = collections.map((collection) => collection.id)

  await Promise.all(
    collectionIds.map((id) =>
      getProductsList({
        queryParams: { collection_id: [id] },
        countryCode,
      })
    )
  ).then((responses) =>
    responses.forEach(({ response, queryParams }) => {
      let collection

      if (collections) {
        collection = collections.find(
          (collection) => collection.id === queryParams?.collection_id?.[0]
        )
      }

      if (!collection) {
        return
      }

      collection.products = response.products as unknown as Product[]
    })
  )

  return collections as unknown as ProductCollectionWithPreviews[]
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>

      <div className="w-full content-container" 
        style={{
        backgroundImage: 'url(https://medicallogowear.com/wp-content/uploads/2018/08/AdobeStock_208504728-min.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius:'12px'
      }}>
        <div className="banner-wrap content-container py-12 small:py-24">
            <h2> APPAREL DECORATION TEMPLATE</h2>
            <div className="banner-items">
              <div>
               <img src="https://medicallogowear.com/wp-content/uploads/2023/01/HFH-Custom-EMB-Mock-Up-Print-Options-1024x542.jpg" alt="Henry Ford Health"/>
              </div>
              <div>
                <img src="https://medicallogowear.com/wp-content/uploads/2023/01/HFH-Custom-Screen-Print-Mock-Up-Print-Options-1024x542.jpg" alt="Henry Ford Health"/>
              </div>
            </div>
        </div>

      </div>


      <div className="content-container py-12">
        <section className="border-section small-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="service-block">
              <div className="media">
                <i className="fa fa-truck text-[#221F5F] text-5xl pr-2"></i>
               <div className="media-body">
                  <h4 className="text-lg font-medium text-[#221F5F]">Free Shipping</h4>
                  <p>Free shipping on Orders $75+</p>
                </div>
              </div>
            </div>

            <div className="service-block">
              <div className="media">
              <i className="fa fa-clock-o text-[#221F5F] text-5xl pr-2"></i>
                <div className="media-body">
                  <h4 className="text-lg font-medium text-[#221F5F]">24 X 7 Service</h4>
                  <p>Online service for 24 x 7</p>
                </div>
              </div>
            </div>

            <div className="service-block">
              <div className="media">
              <i className="fa fa-gift text-[#221F5F] text-5xl pr-2"></i>
                <div className="media-body">
                  <h4 className="text-lg font-medium text-[#221F5F]">Festival Offer</h4>
                  <p>New online special festival offer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full free-shipping-cta">
      <span className="txt-medium text-3xl font-bold uppercase">We Care About You</span>
      <p>FREE SHIPPING ON <span>ORDERS $75+</span></p>
      <span className="font-roboto txt-medium text-xl font-bold uppercase">Brought to you by www.HOYTCOMPANY.com</span>
      </div>          
    </>
  )
}

import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getRegion } from "app/actions"
import { ProductCollectionWithPreviews } from "types/global"
import "font-awesome/css/font-awesome.min.css"
import { Button } from "@medusajs/ui";
import InteractiveLink from "@modules/common/components/interactive-link"

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

      <div>
        <div className="bg-gray-900 flex flex-col">
        <div className="flex flex-col content-container py-12">
          <div className="grid gap-4">
            <h3 className="text-xl font-bold text-center text-white py-4">The Most Popular Brands Reside at Hoyt &amp; Company</h3>
            <div className="flex justify-between flex-wrap">
              <div className="flex items-center">
                <a href="#">
                  <img src="https://cdn.ssactivewear.com/images/sns/home/2023/00-brands/adidas2023-white.svg" width="70" height="45" alt="adidas" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="#">
                  <img src="https://cdn.ssactivewear.com/images/sns/home/2023/00-brands/americanapparel-white.svg" width="204" height="21" alt="American Apparel" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="#">
                  <img src="https://cdn.ssactivewear.com/images/sns/home/2023/00-brands/badger-white.svg" width="110" height="45" alt="Badger" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="#">
                  <img src="https://cdn.ssactivewear.com/images/sns/home/2023/00-brands/bellacanvas-white.svg" width="200" height="17" alt="BELLA+CANVAS" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="#">
                  <img src="https://cdn.ssactivewear.com/images/sns/home/2023/00-brands/nextlevel-white.svg" width="76" height="55" alt="Next Level" />
                </a>
              </div>
              <div className="flex items-center">
                <a href="#">
                  <img src="https://cdn.ssactivewear.com/images/sns/home/2023/00-brands/tultex-white.svg" width="113" height="30" alt="Tultex" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="bg-gray-0 flex flex-col items-center p-8">
      <div className="text-center text-gray-700">
        <h2 className="txt-medium text-xl font-bold py-4">Ordering Resources</h2>
        <div className="font-bold">Hoyt &amp; Company is here to help you move your business.</div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8">
        <div className="bg-white flex flex-col items-center p-4 rounded-md shadow-md justify-between">
          <img src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/catalogs-2.91f930db.svg" width="70" height="77" alt="" />
          <a href="#" className="btn btn-sm btn-tertiary mt-4">
          Decoration Templates
          </a>
        </div>
        <div className="bg-white flex flex-col items-center p-4 rounded-md shadow-md justify-between">
          <img src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/customization-2.81968f21.svg" width="70" height="77" alt="" />
          <a href="#" className="btn btn-sm btn-tertiary mt-4" >
            Customization
          </a>
        </div>
        <div className="bg-white flex flex-col items-center p-4 rounded-md shadow-md justify-between">
          <img src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/assets-2.f7bc3c40.svg" width="70" height="77" alt="" />
          <a href="#" className="btn btn-sm btn-tertiary mt-4">
          Group Ordering
          </a>
        </div>
        <div className="bg-white flex flex-col items-center p-4 rounded-md shadow-md justify-between">
          <img src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/techresources-2.6b8734ba.svg" width="70" height="77" alt="" />
          <a href="#" className="btn btn-sm btn-tertiary mt-4">
          Return Policy
          </a>
        </div>
      </div>
    </div>


    <div>
      <div className="hp_category hp_d-flex-column hp_section">
        <div className="hp_component hp_d-flex-column">
          <div className="hp_content hp_d-flex-column">
            <div className="hp_grid hp_justify-content-center hp_wrap">
              <div className="text-center text-gray-700">
                <h2 className="txt-medium text-xl font-bold py-4">Shop By Category</h2>
              </div>
              <div className="hp_align-items-stretch hp_flex-md-nowrap hp_justify-content-center hp_row hp_row-cols-2 hp_row-cols-md-4 hp_text-center">
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                    <img className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-tops.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>          
                   T-shirts &amp; Tops       
                  </InteractiveLink>
                </div>
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                    <img className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-fleece.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>           
                    Sweatshirts & Fleece       
                  </InteractiveLink>
                </div>
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                    <img className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-headwear.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>          
                    Headwear      
                  </InteractiveLink>
                </div>
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                    <img className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-bags.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>          
                   Bags       
                  </InteractiveLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>





      {/* <div className="w-full content-container" 
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

      </div> */}


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
                  <h4 className="text-lg font-medium text-[#221F5F]">Order Online 24 x 7</h4>
                  <p>Online ordering available 24x7, 365 days</p>
                </div>
              </div>
            </div>

            <div className="service-block">
              <div className="media">
              <i className="fa fa-gift text-[#221F5F] text-5xl pr-2"></i>
                <div className="media-body">
                  <h4 className="text-lg font-medium text-[#221F5F]">No Minimums</h4>
                  <p>Want just one shirt, we&rsquo;ll print it, no problem</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full free-shipping-cta">
      <span className="txt-medium text-3xl font-bold uppercase py-5">Need Assistance Placing Your Order?</span>
          <Button variant="secondary" className="text-white bg-[#221f5f] hover:bg-[#1b174b] focus:ring-4 focus:outline-none focus:ring-[#665fa5] font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#1b174b] dark:hover:bg-[#16123d] dark:focus:ring-[#332b68]">
            Get In Touch    
          </Button>
      </div>          
    </>
  )
}

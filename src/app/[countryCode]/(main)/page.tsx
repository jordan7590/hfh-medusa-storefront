import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import Image from 'next/image'; // Import next/image

import { getCollectionsList, getProductsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getRegion } from "app/actions"
import { ProductCollectionWithPreviews } from "types/global"
import "font-awesome/css/font-awesome.min.css"
import { Button } from "@medusajs/ui";
import InteractiveLink from "@modules/common/components/interactive-link"
import {
  bellaCanvas,
  eb,
  nike,
  ogio,
  tnf,
  underArmour} from '../../importStatic';

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

      <div className="hp_brands hp_d-flex-column hp_section hp_z-index-1 box-shadow-bar">
      <div className="hp_component hp_d-flex-column">
        <div className="hp_content hp_d-flex-column">
          <div className="hp_grid hp_justify-content-center hp_wrap">
            <div className="text-center text-gray-700" style={{zIndex: 5}}>
              <h2 className="txt-medium text-xl font-bold py-4">The Most Popular Brands Reside at Hoyt &amp; Company</h2>
            </div>
            {/* BrandBar */}
            <div className="hp_justify-content-between hp_row" style={{margin:"-90px 0px"}}>
              <div className="hp_align-items-center hp_col-6 hp_col-lg hp_col-md-4 hp_col-xl-auto hp_d-flex hp_justify-content-center hp_position-relative">
                <a className="hp_stretched-link" href="#" aria-labelledby="kn-brd-5"></a>
                 <Image src={tnf} width="100" height={20} alt="Next Level" id="kn-brd-5" loading="lazy" />
              </div>
              <div className="hp_align-items-center hp_col-6 hp_col-lg hp_col-md-4 hp_col-xl-auto hp_d-flex hp_justify-content-center hp_position-relative">
                <a className="hp_stretched-link" href="#" aria-labelledby="kn-brd-1"></a>
                <Image src={bellaCanvas} width="200" height={20} alt="adidas" id="kn-brd-1" loading="lazy" />
              </div>
              <div className="hp_align-items-center hp_col-6 hp_col-lg hp_col-md-4 hp_col-xl-auto hp_d-flex hp_justify-content-center hp_position-relative">
                <a className="hp_stretched-link" href="#" aria-labelledby="kn-brd-2"></a>
                 <Image src={eb} width="204" height="21" alt="American Apparel" id="kn-brd-2" loading="lazy" />
              </div>
              <div className="hp_align-items-center hp_col-6 hp_col-lg hp_col-md-4 hp_col-xl-auto hp_d-flex hp_justify-content-center hp_position-relative">
                <a className="hp_stretched-link" href="#" aria-labelledby="kn-brd-3"></a>
                 <Image src={nike} width="110" height="45" alt="Badger" id="kn-brd-3" loading="lazy" />
              </div>
              <div className="hp_align-items-center hp_col-6 hp_col-lg hp_col-md-4 hp_col-xl-auto hp_d-flex hp_justify-content-center hp_position-relative">
                <a className="hp_stretched-link" href="#" aria-labelledby="kn-brd-4"></a>
                 <Image src={ogio} width="160" height="17" alt="BELLA+CANVAS" id="kn-brd-4" loading="lazy" />
              </div>
              <div className="hp_align-items-center hp_col-6 hp_col-lg hp_col-md-4 hp_col-xl-auto hp_d-flex hp_justify-content-center hp_position-relative">
                <a className="hp_stretched-link" href="#" aria-labelledby="kn-brd-6"></a>
                 <Image src={underArmour} width="100" height="30" alt="Tultex" id="kn-brd-6" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    {/* Category */}
      <div className="hp_category hp_d-flex-column hp_section" style={{zIndex:"5", marginTop:"25px"}}>
        <div className="hp_component hp_d-flex-column">
          <div className="hp_content hp_d-flex-column">
            <div className="hp_grid hp_justify-content-center hp_wrap">
              <div className="text-center text-gray-700">
                <h2 className="txt-medium text-xl font-bold py-4">Shop By Category</h2>
              </div>
              <div className="hp_align-items-stretch hp_flex-md-nowrap hp_justify-content-center hp_row hp_row-cols-2 hp_row-cols-md-4 hp_text-center">
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                     <Image className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-tops.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>          
                   T-shirts &amp; Tops       
                  </InteractiveLink>
                </div>
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                     <Image className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-fleece.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>           
                    Sweatshirts & Fleece       
                  </InteractiveLink>
                </div>
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                     <Image className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-headwear.jpg" width="360" height="360" alt=""/>
                  </div>
                  <InteractiveLink href={`#`}>          
                    Headwear      
                  </InteractiveLink>
                </div>
                <div className="hp_align-items-center hp_d-flex-column hp_position-relative">
                  <div className="hp_ratio hp_ratio-1x1">
                     <Image className="hp_img-cover hp_rounded-circle" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=360,h=360,fit=pad/images/sns/home/2023/11-nov/category-bags.jpg" width="360" height="360" alt=""/>
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

{/* Featured Products  */}
    <div className="hp_d-flex-column hp_promo hp_section">
      <div className="hp_component hp_d-flex-column">
        <div className="hp_content hp_d-flex-column">
          <div className="hp_grid hp_justify-content-center hp_wrap">
          <div className="text-center text-gray-700">
           <h2 className="txt-medium text-xl font-bold py-4">Featured Products</h2>
          </div>
            {/* PromoSection */}
            <div className="hp_align-items-lg-stretch hp_bg-gray-50 hp_promo-card-wrap hp_rounded-5 hp_row">
              {/* Promo1 */}
              <div className="hp_align-items-stretch hp_bg-white hp_col-12 hp_col-md hp_d-flex hp_flex-wrap hp_flex-xl-nowrap hp_promo-card hp_rounded-5 hp_shadow-lg">
                <div className="hp_align-self-start hp_align-self-xl-stretch hp_col-12 hp_col-xl-5 hp_fcc-card-img-wrap hp_position-relative">
                  <div className="hp_h-100 hp_ratio hp_ratio-5x4 hp_ratio-xl-4x5">
                     <Image className="hp_img-cover hp_rounded-end-xl-0 hp_rounded-start-xl-5 hp_rounded-top-5" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=300,h=375,fit=pad,f=auto/images/sns/home/2024/02-feb/alt-fls-pr.jpg" width="300" height="375" alt="" />
                  </div>
                </div>

                <div className="hp_align-self-xl-center hp_col-12 hp_col-xl hp_d-flex hp_flex-column hp_gap-4 hp_promo-cta">
                  <div className="hp_d-flex-column hp_gap-2 hp_h-100">
                    <div className="hp_fw-semibold hp_promo-cta-heading hp_text-rust">ALTERNATIVE</div>
                    <div className="hp_fs-5 hp_fw-medium hp_lh-sm hp_promo-cta-body">
                      Save on bestselling fleece styles.
                    </div>
                  </div>
                  <div>
                    <a className="hp_btn  py-1 px-2 font-medium text-base leading-[1.5] text-white bg-[#c45003] border-[1px] border-transparent rounded-full hover:bg-[#a74403] hover:border-[#9d4002] focus:shadow-btn focus:ring-[#9d4002]" 
                    href="">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* Promo2 */}
              <div className="hp_align-items-stretch hp_bg-white hp_col-12 hp_col-md hp_d-flex hp_flex-wrap hp_flex-xl-nowrap hp_promo-card hp_rounded-5 hp_shadow-lg">
                <div className="hp_align-self-start hp_align-self-xl-stretch hp_col-12 hp_col-xl-5 hp_fcc-card-img-wrap hp_position-relative">
                  <div className="hp_h-100 hp_ratio hp_ratio-5x4 hp_ratio-xl-4x5">
                     <Image className="hp_img-cover hp_rounded-end-xl-0 hp_rounded-start-xl-5 hp_rounded-top-5" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=300,h=375,fit=pad,f=auto/images/sns/home/2024/02-feb/promo2c.jpg" width="300" height="375" alt="" />
                  </div>
                </div>
                <div className="hp_align-self-xl-center hp_col-12 hp_col-xl hp_d-flex hp_flex-column hp_gap-4 hp_promo-cta">
                  <div className="hp_d-flex-column hp_gap-2 hp_h-100">
                    <div className="hp_fw-semibold hp_promo-cta-heading hp_text-rust">
                      BRANDING
                    </div>
                    <div className="hp_fs-5 hp_fw-medium hp_lh-sm hp_promo-cta-body">
                      Explore Unique Branding Experiences.
                    </div>
                  </div>
                  <div>
                    <a className="hp_btn  py-1 px-2 font-medium text-base leading-[1.5] text-white bg-[#c45003] border-[1px] border-transparent rounded-full hover:bg-[#a74403] hover:border-[#9d4002] focus:shadow-btn focus:ring-[#9d4002]" 
                    href="">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* Promo3 */}
              <div className="hp_align-items-stretch hp_bg-white hp_col-12 hp_col-md hp_d-flex hp_flex-wrap hp_flex-xl-nowrap hp_promo-card hp_rounded-5 hp_shadow-lg">
                <div className="hp_align-self-start hp_align-self-xl-stretch hp_col-12 hp_col-xl-5 hp_fcc-card-img-wrap hp_position-relative">
                  <div className="hp_h-100 hp_ratio hp_ratio-5x4 hp_ratio-xl-4x5">
                     <Image className="hp_img-cover hp_rounded-end-xl-0 hp_rounded-start-xl-5 hp_rounded-top-5" src="https://cdn.ssactivewear.com/cdn-cgi/image/quality=80,w=300,h=375,fit=pad,f=auto/images/sns/home/2024/02-feb/promo3c.jpg" width="300" height="375" alt="" />
                  </div>
                </div>
                <div className="hp_align-self-xl-center hp_col-12 hp_col-xl hp_d-flex hp_flex-column hp_gap-4 hp_promo-cta">
                  <div className="hp_d-flex-column hp_gap-2 hp_h-100">
                    <div className="hp_fw-semibold hp_promo-cta-heading hp_text-rust">CORPORATE</div>
                    <div className="hp_fs-5 hp_fw-medium hp_lh-sm hp_promo-cta-body">
                      Top Picks for Work and Leisure.
                    </div>
                  </div>
                  <div>
                    <a className="hp_btn  py-1 px-2 font-medium text-base leading-[1.5] text-white bg-[#c45003] border-[1px] border-transparent rounded-full hover:bg-[#a74403] hover:border-[#9d4002] focus:shadow-btn focus:ring-[#9d4002]"
                     href="#" >Explore Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* Ordering Resources  */}
    <div className="hp_d-flex-column hp_resources hp_section">
      <div className="hp_component hp_d-flex-column">
        <div className="hp_content hp_d-flex-column">
          <div className="hp_grid hp_justify-items-center hp_wrap">
            <div className="hp_d-flex-column hp_resources-heading-wrap hp_text-center">
            <div className="text-center text-gray-700">
              <h2 className="txt-medium text-xl font-bold py-4">Ordering Resources</h2>
              <div className="text-xl">Hoyt &amp; Company is here to help you move your business.</div>
            </div>
            </div>
            <div className="hp_grid hp_resources-card-wrap">
              <div className="hp_align-items-center hp_d-flex hp_flex-column hp_justify-content-start hp_position-relative hp_resources-card">
                 <Image src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/catalogs-2.91f930db.svg" width="87" height="77" alt="" />
                <a className="hp_btn hp_btn-sm hp_btn-tertiary hp_stretched-link" href="#">Decoration Templates</a>
              </div>
              <div className="hp_align-items-center hp_d-flex hp_flex-column hp_justify-content-start hp_position-relative hp_resources-card">
                 <Image src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/customization-2.81968f21.svg" width="79" height="77" alt="" />
                <a className="hp_btn hp_btn-sm hp_btn-tertiary hp_stretched-link" href="#">Customization</a>
              </div>
              <div className="hp_align-items-center hp_d-flex hp_flex-column hp_justify-content-start hp_position-relative hp_resources-card">
                 <Image src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/assets-2.f7bc3c40.svg" width="86" height="77" alt="" />
                <a className="hp_btn hp_btn-sm hp_btn-tertiary hp_stretched-link" href="#">Group Ordering</a>
              </div>
              <div className="hp_align-items-center hp_d-flex hp_flex-column hp_justify-content-start hp_position-relative hp_resources-card">
                 <Image src="https://cdn.ssactivewear.com/images/sns/home/2023/04-apr/temp/techresources-2.6b8734ba.svg" width="69" height="77" alt="" />
                <a className="hp_btn hp_btn-sm hp_btn-tertiary hp_stretched-link" href="#">Return Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* All Collection Products  */}
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}





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
                <Image src="https://medicallogowear.com/wp-content/uploads/2023/01/HFH-Custom-EMB-Mock-Up-Print-Options-1024x542.jpg" alt="Henry Ford Health"/>
              </div>
              <div>
                 <Image src="https://medicallogowear.com/wp-content/uploads/2023/01/HFH-Custom-Screen-Print-Mock-Up-Print-Options-1024x542.jpg" alt="Henry Ford Health"/>
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

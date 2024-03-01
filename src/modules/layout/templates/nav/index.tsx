import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import "font-awesome/css/font-awesome.min.css"

const MenuItems = {
  "Home": "/",
  "All Products": "/store",
  "Brands": "/",
  "Apparel": "/",
  "Promotional Items": "/",
  "Drinkwear": "/",
  "Bags": "/",
  "Department or Color": "/",
}

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
<>
<div className="bg-[#8056BF] py-3 hidden sm:flex ">
  <div className="content-container mx-auto flex justify-between items-center">
    {/* Left side content */}
    <div className="flex items-center text-xs font-semibold">
      {/* Email and Phone Number */}
      <div className="flex items-center mr-6">
      <i className="fa fa-envelope text-[#ffffff] pr-2"></i>
        <a href="mailto:sales@hoytcompany.com" className="text-[#ffffff] hover:text-[#ffffff]">sales@hoytcompany.com</a>
      </div>
      <div className="flex items-center">
        <span className="what-we-offer">
          <a href="#">What We Offer
         <i className="fa fa-angle-down text-[#ffffff] pl-2"></i>
         </a>
         </span>
      </div>
    </div>
    
    {/* Right side links */}
    <div className="items-center text-xs font-semibold text-uppercase">
       <div className="flex items-center gap-x-6 h-full basis-0 justify-end ml-10">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
              <div className="search-products-container">
                <img src="https://static.swag.com/images-webpack/search-icon.15b531054c0b2001ce39..svg"
                 className="search-icon"
                 alt="Magnifying glass icon for search"/>
                  <div className="search-bar">
                    {/* <label className="">Search:</label> */}
                    <input id="searchField" data-element="search" 
                      placeholder="Search" className="" value=""/>
                    </div>
                    </div>
              )}
            </div>
            <div className="hidden small:flex items-center h-full account-wrap">
              <LocalizedClientLink
                className="text-[#ffffff]"
                href="/account"
              >
                    Log In           
              </LocalizedClientLink>
              <LocalizedClientLink
                className="text-[#ffffff]"
                href="/account"
              >
                    Sign Up           
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                >
                  <i className="fa fa-shopping-cart text-[#ffffff] style={{fontSize:'18px'}}"></i> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
    </div>
  </div>
</div>


    <div className="sticky top-0 inset-x-0 z-30 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base">   
        <nav className="content-container txt-small-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">      

         

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              style={{ marginLeft: "-20px", maxWidth:"400px"}}
            >
              <img src="https://hfh.tonserve.com/assets/images/icon/logo.png" alt="Henry Ford Health" className="logo" />
            </LocalizedClientLink>
          </div>



        {/* <div className="flex-1 basis-0 h-full flex items-center"> */}
          <div className="basis-0 h-full flex items-center flex sm:hidden">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>


          
          <div className="flex items-center gap-x-6 h-full
           flex-1 basis-0 justify-end capitalize text-sm text-black font-bold hidden sm:flex ">
            {Object.entries(MenuItems).map(([label, link]) => (
                <LocalizedClientLink
                  key={label}
                  className="hover:text-[#8056BF]"
                  href={link}
                >
                  {label}
                </LocalizedClientLink>
              ))}
          </div>
        </nav>
      </header>
    </div>
</>
   
  )
}

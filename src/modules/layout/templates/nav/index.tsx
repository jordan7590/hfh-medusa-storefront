import { headers } from "next/headers"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import "font-awesome/css/font-awesome.min.css"

const MenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
<>
<div className="bg-[#F8F8F8] py-3 hidden sm:flex ">
  <div className="content-container mx-auto flex justify-between items-center">
    {/* Left side content */}
    <div className="flex items-center text-xs font-semibold">
      {/* Email and Phone Number */}
      <div className="flex items-center mr-6">
      <i className="fa fa-envelope text-[#221F5F] pr-2"></i>
        <a href="mailto:sales@hoytcompany.com" className="text-[#221F5F] hover:text-[#221F5F]">sales@hoytcompany.com</a>
      </div>
      <div className="flex items-center">
      <i className="fa fa-phone text-[#221F5F] pr-2"></i>
        <span className="text-[#221F5F]">Customer Service: <a href="tel:8105471646">810.547.1646</a></span>
      </div>
    </div>
    
    {/* Right side links */}
    <div className="flex items-center text-xs font-semibold text-uppercase">
    <a href="https://hoytcompany.com/" target="_blank" rel="noopener noreferrer" className="text-[#221F5F] hover:text-[#221F5F]"> 
      <i className="fa fa-globe text-[#221F5F] pr-2"></i>
      Brought to you by HOYT &amp; COMPANY
    </a>

      {/* <a href="#" className="text-[#221F5F] hover:text-[#221F5F] mr-6">Store</a>
      <a href="#" className="text-[#221F5F] hover:text-[#221F5F] mr-6">About</a> */}
      {/* Add more links as needed */}
    </div>
  </div>
</div>


    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-ui-border-base">   
        <nav className="content-container txt-small-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">      

         

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              style={{ marginLeft: "-20px" }}
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
           flex-1 basis-0 justify-end uppercase text-sm font-semibold text-gray-700 hover:text-[#221F5F] 
           hidden sm:flex ">
            {Object.entries(MenuItems).map(([label, link]) => (
                <LocalizedClientLink
                  key={label}
                  className="hover:text-ui-fg-base"
                  href={link}
                >
                  {label}
                </LocalizedClientLink>
              ))}
          </div>



          <div className="flex items-center gap-x-6 h-full basis-0 justify-end ml-10">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base txt-compact-xlarge-plus"
                href="/account"
              >
                <i className="fa fa-user text-[#221F5F] "></i>
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2 txt-compact-xlarge-plus"
                  href="/cart"
                >
                  <i className="fa fa-shopping-cart text-[#221F5F] "></i> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
</>
   
  )
}

import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "../../components/medusa-cta"
import SubscribeNewsletter from "./newsletter"
const fetchCollections = async () => {
  const { collections } = await getCollectionsList()
  return collections
}

const fetchCategories = async () => {
  const { product_categories } = await getCategoriesList()
  return product_categories
}

export default async function Footer() {
  const productCollections = await fetchCollections().then(
    (collections) => collections
  )
  const productCategories = await fetchCategories().then(
    (categories) => categories
  )
  return (
    <footer className="border-t border-ui-border-base w-full bg-[#181B1B]">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div className="footer-logo-section">
            <LocalizedClientLink
              href="/"
              className="flex txt-compact-xlarge-plus hover:text-ui-fg-base uppercase" style={{width:'50%'}}
            >
              <img src="https://hoytcompany.com/wp-content/themes/html5blank-stable/logohc.png" alt="Henry Ford Health" className="logo"/>
            </LocalizedClientLink>
            <p className="py-3 txt-small text-justify text-[#fff]">
            Welcome to Henry Ford Health Employee Uniform website provided by Hoyt & Company.
             Our company offers a full line of decorated or blank apparel, uniforms, and promotional products.
              Our wide selection of apparel and promotional merchandise gives you the flexibility needed to create the professional image.
               Our orders are custom to fit your needs, please make sure you order correct sizes and approved colors for your department 
                due to all items are custom and non-returnable.
            </p>

          </div>

          {/* <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {productCollections && productCollections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (productCollections?.length || 0) > 3,
                    }
                  )}
                >
                  {productCollections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Useful Links</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          
          {/* <div>
          <span className="txt-small-plus txt-ui-fg-base">Store Information</span>
            <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small mt-2">
                <li className="flex items-center space-x-2">
                    <i className="fa fa-map-marker text-gray-500"></i>
                    <span>12555 N. Saginaw Rd.<br/>Clio, MI 48420</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fa fa-phone text-gray-500"></i>
                    <a href="tel:810.547.1646">Services: 810.547.1646</a>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fa fa-phone text-gray-500"></i>
                    <a href="tel:810.624.4445">Sales: 810.624.4445</a>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fa fa-envelope-o text-gray-500"></i>
                    <span>Email: <a href="mailto:sales@hotcompany.com">sales@hoytcompany.com</a></span>
                </li>
            </ul>
          </div> */}

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 text-[#fff]">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base text-bold" style={{fontSize:'18px', paddingBottom:'10px'}}>Useful Links</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-[#fff]">
                <li>
                  <a
                    href="/pages/returnpolicy"
                    className="hover:text-[#9655BF]"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                <a
                    href="/pages/privacypolicy"
                    className="hover:text-[#9655BF]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                <a
                    href="/pages/termsofuse"
                    className="hover:text-[#9655BF]"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                <a
                    href="/pages/contact"
                    className="hover:text-[#9655BF]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <span className="txt-small-plus txt-ui-fg-base text-bold" style={{fontSize:'18px', paddingBottom:'10px', marginTop:'15px'}}> Services</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-[#fff]">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base text-bold" style={{fontSize:'18px', paddingBottom:'10px'}}>Products</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-[#fff]">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <span className="txt-small-plus txt-ui-fg-base text-bold" style={{fontSize:'18px', paddingBottom:'10px', marginTop:'15px'}}> Company</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-[#fff]">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-y-2 text-[#fff]">
              <span className="txt-small-plus txt-ui-fg-base text-bold" style={{fontSize:'18px', paddingBottom:'10px'}}>Get in touch</span>
              <ul className="grid grid-cols-1 gap-y-2 txt-small text-[#fff]">
              {/* <li className="flex items-center space-x-2">
                    <i className="fa fa-map-marker text-gray-0"></i>
                    <span>12555 N. Saginaw Rd.<br/>Clio, MI 48420</span>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fa fa-phone text-gray-0"></i>
                    <a href="tel:810.547.1646">Services: 810.547.1646</a>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fa fa-phone text-gray-0"></i>
                    <a href="tel:810.624.4445">Sales: 810.624.4445</a>
                </li>
                <li className="flex items-center space-x-2">
                    <i className="fa fa-envelope-o text-gray-0"></i>
                    <span>Email: <a href="mailto:sales@hotcompany.com">sales@hoytcompany.com</a></span>
                </li> */}
                <li className="flex items-center space-x-2">
                <a href="https://www.instagram.com/hoytcompany/">
                  <i className="fa fa-instagram social txt-small-plus text-[#fff]"></i> 
                </a>
                <a href="https://www.facebook.com/HoytCompany/">
                  <i className="fa fa-facebook-square social txt-small-plus text-[#fff]"></i>
                </a>
                
                </li>
              </ul>
              <span className="txt-small-plus txt-ui-fg-base text-bold" style={{fontSize:'18px', paddingBottom:'10px',  marginTop:'15px'}}>Subscribe</span>
              <SubscribeNewsletter />
            </div>
          </div>


        </div>
        <div className="footer-copyright flex w-full
         xsmall:flex-row justify-between text-ui-fg-muted border-t border-solid border-[#5b5b5b]"
         style={{paddingTop:'30px'}}>
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Henry Ford Health Uniform Apparel. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}

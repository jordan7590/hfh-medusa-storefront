import { Metadata } from "next"
import Image from 'next/image'; // Import next/image

import { getRegion } from "app/actions"
import "font-awesome/css/font-awesome.min.css"


export const metadata: Metadata = {
  title: "Contact Us | Custom Uniforms & Apparel",
  description:
    "Contact Us, Henry Ford Health's leading Uniform, Apparel, and Promotional Items supplier. Shop for custom HFH jackets, t-shirts, and more! Hoyt & Company.",
}


export default async function contact({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

 


  return (
    <>
   <div className="contact__findUsSection___TA7CH">
  <div className="contact__findUsContainer___gu8w_">
    <div className="contact__findUsHeader___r2NCi">
    <div className="text-center text-gray-700">
      <h2 className="txt-medium text-xl font-bold py-4">Find Us</h2>
    </div>
        <hr className="contact__findUsHeaderLine___a_XIM" />
    </div>
    <div className="contact__findUsContent___V_g8h">
      <div className="contact__findUsItem___qBlB7">
        <img className="contact__findUsItemIcon1___d1YBX" src="https://static.swag.com/images-webpack/contact_1.45f66a012aa19222330a..svg" alt="Icon representing a location marker" />
        <h5 className="contact__findUsItemTitle___IVlAD">Address</h5>
        <p className="contact__findUsItemDescription___KUwHf">
          Hoyt & Company
          12555 N. Saginaw Rd.
          Clio, MI 48420
        </p>
      </div>
      <div className="contact__findUsItem___qBlB7">
        <img className="contact__findUsItemIcon2___V5StJ" src="https://static.swag.com/images-webpack/contact_2.7abc2a903c8306129232..svg" alt="Icon depicting an envelope, commonly used to represent email or messaging" />
        <h5 className="contact__findUsItemTitle___IVlAD">Email</h5>
        <p className="contact__findUsItemDescription___KUwHf">sales@hoytcompany.com</p>
      </div>
      <div className="contact__findUsItem___qBlB7">
        <img className="contact__findUsItemIcon3___V5LLu" src="https://static.swag.com/images-webpack/contact_3.4aec7bfb84a85e8d0300..svg" alt="Icon representing a telephone, usually indicating a voice call feature or contact via phone" />
        <h5 className="contact__findUsItemTitle___IVlAD">Phone</h5>
        <p className="contact__findUsItemDescription___KUwHf">810-547-1646</p>
        <p className="contact__findUsItemDescription___KUwHf">810-624-4445</p>
      </div>
      <div className="contact__findUsItem___qBlB7">
        <img className="contact__findUsItemIcon4___XnB2y" src="https://static.swag.com/images-webpack/contact_4.882fa2bc77a5ac381129..svg" alt="Icon with the word 'OPEN' within an outlined hanging sign, suggesting a business status or an invitation to enter a location or webpage" />
        <h5 className="contact__findUsItemTitle___IVlAD">Opening hours</h5>
        <p className="contact__findUsItemDescription___KUwHf">Monday - Friday<br />9am - 6pm EST</p>
      </div>
    </div>
  </div>
</div>

<div>

<div className="contact__formSection___v7QQA">
  <div className="contact__formContainer___GjuCr">
    <div className="contact__formHeader___nDtbp">
      <span className="contact__formHeaderTitle___iCqt7">Reach out to us!</span>
      <span className="contact__formHeaderDescription___Nnp3c">We are here to help! Fill out the information below and one of our team members will be in touch.</span>
    </div>
    <div className="contact__formInputsContainer___R_2dE">
      <div className="contact__formNameInputsContainer___NfWc3">
        <div className="MuiFormControl-root form-input-text__container___UZW4T contact__inputText___ieMCR">
          <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink" data-shrink="true">First name *</label>
          <div className="MuiInputBase-root MuiInputBase-formControl">
            <input aria-invalid="false" name="firstName" placeholder="Your first name" type="text" className="MuiInputBase-input" value="" />
          </div>
        </div>
        <div className="MuiFormControl-root form-input-text__container___UZW4T contact__inputText___ieMCR">
          <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink" data-shrink="true">Last name *</label>
          <div className="MuiInputBase-root MuiInputBase-formControl">
            <input aria-invalid="false" name="lastName" placeholder="Your last name" type="text" className="MuiInputBase-input" value="" />
          </div>
        </div>
      </div>
      <div className="MuiFormControl-root form-input-text__container___UZW4T contact__inputText___ieMCR">
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink" data-shrink="true">Email address *</label>
        <div className="MuiInputBase-root MuiInputBase-formControl">
          <input aria-invalid="false" name="email" placeholder="Enter your email address" type="email" className="MuiInputBase-input" value="" />
        </div>
      </div>
      <div className="MuiFormControl-root form-select__container___zgH81">
        <div className="MuiFormControl-root form-input-text__container___UZW4T contact__inputText___ieMCR contact__inputContainer___1bTcY">
          <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink" data-shrink="true">How can we help you? *</label>
          <div className="MuiInputBase-root MuiInputBase-formControl">
          <input aria-invalid="false" name="reason" placeholder="Enter your reason" type="text" className="MuiInputBase-input" value="" />
        </div>
        </div>
      </div>
      <div className="MuiFormControl-root form-input-text__container___UZW4T form-input-textarea__container___G05ro contact__inputText___ieMCR">
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink" data-shrink="true">Your Message *</label>
        <div className="MuiInputBase-root MuiInputBase-formControl MuiInputBase-multiline">
          <textarea rows="1" aria-invalid="false" name="message" placeholder="What would you like to get in touch about?" className="MuiInputBase-input MuiInputBase-inputMultiline" style={{ height: "192px", overflow: "hidden" }}></textarea>
          <textarea aria-hidden="true" className="MuiInputBase-input MuiInputBase-inputMultiline" style={{ visibility: "hidden", position: "absolute", overflow: "hidden", height: "0px", top: "0px", left: "0px", transform: "translateZ(0px)", width: "564.75px" }}></textarea>
        </div>
      </div>
    </div>
    <div className="contact__formButtonContainer___SIClG">
      <div className="form-button__container___bwqmp contact__formButton___N5NR5">
        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"  type="button">
          <span className="MuiButton-label transition-fg relative w-fit justify-center overflow-hidden outline-none disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled disabled:shadow-buttons-neutral disabled:after:hidden after:transition-fg after:absolute after:inset-0 after:content-[''] shadow-buttons-neutral after:button-neutral-gradient hover:after:button-neutral-hover-gradient active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient focus:shadow-buttons-neutral-focus txt-compact-small-plus gap-x-1.5 text-white bg-[#221f5f] hover:bg-[#1b174b] focus:ring-4 focus:outline-none focus:ring-[#665fa5] font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#1b174b] dark:hover:bg-[#16123d] dark:focus:ring-[#332b68]">
            Send
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

</div>

    </>
  )
}

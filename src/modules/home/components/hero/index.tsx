// import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle flex items-center justify-start px-6" style={{backgroundImage: "url('https://hfh.tonserve.com/assets/images/home-banner/1.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="content-container" >
      <div className="max-w-3xl text-left">
        <Heading level="h1" className="text-[#221f5f] text-5xl relative h-16 leading-10 text-ui-fg-base font-bold mb-4">
          Welcome to Henery Ford Health
        </Heading>
        <Heading level="h2" className="text-3xl leading-8 text-ui-fg-subtle font-normal mb-8">
          Custom Uniforms & Apparel
        </Heading>
        <a href="https://github.com/medusajs/nextjs-starter-medusa" target="_blank">
        <Button variant="secondary" className="text-white bg-[#221f5f] hover:bg-[#1b174b] focus:ring-4 focus:outline-none focus:ring-[#665fa5] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#1b174b] dark:hover:bg-[#16123d] dark:focus:ring-[#332b68]">
            Shop Now 
          </Button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Hero;

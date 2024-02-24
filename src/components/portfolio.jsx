import React from "react"

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-secondary font-secondary text-[24px] ">
              Recent Work
            </h4>
            <div className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
              Excited to showcase my recent work? Enclosed is a portfolio
              featuring websites I've crafted. I hope this provides a better
              glimpse into my capabilities and design style.
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px] mt-12">
              04
            </h2>
            <div>Completed Projects</div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <div className="w-full">
            <a href="https://www.hashmicro.com/id/iklan/software-erp">
              <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                <img src="images/hashmicro-web.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex item opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                    <div className="bg-white rounded-full px-5 inline-blick mb-2">
                      <h4 className="text-gradient">Hashmicro Indonesia</h4>
                    </div>
                    <p className="text-[12px]">
                      Crafting a dynamic landing page for HashMicro Indonesia
                      involves utilizing OwlCarousel, JavaScript, HTML5, and
                      CSS3. OwlCarousel offers interactive content displays,
                      while JavaScript adds dynamic elements for a responsive
                      interface. HTML5 ensures structural integrity, and CSS3
                      polishes the design, resulting in an engaging landing page
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="https://www.equiperp.com/">
              <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                <img src="images/equip-web.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex item opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                    <div className="bg-white rounded-full px-5 inline-blick mb-2">
                      <h4 className="text-gradient">Equip ERP</h4>
                    </div>
                    <p className="text-[12px]">
                      Crafting a dynamic landing page for Equip ERP involves
                      utilizing Wordpress,Elementor, JavaScript, HTML5, and
                      CSS3.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="https://www.eva-hr.com/">
              <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                <img src="images/eva-web.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex item opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                    <div className="bg-white rounded-full px-5 inline-blick mb-2">
                      <h4 className="text-gradient">EVA HR</h4>
                    </div>
                    <p className="text-[12px]">
                      Crafting a dynamic landing page for Equip ERP involves
                      utilizing Wordpress,Elementor, JavaScript, HTML5, and
                      CSS3.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="https://www.hashmicro.com/id/iklan/software-erp">
              <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                <img src="images/hashmicro-web.png" alt="" />
                <div className="absolute p-5 bg-primary w-full h-full flex item opacity-0 group-hover:opacity-100 transition">
                  <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                    <div className="bg-white rounded-full px-5 inline-blick mb-2">
                      <h4 className="text-gradient">Hashmicro Indonesia</h4>
                    </div>
                    <p className="text-[12px]">
                      Crafting a dynamic landing page for HashMicro Indonesia
                      involves utilizing OwlCarousel, JavaScript, HTML5, and
                      CSS3. OwlCarousel offers interactive content displays,
                      while JavaScript adds dynamic elements for a responsive
                      interface. HTML5 ensures structural integrity, and CSS3
                      polishes the design, resulting in an engaging landing page
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

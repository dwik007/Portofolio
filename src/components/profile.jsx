import React from "react"

export default function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-secondary mb-3 text-[30px]">Awesome Skill</h4>
          <h2 className="text-gradient font-primary max-w-[1100px] mx-auto text-[24px]">
            My expertise lies in the realm of front-end development, where I
            excel in creating engaging and user-friendly web interfaces. With a
            robust skill set in essential front-end technologies, I specialize
            in building responsive and visually appealing websites. My focus on
            creating seamless user experiences across various platforms and
            devices allows me to deliver high-quality, adaptable web solutions.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center w-full max-w-[450px] mx-auto mb-[50px]">
            <div className="min-w-[300] min-h-[300px] bg-gradient mt-[4.5rem] pt-[50px] rounded-full overflow-hidden">
              <img src="/images/Profildwi.jpg" alt="" />
            </div>
            <h2 className="text-gradient text-[48px] mt-[20px]">
              Dwi Nur Firmanto
            </h2>
          </div>
          <div className="w-full lg:pt-[50px] lg:ml-12">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img className="w-1/2" src="/images/js-logo.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">JavaScript</h4>
                      </div>
                      <p>
                        Versatile scripting language simplifying HTML element
                        manipulation and enabling interactive web development.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/wp-logo.svg" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Wordpress</h4>
                      </div>
                      <p>
                        WordPress is a popular, open-source content management
                        system that simplifies creating and managing websites.
                        It features a user-friendly interface, customizable
                        themes, and plugins, making it ideal for blogs, business
                        sites, and online stores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img className="w-1/2" src="/images/3.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">CSS3</h4>
                      </div>
                      <p>
                        Evolution of CSS allowing for more creative web design
                        with animations, transitions, and layouts.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img className="w-1/2" src="/images/4.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML5</h4>
                      </div>
                      <p>
                        Latest standard for web page structure supporting
                        stronger semantics with audio, video, and graphics.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

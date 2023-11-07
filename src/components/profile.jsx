import React from "react"

export default function Profile() {
  return (
    <div id="profile" className="section">
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-secondary mb-3 ">Awesome Skill</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
            I am a web developer who loves all things about technology. The
            technologies that I master as a web developer include HTML, CSS,
            JavaScript, PHP, MySQL, MongoDB, which is also supported by my
            ability to solve problems effectively.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="text-center w-full max-w-[450px] mx-auto mb-[50px]">
            <div className="min-w-[300] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden">
              <img src="/images/Profildwi.jpg" alt="" />
            </div>
            <h2 className="text-gradient text-[48px] mt-[20px]">
              Dwi Nur Firmanto
            </h2>
          </div>
          <div className="w-full lg:pt-[50px] lg:ml-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/1.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">jquery</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem illo blanditiis{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/2.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">Bootstrap</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem illo blanditiis{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/3.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">CSS3</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem illo blanditiis{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                  <img src="/images/4.png" alt="" />
                  <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                    <div className="text-center w-full text-white">
                      <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                        <h4 className="text-gradient">HTML5</h4>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem illo blanditiis{" "}
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

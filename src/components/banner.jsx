import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block text-center ">
          <p className="font-secondary font-black text-[30px]">Hello, I am</p>
          <div className="font-secondary">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                3000,
                "Backend Developer",
                3000,
                "Fullstack Developer",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
          <div className="max-w-[750px] text=[12px] text-center mx-auto mt-5">
            I am a web developer who loves all things about technology. The
            technologies that I master as a web developer include HTML, CSS,
            JavaScript, PHP, Reactjs, TailwindCSS, Bootstrap which is also
            supported by my ability to solve problems effectively.
          </div>
        </div>
      </div>
    </div>
  )
}

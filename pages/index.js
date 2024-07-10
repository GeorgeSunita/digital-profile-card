import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Avatar } from "../components/Avatar.jsx";
import { Button } from "../components/Button.jsx";
import { Title } from "../components/Title.jsx";
import { Intro } from "../components/Intro.jsx";
export default function Home() {
  return (
    <>
      <div className="container rounded-lg bg-f5f5f5 mx-auto mt-6 flex flex-col justify-center items-center h-[800px] bg-neutral-100 font-serif">
        <Avatar />
        <Title
          name="Sunita George"
          title="Junior front-end developer"
          link="https://sgeorgedev.netlify.app"
        />
        <div className="flex gap-4">
          <Button link="https://github.com/GeorgeSunita" title="Github" />

          <Button
            link="http://linkedin.com/in/sunita-george"
            title="LinkedIn"
          />
        </div>

        <main className="flex flex-1 items-center justify-center">
          <div className="shadow  rounded-md p-6 md:p-2 w-full text-center">
            <Intro
              heading="About"
              text="Hello👋, I am a front-end developer(junior) with a particular interest in making things beautiful. I try to keep up with modern web libraries and best practices, and am always looking for new things to learn."
            />
            <Intro
              heading="Interests"
              text="Food expert.Tech enthusiast. Travel lover. Coffee fanatic. Novice gardener."
            />
          </div>
        </main>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

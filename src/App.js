import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"])

  const particleInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

  function timeLeft() {
    const newYearDate = new Date("December 30, 2023 22:26:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  return(
    <>
      <Particles
        init={particleInitialization}
        options={{
          preset: "fireworks",
          particles: {
            number: {
              value: -100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            opacity: {
              value: 0.1, // Adjust this value to control fading time (higher value = slower fading)
              random: false,
              anim: {
                enable: false,
                speed: 10000,
                opacity_min: 0.1,
                sync: false,
              },
            },
          },
        }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter words={newYearMessage} 
          loop={false}
          cursorStyle={"👋✨"}
          cursorColor="Red"
          cursor
          // typeSpeed={20}
          // deleteSpeed={10}
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage([
            "Selamat Tahun Baru 2024!"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;

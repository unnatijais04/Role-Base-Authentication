import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row items-center py-16 md:py-24 gap-10 bg-white dark:bg-black px-4"
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-6 max-w-2xl">
        <Fade triggerOnce cascade damping={0.4} delay={500}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black dark:text-white">
            a little bit <br /> about me
          </h2>

          <div className="flex flex-col gap-4 text-black dark:text-white text-base sm:text-lg leading-relaxed">
            <p>
              I'm a full-stack developer passionate about building smooth,
              engaging websites. For me, coding is more than just work—it's a
              creative way to turn ideas into reality, from crafting the frontend
              to engineering the backend.
            </p>
            <p>
              When I'm away from the keyboard, I enjoy exploring new hobbies,
              learning fresh skills, and finding inspiration in everyday life.
            </p>
            <p>
              Curious mind with a passion for technology and building impactful solutions.
              I enjoy turning ideas into reality through code and continuously learning
              new tools and technologies.
            </p>

            {/* Social icons */}
            <div className="flex gap-5 mt-2">
              {[
                { href: "https://github.com/unnatijais04", src: "/github.svg", alt: "github" },
                { href: "www.linkedin.com/in/unnati04", src: "/linkedin.svg", alt: "linkedin" },
                { href: "mailto:unnati.jais06@gmail.com", src: "/mail.svg", alt: "email" }
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-125 transition-all duration-150 dark:invert"
                    src={icon.src}
                    alt={`${icon.alt} icon`}
                  />
                </a>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      {/* Image Section */}
      <Fade triggerOnce cascade damping={0.8} delay={300}>
        <div className="flex-1 flex justify-center">
          <img
            src="/profile.png.jpeg"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-xl object-cover"
            alt="Unnati Jaiswal"
          />
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;

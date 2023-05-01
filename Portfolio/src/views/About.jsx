export default function About (){
    return (
        <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Hey! It's
                  <strong> Edwardo Samosir </strong>
                  and I'm an <strong> Aspiring Full-Stack Developer </strong> based in
                  Jakarta. I've done
                  <strong> remote </strong>
                  projects for agencies, consulted for startups, and collaborated
                  with talented people to create
                  <strong> digital products </strong>
                  for both business and consumer use.
                </p>
                <p className="about__content-details-para">
                  I'm a bit of a digital product junky. Over the years, I've used
                  hundreds of web and mobile apps in different industries and
                  verticals. Feel free to
                  <strong> contact</strong> me here.
                </p>
              </div>
              <a href="https://www.linkedin.com/in/edwardosamosir/" className="btn btn--med btn--theme dynamicBgClr"
                >Contact</a
              >
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">Bootstrap</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">Express</div>
                <div className="skills__skill">GraphQL</div>
                <div className="skills__skill">PostgresSQL</div>
                <div className="skills__skill">MongoDB</div>
                <div className="skills__skill">Postman</div>
                <div className="skills__skill">Redis</div>
                <div className="skills__skill">Redux</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">React-Native</div>
                <div className="skills__skill">VueJS</div>
                <div className="skills__skill">EJS</div>
                <div className="skills__skill">AWS</div>
                <div className="skills__skill">Firebase</div>
                <div className="skills__skill">Docker</div>
                <div className="skills__skill">JEST</div>
                <div className="skills__skill">GIT</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
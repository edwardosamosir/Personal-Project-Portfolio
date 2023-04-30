export default function About (){
    return (
        <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
              tempora explicabo quae quod deserunt eius sapiente
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Hey! It's
                  <strong> Edwardo Samosir</strong>
                  and I'm a <strong> Frontend Web Developer </strong> located in
                  Los Angeles. I've done
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
              <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
                >Contact</a
              >
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">SASS</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Shopify</div>
                <div className="skills__skill">Wordpress</div>
                <div className="skills__skill">Google ADS</div>
                <div className="skills__skill">Facebook Ads</div>
                <div className="skills__skill">Android</div>
                <div className="skills__skill">IOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
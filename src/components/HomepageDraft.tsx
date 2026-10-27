import Image from "next/image";
import InquiryForms from "@/components/InquiryForms";

const courses = [
  {
    number: "01",
    title: "Complete Digital Marketing",
    description:
      "Digital marketing fundamentals, SEO, Google Ads, Bing Ads, social media, and YouTube marketing.",
    image:
      "https://images.openai.com/static-rsc-4/63Lrcw86_Vqe41f5mMxap7vmskK0C3715Uz0KZAPR-kxOUAcavuTbF2dIfECPh-DUl876hn9djqY6mc1whOu72pAuhniJdX1A96VYy5VQShpVpdq5CQ6bQk3-GykW6USa2b5KaHkQdL2vcs_TbxzgwS2rxNygfZ09McOc7QBkPE?purpose=inline",
    imageAlt: "Keyword research displayed on a laptop",
    category: "Marketing",
  },
  {
    number: "02",
    title: "SEO Training",
    description:
      "Learn on-page SEO, off-page SEO, technical SEO, and practical keyword research.",
    image:
      "https://images.openai.com/static-rsc-4/ZBmxJNsCRCFD5UF1Ydesq2OrPmvmsOdm_XEIQn4O8xVDGQBi6EzGP_3LgHF98onmEaixifaT_hW4hr8DDsgxYnfNYif52FmrnoajvQQUusUimnGVJ_GPDJOyGlexn3ZRz4efW_p9F-La5tUQC9ujAg2Jtxks4-l_YxEQcGY47rw?purpose=inline",
    imageAlt: "Digital advertising campaign performance dashboard",
    category: "Search",
  },
  {
    number: "03",
    title: "Google Ads / PPC",
    description:
      "Explore search campaigns, display advertising, paid promotions, and campaign optimization.",
    image:
      "https://images.openai.com/static-rsc-4/F5S8HxSakZI7n7fq7sA_NLeegoMpFuiXkRYAyCsBBLUSGOIGAsmCf7oBY0bI9sfNB5Vr63jFU3JOGAFnkzrIKmYviPhOooWjPPdfgEfBeLh6zxWxIJ4AfGWR8fh-Nx7tw86fHH18nMZ_Cg8EfGZyqSlJVG5gffacdtg2WtbKSvM?purpose=inline",
    imageAlt: "A content calendar being planned",
    category: "Advertising",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Plan content and manage Facebook, Instagram, and LinkedIn social media channels.",
    image:
      "https://images.openai.com/static-rsc-4/lae0OG4YogRljywlZWt4nZis4eM-SDjb6wvw_G7UGpJf5ylTcU1IBB4EdfhiOZwJJuJOwDrhZQalPtg1fGoMEPPN_CN2HpyEaxHrU5KWQbH_MYXaH0GFnWMF9Z-1-3XA27YfnwBNtiJ3pikuIXqXPbL-x58Av5IxEht147Z4HlZ0?purpose=inline",
    imageAlt: "YouTube marketing and channel content",
    category: "Social",
  },
  {
    number: "05",
    title: "YouTube Marketing",
    description:
      "Learn channel creation, video uploading, and channel optimization.",
    image:
      "https://images.openai.com/static-rsc-4/q3QUzmRoHSSbspH90HIgO8CfAtfD7oHNjLvXsLZxpJDwI0BvX5LzXzX6KABTjlEWhkptMFCJzjaX919asSU6Glm-OJndQEMFbG0oSHHFEf6dulRtZ7Q5Rn7PMGTPraGs56YlVZayY_9NXRrPPNQnlAAiHFsNN9hUjFCURaoaUA9CPoK7mhw59W0njN4yXx-i?purpose=inline",
    imageAlt: "A person working on a laptop",
    category: "Video",
  },
  {
    number: "06",
    title: "Content Writing & Copywriting",
    description:
      "Write website content, marketing copy, blogs, and persuasive content.",
    image:
      "https://images.openai.com/static-rsc-4/brDsppzz82gfekIuOkZIx2mT13qIM6l7H48K1qTc3yFNoh3TKULbtlfJtVkC6OItDHTWPjW8jRzVBiqdsbPHq7-tjj57ir6t39bZhhY-iPSvDeCypa7YOBeJXGcrFeNGn6sBMTVeHBuOCAFcJ0t6_ibvrrDrpT5MRuIFjIK_e8c?purpose=inline",
    imageAlt: "Lead generation strategy and planning",
    category: "Writing",
  },
  {
    number: "07",
    title: "Lead Generation",
    description:
      "Build skills in prospecting, potential customer research, and lead-generation techniques.",
    image:
      "https://images.openai.com/static-rsc-4/9WaSut0f6gb7Ebr3D7JvDOOrjvTZ1pycKuyV_z5qBKmr8plOMTBDeGo8uznkP9ABbsGRET_ytPuxGMQ_ZBiQJ_NHkjla9lpsHal3Gmuo0S9-5t7Shjk8HVcWpiwl42Tdi3n5RwrcSg5ECJU9aP9ONVvdOidDw3Qp7ZPyDgRiHoU?purpose=inline",
    imageAlt: "A landing page designed to attract customers",
    category: "Growth",
  },
  {
    number: "08",
    title: "Canva Designing",
    description:
      "Create social media graphics, marketing creatives, and visual content.",
    image:
      "https://images.openai.com/static-rsc-4/Uh3FapmNi2RehADC6CnwPx-aquBSLZJ32MxUljho5NUwDmX08RtICAn5tCFnzkqis0EhAtOu-SOznoQxs0ufeBdMxHJwIKYVP053MmycTRm64L83UEn162Q2V1XF4-H8clWYudM9RGP_Weicdou8DddNcIzhKh69NNCSz5P-3ts?purpose=inline",
    imageAlt: "Designing graphics on a computer",
    category: "Design",
  },
  {
    number: "09",
    title: "MS Office / Basic Computer Skills",
    description:
      "Build confidence with basic computer skills and Microsoft Word, Excel, and PowerPoint.",
    image:
      "https://images.openai.com/static-rsc-4/63Lrcw86_Vqe41f5mMxap7vmskK0C3715Uz0KZAPR-kxOUAcavuTbF2dIfECPh-DUl876hn9djqY6mc1whOu72pAuhniJdX1A96VYy5VQShpVpdq5CQ6bQk3-GykW6USa2b5KaHkQdL2vcs_TbxzgwS2rxNygfZ09McOc7QBkPE?purpose=inline",
    imageAlt: "A laptop used for learning computer skills",
    category: "Essentials",
  },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Build a polished online presence for your business.",
    icon: "</>",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Connect your brand with the right people online.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Search Engine Optimization",
    description: "Improve your website's visibility in search.",
    icon: "⌕",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description: "Create a consistent and engaging social presence.",
    icon: "◎",
  },
  {
    number: "05",
    title: "PPC & Paid Advertising",
    description: "Plan and manage targeted paid campaigns.",
    icon: "◉",
  },
  {
    number: "06",
    title: "Content Writing",
    description: "Make your message clear with purposeful content.",
    icon: "Aa",
  },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/asdigitalss/" },
  { name: "Facebook", href: "https://www.facebook.com/Asdigitalss/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/asdigitals/" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="ASDIGITAL home">
            <span className="brand-mark">AS</span>
            <span className="brand-name">ASDIGITAL</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#courses">Courses</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="button button-dark header-cta"
            href="#enrollment"
          >
            Start learning <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Learn skills. Move forward.</p>
              <h1>
                Learn digital
                <br />
                skills to <span>grow.</span>
              </h1>
              <p className="hero-description">
                Build practical digital skills, open new possibilities, and take
                your next step with confidence.
              </p>
              <div className="hero-actions">
                <a className="button button-red" href="#courses">
                  Explore courses <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#about">
                  Get to know us <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="hero-note">
                Training first <span>·</span> Services for business
              </p>
            </div>
            <div className="hero-art" aria-label="Digital skills learning illustration">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-sun" />
              <div className="art-panel">
                <div className="art-panel-top"><span /><span /><span /></div>
                <div className="art-panel-content">
                  <div className="art-sidebar"><i /><i /><i /><i /></div>
                  <div className="art-dashboard">
                    <div className="art-label">A SKILL CAN CHANGE YOUR DIRECTION</div>
                    <div className="art-title-line" />
                    <div className="art-title-line short" />
                    <div className="art-chart">
                      <span /><span /><span /><span /><span /><span /><span />
                    </div>
                    <div className="art-caption">Skills in progress <b>↗</b></div>
                  </div>
                </div>
              </div>
              <div className="art-sticker sticker-top">LEARN<br />BY DOING</div>
              <div className="art-sticker sticker-bottom"><span>✳</span> LEARN IT.<br />THEN MAKE IT YOURS.</div>
              <div className="hero-art-caption">LEARN WITH PURPOSE · GROW WITH CONFIDENCE</div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Explore what you can do</span>
            <a href="#courses" aria-label="Scroll to courses">↓</a>
            <span className="hero-bottom-right">01 / 03</span>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-strip-inner">
            <span className="strip-label">THE ASDIGITAL APPROACH</span>
            <p>
              Learn the tools. Build your confidence. Take your ideas further.
            </p>
            <span className="strip-star" aria-hidden="true">✳</span>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> Find your starting point</p>
                <h2>Skills for a <span>digital world.</span></h2>
              </div>
              <p className="section-intro">
                From your first steps to focused learning, find a course that
                moves you closer to your goals.
              </p>
            </div>
            <div className="course-grid">
              {courses.map((course) => (
                <article className="course-card" key={course.number}>
                  <a
                    className="course-image"
                    href="#enrollment"
                    aria-label={`Ask about ${course.title}`}
                  >
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      unoptimized
                    />
                    <span className="course-category">{course.category}</span>
                    <span className="image-arrow" aria-hidden="true">↗</span>
                  </a>
                  <div className="course-content">
                    <span className="course-number">{course.number} / COURSE</span>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <a className="course-link" href="#enrollment">
                      Ask about this course <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="course-disclaimer">
              Course availability, schedules, fees, and duration can be
              confirmed by contacting ASDIGITAL.
            </p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-art">
              <div className="about-art-backdrop" />
              <div className="about-note note-one">CURIOSITY<br />→ SKILLS</div>
              <div className="about-note note-two">KEEP<br />GROWING <span>✳</span></div>
              <div className="about-big-type">MAKE<br />IT<br /><em>MATTER.</em></div>
              <div className="about-small-type">A LITTLE LEARNING<br />GOES A LONG WAY</div>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span /> A little about us</p>
              <h2>Built around what you can <span>become.</span></h2>
              <p>
                ASDIGITAL brings digital skills training and digital services
                together. Explore practical learning in marketing, search,
                content, design, and essential computer skills.
              </p>
              <p>
                Whether you are building your own skills or looking for help
                with your business, start a conversation and find out more.
              </p>
              <a className="button button-dark" href="#contact">
                Let&apos;s talk <span aria-hidden="true">↗</span>
              </a>
              <span className="about-aside">LEARN SOMETHING. DO SOMETHING.</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <p className="eyebrow"><span /> For your business</p>
                <h2>Good ideas deserve <span>good digital.</span></h2>
              </div>
              <p className="section-intro">
                Need a hand with your next digital project? Explore our
                services and tell us what you have in mind.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <a
                  className="service-card"
                  href="#service-inquiry"
                  key={service.number}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="inquiry-section" id="contact">
          <div className="container">
            <div className="inquiry-heading">
              <p className="eyebrow"><span /> Your next step starts here</p>
              <h2>Tell us what you&apos;re <span>looking for.</span></h2>
              <p>
                Interested in a course or a business service? Send us a note
                on WhatsApp and we&apos;ll take it from there.
              </p>
            </div>
            <InquiryForms courses={courses.map(({ title }) => title)} services={services.map(({ title }) => title)} />
            <div className="contact-direct">
              <span>Rather message us directly?</span>
              <a href="https://wa.me/923078015956" target="_blank" rel="noreferrer">
                WhatsApp +92 307 8015956 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#home" aria-label="ASDIGITAL home">
              <span className="brand-mark">AS</span>
              <span className="brand-name">ASDIGITAL</span>
            </a>
            <p>Digital skills for what comes next.</p>
          </div>
          <div className="footer-nav">
            <span className="footer-label">EXPLORE</span>
            <a href="#courses">Courses</a>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
          </div>
          <div className="footer-nav">
            <span className="footer-label">SAY HELLO</span>
            <a href="https://wa.me/923078015956" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="tel:+923078015956">+92 307 8015956</a>
            {socialLinks.map((link) => (
              <a href={link.href} key={link.name} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            ))}
          </div>
          <a className="back-to-top" href="#home" aria-label="Back to top">↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} ASDIGITAL</span>
          <span>Learn skills. Move forward.</span>
          <a href="tel:+923078015956">+92 307 8015956</a>
        </div>
      </footer>
    </>
   );
}

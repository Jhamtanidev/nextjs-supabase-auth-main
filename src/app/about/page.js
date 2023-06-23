/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/no-custom-classname */
export default function page() {
  return (
    <div className="about">
      <h2>
        <span className="font-black text-blue-400">Mission</span>
      </h2>
      <div className="align-items-right container">
        <div className="card shadow-0 border">
          <div className="card-body p-4">
            <div className="d-flex align-items-center flex-row">
              <i>
                <p>
                  Our mission is to provide real time water quality monitoring and
                  analysis at a glance. We aim to prevent further environmental
                  degradation by giving real-time data that can be used to take necessary
                  actions. We aim to manufacture Underwater ROVs capable for their
                  services in aquaculture, research, environmental monitoring and more.
                </p>
              </i>
            </div>
          </div>
        </div>
      </div>

      <h2>
        <span className="font-black text-blue-400">Our Story</span>
      </h2>
      <div className="align-items-right container">
        <div className="card shadow-0 border">
          <div className="card-body p-4">
            <div className="d-flex align-items-center flex-row">
              <i>
                <p>
                  We are a team of 5 Second Year College Students hailing from different
                  Departments of Engineering pursuing our shared passion for Science and
                  Technology from SVIT, Vasad.
                  <br />
                  Our team is mentored by the knowledgeable and experienced group of 5
                  members that are alumnus of SVIT, Vasad. They have been the guiding
                  light for our mission of making this project come to life.
                </p>
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* <h2>
        <span className="font-black text-blue-400">Meet our Team members</span>
      </h2> */}
    </div>
  );
}

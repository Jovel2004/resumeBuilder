import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='container-fluid row align-items-center'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 shadow border py-5 rounded mt-5 text-center' style={{ backgroundColor: 'rgba(225,255,255,0.5)' }}>
            <h3>Designed to get hired.
              Your skills, your story, your next job - all in one.</h3>
            <Link to={'/resume'} className='btn text-white' style={{ backgroundColor: 'purple' }}>Make Your Resume</Link>
          </div>
          <div className='col-md-4'></div>
        </div>
      </section>


      {/* Tools */}
      <section className='m-5'>
        <h1 className="text-center">Tools</h1>
        <div className='container row align-items-center '>
          <div className='col-md-6'>
            <div className='my-3'>
              <h4>Resume</h4>
              <p>Create Umlimited new resumes and easily edit them afterwards.</p>
            </div>
            <div className='my-3'>
              <h4>Cover Letters</h4>
              <p>Easily write professional cover letters.</p>
            </div>
            <div className='my-3'>
              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job posting.</p>
            </div>
            <div className='my-3'>
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
          </div>
        </div>
      </section>


      {/* image */}
      <section style={{ height: '450px', width: '100%', backgroundImage: 'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")', backgroundPosition: 'top', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      </section>


      {/* Testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonial</h1>
        <div className='row container'>
          <div className='col-md-5'>
            <h3 className='my-5'>Trusted by professionals worldwide</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>Trusted by professionals worldwide.
              At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>

            <p className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

            <p className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-6">
            <div className="row ms-5">
              <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
               <div className="col 3">
                <img width={'100px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hxkzC8ulbVek42bIXT_PIUwNsKl7inMvdw&s" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Passport_photo_of_man_with_chinstrap_beard.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg" alt="person" />
              </div>
            </div>
            <div className="row ms-5">
              <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
               <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
            </div>
               <div className="row ms-5">
              <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
               <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
              </div>
                <div className="col 3">
                <img width={'100px'} src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
                </div>




            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

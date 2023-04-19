import React from 'react'
import heroPoster1 from '../../assets/img/hero-poster.png'
import heroPoster2 from '../../assets/img/hero-poster-2.png'
import {MdOutlineError} from 'react-icons/md'
import Footer from '../../components/Footer/Footer'
import CustomLink from '../../components/CustomLink'

const Home = () => {
  return (
    <>
    <div className='desktop-view'>
      <div>
        <p style={{display:'flex',alignItems:'center'}}>
          <MdOutlineError style={{fontSize:'30px',color:'red'}}/>
          This Application is designed only for smaller Devices such mobiles and smart phones
          </p>
      </div>
    </div>
    <div className="Wrapper">
      <div className="mobile-view">
      <div className="yoga-poster">
        <img src={heroPoster1} alt='poster'/>
        </div>
      <div className="landing-section">
        <div className="hero-poster">
            <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1599447292325-2cffaa79bcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1611077094726-11cf1f992009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1522898467493-49726bf28798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1522845052468-8b871a6176e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
            <img src="https://images.unsplash.com/photo-1516208398649-d5d401ba8c49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt='yoga-img'/>
        </div>
      </div>


      <div className="section-info">
        <div className="description">
          <p>For over 30 years we’ve been leading people like you to the best yoga classes and teachers in the world so you can experience the transformational health benefits of yoga.</p>
        </div>
        <div className="benefits-yoga">
          <div className="hero-image-yoga">
            <img src='https://www.keralatourism.org/img/yoga/yoga-16.jpg' alt='model'/>
          </div>

          <div className="benfits-list">
            <h2 style={{fontSize:'15px'}}>BENEFITS OF YOGA</h2>
            <ul>
              <li>Wake up Energized</li>
              <li>Find Calm</li>
              <li>Build Strength</li>
              <li>Sharpen Focus</li>
              <li>Sleep Soundly</li>
              <li>Increase Flexibility</li>
              <li>Improve Mobility</li>
              <li>Support Longevity</li>
              <li>Live Balanced</li>
            </ul>
          </div>
        </div>

        <div className="ending-quote">
          <p>Yoga offers a powerful solution for every facet of your life - from physical wellness to emotional well-being, as well as guidance on living a fulfilling and meaningful life.</p>
        </div>

      </div>

      <div className="yoga-resources">
        <div className="yog-resources-container">
          <div className="ending-quote">
            <p style={{fontWeight:'bold',padding:'0 0 10px'}}>ENGAGING AND CONVENIENT ONLINE YOGA CLASSES</p>
            <p>Thousands of high-quality yoga classes to meet you where you are, on your schedule.</p>
          </div>

          <div className="resources-card">

            <div className="card-holder">
              <div className="card-poster">
                <img src="https://images.ctfassets.net/p0sybd6jir6r/4QJfTydnIEj70Rgz8fR0SZ/6080481cc18e9a559ac927fb355e8b79/2022.12.20.161_Full_Moon_Kriya_Sierra_Hollister_1920x1080.png?w=1600&q=70" alt="poster" />
              </div>
              <div className="title-card">Full Moon Kriya</div>
              <div className="try-now">
                <p>learn More... </p>
              </div>
            </div>


            <div className="card-holder">
              <div className="card-poster">
                <img src="https://cdn.yogajournal.com/wp-content/uploads/2021/07/Men-Yoga-Hero.jpg" alt="poster" />
              </div>
              <div className="title-card">Eyesight Longevity</div>
              <div className="try-now">
                <p>learn More... </p>
              </div>
            </div>



            <div className="card-holder">
              <div className="card-poster">
                <img src="https://hips.hearstapps.com/hmg-prod/images/701/reasons-man-make-time-yoga-main-1517321521.jpg" alt="poster" />
              </div>
              <div className="title-card">Posture Reset</div>
              <div className="try-now">
                <p>learn More... </p>
              </div>
            </div>



            <div className="card-holder">
              <div className="card-poster">
                <img src="data:image/jpeg;base64,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" alt="poster" />
              </div>
              <div className="title-card">Clean House</div>
              <div className="try-now">
                <p>learn More... </p>
              </div>
            </div>



            <div className="card-holder">
              <div className="card-poster">
                <img src="https://images.healthshots.com/healthshots/en/uploads/2021/08/13124006/Freedom-from-back-pain.jpg" alt="poster" />
              </div>
              <div className="title-card">Freedom in the side body</div>
              <div className="try-now">
                <p>learn More... </p>
              </div>
            </div>


            <div className="card-holder">
              <div className="card-poster">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRS-T-TmFiEhZGQg_jZsE3ZusrU0EjLgimkA&usqp=CAU" alt="poster" />
              </div>
              <div className="title-card">Kriya warm-up</div>
              <div className="try-now">
                <p>learn More... </p>
              </div>
            </div>

          </div>

          <div className="ending-quote">
            <p>Audio practices to boost your energy, improve your mood, and help you sleep in minutes.</p>
          </div>

          <div className="ending-quote">
            <p style={{fontWeight:'bold',padding:'0 0 10px'}}>START YOUR JOURNEY TO WELL-BEING AND TRANSFORMATION NOW!</p>
            <div className="start-your-subscription">
                <p>
                  <CustomLink to="/register">
                  Book Your Slot
                  </CustomLink> 
                  </p>
            </div>
          </div>

          <div className="ending-quote">
          <p style={{fontWeight:'bold',padding:'0 0 10px'}}>TAKE CHARGE OF YOUR PATH</p>
            <p>Stay motivated by customizing and tracking your daily yoga routine.</p>
          </div>

        </div>
      </div>

      <div className="yoga-poster">
        <img src={heroPoster2} alt='poster'/>
      </div>

      <div className="ending-quote">
          <p style={{fontWeight:'bold',padding:'0 0 10px'}}>CONNECT AND GROW WITH TOP YOGA TEACHERS</p>
            <p>Practice with some of the best yoga teachers in the world, across a variety of styles.</p>
      </div>

      <div className="hero-poster">
        <div className="card-holder-circle">
              <div className="card-poster-circle">
                <img src="https://basicmodels.com.sg/wp-content/uploads/2019/06/AIMEE_052-scaled.jpg" alt="poster" />
              </div>
              <div className="title-card-circle">Dianne Bondy</div>
        </div>

        <div className="card-holder-circle">
              <div className="card-poster-circle">
                <img src="https://cdn.mos.cms.futurecdn.net/7UmhdacgKWk9gLheGHNjNe-415-80.jpg" alt="poster" />
              </div>
              <div className="title-card-circle">Luke ketterhagen</div>
        </div>


        <div className="card-holder-circle">
              <div className="card-poster-circle">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsu4uvqg1Hyipz46gAhDZncZdYGKX1wj9mFd8pEEYQqtjKZQj-9qv6nHlQDGmCdiaXzc&usqp=CAU" alt="poster" />
              </div>
              <div className="title-card-circle">Amy Ippoliti</div>
        </div>

        <div className="card-holder-circle">
              <div className="card-poster-circle">
                <img src="https://img.huffingtonpost.com/asset/5e543c25230000520939c2c3.jpeg?cache=CjTYKi66vw&ops=crop_0_0_4000_3703%2Cscalefit_720_noupscale" alt="poster" />
              </div>
              <div className="title-card-circle">Oneika mays</div>
        </div>

        <div className="card-holder-circle">
              <div className="card-poster-circle">
                <img src="https://ektakanu.vercel.app/img/2.jpg" alt="poster" />
              </div>
              <div className="title-card-circle">Ekta kanu</div>
        </div>

      </div>

      <div className="ending-quote">
            <p>
            Our specially selected teachers come from a multitude of educational backgrounds and experiences, and teach to a variety of individuals just like you! Plus, we think they’re awesome people too!
            </p>
      </div>

      <div className="ending-quote">
        <p style={{fontWeight:'bold',padding:'0 0 10px'}}>READY TO GET STARTED?</p>
        <p>Join today and get a full year of Yogavar membership for $99.00/year</p>
      </div>

      <div className="ending-quote">
        <p style={{fontWeight:'bold',padding:'0 0 10px'}}>YOGAVAR MEMBERSHIP INCLUDES</p>
      </div>


      <div className="resources-card ">
        <div style={{width:'100px',height:'80px'}} className="card-holder">
              <div className="title-card">
                <h1>3000+</h1>
                <p>YOGA PRACTICES</p>
              </div>
        </div>

        <div style={{width:'100px',height:'80px'}} className="card-holder">
              <div className="title-card">
                <h1>700+</h1>
                <p>MEDITATION</p>
              </div>
        </div>


        <div style={{width:'100px',height:'80px'}} className="card-holder">
              <div className="title-card">
                <h1>100+</h1>
                <p>PRANAYAMA PRACTICES</p>
              </div>
        </div>

        <div style={{width:'100px',height:'80px'}} className="card-holder">
              <div className="title-card">
                <h1>2700+</h1>
                <p>ARTICLES</p>
              </div>
        </div>

        <div style={{width:'100px',height:'80px'}} className="card-holder">
              <div className="title-card">
                <h1>300+</h1>
                <p>COURSES</p>
              </div>
        </div>
      </div>

      <div className="ending-quote">
        <p style={{fontWeight:'bold',padding:'0 0 10px'}}>START YOUR JOURNEY TO WELL-BEING AND TRANSFORMATION NOW!</p>
        <div className="start-your-subscription">
          <p> 
          <CustomLink to="/register">
                  Book Your Slot
                  </CustomLink> 
          </p>
        </div>
      </div>

      </div>

      <Footer/>

    </div>
    </>
  )
}

export default Home

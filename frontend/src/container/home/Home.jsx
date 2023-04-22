import React from 'react'
import heroPoster1 from '../../assets/img/hero-poster.png'
import heroPoster2 from '../../assets/img/hero-poster-2.png'
import Footer from '../../components/Footer/Footer'
import CustomLink from '../../components/utils/CustomLink'
import imgUrl from '../../utils/media'
import CardHolder from '../../components/Card/CardHolder'
import Heading from '../../components/Heading/Heading'
import Benefits from '../../components/utils/Benefits'
import MentorCard from '../../components/utils/MentorCard';
import MembershipInclude from '../../components/utils/MembershipInclude'
import Table from '../../components/Table/Table'


const Home = () => {  
  return (
    <>
    <div className="Wrapper">
      <div className="mobile-view">
      <div className="yoga-poster">
        <img src={heroPoster1} alt='poster'/>
        </div>
      <div className="landing-section">
        <div className="hero-poster">
            {
              imgUrl.map((url)=>{
                return(
                  <img key={url.id}
                  src={url.galleryUrl} 
                  alt="yoga_img" />
                )
              })
            }
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

          <Benefits/>
        </div>

        <Heading>
          <p>Yoga offers a powerful solution for every facet of your 
            life - from physical wellness to emotional well-being, 
            as well as guidance on living a fulfilling and meaningful life.
          </p>
        </Heading>

      </div>

      <div className="yoga-resources">
        <div className="yog-resources-container">
          <Heading>
            <p style={{fontWeight:'bold',padding:'0 0 10px'}}>
              ENGAGING AND CONVENIENT ONLINE YOGA CLASSES
            </p>
            <p>
              Thousands of high-quality yoga classes to meet you where you are, on your schedule.
            </p>
          </Heading>

          <CardHolder/>

          <Heading>
            <p>Audio practices to boost your energy, 
              improve your mood, and help you sleep in minutes.
            </p>
          </Heading>

          <Heading>
          <p className='ending-quote-bold'>
              START YOUR JOURNEY TO WELL-BEING AND TRANSFORMATION NOW!
            </p>
            <div className="start-your-subscription">
                <p>
                  <CustomLink to="/register">
                  Book Your Slot
                  </CustomLink> 
                  </p>
            </div>
          </Heading>

          <Heading>
            <p className='ending-quote-bold'>
            TAKE CHARGE OF YOUR PATH
            </p>
            <p>
              Stay motivated by customizing and tracking your daily yoga routine.
            </p>
          </Heading>

        </div>
      </div>

      <div className="yoga-poster">
        <img src={heroPoster2} alt='poster'/>
      </div>

      <Heading>
        <p className='ending-quote-bold'>
            CONNECT AND GROW WITH TOP YOGA TEACHERS
        </p>
        <p>
          Practice with some of the best yoga teachers in the world, 
          across a variety of styles.
        </p>
      </Heading>

      <MentorCard/>

      <Heading>
        <p>
            Our specially selected teachers come from a multitude 
            of educational backgrounds and experiences, and teach 
            to a variety of individuals just like you! Plus, we think 
            they’re awesome people too!
        </p>
      </Heading>

      <div className="ending-quote">
        <p className='ending-quote-bold'>READY TO GET STARTED?</p>
        <p>Join today and get a full year of Yogavar membership for $99.00/year</p>
      </div>

      <Table/>

      <div className="ending-quote">
        <p className='ending-quote-bold'>YOGAVAR MEMBERSHIP INCLUDES</p>
      </div>


      <MembershipInclude/>

      <Heading>
        <p className='ending-quote-bold'>
          START YOUR JOURNEY TO WELL-BEING AND TRANSFORMATION NOW!
        </p>
        <div className="start-your-subscription">
          <CustomLink to="/register">
            Book Your Slot
          </CustomLink> 
        </div>
      </Heading>

      </div>

      <Footer/>

    </div>
    </>
  )
}

export default Home

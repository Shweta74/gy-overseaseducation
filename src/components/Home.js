import React from 'react'
import Carousel from "./Carousel"
import { FaCaretRight, FaMousePointer, FaClock, FaUser, FaCheck, FaLongArrowAltRight, FaPeopleArrows, FaFolderOpen, FaFolder, FaPhone } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'
import Testimonial from './Testimonial';
const Home = () => {
  const slides = [
    'https://www.studynextoverseas.com/assets/img/hero-carousel/carousel-3.png',
    'https://www.studynextoverseas.com/assets/img/hero-carousel/carousel-4.png', 
    'https://www.studynextoverseas.com/assets/img/hero-carousel/carousel-5.png',
    "https://www.studynextoverseas.com/assets/img/About-Us.jpg",
    "https://www.studynextoverseas.com/assets/img/footer-bg.jpg",
];
  return (
    <div >
      <div>
        <Carousel slides={slides} />
      </div>
      <div className='bg-white rounded-lg p-12 w-6/12 mx-auto text-center'>
        <h2 className= "text-blue-950 text-3xl my-6"> Why Study Abroad?</h2>
        <p className=" text-slate-800 text-lg">Studying abroad offers a transformative and enriching experience that goes beyond traditional education. It opens doors to a world of diverse cultures, perspectives, and opportunities. Immerse yourself in a new environment, enhancing your adaptability, cross-cultural communication skills, and global awareness. The chance to learn from renowned professors in international institutions adds depth to your academic journey. Beyond the classroom, explore historic landmarks, try new cuisines, and build friendships with peers from around the globe. This adventure fosters personal growth, independence, and self-discovery as you navigate unfamiliar situations, building resilience and confidence. The memories and insights gained from studying abroad become invaluable assets, 
          enriching your professional and personal life.
           Employers value the skills cultivated through this experience – from problem-solving in diverse contexts to embracing change with an open mind. Seize the opportunity to broaden your horizons, enhance your education, and create lasting memories. Embark on this adventure to gain a unique perspective on the world and yourself.</p>

        <h2 className= "text-blue-950 text-3xl my-6">Discover Your Ideal Program</h2>
        <p className=" text-slate-800 text-lg">Picture yourself studying amidst historic European architecture, embracing the bustling streets of Asian metropolises, or delving into the academic excellence of North American institutions. Whether you're passionate about engineering, business, arts, or sciences, we have a plethora of options waiting for you. At Study Next Overseas, we're not just about sending you abroad; we're about sending you on a path of growth, exploration, and self-discovery. It's time to step out of your comfort zone and embrace the world as your classroom. Your journey starts here. Your dreams take flight with us. Unveil the opportunities that await – contact us today and let's begin this exciting adventure together!</p>

        <h2 className= "text-blue-950 text-3xl my-6">Support Every Step of the Way</h2>
        <p className=" text-slate-800 text-lg">Our mission is to simplify the complex process of studying abroad. From the moment you walk through our doors or reach out to us online, we're committed to understanding your aspirations, interests, and concerns. We believe that your journey is unique, and our approach reflects that belief.
          Our experienced consultants will take the time to understand your academic background, career objectives, and personal preferences. This information forms the foundation of our tailored guidance. Transitioning to a new country can be a culture shock. Our pre-departure orientations equip you with the knowledge and confidence needed to thrive in your new environment. Studying abroad is more than classrooms and textbooks – it's about embracing new cultures, forming global friendships, and gaining a broader perspective on life. Our support extends beyond the administrative aspects to help you adapt to the cultural nuances of your destination. At Study Next Overseas, we're more than consultants; we're your companions on this transformative journey. We take pride in celebrating your victories, guiding you through challenges, and witnessing your personal growth.</p>
      </div>
      <div className='bg-blue-950 p-24 '>
        <h2 className='text-white text-5xl pb-12 text-center'>Services</h2>
        <ul className='flex flex-wrap mx-auto justify-center '>
            <li className="bg-white rounded-md drop-shadow-xl p-12 w-3/12 m-6 group ">
                <FaPeopleArrows className='mb-6 text-4xl text-slate-300 group-hover:text-blue-900 duration-700'/>
                <h3 className='inline-block text-blue-950 text-3xl mb-6 border-b-2 pb-2 border-spacing-4 border-slate-300 duration-700 group-hover:border-blue-900'>Counselling</h3>
                <p className=" text-slate-800 text-lg mb-6">Expert Study Abroad Counseling for USA, UK, Canada, Europe and Asia. Personalized Guidance, Visa Assistance, Scholarships and Top Universities. Enroll Now for a Global Education Experience!</p>
                <Link  className='flex items-center text-yellow-500 text-lg mt-6  hover:text-yellow-600 duration-700' to="/">Learn more<span><FaLongArrowAltRight className='ml-2 text-xl text-slate-300 group-hover:text-yellow-600 duration-700'/></span></Link>
            </li>
            <li className=" bg-white rounded-md drop-shadow-xl p-12 w-3/12 m-6 group ">
                <FaFolderOpen className='mb-6 text-4xl text-slate-300 group-hover:text-blue-900 duration-700'/>
                <h3 className='text-blue-950 inline-block text-3xl mb-6 border-b-2 pb-2 border-spacing-4 border-slate-300 duration-700 group-hover:border-blue-900'>Counselling</h3>
                <p className=" text-slate-800 text-lg mb-6">Expert Study Abroad Counseling for USA, UK, Canada, Europe and Asia. Personalized Guidance, Visa Assistance, Scholarships and Top Universities. Enroll Now for a Global Education Experience!</p>
                <Link  className='flex items-center text-yellow-500 text-lg mt-6  hover:text-yellow-600 duration-700' to="/">Learn more<span><FaLongArrowAltRight className='ml-2 text-xl text-slate-300 group-hover:text-yellow-600 duration-700'/></span></Link>
            </li>
            <li className=" bg-white rounded-md drop-shadow-xl p-12 w-3/12 m-6 group ">
                <FaFolder className='mb-6 text-4xl text-slate-300 group-hover:text-blue-900 duration-700'/>
                <h3 className='text-blue-950 inline-block text-3xl mb-6 border-b-2 pb-2 border-spacing-4 border-slate-300 duration-700 group-hover:border-blue-900'>Counselling</h3>
                <p className=" text-slate-800 text-lg mb-6">Expert Study Abroad Counseling for USA, UK, Canada, Europe and Asia. Personalized Guidance, Visa Assistance, Scholarships and Top Universities. Enroll Now for a Global Education Experience!</p>
                <Link  className='flex items-center text-yellow-500 text-lg mt-6  hover:text-yellow-600 duration-700' to="/">Learn more<span><FaLongArrowAltRight className='ml-2 text-xl text-slate-300 group-hover:text-yellow-600 duration-700'/></span></Link>
            </li>
            <li className=" bg-white rounded-md drop-shadow-xl p-12 w-3/12 m-6 group ">
                <FaPhone className='mb-6 text-4xl text-slate-300 group-hover:text-blue-900 duration-700'/>
                <h3 className='text-blue-950 inline-block text-3xl mb-6 border-b-2 pb-2 border-spacing-4 border-slate-300 duration-700 group-hover:border-blue-900'>Counselling</h3>
                <p className=" text-slate-800 text-lg mb-6">Expert Study Abroad Counseling for USA, UK, Canada, Europe and Asia. Personalized Guidance, Visa Assistance, Scholarships and Top Universities. Enroll Now for a Global Education Experience!</p>
                <Link  className='flex items-center text-yellow-500 text-lg mt-6  hover:text-yellow-600 duration-700' to="/">Learn more<span><FaLongArrowAltRight className='ml-2 text-xl text-slate-300 group-hover:text-yellow-600 duration-700'/></span></Link>
            </li>
            <li className=" bg-white rounded-md drop-shadow-xl p-12 w-3/12 m-6 group ">
                <FaPeopleArrows className='mb-6 text-4xl text-slate-300 group-hover:text-blue-900 duration-700'/>
                <h3 className='text-blue-950 inline-block text-3xl mb-6 border-b-2 pb-2 border-spacing-4 border-slate-300 duration-700 group-hover:border-blue-900'>Counselling</h3>
                <p className=" text-slate-800 text-lg mb-6">Expert Study Abroad Counseling for USA, UK, Canada, Europe and Asia. Personalized Guidance, Visa Assistance, Scholarships and Top Universities. Enroll Now for a Global Education Experience!</p>
                <Link  className='flex items-center text-yellow-500 text-lg mt-6  hover:text-yellow-600 duration-700' to="/">Learn more<span><FaLongArrowAltRight className='ml-2 text-xl text-slate-300 group-hover:text-yellow-600 duration-700'/></span></Link>
            </li>
            <li className=" bg-white rounded-md drop-shadow-xl p-12 w-3/12 m-6 group ">
                <FaPeopleArrows className='mb-6 text-4xl text-slate-300 group-hover:text-blue-900 duration-700'/>
                <h3 className='text-blue-950 inline-block text-3xl mb-6 border-b-2 pb-2 border-spacing-4 border-slate-300 duration-700 group-hover:border-blue-900'>Counselling</h3>
                <p className=" text-slate-800 text-lg mb-6">Expert Study Abroad Counseling for USA, UK, Canada, Europe and Asia. Personalized Guidance, Visa Assistance, Scholarships and Top Universities. Enroll Now for a Global Education Experience!</p>
                <Link  className='flex items-center text-yellow-500 text-lg mt-6  hover:text-yellow-600 duration-700' to="/">Learn more<span><FaLongArrowAltRight className='ml-2 text-xl text-slate-300 group-hover:text-yellow-600 duration-700'/></span></Link>
            </li>
        </ul>
      </div>
      <div className="bg-cover bg-bottom bg-no-repeat bg-fixed  h-96" style={{backgroundImage: "url('https://www.paulmerchants.net/paulmerchants/wp-content/themes/paulmerchant/images/great-achivement-bg.jpg')"}}>
        <div className='w-10/12 mx-auto py-12 flex  text-white'>
          <div className='relative w-1/4'>
            <div ><img src="https://www.paulmerchants.net/paulmerchants/wp-content/themes/paulmerchant/images/achivememt-bg.png" alt="Our Achievements"/></div>
            <span className='absolute bottom-20 left-[-24px] text-4xl'><strong> Our<br/>Achievements </strong></span>
          </div>
          <div className="achieve-box  w-3/4 flex ">
            <section id="tf-stat-170" className="statistics n1 stats-custom-0  flex" data-sp="80">
              {/* <h3>Counter</h3> */}
              <div className="statistics-inner flex w-full justify-evenly items-center text-center">
                <div className="stat text-xl border-r-2 border-yellow-500 px-8" data-count="31" data-orignal_count="31">
                  <span className=""></span><span className="text-4xl font-extrabold w-full">31+</span><br/>
                  <span className="count-title">Years of Business Expertise</span>
                </div>
                <div className="stat text-xl border-r-2 border-yellow-500 px-8" data-count="180" data-orignal_count="180">
                  <span className=""></span>
                  <span className="text-4xl font-extrabold w-full">180+</span><br/>
                  <span className="count-title">Offices in all Over India</span>
                </div>
                <div className="stat text-xl border-r-2 border-yellow-500 px-8" data-count="1000" data-orignal_count="1000">
                  <span className=""></span>
                  <span className="text-4xl w-full font-extrabold">1000+</span><br/>
                  <span className="count-title">Dedicated Employees</span>
                </div>
                <div className="stat text-xl px-8" data-count="3" data-orignal_count="3">
                  <span className=""></span>
                  <span className="text-4xl font-extrabold">3M+</span><br/>
                  <span className="count-title">Customers Served</span>
                </div>
                </div>
            </section>					
					</div>
        </div>
      </div>
      <div className="bg-cover bg-bottom bg-no-repeat bg-fixed " style={{backgroundImage: "url('https://www.paulmerchants.net/paulmerchants/wp-content/themes/paulmerchant/images/merchant-limited-bg.jpg')"}}>
        <div className='w-10/12 mx-auto py-24 text-black text-center'> 
          <div><h2 className="text-blue-950 text-4xl font-bold pb-6 leading-tight tracking-tight mb-8">WHY GY OVERSEAS EDUCATION LIMITED?</h2></div>
          <div className='flex '>
            <div className='text-left w-8/12'>
                <h3 className="text-blue-950 text-4xl pb-6  ">We at <strong>GY OVERSEAS</strong> commit to strive for total customer satisfaction through:</h3>
                <ul className='flex flex-wrap w-9/12 mb-12'>
                  <li className='flex text-lg w-full mb-2'><FaCaretRight className='text-xl text-blue-950' /> Delivery of Services with Full Conformity to Customer Needs & Expectations.</li>
                  <li className='flex text-lg w-full mb-2 '><FaCaretRight className='text-xl text-blue-950' /> Continual Improvement in the Effectiveness of Systems through Regular Review.</li>
                  <li className='flex text-lg w-full mb-2' ><FaCaretRight className='text-xl text-blue-950' /> Training & Development of Our Workforce</li>
                  <li className='flex text-lg w-full mb-2'><FaCaretRight className='text-xl text-blue-950' /> An ISO 9001:2015 – Certified Company for Its Quality Systems and Processes</li>
                  <li className='flex text-lg w-full mb-2'><FaCaretRight className='text-xl text-blue-950' /> We Offer Trustworthy and Convenient Solutions to Your Forex Needs at the Best Rates</li>
                  <li className='flex text-lg w-full mb-2'><FaCaretRight className='text-xl text-blue-950' /> We Have Streamlined, Easy-To-Do and Fast Operational Procedures to Help Customers Make Swift Telegraphic Transfers</li>
                  <li className='flex text-lg w-full mb-2'><FaCaretRight className='text-xl text-blue-950' /> Our World-Class Services Work On Stout Systems & Processes That Brings Us Closer to the Customer</li>
                </ul>
                <Link to="/contact" className='bg-blue-950 text-white font-bold p-4 rounded-md '> GET IN TOUCH</Link>
            </div>
            <div className='pl-8 border-l border-gray-800'>
              <div className='text-black text-2xl flex text-left '>
                <FaCheck className='text-6xl pr-8'/>
                <div >
                  <strong>100%</strong>
                  <p>TRANSPARENT</p>
                </div>
              </div>
              <div className='text-black text-2xl flex text-left mt-8'>
                <FaMousePointer className='text-6xl pr-8'/>
                <div>
                  <strong>PROGRESSIVE</strong>
                  <p>APPROACH</p>
                </div>
              </div>
              <div className='text-black text-2xl flex text-left mt-8'>
                <FaClock className='text-6xl pr-8'/>
                <div>
                  <strong>TIMELY</strong>
                  <p>DELIVERY</p>
                </div>
              </div>
              <div className='text-black text-2xl flex text-left mt-8'>
                <FaUser className='text-6xl pr-8'/>
                <div className=' items-center '>
                  <strong>CUSTOMER</strong>
                  <p>IS SUPREME</p>
                </div>
              </div>
              
            </div>   
          </div> 
        </div>
      </div>
      <Testimonial/>

    </div>
  )
}

export default Home

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; 
import { aboutList } from '../../utility/mockData';
import { Link } from 'react-router-dom';
import Testimonial from './Testimonial';
import ComponentCard from './ComponentCard';
const About=()=>{
    return(
        <div>
            <div className=' bg-slate-100 text-lg'>
                <div className="bg-cover bg-bottom bg-no-repeat bg-fixed h-full" style={{backgroundImage: "url('https://www.studynextoverseas.com/assets/img/About-Us.jpg')"}}></div>
                <div className="py-24">
                    <div className="bg-white rounded-lg p-12 w-6/12 mx-auto">
                        <h3 className="text-blue-950 text-3xl mb-6">Our Story………</h3>
                        <p className=" text-slate-800 text-lg">
    Study Next Overseas began with a vision to empower students worldwide with transformative educational experiences abroad. With expert guidance, a passion for cultural exchange, and personalized assistance, we've been a guiding light for countless students, helping them achieve their dreams and shape successful futures on an international stage.
        <br/><br/>
    Study Next Overseas is a premium overseas education consultancy that guides students from India and United Kingdom for their studies and careers abroad for over 12 years cumulatively. It offers services that help students in making the most important decisions of their life – Goals, Future Career, and to achieve this education, we provide information on more than 80,000+ courses from 3000+ Universities and over 23+ countries. Our counselling process has a unique approach in matching student’s profile with relevant courses which has long term career goals, life planning, future demand in industry, both on national and international level.
    <br/><br/>
    The team at Study Next Overseas comprises of professionals who themselves have either studied overseas at top universities or have been in this industry for many years including citizens and graduates from UK and India. The average counselling experience of our team is more than 6 years. Our team not only provide services to the students when they are in their home country, but also assists them upon landing at their desired countries
    <br/><br/>
    Study Next Overseas has a team of highly talented visa professionals, who are dedicated to get students through visa process successfully. All the team members within the Visa lodgement division receive a very rigorous training about Immigration Guidelines, New updates, Policy changes, so that they can provide the best outcome possible for our students. Team’s knowledge regarding the Visa Compliance and their Development is Paramount to Study Next Overseas and hence a monthly training and assessment is performed for each member to keep their knowledge base up-to-date. This has often brought about a High Visa Success Rate for Study Next Overseas and helped us gain trust of our Students, their Parents and other Family members. We continuously extend our invitation and encouragement to students to stay updated with our latest and up-to-date information, which we regularly post on our website, blogs, and social media pages .</p>
                    </div>
                </div>
                <div className="py-24 bg-white text-center">
                    <h3 className="text-blue-950 text-5xl pb-6">Our Team</h3>
                    <div className="flex justify-between text-center">
                    {
                      aboutList.map((about)=>(
                   
                        <Link key={about.id} to="/"><ComponentCard  cardData={about}/></Link>
                      ))
                    }
                    </div>
                </div>    
                {/* <div className="py-24 text-center ">
                    <h3 className="text-blue-950 text-5xl pb-6">Testimonials</h3>
                    <p className="text-xl italic">Our students love us! They rave about the outstanding service we provide and how we made their dreams of studying abroad come true. Highly recommended!</p>
                    <ul className="flex mt-24">
                    <li className="border border-blue-500 hover:bg-white duration-500 text-blue-500 rounded-md drop-shadow-xl p-6 mx-6">
                            <img className=" w-32 h-32 mx-auto rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg"/>
                            <h4 className="text-slate text-2xl my-5">Shweta Yadav</h4>
                            <p><FaQuoteLeft className='text-xl  text-white-500'/>Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.<FaQuoteRight className='text-xl  text-blue-500'/></p>

                        </li>
                        <li className="border border-blue-500 hover:bg-white duration-500 text-blue-500 rounded-md drop-shadow-xl p-6 mx-6">
                            <img className=" w-32 h-32 mx-auto rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg"/>
                            <h4 className="text-slate text-xl my-5">Shweta Yadav</h4>
                            <p><FaQuoteLeft className='text-2xl  text-white-500'/>
                            Meet Bill Gates, the visionary leader behind Study Next Overseas. 
                            With a passion for global education and a deep understanding of the transformative
                             power of studying abroad, Rakesh is committed to empowering students to reach new he
                             ights and broaden their horizons.<FaQuoteRight className='text-xl  text-blue-500'/></p>

                        </li>
                        <li className="border hover:bg-white duration-500 border-blue-500 text-blue-500 rounded-md drop-shadow-xl p-6 mx-6">
                            <img className=" w-32 h-32 mx-auto rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/399px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg"/>
                            <h4 className="text-slate text-2xl my-5">Shweta Yadav</h4>
                            <p><FaQuoteLeft className='text-xl  text-white-500'/>Meet Bill Gates, the visionary leader behind Study Next Overseas. With a passion for global education and a deep understanding of the transformative power of studying abroad, Rakesh is committed to empowering students to reach new heights and broaden their horizons.<FaQuoteRight className='text-xl  text-blue-500'/></p>

                        </li>
                    </ul>
                </div> */}
                <Testimonial/>
            </div>
        </div>
    )
}

export default About;
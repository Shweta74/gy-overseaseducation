import React from 'react'
import { Link } from 'react-router-dom';
import { servList } from '../../utility/mockData';
import ComponentCard from './ComponentCard';
const Services = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat bg-fixed  h-96" style={{backgroundImage: "url('https://www.studynextoverseas.com/assets/img/footer-bg.jpg')"}}>
      </div>
      <div className="py-24 bg-white text-center">
                    <h3 className="text-blue-950 text-5xl pb-6">Our Services</h3>
                    <div className="flex justify-between text-left">
                      {
                        servList.map((service)=>(
                          <Link key={service.id} to={`/services/${service.id}`}>
                          <ComponentCard  cardData={service} />
                          </Link>
                        
                          ))
                      }
                    </div>
                </div>    
    </div>
  )
}

export default Services
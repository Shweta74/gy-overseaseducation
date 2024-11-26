import React,{useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to a server
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };
  return (
    <div className=' bg-slate-100 text-lg'>
        <div className="bg-cover bg-bottom bg-no-repeat bg-fixed  h-96" style={{backgroundImage: "url('https://www.studynextoverseas.com/assets/img/breadcrumbs-bg.jpg')"}}>
        </div>
        <div className='py-24 '>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-16 bg-white  rounded-lg drop-shadow-xl">
            <h3 className='text-blue-600 mb-10 text-3xl '>Contact us</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-slate-800">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border  border-gray-400 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-slate-800">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-400 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block mb-2 text-slate-800">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full px-3 border-gray-400 py-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-slate-800">How can we help?</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 border border-gray-400 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-md border border-transparent hover:border-blue-600">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact
import Image from 'next/image';
import React from 'react';
const projects = <div>
 <div className="p-6 bg-white mt-4 ">
  <h2 className="text-3xl font-semibold ">Our Projects</h2>

<div className=' space-y-4'>
  {/* Section - Education and Career Guidance */}
  <div className="mb-6 py-6 ">
    <h3 className="text-xl font-semibold mb-2">Education and Career Guidance</h3>
    <p>We offer initiatives to help students and professionals make informed career decisions. These include:</p>
    <ul className="list-disc ml-3 list-inside mt-3 space-y-3">
      <li><strong>Career Counseling:</strong> Personalized sessions to match individuals&apos; strengths with suitable careers.</li>
      <li><strong>Workshops and Seminars:</strong> Expert-led events on resume building, interview skills, and industry trends.</li>
      <li><strong>Mentorship Programs:</strong> Connecting young professionals with experienced mentors for ongoing support.</li>
      <li><strong>Scholarships and Financial Aid:</strong> Helping deserving students achieve educational goals by offering financial support.</li>
    </ul>
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 gap-5'>
      
      <div className="mt-4">
        <img src="/images/ongoing/img4.jpg" alt="Skill Development Image" className="w-full h-64 object-cover rounded-lg"/>
      </div>
      
      <div className="mt-4">
        <img src="/images/ongoing/img2.jpg" alt="Skill Development Image" className="w-full h-64 object-cover rounded-lg"/>
      </div>
    </div>
  </div>

  {/* Section - Healthcare Initiatives */}
  <div className="mb-6  space-y-5 py-6">
    <h3 className="text-xl font-semibold mb-2">Healthcare Initiatives</h3>
    <p>Our healthcare programs aim to make quality healthcare accessible to all. Key initiatives include:</p>
    
    {/* CARE Medical Project */}
    <div className="ml-4">
      <h4 className="text-lg font-medium mb-2">CARE Medical Project</h4>
      <p>Focused on enhancing access to affordable medications through:</p>
      <ul className="list-disc ml-3 list-inside mt-3 space-y-3">
        <li><strong>Generic Medical Stores:</strong> Offering essential medicines at lower prices for those in need.</li>
        <li><strong>Medicine Drop Boxes:</strong> Collecting unused medications for redistribution to underprivileged individuals, reducing wastage.</li>
        <li><strong>Crowdfunding for Medicines:</strong> Raising funds to provide free medicines for those who cannot afford them.</li>
      </ul>
    </div>

    {/* Health Camps */}
    <div className="ml-4">
      <h4 className="text-lg font-medium mb-2">Health Camps</h4>
      <p>Organizing free medical checkups and consultations in underserved areas.</p>
    </div>

    {/* Awareness Drives */}
    <div className="ml-4">
      <h4 className="text-lg font-medium mb-2">Awareness Drives</h4>
      <p>Educating communities about preventive healthcare, nutrition, and hygiene.</p>
    </div>

    {/* Healthcare Partnerships */}
    <div className="ml-4">
      <h4 className="text-lg font-medium mb-2">Healthcare Partnerships</h4>
      <p>Collaborating with hospitals and clinics to increase the reach of our healthcare initiatives.</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-5 gap-5'>
      
      <div className="mt-4">
        <img src="/images/ongoing/img2.jpg" alt="Skill Development Image" className="w-full h-64 object-cover rounded-lg"/>
      </div>
      
      <div className="mt-4">
        <img src="/images/ongoing/img1.jpg" alt="Skill Development Image" className="w-full h-64 object-cover rounded-lg"/>
      </div>
    </div>
  </div>
  </div>
  </div>
</div>;
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 mt-[90px]">
        {/* Header Section */}
        <section className="relative h-[230px] w-full">
        <Image
          src="/images/contact/breadcrumbs_bg.jpg"
          alt="bg"
          fill
          className="absolute top-0 left-0 object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"/>
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-4xl text-5xl font-bold text-white">About Us</h2>
          {/* <p className="mt-4 text-white font-medium">
          join us in making a positive impact. Whether you can volunteer, donate,
          or contribute in any other way, your support is invaluable.
          </p> */}
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-bold text-center mb-10">
    About <span className="text-[#8ac240]">Bharathaksha</span> <span className="text-[#0e2f50]">Foundation</span>
  </h1>
  
  {/* First section */}
  <div className="mb-8 p-6 bg-white shadow rounded-lg">
    <p>
      At Bharathaksha Foundation, we believe in empowering individuals and communities through the twin pillars of education and healthcare. Established with a vision to make a meaningful difference in society, our foundation focuses on providing comprehensive career guidance and accessible healthcare services to those in need.
    </p>
    <div className="mt-4">
      {/* Image placeholder */}
      <img src="/images/ongoing/img3.jpg" alt="Foundation Image" className="w-full h-64 object-cover rounded-lg"/>
    </div>
  </div>

  <h3 className="text-2xl font-semibold text-center mb-8">Bharathaksha Foundation: Vision of India that is Bharat</h3>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Section 1 - Introduction */}
    <div className="p-6 bg-blue-50 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
      <p>
      Bharathaksha Foundation is a nonprofit organization driven by the vision of India that is Bharat. With a strong focus on education, career guidance, skill development, and healthcare, the foundation strives to empower individuals and create a more inclusive society. Through its initiatives, including the establishment of generic medical stores, medicine drop boxes, and crowdfunding for free medicines, Bharathaksha Foundation aims to address the healthcare needs of the underprivileged while providing educational support and guidance.
      </p>
      {/* <div className="mt-4">
        <img src="/images/ongoing/img1.jpg" alt="Introduction Image" className="w-full h-64 object-cover rounded-lg"/>
      </div> */}
    </div>

    {/* Section 2 - Education and Career Guidance */}
    <div className="p-6 bg-green-50 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Education and Career Guidance</h2>
      <p>
      Bharathaksha Foundation recognizes the transformative power of education and the importance of career guidance in shaping the future of individuals. The foundation is committed to providing educational support and guidance to students from diverse backgrounds. Through career counseling, workshops, and mentorship programs, Bharathaksha Foundation helps individuals make informed decisions about their educational and career paths. By empowering students with the necessary knowledge and skills, the foundation aims to enhance their employability and contribute to their personal and professional growth.
      </p>
      {/* <div className="mt-4">
        <img src="/images/ongoing/img2.jpg" alt="Education Image" className="w-full h-64 object-cover rounded-lg"/>
      </div> */}
    </div>

    {/* Section 3 - Skill Development */}
    <div className="p-6 bg-yellow-50 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Skill Development</h2>
      <p>
      In line with its vision of an empowered India, Bharathaksha Foundation places great emphasis on skill development. The foundation offers skill development programs and vocational training to equip individuals with the necessary skills for employment and entrepreneurship. By providing training in various sectors, such as technology, healthcare, and vocational trades, Bharathaksha Foundation aims to bridge the gap between education and industry requirements, thereby enhancing the employability and socioeconomic prospects of individuals.
      </p>
      {/* <div className="mt-4">
        <img src="/images/ongoing/img3.jpg" alt="Skill Development Image" className="w-full h-64 object-cover rounded-lg"/>
      </div> */}
    </div>

    {/* Section 4 - Healthcare Initiatives */}
    <div className="p-6 bg-purple-50 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Healthcare Initiatives</h2>
      <p>
      Bharathaksha Foundation recognizes the critical need for accessible healthcare, particularly for the underprivileged. To address this, the foundation has established generic medical stores, which provide affordable medicines to individuals who may otherwise struggle to afford them. Additionally, medicine drop boxes are strategically placed in pharmacies, hospitals, and public spaces to collect unused or unexpired medications. These medications are then redistributed to those in need, reducing medication wastage and ensuring that the underprivileged have access to necessary medicines. To further support this cause, Bharathaksha Foundation utilizes crowdfunding initiatives to raise funds for the purchase and distribution of free medicines to those who cannot afford them.
      </p>
      {/* <div className="mt-4">
        <img src="/images/ongoing/img4.jpg" alt="Healthcare Image" className="w-full h-64 object-cover rounded-lg"/>
      </div> */}
    </div>
  </div>

  {/* Mission Section */}
  <div className="max-w-7xl mx-auto mt-12 p-6 bg-white">
    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
    <p className="mb-4">
    Our mission is to bridge the gap in education and healthcare by offering resources, guidance, and support to individuals, helping them achieve their full potential and lead healthier lives. We strive to create an inclusive environment where every individual has the opportunity to succeed, regardless of their background or circumstances.
    </p>
    <p className="mb-4">
    Bharathaksha Foundation  Vision of India that is Bharat, is dedicated to empowering individuals through education, career guidance, skill development, and accessible healthcare. By providing career counseling, skill training, and educational support, the foundation aims to uplift individuals and enhance their socioeconomic prospects. Through the establishment of generic medical stores, medicine drop boxes, and crowdfunding initiatives, Bharathaksha Foundation addresses the healthcare needs of the underprivileged, ensuring that they have access to essential medicines. With a holistic approach to empowerment and a commitment to the welfare of the underprivileged, Bharathaksha Foundation strives to create a more inclusive and prosperous India that reflects the true spirit of Bharat.
    </p>
    <div className="mt-4">
      <img src="/images/ongoing/img3.jpg" alt="Mission Image" className="w-full h-64 object-cover rounded-lg"/>
    </div>
  </div>

  {/* Projects Section */}
 {projects}


     <div className="p-6 bg-white ">

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Integrity:</strong> We uphold the highest ethical standards in all our actions.</li>
            <li><strong>Inclusivity:</strong> We are dedicated to fostering diversity and inclusion.</li>
            <li><strong>Empowerment:</strong> We believe in providing individuals with the knowledge and resources they need to succeed.</li>
            <li><strong>Compassion:</strong> We approach our work with empathy, aiming to make a positive impact.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Vision for India: Educate, Inform, Guide</h2>
          <div className="space-y-4">
            <p><strong>Educate:</strong> Education is a core value of the Bharathaksha Foundation. We aim to provide access to quality education for all, empowering individuals with the skills and knowledge necessary for personal growth and socioeconomic development.</p>
            <p><strong>Inform:</strong> We prioritize sharing accurate and reliable information about education and healthcare. By raising awareness and providing insights, we help individuals make informed decisions and navigate complex challenges.</p>
            <p><strong>Guide:</strong> Through career counseling, mentorship, and healthcare advisory services, we offer guidance to help individuals reach their full potential in education and healthcare.</p>
          </div>
            {/* <h3 className="text-2xl font-semibold mb-4 mt-6">Join Us</h3>
            <p className="mb-4">
              At Bharathaksha Foundation, we are always looking for passionate individuals and organizations to join us in our mission. Whether you are looking to volunteer, partner with us, or support our initiatives, there are many ways to get involved and make a difference.
            </p>
            <p className="mb-4">
              Together, we can build a brighter future through education and healthcare.
            </p>
            <h4 className='text-lg font-medium mb-4'>Contact Us</h4>
            <p>Bharathaksha Foundation</p>
            <p>Head office: 202, Himalaya Prestige,</p>
            <p>Udupi  Manipal Road, Kunjibettu, Udupi – 576106</p>
            <p>Mumbai Office:</p> */}
         
        </section>

        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Career Guidance for Marginalized Students</h2>
          <p>Our Career Guidance initiative helps marginalized students by providing career awareness, mentorship, and the necessary tools to pursue their ambitions.</p>

          <h3 className="text-xl font-semibold mt-8">Key Components:</h3>
          <ul className="list-disc list-inside space-y-4 mt-4">
            <li><strong>Career Awareness Workshops:</strong> Workshops introduce students to various career paths, helping them align their strengths with potential career options.</li>
            <li><strong>Personalized Career Counseling:</strong> One-on-one sessions help students identify their strengths, set realistic goals, and create actionable career plans.</li>
            <li><strong>Mentorship Programs:</strong> Students are connected with industry professionals who offer guidance, networking opportunities, and ongoing support.</li>
            <li><strong>Resource Provision:</strong> We provide educational materials, financial assistance, and technology access to ensure students have the tools needed to succeed.</li>
            <li><strong>Partnerships with Schools and Communities:</strong> We collaborate with schools and communities to expand our reach and tailor our programs to local needs.</li>
          </ul>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">CARE Medical Project</h2>
          <p>The CARE Medical Project is focused on making healthcare accessible and affordable to underserved communities through three initiatives: a generic medical store, medicine drop boxes, and crowdfunding for medicines.</p>

          <h3 className="text-xl font-semibold mt-8">Key Initiatives:</h3>
          <ul className="list-disc list-inside space-y-4 mt-4">
            <li><strong>Generic Medical Store:</strong> We provide affordable, high-quality generic medicines, making healthcare more accessible.</li>
            <li><strong>Medicine Drop Boxes:</strong> Unused, unexpired medicines are collected and redistributed to those in need, reducing waste and saving lives.</li>
            <li><strong>Crowdfunding for Medicines:</strong> We mobilize community support to raise funds for essential medicines for the underprivileged.</li>
          </ul>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">LocalSupport.org: Empowering Communities</h2>
          <p>LocalSupport.org is a platform that connects community members, businesses, and organizations to meet essential needs and promote collaboration.</p>

          <h3 className="text-xl font-semibold mt-8">Key Features:</h3>
          <ul className="list-disc list-inside space-y-4 mt-4">
            <li><strong>Needs Board:</strong> NGOs can post needs, and local resources can be matched to meet those needs.</li>
            <li><strong>Resource Directory:</strong> A comprehensive list of local services such as food banks, shelters, and medical services.</li>
            <li><strong>Volunteer Hub:</strong> Individuals can find and sign up for volunteer opportunities that match their skills and interests.</li>
            <li><strong>Events Calendar:</strong> A centralized calendar for community events and educational programs.</li>
            <li><strong>Blog and News Updates:</strong> Sharing community stories and educational content.</li>
            <li><strong>Feedback and Reviews:</strong> Users can provide feedback to improve accountability and service delivery.</li>
            <li><strong>Data Analytics:</strong> Tracking and reporting key metrics to assess community impact and improve the platform’s services.</li>
          </ul>
        </section> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

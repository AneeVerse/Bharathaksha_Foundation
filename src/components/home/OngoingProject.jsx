import React from 'react';

const onGoingProjectLists = [
  {
    title: "CARE Medical Project",
    des: `Making healthcare accessible through affordable medicines, crowdfunding, and medical drop-box initiatives.`,
    url: `/home/ongoing-projects`,
    imgUrl: `/images/ongoing/img1.jpg`,
  },
  {
    title: "Education for All",
    des: `Empowering marginalized communities with educational resources and skill-building workshops.`,
    url: `/home/ongoing-projects`,
    imgUrl: `/images/ongoing/img2.jpg`,
  },
  {
    title: "Skill Development",
    des: `Offering vocational training programs to boost employment opportunities for the underprivileged.`,
    url: `/home/ongoing-projects`,
    imgUrl: `/images/ongoing/img3.jpg`,
  },
];

const OngoingProject = () => {
  return (
    <div>
      {/* Project Highlights */}
      <section className="py-[70px] bg-gradient-to-b from-white via-[#f0f8f7] to-[#f2f6f1]">
        {/* Section Header */}
        <div className="text-center flex flex-col justify-center gap-3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
            Ongoing Projects
          </h2>
          <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full animate-pulse" />
        </div>

        {/* Project Cards */}
        <div className="container mx-auto pt-[50px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {onGoingProjectLists.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className="relative bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                >
                  {/* Image with subtle animation */}
                  <img
                    src={val.imgUrl}
                    alt={val.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 transition-opacity duration-300 hover:opacity-90"
                  />

                  {/* Project Title */}
                  <h2 className="text-2xl font-bold mb-2 text-[#0e2f50]">
                    {val.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {val.des}
                  </p>

                  {/* Learn More Button */}
                  <a
                    href={val.url}
                    className="inline-block px-6 py-2 bg-[#8ac240] text-white rounded-lg hover:bg-[#5d8626] transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              );
            })}
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-center mt-12">
            <a
              href="/home/ongoing-projects"
              className="px-10 py-3 bg-[#8ac240] text-white rounded-full hover:bg-[#5d8626] transition duration-300 ease-in-out transform hover:scale-105 text-lg font-semibold"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProject;

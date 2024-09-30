"use client";
import Loader from '@/components/layout/Loader';
// pages/quiz.js
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const quizzes = [
  {
    id: 'rsi-test',
    imageSrc: '/images/ongoing/rsi-test.webp',
    title: 'RSI Test',
    description: 'Assess your risk for repetitive strain injury and learn prevention tips.',
  },
  {
    id: 'adversity-quiz',
    imageSrc: '/images/ongoing/adversity-test.webp',
    title: 'Adversity Response Test',
    description: 'Explore how you handle adversity and cope with stress.',
  },
  {
    id: 'riasec-test',
    imageSrc: '/images/ongoing/riasec-test.webp',
    title: 'RIASEC Test',
    description: 'Discover your career interests based on the RIASEC model.',
  },
  {
    id: 'psi-test',
    imageSrc: '/images/ongoing/psi-test.webp',
    title: 'PSI Test',
    description: 'Gain insights into your personality traits and behaviors.',
  },
  {
    id: 'learning-style-test',
    imageSrc: '/images/ongoing/quiz-test-2.webp',
    title: 'Learning Style Test',
    description: 'Find out your learning style to enhance study efficiency.',
  },
  {
    id: 'social-style-test',
    imageSrc: '/images/ongoing/quiz-test.webp',
    title: 'Social Style Test',
    description: 'Understand your social interaction style and communication skills.',
  },
];

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const [isLoading , setIsLoading] = useState(false);

    
  const router = useRouter();
  const handleQuizClick = (quizId) => {
    // setSelectedQuiz(quizId);
    const token = localStorage.getItem("token");
      if (!token) {
        router.push("/auth/login"); // Redirect to home if token exists
      }else{
        router.push(`/dashboard/exam/${quizId}`)

      }
  };

  // Check if the user is already logged in, if so, redirect to home page
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/auth/login"); // Redirect to home if token exists
  //   }
  //       setIsLoading(false)
  // }, []);


  // if(isLoading) return <Loader/>
  return (
    <div className="mt-[90px]  pb-[30px] bg-gray-100 min-h-screen">
          {/* Title and Description */}
      <div className="relative h-[230px] w-full">
        <Image
          src="/images/contact/breadcrumbs_bg.jpg"
          alt="bg"
          fill
          className="absolute top-0 left-0 object-cover w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
        <div className="relative z-10 max-w-7xl px-4 h-full w-full flex flex-col justify-center items-center mx-auto text-center">
          <h2 className="text-5xl font-bold text-white">Exam</h2>
          <p className="mt-4 text-white font-medium max-w-xl mx-auto">
          Bharataksha Foundation&apos;s test page offers a variety of engaging assessments designed to help you explore and enhance your knowledge in multiple fields.
          </p>
        </div>
      </div>
      <div className="text-center p-5 flex flex-col my-8 justify-center gap-3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
          Take Test
          </h2>
          <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full animate-pulse" />
        </div>  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-8">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="relative bg-white rounded-lg shadow-sm overflow-hidden"
           
          >
            <div className="relative w-full h-64">
              <Image
                src={quiz.imageSrc}
                alt={quiz.title}
                layout="fill"
                objectFit="fill"
                className=""
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{quiz.title}</h2>
              <p className="text-gray-600 mb-2">{quiz.description}</p>
              <p className="text-gray-600 mb-4 "><span className='font-bold'>Language: </span> English, हिन्दी, मराठी</p>
              <div 
                className="w-full font-semibold text-md py-2 px-4 border border-[#8ac240] text-[#8ac240] rounded-md hover:text-white hover:bg-[#8ac240] cursor-pointer text-center duration-300"
                onClick={() => handleQuizClick(quiz.id)}
              >
                Start Test
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;

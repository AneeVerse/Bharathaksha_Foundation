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
    imageSrc: '/images/ongoing/quiz-test-2.webp',
    title: 'RSI Test',
    description: 'Description of Quiz 1',
  },
  {
    id: 'adversity-quiz',
    imageSrc: '/images/ongoing/quiz-test.webp',
    title: 'Adversity Response Quize',
    description: 'Adversity Response Profile Quize',
  },
  {
    id: 'riasec-test',
    imageSrc: '/images/ongoing/quiz-test-2.webp',
    title: 'Riasec Quiz',
    description: 'Description of Quiz 3',
  },

  {
    id: 'psi-test',
    imageSrc: '/images/ongoing/quiz-test.webp',
    title: 'Psi Test',
    description: 'Description of Quiz 4',
  },

  {
    id: 'learning-style-test',
    imageSrc: '/images/ongoing/quiz-test-2.webp',
    title: 'Earning Style Quiz',
    description: 'Description of Quiz 5',
  },

  {
    id: 'social-style-test',
    imageSrc: '/images/ongoing/quiz-test.webp',
    title: 'Social Style Quiz',
    description: 'Description of Quiz 6',
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
    <div className="mt-[90px] pt-[30px] pb-[30px] bg-gray-100 min-h-screen">
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
          <h2 className="text-4xl font-bold text-white">Exam</h2>
          <p className="mt-4 text-white font-medium">
            Some Highlight Description
          </p>
        </div>
      </div>
      <div className="text-center p-5 flex flex-col my-8 justify-center gap-3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
          Choose a Quiz
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
              <p className="text-gray-600 mb-4">Language: Hindi, English, Marathi</p>
              {/* <p className="text-gray-600 mb-4">{quiz.description}</p> */}
              <div 
                className="w-full text-md py-2 px-4 border border-green-600 text-green-600 rounded-md hover:text-white hover:bg-green-700 cursor-pointer text-center duration-300"
                onClick={() => handleQuizClick(quiz.id)}
              >
                Start Quiz
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;

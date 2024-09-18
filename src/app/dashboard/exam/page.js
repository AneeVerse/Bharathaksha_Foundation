"use client";
import Loader from '@/components/layout/Loader';
// pages/quiz.js
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const quizzes = [
  {
    id: '1',
    imageSrc: '/images/ongoing/img1.jpg',
    title: 'Quiz 1',
    description: 'Description of Quiz 1',
  },
  {
    id: '2',
    imageSrc: '/images/ongoing/img2.jpg',
    title: 'Quiz 2',
    description: 'Description of Quiz 2',
  },
  {
    id: '3',
    imageSrc: '/images/ongoing/img3.jpg',
    title: 'Quiz 3',
    description: 'Description of Quiz 3',
  },

  {
    id: '4',
    imageSrc: '/images/ongoing/img4.jpg',
    title: 'Quiz 4',
    description: 'Description of Quiz 4',
  },

  {
    id: '5',
    imageSrc: '/images/ongoing/img1.jpg',
    title: 'Quiz 5',
    description: 'Description of Quiz 5',
  },

  {
    id: '6',
    imageSrc: '/images/ongoing/img1.jpg',
    title: 'Quiz 6',
    description: 'Description of Quiz 6',
  },
];

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const [isLoading , setIsLoading] = useState(true);

    
  const router = useRouter();
  const handleQuizClick = (quizId) => {
    setSelectedQuiz(quizId);
  };

  // Check if the user is already logged in, if so, redirect to home page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login"); // Redirect to home if token exists
    }
        setIsLoading(false)
  }, []);


  if(isLoading) return <Loader/>
  return (
    <div className="p-6 mt-[90px] bg-gray-100 min-h-screen">
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
      <div className="text-center flex flex-col my-8 justify-center gap-3">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
          Choose a Quiz
          </h2>
          <div className="inline-block self-center h-1 bg-[#8ac240] w-[70px] rounded-full animate-pulse" />
        </div>  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-8">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
           
          >
            <div className="relative w-full h-64">
              <Image
                src={quiz.imageSrc}
                alt={quiz.title}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{quiz.title}</h2>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <Link 
              href={`/dashboard/exam/${quiz.id}`}
                className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => handleQuizClick(quiz.id)}
              >
                Start Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;

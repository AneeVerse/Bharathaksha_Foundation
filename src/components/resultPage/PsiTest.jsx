import { FaUser, FaLightbulb, FaHeartbeat, FaCog, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const scoreInterpretation = (score) => {
  if (score >= 30) return "Considerable strength in the dimension; considerable weakness in the other member of the pair";
  if (score >= 25) return "Definite strength in the dimension; definite weakness in the other member of the pair";
  if (score >= 22) return "Some strength in the dimension; some weakness in the other member of the pair";
  return "Balance in the strengths of the dimensions";
};

const categoryDescriptions = {
  I: {
    name: "Introversion",
    icon: <FaUser className="text-indigo-600 text-3xl" />,
    description: "Persons more introverted tend to make decisions somewhat independently of external constraints from the situation, culture, people, or things around them.  They will analyse all these factors and then make a judgement based on what they see is the right path.  They are usually diligent at working alone although they can be congenial and friendly communicators.  They may dislike being interrupted while working taking longer to get back into the flow but stay on task more easily."
  },
  E: {
    name: "Extroversion",
    icon: <FaLightbulb className="text-yellow-600 text-3xl" />,
    description: "Extroverted persons are attuned to the culture, people, and things around them, endeavoring to make decisions congruent with demands and expectations.  The extrovert recharges their battery from being around and working with people.  The extrovert may become impatient with long, slow tasks and does not mind being interrupted by people."
  },
  N: {
    name: "Intuition",
    icon: <FaLightbulb className="text-blue-600 text-3xl" />,
    description: "The intuitive person prefers possibilities, theories, wholes, the overall, invention, and the new and becomes bored with nitty-gritty details, the concrete and actual, and bare facts unrelated to concepts. The intuitive person thinks and discusses in terms of intuition that may sometimes leave out or neglect details. Problem solving comes easily for this individual, although there may make errors of fact if they don’t pay attention to details."
  },
  S: {
    name: "Sensing",
    icon: <FaHeartbeat className="text-red-600 text-3xl" />,
    description: "The sensing type prefers the concrete, real, factual, structured, tangible here and now, becoming impatient with theory and the abstract, mistrusting intuition. The sensing type thinks in careful, detail-by-detail accuracy, remembering real facts, making few errors of fact, but possibly missing a conception of the overall."
  },
  T: {
    name: "Thinking",
    icon: <FaCog className="text-green-600 text-3xl" />,
    description: "The thinker makes judgments about life, people, occurrences, and things based on logic, analysis, and evidence, avoiding the “irrationality” of making decisions based on feelings and values.  As a result, the thinker is more interested in logic, analysis, and verifiable conclusions. The thinker may seem to step on others’ feelings and needs without realizing it, neglecting to take into consideration the values of others if they interfere with common sense."
  },
  F: {
    name: "Feeling",
    icon: <FaHeartbeat className="text-pink-600 text-3xl" />,
    description: "The feeler makes judgments about life, people, occurrences, and things based on empathy, subjectivity and personal values. As a consequence, feelers are more interested in people and feelings than in impersonal logic, analysis, and things, and in conciliation and harmony more than in being on top or achieving impersonal goals.  They are possibly more interested in how decisions affect the people involved than in the raw outcome or result."
  },
  P: {
    name: "Perceiving",
    icon: <FaHandsHelping className="text-orange-600 text-3xl" />,
    description: "The perceiver is a gatherer, always wanting to know more before deciding, holding off decisions and judgments. As a consequence, the perceiver is open, flexible, adaptive,  able to see and appreciate all sides of issues, always welcoming new perspectives and new information about issues. However, perceivers are also difficult to pin down and may be indecisive and noncommittal, becoming involved in so many tasks that do not reach closure that they may become frustrated at times. Even when they finish tasks, perceivers will tend to look back at them and wonder whether they are satisfactory or could have been done another way.  The perceiver wishes to roll with life but can become frustrated with this approach at times too."
  },
  J: {
    name: "Judging",
    icon: <FaBalanceScale className="text-gray-600 text-3xl" />,
    description: "The judger is more decisive, firm, and sure, setting goals and sticking to them. The judger wants to close books, make decisions, and get on to the next project.  When a project does not yet have closure, judgers will leave it behind and go on to new tasks and not look back."
  }
};

const personalityTypeDescriptions = {
  ESFJ: "Warm-hearted, talkative, popular, conscientious, born cooperators, active committee members. Need harmony and may be good at creating it. Always doing something for someone. Work best with encouragement and praise. Main interest is in things that directly and visibly affect people’s lives.",
  ISTJ: "Serious, quiet, earn success by concentration and thoroughness. Practical, orderly, matter-of-fact, logical, realistic and dependable. See to it that everything is well organized. Take responsibility. Make up their own minds as to what should be accomplished and work toward it steadily, regardless of protests or distractions.",
  ISFJ: "Quiet, friendly, responsible and conscientious. Work devotedly to meet their obligations and serve their friends and school. Thorough, painstaking, accurate. May need time to master technical subjects, as their interests are usually not technical. Patient with detail and routine. Loyal, considerate, concerned with how other people feel.",
  INFJ: "Succeed by perseverance, originality and desire to do whatever is needed or wanted. Put their best efforts into their work. Quietly forceful, conscientious, concerned for others. Respected for their firm principles. Likely to be honored and followed for their clear convictions as to how best to serve the common good.",
  INTJ: "Usually have original minds and great drive for their own ideas and purposes. In fields that appeal to them, they have a fine power to organize a job and carry it through with or without help. Skeptical, critical, independent, determined, often stubborn. Must learn to yield less important points in order to win the most important.",
  ISTP: "Cool onlookers-quiet, reserved, observing and analyzing life with detached curiosity and unexpected flashes of original humor. Usually interested in impersonal principles, cause and effect, how and why mechanical things work. Exert themselves no more than they think necessary, because any waste of energy would be inefficient.",
  ISFP: "Retiring, quietly friendly, sensitive, kind, modest about their abilities. Shun disagreements; do not force their opinions or values on others. Usually do not care to lead but are often loyal followers. Often relaxed about getting things done, because they enjoy the present moment and do not want to spoil it by undue haste or exertion.",
  INFP: "Full of enthusiasms and loyalties, but seldom talk of these until they know you well. Care about learning, ideas, language, and independent projects of their own. Tend to undertake too much, then somehow get it done. Friendly, but often too absorbed in what they are doing to be sociable. Little concerned with possessions or physical surroundings.",
  INTP: "Quiet, reserved, brilliant in exams, especially in theoretical or scientific subjects. Logical to the point of hair-splitting. Usually interested mainly in ideas, with little liking for irrelevant small talk. Need to choose careers where some strong interest can be used and useful.",
  ESTP: "Matter-of-fact, do not worry or hurry, enjoy whatever comes along. Tend to like mechanical things and sports, with friends on the side. May appear a bit blunt or insensitive. Can be good at math or science when they see the need. Dislike long explanations. Are best with real things that can be worked, handled, taken apart or put together.",
  ESFP: "Outgoing, easygoing, accepting, friendly, enjoy everything and make things more fun for others by their enjoyment. Like sports and making things. Know what’s going on and join in eagerly. Find remembering facts easier than mastering theories. Are best in situations that need sound common sense and practical ability with people as well as with things.",
  ENFP: "Warmly enthusiastic, high-spirited, ingenious, imaginative. Able to do almost anything that interests them. Quick with a solution for any difficulty and ready to help anyone with a problem. Often rely on their ability to improvise instead of preparing in advance. Can usually find compelling reasons for whatever they want.",
  ENTP: "Quick, ingenious, good at many things. Stimulating company, alert and outspoken. May argue for fun on either side of a question. Resourceful in solving new and challenging problems, but may neglect routine assignments. Apt to turn to one new interest after another. Skillful in finding logical reasons for what they want.",
  ESTJ: "Practical, realistic, matter-of-fact, with a natural head for business or mechanics. Not interested in subjects they see no use for, but can apply themselves when necessary. Like to organize and run activities. May make good administrators, especially if they remember to consider others’ feelings and points of view.",
  ENFJ: "Responsive and responsible. Generally feel real concern for what others think or want, and try to handle things with due regard for other people’s feelings. Can present a proposal or lead a group discussion with ease and tact. Sociable, popular, active, but put time enough into do good work.",
  ENTJ: "Hearty, frank, able in studies, leaders in activities. Usually good in anything that requires reasoning and intelligent talk, such as public speaking. Are usually well informed and enjoy adding to their fund of knowledge. May sometimes be more positive and confident than their experience in an area warrants."
};

const strengthsWeaknesses = {
  introvert: {
    strengths: ["Independent & diligent", "Works well alone", "Works with ideas & reflects", "Is careful of generalizations", "Is careful before acting"],
    weaknesses: ["Misunderstands the external", "loses opportunities to act by overthinking", "is misunderstood by others when they need quiet time","needs quiet environment to work", "dislikes being interrupted"]
  },
  extrovert: {
    strengths: ["Understands the external", "Interacts with others", "Is open", "Acts, does","Is well understood"],
    weaknesses: ["has less independence", "does not work without people", "needs change, variety", "is impulsive", "is impatient with routine"]
  }
};

export default function PsiTest({ data }) {
  const router = useRouter();
  const { finalType, categoryScores } = data;
  const isIntrovert = finalType.startsWith('I');
  const displayedCategories = Object.keys(categoryScores).filter((category) => finalType.includes(category));

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" bg-white p-5 sm:p-10 ">
        {/* Final Personality Type Section */}
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">Psi Personality Test Result</h2>
        <div className="text-center mb-10">
          <p className="text-2xl mb-3 font-semibold text-gray-700">{"Your Final Personality Type IS:".toUpperCase()} <span className='font-bold text-indigo-600'>{finalType}</span></p>
  
          <p className="text-gray-700 font-semibold max-w-5xl mx-auto">{personalityTypeDescriptions[finalType]}</p>
        </div>

        {/* Selected Categories Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800 text-center">Your Personality Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {displayedCategories.map((category) => (
              <div key={category} className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center gap-4 mb-2">
                  {categoryDescriptions[category].icon}
                  <h4 className="text-2xl font-bold text-gray-800">{category}-{categoryDescriptions[category].name} </h4>
                </div>
                {/* <p className="text-4xl font-bold text-indigo-600 mb-2">{categoryScores[category]}</p> */}
                <p className="text-gray-600 mb-2">{categoryDescriptions[category].description}</p>
                <p className="text-gray-500 italic">{scoreInterpretation(categoryScores[category])}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths and Weaknesses Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800 text-center">Strengths and Weaknesses</h3>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-center mb-2">Strengths</h4>
              <ul className="list-disc pl-6">
                {isIntrovert
                  ? strengthsWeaknesses.introvert.strengths.map((strength, index) => <li key={index} className="text-gray-700">{strength}</li>)
                  : strengthsWeaknesses.extrovert.strengths.map((strength, index) => <li key={index} className="text-gray-700">{strength}</li>)
                }
              </ul>
            </div>
            <div>
              <h4 className="text-2xl text-center font-bold mb-2">Weaknesses</h4>
              <ul className="list-disc pl-6">
                {isIntrovert
                  ? strengthsWeaknesses.introvert.weaknesses.map((weakness, index) => <li key={index} className="text-gray-700">{weakness}</li>)
                  : strengthsWeaknesses.extrovert.weaknesses.map((weakness, index) => <li key={index} className="text-gray-700">{weakness}</li>)
                }
              </ul>
            </div>
          </div>
        </div>

        {/* Counseling CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Need deeper insights into your personality type and career paths? Book a counseling session for personalized guidance!
          </p>
          <button
          onClick={() => alert("Redirecting to counseling page...")} // Placeholder for redirect action
          className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors shadow-lg"
        >
             Book detailed Counseling Session
          </button>
        </div>
      </div>
    </div>
  );
}

import type { User } from "@/types/user"
import { ProgressStorage } from "@/utils/progress-storage"

const initialUsers: User[] = [
  {
    username: "Brinda",
    password: "Brinda",
    yearGroup: 10,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 500,
      coins: 0,
      avatarUrl: "/cute-girl-avatar.png",
      totalQuestsCompleted: 0,
      subjects: [
        {
          id: "maths",
          name: "Mathematics",
          duration: 90,
          questions: 25,
          color: "from-blue-400 to-blue-600",
          icon: "🔢",
          level: 1,
          xp: 0,
          maxXp: 500,
          coins: 0,
          unlocked: true,
          conquestTitle: "Number Ninja",
          topics: [
            {
              id: "number",
              name: "Number",
              completed: false,
              studyMaterials: [
                {
                  id: "number-1",
                  title: "Integers and Rational Numbers",
                  content:
                    "Master positive and negative integers, understand the number line, and work with fractions, decimals, and percentages. Learn to convert between different number forms and apply them in real-world contexts.",
                  type: "text",
                },
                {
                  id: "number-2",
                  title: "Percentages and Ratios",
                  content:
                    "Calculate percentages, percentage change, and work with ratios and proportions. Apply these skills to solve problems involving finance, statistics, and everyday situations.",
                  type: "interactive",
                },
                {
                  id: "number-3",
                  title: "Standard Form and Surds",
                  content:
                    "Express very large and very small numbers in standard form. Work with surds and rationalize denominators. Essential for scientific calculations.",
                  type: "text",
                },
              ],
              quizzes: [
                {
                  id: "number-quiz-1",
                  title: "Basic Number Operations",
                  questions: [
                    {
                      id: "q1",
                      question: "What is -5 + 8?",
                      options: ["3", "-3", "13", "-13"],
                      correctAnswer: 0,
                      explanation: "-5 + 8 = 3 because you move 8 units right from -5 on the number line.",
                    },
                    {
                      id: "q2",
                      question: "Convert 3/4 to a percentage:",
                      options: ["75%", "34%", "43%", "25%"],
                      correctAnswer: 0,
                      explanation: "3/4 = 0.75 = 75%",
                    },
                    {
                      id: "q3",
                      question: "What is 20% of 150?",
                      options: ["30", "25", "35", "40"],
                      correctAnswer: 0,
                      explanation: "20% of 150 = 0.20 × 150 = 30",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 50,
                  coinReward: 10,
                },
                {
                  id: "number-quiz-2",
                  title: "Ratios and Proportions",
                  questions: [
                    {
                      id: "q1",
                      question: "Simplify the ratio 12:18",
                      options: ["2:3", "3:2", "4:6", "6:9"],
                      correctAnswer: 0,
                      explanation: "12:18 = 12÷6:18÷6 = 2:3",
                    },
                  ],
                  timeLimit: 240,
                  xpReward: 40,
                  coinReward: 8,
                },
              ],
              tests: [
                {
                  id: "number-test-1",
                  title: "Number Mastery Test",
                  questions: [
                    {
                      id: "t1",
                      question: "Calculate: (-3) × 4 + 7",
                      type: "short-answer",
                      correctAnswer: "-5",
                      points: 3,
                    },
                    {
                      id: "t2",
                      question: "A shirt costs £25. In a sale, it's reduced by 20%. What's the sale price?",
                      type: "short-answer",
                      correctAnswer: "£20",
                      points: 4,
                    },
                  ],
                  timeLimit: 1800,
                  xpReward: 100,
                  coinReward: 25,
                },
              ],
            },
            {
              id: "algebra",
              name: "Algebra",
              completed: false,
              studyMaterials: [
                {
                  id: "algebra-1",
                  title: "Linear Equations and Expressions",
                  content:
                    "Solve linear equations in one variable, expand brackets, factorize expressions, and rearrange formulas. Master the fundamental skills of algebraic manipulation.",
                  type: "text",
                },
                {
                  id: "algebra-2",
                  title: "Quadratic Equations",
                  content:
                    "Solve quadratic equations by factoring, completing the square, and using the quadratic formula. Understand the relationship between graphs and solutions.",
                  type: "interactive",
                },
                {
                  id: "algebra-3",
                  title: "Simultaneous Equations",
                  content:
                    "Solve pairs of linear equations using substitution and elimination methods. Apply to real-world problems involving two unknowns.",
                  type: "text",
                },
              ],
              quizzes: [
                {
                  id: "algebra-quiz-1",
                  title: "Linear Equations",
                  questions: [
                    {
                      id: "q1",
                      question: "Solve: 3x + 7 = 22",
                      options: ["x = 5", "x = 3", "x = 7", "x = 15"],
                      correctAnswer: 0,
                      explanation: "3x = 22 - 7 = 15, so x = 15 ÷ 3 = 5",
                    },
                  ],
                  timeLimit: 360,
                  xpReward: 60,
                  coinReward: 12,
                },
              ],
              tests: [],
            },
            {
              id: "geometry",
              name: "Geometry and Measures",
              completed: false,
              studyMaterials: [
                {
                  id: "geometry-1",
                  title: "Angles and Polygons",
                  content:
                    "Calculate angles in triangles, quadrilaterals, and polygons. Understand angle properties of parallel lines and circles.",
                  type: "text",
                },
                {
                  id: "geometry-2",
                  title: "Area and Volume",
                  content:
                    "Calculate areas of 2D shapes and volumes of 3D shapes. Apply formulas for circles, sectors, prisms, pyramids, and spheres.",
                  type: "interactive",
                },
              ],
              quizzes: [],
              tests: [],
            },
            {
              id: "statistics",
              name: "Statistics and Probability",
              completed: false,
              studyMaterials: [
                {
                  id: "stats-1",
                  title: "Data Handling and Averages",
                  content:
                    "Calculate mean, median, mode, and range. Interpret frequency tables, charts, and graphs. Understand when to use different averages.",
                  type: "text",
                },
                {
                  id: "stats-2",
                  title: "Probability",
                  content:
                    "Calculate theoretical and experimental probability. Work with probability trees, Venn diagrams, and conditional probability.",
                  type: "interactive",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "science",
          name: "Combined Science",
          duration: 105,
          questions: 30,
          color: "from-purple-400 to-purple-600",
          icon: "🧪",
          level: 1,
          xp: 0,
          maxXp: 500,
          coins: 0,
          unlocked: true,
          conquestTitle: "Lab Legend",
          topics: [
            {
              id: "cell-biology",
              name: "Cell Biology",
              completed: false,
              studyMaterials: [
                {
                  id: "bio-1",
                  title: "Cell Structure and Function",
                  content:
                    "Explore animal and plant cells, their organelles and functions. Learn about prokaryotic vs eukaryotic cells, cell specialization, and how cells work together.",
                  type: "text",
                },
                {
                  id: "bio-2",
                  title: "Cell Division and Genetics",
                  content:
                    "Understand mitosis, meiosis, DNA structure, and inheritance patterns. Learn about genetic variation and evolution.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "bio-quiz-1",
                  title: "Cell Structure Quiz",
                  questions: [
                    {
                      id: "q1",
                      question: "Which organelle controls the cell's activities?",
                      options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
                      correctAnswer: 0,
                      explanation: "The nucleus contains DNA and controls all cell activities.",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 45,
                  coinReward: 9,
                },
              ],
              tests: [],
            },
            {
              id: "chemistry",
              name: "Chemistry",
              completed: false,
              studyMaterials: [
                {
                  id: "chem-1",
                  title: "Atomic Structure and Periodic Table",
                  content:
                    "Learn about atoms, elements, compounds, and the periodic table. Understand electron configuration and chemical bonding.",
                  type: "text",
                },
                {
                  id: "chem-2",
                  title: "Chemical Reactions",
                  content:
                    "Study different types of chemical reactions, balancing equations, and calculating quantities in reactions.",
                  type: "interactive",
                },
              ],
              quizzes: [],
              tests: [],
            },
            {
              id: "physics",
              name: "Physics",
              completed: false,
              studyMaterials: [
                {
                  id: "phys-1",
                  title: "Forces and Motion",
                  content:
                    "Understand Newton's laws, calculate speed, velocity, and acceleration. Learn about forces, momentum, and energy.",
                  type: "text",
                },
                {
                  id: "phys-2",
                  title: "Electricity and Magnetism",
                  content:
                    "Study electric circuits, current, voltage, and resistance. Learn about electromagnetic induction and motors.",
                  type: "interactive",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "english",
          name: "English Language",
          duration: 75,
          questions: 20,
          color: "from-green-400 to-green-600",
          icon: "📚",
          level: 1,
          xp: 0,
          maxXp: 500,
          coins: 0,
          unlocked: true,
          conquestTitle: "Word Warrior",
          topics: [
            {
              id: "reading-comprehension",
              name: "Reading Comprehension",
              completed: false,
              studyMaterials: [
                {
                  id: "reading-1",
                  title: "Analyzing Fiction Texts",
                  content:
                    "Learn to identify themes, character development, narrative techniques, and literary devices in novels and short stories.",
                  type: "text",
                },
                {
                  id: "reading-2",
                  title: "Non-Fiction Analysis",
                  content:
                    "Analyze newspaper articles, speeches, and informational texts. Identify bias, persuasive techniques, and author's purpose.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "reading-quiz-1",
                  title: "Literary Techniques",
                  questions: [
                    {
                      id: "q1",
                      question: "What is a metaphor?",
                      options: [
                        "A direct comparison using 'like' or 'as'",
                        "A direct comparison without 'like' or 'as'",
                        "Giving human qualities to objects",
                        "An exaggeration for effect",
                      ],
                      correctAnswer: 1,
                      explanation: "A metaphor is a direct comparison that doesn't use 'like' or 'as'.",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 40,
                  coinReward: 8,
                },
              ],
              tests: [],
            },
            {
              id: "creative-writing",
              name: "Creative Writing",
              completed: false,
              studyMaterials: [
                {
                  id: "writing-1",
                  title: "Narrative Writing Techniques",
                  content:
                    "Master story structure, character development, dialogue, and descriptive writing. Learn to engage readers from the first sentence.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "computer-science",
          name: "Computer Science",
          duration: 90,
          questions: 15,
          color: "from-cyan-400 to-cyan-600",
          icon: "💻",
          level: 1,
          xp: 0,
          maxXp: 500,
          coins: 0,
          unlocked: true,
          conquestTitle: "Code Crusader",
          topics: [
            {
              id: "algorithms",
              name: "Algorithms and Programming",
              completed: false,
              studyMaterials: [
                {
                  id: "algo-1",
                  title: "Algorithm Design and Analysis",
                  content:
                    "Learn to design, trace, and analyze algorithms. Understand flowcharts, pseudocode, and computational thinking principles.",
                  type: "text",
                },
                {
                  id: "algo-2",
                  title: "Python Programming Fundamentals",
                  content:
                    "Master variables, data types, loops, conditionals, and functions in Python. Build practical programs and solve problems.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "cs-quiz-1",
                  title: "Programming Basics",
                  questions: [
                    {
                      id: "q1",
                      question: "What does a variable store?",
                      options: ["Instructions", "Data", "Programs", "Algorithms"],
                      correctAnswer: 1,
                      explanation: "A variable stores data that can be used and modified by a program.",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 50,
                  coinReward: 10,
                },
              ],
              tests: [],
            },
            {
              id: "data-representation",
              name: "Data Representation",
              completed: false,
              studyMaterials: [
                {
                  id: "data-1",
                  title: "Binary and Hexadecimal",
                  content:
                    "Understand how computers represent data using binary and hexadecimal number systems. Convert between different bases.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "french",
          name: "French",
          duration: 90,
          questions: 18,
          color: "from-rose-400 to-rose-600",
          icon: "🇫🇷",
          level: 1,
          xp: 0,
          maxXp: 500,
          coins: 0,
          unlocked: true,
          conquestTitle: "Language Legend",
          topics: [
            {
              id: "family-relationships",
              name: "Family and Relationships",
              completed: false,
              studyMaterials: [
                {
                  id: "family-1",
                  title: "Family Members and Descriptions",
                  content:
                    "Learn vocabulary for family members, physical descriptions, personality traits, and how to talk about relationships in French.",
                  type: "text",
                },
                {
                  id: "family-2",
                  title: "Daily Routines and Home Life",
                  content:
                    "Master vocabulary and phrases for describing daily routines, household chores, and family activities.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "french-quiz-1",
                  title: "Family Vocabulary",
                  questions: [
                    {
                      id: "q1",
                      question: "How do you say 'sister' in French?",
                      options: ["frère", "sœur", "mère", "fille"],
                      correctAnswer: 1,
                      explanation: "'Sœur' means sister in French.",
                    },
                  ],
                  timeLimit: 240,
                  xpReward: 35,
                  coinReward: 7,
                },
              ],
              tests: [],
            },
            {
              id: "school-education",
              name: "School and Education",
              completed: false,
              studyMaterials: [
                {
                  id: "school-1",
                  title: "School Subjects and Timetables",
                  content:
                    "Learn vocabulary for school subjects, classroom objects, and how to talk about your school timetable and preferences.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
      ],
    },
  },
  {
    username: "Supratik",
    password: "Supratik",
    yearGroup: 7,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 400,
      coins: 0,
      avatarUrl: "/cute-girl-avatar.png",
      totalQuestsCompleted: 0,
      subjects: [
        {
          id: "maths",
          name: "Mathematics",
          duration: 60,
          questions: 20,
          color: "from-blue-400 to-blue-600",
          icon: "🔢",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Number Explorer",
          topics: [
            {
              id: "number-basics",
              name: "Number Basics",
              completed: false,
              studyMaterials: [
                {
                  id: "num-basic-1",
                  title: "Positive and Negative Numbers",
                  content:
                    "Learn about positive and negative numbers, how to order them on a number line, and perform basic operations with them.",
                  type: "text",
                },
                {
                  id: "num-basic-2",
                  title: "Place Value and Rounding",
                  content:
                    "Understand place value in whole numbers and decimals. Learn to round numbers to different degrees of accuracy.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "y7-math-quiz-1",
                  title: "Number Line Adventures",
                  questions: [
                    {
                      id: "q1",
                      question: "Which number is larger: -3 or -7?",
                      options: ["-3", "-7", "They are equal", "Cannot tell"],
                      correctAnswer: 0,
                      explanation: "-3 is larger than -7 because it's closer to zero on the number line.",
                    },
                    {
                      id: "q2",
                      question: "What is 4 + (-6)?",
                      options: ["-2", "2", "10", "-10"],
                      correctAnswer: 0,
                      explanation: "4 + (-6) = 4 - 6 = -2",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 30,
                  coinReward: 6,
                },
              ],
              tests: [],
            },
            {
              id: "fractions-decimals",
              name: "Fractions and Decimals",
              completed: false,
              studyMaterials: [
                {
                  id: "frac-1",
                  title: "Understanding Fractions",
                  content:
                    "Learn what fractions represent, how to compare them, and perform basic operations like addition and subtraction.",
                  type: "text",
                },
                {
                  id: "frac-2",
                  title: "Decimals and Percentages",
                  content:
                    "Convert between fractions, decimals, and percentages. Understand their relationships and real-world applications.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "y7-frac-quiz-1",
                  title: "Fraction Fun",
                  questions: [
                    {
                      id: "q1",
                      question: "Which fraction is equivalent to 0.5?",
                      options: ["1/3", "1/2", "2/3", "3/4"],
                      correctAnswer: 1,
                      explanation: "1/2 = 0.5 because 1 ÷ 2 = 0.5",
                    },
                  ],
                  timeLimit: 240,
                  xpReward: 25,
                  coinReward: 5,
                },
              ],
              tests: [],
            },
            {
              id: "basic-algebra",
              name: "Introduction to Algebra",
              completed: false,
              studyMaterials: [
                {
                  id: "alg-basic-1",
                  title: "Using Letters for Numbers",
                  content:
                    "Understand how letters can represent unknown numbers. Learn to write simple algebraic expressions and solve basic equations.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "science",
          name: "Science",
          duration: 75,
          questions: 25,
          color: "from-purple-400 to-purple-600",
          icon: "🧪",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Science Seeker",
          topics: [
            {
              id: "cells-organisms",
              name: "Cells and Organisms",
              completed: false,
              studyMaterials: [
                {
                  id: "cells-1",
                  title: "Introduction to Cells",
                  content:
                    "Discover what cells are, the difference between plant and animal cells, and how to use a microscope to observe them.",
                  type: "text",
                },
                {
                  id: "cells-2",
                  title: "Life Processes",
                  content:
                    "Learn about the seven life processes (MRS GREN) and how different organisms carry them out.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "y7-sci-quiz-1",
                  title: "Cell Detective",
                  questions: [
                    {
                      id: "q1",
                      question: "Which part of the cell controls what goes in and out?",
                      options: ["Nucleus", "Cell membrane", "Cytoplasm", "Cell wall"],
                      correctAnswer: 1,
                      explanation: "The cell membrane controls what enters and leaves the cell.",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 35,
                  coinReward: 7,
                },
              ],
              tests: [],
            },
            {
              id: "forces-motion",
              name: "Forces and Motion",
              completed: false,
              studyMaterials: [
                {
                  id: "forces-1",
                  title: "Understanding Forces",
                  content:
                    "Learn what forces are, how they affect objects, and explore different types of forces like gravity, friction, and magnetism.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "english",
          name: "English",
          duration: 60,
          questions: 15,
          color: "from-green-400 to-green-600",
          icon: "📚",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Story Seeker",
          topics: [
            {
              id: "storytelling-origins",
              name: "Origins of Storytelling",
              completed: false,
              studyMaterials: [
                {
                  id: "story-1",
                  title: "Different Story Types",
                  content:
                    "Explore various types of stories including myths, legends, fairy tales, and modern fiction. Understand what makes each type unique.",
                  type: "text",
                },
                {
                  id: "story-2",
                  title: "Story Structure",
                  content:
                    "Learn about beginning, middle, and end. Understand how stories are built with characters, setting, and plot.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "y7-eng-quiz-1",
                  title: "Story Elements",
                  questions: [
                    {
                      id: "q1",
                      question: "What is the setting of a story?",
                      options: ["The main character", "Where and when it takes place", "The problem", "The ending"],
                      correctAnswer: 1,
                      explanation: "The setting is where and when the story takes place.",
                    },
                  ],
                  timeLimit: 240,
                  xpReward: 30,
                  coinReward: 6,
                },
              ],
              tests: [],
            },
            {
              id: "shakespeare-intro",
              name: "Introduction to Shakespeare",
              completed: false,
              studyMaterials: [
                {
                  id: "shakespeare-1",
                  title: "Who Was Shakespeare?",
                  content:
                    "Learn about William Shakespeare's life and times. Discover why his plays are still popular today.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "computer-science",
          name: "Computing",
          duration: 60,
          questions: 12,
          color: "from-cyan-400 to-cyan-600",
          icon: "💻",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Digital Detective",
          topics: [
            {
              id: "computer-basics",
              name: "Computer Basics",
              completed: false,
              studyMaterials: [
                {
                  id: "comp-1",
                  title: "How Computers Work",
                  content:
                    "Learn about computer components like the CPU, memory, and storage. Understand how computers process information.",
                  type: "text",
                },
                {
                  id: "comp-2",
                  title: "E-Safety and Digital Citizenship",
                  content:
                    "Learn how to stay safe online, protect your personal information, and be a responsible digital citizen.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "y7-comp-quiz-1",
                  title: "Computer Components",
                  questions: [
                    {
                      id: "q1",
                      question: "What does CPU stand for?",
                      options: [
                        "Computer Processing Unit",
                        "Central Processing Unit",
                        "Central Program Unit",
                        "Computer Program Unit",
                      ],
                      correctAnswer: 1,
                      explanation: "CPU stands for Central Processing Unit - the 'brain' of the computer.",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 35,
                  coinReward: 7,
                },
              ],
              tests: [],
            },
            {
              id: "programming-intro",
              name: "Introduction to Programming",
              completed: false,
              studyMaterials: [
                {
                  id: "prog-1",
                  title: "What is Programming?",
                  content:
                    "Discover what programming is and why it's important. Learn about different programming languages and their uses.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "french",
          name: "French",
          duration: 60,
          questions: 15,
          color: "from-rose-400 to-rose-600",
          icon: "🇫🇷",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "French Friend",
          topics: [
            {
              id: "about-me",
              name: "All About Me",
              completed: false,
              studyMaterials: [
                {
                  id: "me-1",
                  title: "Introducing Yourself",
                  content:
                    "Learn basic French vocabulary to introduce yourself, say your name, age, and where you live. Master essential greetings.",
                  type: "text",
                },
                {
                  id: "me-2",
                  title: "Describing Yourself",
                  content:
                    "Learn to describe your appearance, personality, and interests in French. Practice using adjectives correctly.",
                  type: "interactive",
                },
              ],
              quizzes: [
                {
                  id: "y7-french-quiz-1",
                  title: "French Greetings",
                  questions: [
                    {
                      id: "q1",
                      question: "How do you say 'Hello' in French?",
                      options: ["Au revoir", "Bonjour", "Bonsoir", "Salut"],
                      correctAnswer: 1,
                      explanation: "'Bonjour' means 'Hello' or 'Good morning' in French.",
                    },
                  ],
                  timeLimit: 240,
                  xpReward: 25,
                  coinReward: 5,
                },
              ],
              tests: [],
            },
            {
              id: "school-french",
              name: "School in French",
              completed: false,
              studyMaterials: [
                {
                  id: "school-fr-1",
                  title: "School Subjects",
                  content: "Learn the names of school subjects in French and how to express your opinions about them.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
      ],
    },
  },
  {
    username: "Sudiksha",
    password: "Sudiksha",
    yearGroup: 7,
    profile: {
      level: 1,
      xp: 0,
      maxXp: 400,
      coins: 0,
      avatarUrl: "/cute-girl-avatar.png",
      totalQuestsCompleted: 0,
      subjects: [
        {
          id: "maths",
          name: "Mathematics",
          duration: 60,
          questions: 20,
          color: "from-blue-400 to-blue-600",
          icon: "🔢",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Number Explorer",
          topics: [
            {
              id: "number-basics",
              name: "Number Basics",
              completed: false,
              studyMaterials: [
                {
                  id: "num-basic-1",
                  title: "Positive and Negative Numbers",
                  content:
                    "Learn about positive and negative numbers, how to order them on a number line, and perform basic operations with them.",
                  type: "text",
                },
              ],
              quizzes: [
                {
                  id: "y7-math-quiz-1",
                  title: "Number Line Adventures",
                  questions: [
                    {
                      id: "q1",
                      question: "Which number is larger: -3 or -7?",
                      options: ["-3", "-7", "They are equal", "Cannot tell"],
                      correctAnswer: 0,
                      explanation: "-3 is larger than -7 because it's closer to zero on the number line.",
                    },
                  ],
                  timeLimit: 300,
                  xpReward: 30,
                  coinReward: 6,
                },
              ],
              tests: [],
            },
          ],
        },
        {
          id: "science",
          name: "Science",
          duration: 75,
          questions: 25,
          color: "from-purple-400 to-purple-600",
          icon: "🧪",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Science Seeker",
          topics: [
            {
              id: "cells-organisms",
              name: "Cells and Organisms",
              completed: false,
              studyMaterials: [
                {
                  id: "cells-1",
                  title: "Introduction to Cells",
                  content:
                    "Discover what cells are, the difference between plant and animal cells, and how to use a microscope to observe them.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "english",
          name: "English",
          duration: 60,
          questions: 15,
          color: "from-green-400 to-green-600",
          icon: "📚",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Story Seeker",
          topics: [
            {
              id: "storytelling-origins",
              name: "Origins of Storytelling",
              completed: false,
              studyMaterials: [
                {
                  id: "story-1",
                  title: "Different Story Types",
                  content:
                    "Explore various types of stories including myths, legends, fairy tales, and modern fiction. Understand what makes each type unique.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "computer-science",
          name: "Computing",
          duration: 60,
          questions: 12,
          color: "from-cyan-400 to-cyan-600",
          icon: "💻",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "Digital Detective",
          topics: [
            {
              id: "computer-basics",
              name: "Computer Basics",
              completed: false,
              studyMaterials: [
                {
                  id: "comp-1",
                  title: "How Computers Work",
                  content:
                    "Learn about computer components like the CPU, memory, and storage. Understand how computers process information.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
        {
          id: "french",
          name: "French",
          duration: 60,
          questions: 15,
          color: "from-rose-400 to-rose-600",
          icon: "🇫🇷",
          level: 1,
          xp: 0,
          maxXp: 400,
          coins: 0,
          unlocked: true,
          conquestTitle: "French Friend",
          topics: [
            {
              id: "about-me",
              name: "All About Me",
              completed: false,
              studyMaterials: [
                {
                  id: "me-1",
                  title: "Introducing Yourself",
                  content:
                    "Learn basic French vocabulary to introduce yourself, say your name, age, and where you live. Master essential greetings.",
                  type: "text",
                },
              ],
              quizzes: [],
              tests: [],
            },
          ],
        },
      ],
    },
  },
]

export const users: User[] = ProgressStorage.loadProgress() || initialUsers

if (!ProgressStorage.loadProgress()) {
  ProgressStorage.saveProgress(initialUsers)
}

export function findUser(username: string, password: string): User | null {
  const currentUsers = ProgressStorage.loadProgress() || initialUsers
  return currentUsers.find((user) => user.username === username && user.password === password) || null
}

export function getUserProgress(username: string): User | null {
  const currentUsers = ProgressStorage.loadProgress() || initialUsers
  return currentUsers.find((user) => user.username === username) || null
}

export function updateUserProgress(username: string, updatedProfile: User["profile"]): void {
  ProgressStorage.updateUserProgress(username, updatedProfile)
}

export function completeQuiz(
  username: string,
  subjectId: string,
  topicId: string,
  quizId: string,
  score: number,
  earnedXp: number,
  earnedCoins: number,
): void {
  ProgressStorage.completeQuiz(username, subjectId, topicId, quizId, score, earnedXp, earnedCoins)
}

export function completeTest(
  username: string,
  subjectId: string,
  topicId: string,
  testId: string,
  score: number,
  earnedXp: number,
  earnedCoins: number,
): void {
  ProgressStorage.completeTest(username, subjectId, topicId, testId, score, earnedXp, earnedCoins)
}

export function getAllUsers(): User[] {
  return ProgressStorage.loadProgress() || initialUsers
}

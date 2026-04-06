/**
 * ============================================================
 * QUIZ DATA — ĐỀ 5: Reading & Writing + Listening
 * A2 Key Level — Combined Test
 * ============================================================
 */

const quizData = {
    title: "A2 Key Practice Test — Đề 5",
    parts: [

        // ============================================================
        //  READING — PART 1: Short Texts (Questions 1-6)
        // ============================================================
        {
            id: "r1",
            title: "Reading Part 1 — Short Texts",
            description: "For each question, choose the correct answer.",
            skill: "reading",
            questions: [
                {
                    id: "r1q1",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Summer sales</strong><br>50% discount on all swimsuits<br>From 29th May to 6th June<br>Buy NOW!",
                    options: [
                        { letter: "A", text: "All swimsuits are half price in June." },
                        { letter: "B", text: "The special offer is only for a few days." },
                        { letter: "C", text: "Everything is on sale for the next two months." }
                    ],
                    correctAnswer: "B",
                    explanation: "The offer is from 29th May to 6th June, which is just a few days. A is wrong because it's not all of June. C is wrong because it's not two months."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Starway Coffee Shop</strong><br>Coffees and snacks<br>Monday - Friday: from 7 a.m. to 2 p.m.<br>Saturday & Sunday: from 7 a.m. to 3 p.m.",
                    options: [
                        { letter: "A", text: "At the weekend the coffee shop closes one hour earlier." },
                        { letter: "B", text: "The coffee shop opens at the same time every day." },
                        { letter: "C", text: "You can only buy coffee here." }
                    ],
                    correctAnswer: "B",
                    explanation: "It opens at 7 a.m. on weekdays and 7 a.m. on weekends. A is wrong (closes later at 3pm). C is wrong (sells snacks too)."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Cinema tickets</strong><br>Buy one and get one free!<br>Only for students and over 65s",
                    options: [
                        { letter: "A", text: "Students can buy two tickets for the price of one." },
                        { letter: "B", text: "People over 65 years old pay more to buy a ticket." },
                        { letter: "C", text: "There are free tickets for 65 students." }
                    ],
                    correctAnswer: "A",
                    explanation: "'Buy one get one free' means you get two tickets but only pay for one. This offer is for students."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Message</strong><br>Sophia,<br>Don't forget that today is my birthday party. How are you getting to my home? Will your father drive you here? Ah, please tell your brother to come with you if he wants to.<br>Anna",
                    options: [
                        { letter: "A", text: "Anna has invited both Sophia and her brother to her party." },
                        { letter: "B", text: "Sophia will go to Anna's home in her brother's car." },
                        { letter: "C", text: "Sophia's brother doesn't want to go to Anna's party." }
                    ],
                    correctAnswer: "A",
                    explanation: "Anna says 'tell your brother to come with you if he wants to', meaning both Sophia and her brother are invited."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Weekend Job - Car Wash</strong><br>Saturday all day & Sunday mornings.<br>At Jason's Garage, in Park Road.<br>£5 per hour.<br>Information: Mr Black at: 200 50754",
                    options: [
                        { letter: "A", text: "You will need to work for the whole weekend." },
                        { letter: "B", text: "If you park your car here, you pay £5 per hour." },
                        { letter: "C", text: "Mr Black can give you details about the job." }
                    ],
                    correctAnswer: "C",
                    explanation: "'Information: Mr Black...' means you can contact him for details. A is wrong (only Sunday mornings, not all weekend). B is wrong (it's a job paying £5/hour, not parking fee)."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "Why did Jinnie write this email?",
                    context: "<strong>From: Jinnie | To: Ms Brown</strong><br>Hello Ms Brown,<br>My art classes finish at the end of June. I want to find a job where I can practise my French. Do you know where I can work? I'm looking forward to your reply.<br>Jinnie",
                    options: [
                        { letter: "A", text: "to ask Ms Brown to teach her French" },
                        { letter: "B", text: "to ask Ms Brown to help her find a summer job" },
                        { letter: "C", text: "to ask Ms Brown to tell her when the art classes finish" }
                    ],
                    correctAnswer: "B",
                    explanation: "Jinnie says 'I want to find a job... Do you know where I can work?' - she is asking for help to find a summer job."
                }
            ]
        },

        // ============================================================
        //  READING — PART 2: Matching (Questions 7-13)
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three teenagers talking about cinema. Match each statement to the correct person.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Michael:</strong><br>
                    I go to the cinema about once a month, usually on a Saturday. I like films about the police catching the bad people. I prefer the American police films because there are faster cars. I like the action in the police films, not the science part. My mum and dad don't like going to the cinema; they prefer watching films online. So they never come with me, but that's OK because I always go with my friend Jane.
                </div>
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Josh:</strong><br>
                    Funny films are the best because I love to laugh a lot. I go on Thursdays because it's half price for students. I never go at the weekend. I don't like cartoons because I want to see real people as actors. There are some funny films my parents won't let me see because they are for adults, but my brother takes me to see them. He tells the cinema staff that I am over eighteen. Sometimes they find us in the middle of the film and ask us to leave.
                </div>
                <div>
                    <strong style="color:var(--accent-primary)">Mark:</strong><br>
                    I always like films about true stories. It is a different way to learn about history, geography and science. Watching such films sometimes helps me with my homework. I also like films which show different places around the world. After watching these kinds of films, I dream about going to these places and look at the places on Google maps. Some of these films are very well made but there are also a lot of bad films that I don't enjoy watching. I go to the cinema on Fridays. However, I would prefer to go at the weekend because there are special ticket offers, but I can't, as I have a weekend job.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Who gets a 50% discount at the cinema?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "B",
                    explanation: "Josh says 'I go on Thursdays because it's half price for students' (half price = 50% discount)."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Who watches films at the weekend?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "A",
                    explanation: "Michael says 'usually on a Saturday' (weekend). Mark wants to go at the weekend but can't because he has a job."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Who sometimes has to go before the film finishes?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "B",
                    explanation: "Josh says 'Sometimes they find us in the middle of the film and ask us to leave'."
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Who says that films sometimes make his schoolwork easier?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "C",
                    explanation: "Mark says 'Watching such films sometimes helps me with my homework'."
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Who prefers films with a lot of action?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "A",
                    explanation: "Michael says 'I like the action in the police films'."
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Who goes to the cinema with a family member?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "B",
                    explanation: "Josh says 'my brother takes me to see them'."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Who goes online after watching a film?",
                    options: [
                        { letter: "A", text: "Michael" },
                        { letter: "B", text: "Josh" },
                        { letter: "C", text: "Mark" }
                    ],
                    correctAnswer: "C",
                    explanation: "Mark says 'After watching... I look at the places on Google maps' (goes online)."
                }
            ]
        },

        // ============================================================
        //  READING — PART 3: Long Text (Questions 14-18)
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article about Celismar Guzman and answer the questions.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px"><strong>Celismar Guzman – a young swimming champion</strong></p>
                <p style="margin-bottom:12px">If you look at 8-year-old Celismar Guzman, she doesn't look strong at all. That is until you see her in the water. Guzman has already won a gold medal in the National Swimming Competition. And, no, that 8 is not a mistake. She is E-I-G-H-T!</p>
                <p style="margin-bottom:12px">Guzman started swimming as a hobby, like all her friends. She has been swimming for only 18 months, but she's already been named National Swimming Champion in her age group in her country. She believes that she can do everything she wants to do in the world of swimming, it's already her life.</p>
                <p style="margin-bottom:12px">Her swimming coach, Morag Betz, explained that Guzman, known as Celi, didn't start as a champion. She had to practise a lot to get here.</p>
                <p style="margin-bottom:12px">A few months ago she also took part in the Junior Olympics and she improved her time by 4 seconds. She came home with four gold medals and one silver medal. "I did really well in all the races," she said. "Now I am second in the whole United States for my age group."</p>
                <p>She also says, "I am pleased with everything I have done. Both of my parents were athletes. Sport is what my family does." So what comes next for this 8-year-old winner in the water? "I want to win in the next Olympics," she said.</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "What is unusual about Guzman?",
                    options: [
                        { letter: "A", text: "She doesn't like water at all." },
                        { letter: "B", text: "She is very strong for her age." },
                        { letter: "C", text: "She is strong until she gets into the water." }
                    ],
                    correctAnswer: "B",
                    explanation: "The text implies she is incredibly capable/strong for an 8-year-old in the water (winning national medals)."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "What is swimming for Guzman?",
                    options: [
                        { letter: "A", text: "the most important thing in her life" },
                        { letter: "B", text: "just a good hobby" },
                        { letter: "C", text: "a way to have fun with friends" }
                    ],
                    correctAnswer: "A",
                    explanation: "The text says 'it's already her life', indicating it's the most important thing."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "Betz says that Guzman",
                    options: [
                        { letter: "A", text: "needs to practise more." },
                        { letter: "B", text: "was a champion from the beginning." },
                        { letter: "C", text: "is doing well because she works hard." }
                    ],
                    correctAnswer: "C",
                    explanation: "Betz explained she 'didn't start as a champion. She had to practise a lot to get here' (she works hard)."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "What happened to Guzman in the Junior Olympics?",
                    options: [
                        { letter: "A", text: "She swam faster than ever before." },
                        { letter: "B", text: "She won gold medals in all her races." },
                        { letter: "C", text: "She didn't do as well as she wanted." }
                    ],
                    correctAnswer: "A",
                    explanation: "She 'improved her time by 4 seconds' meaning she swam faster than before."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "Guzman says",
                    options: [
                        { letter: "A", text: "she is not sure what will happen next." },
                        { letter: "B", text: "she wants to swim with her parents at the Olympics." },
                        { letter: "C", text: "she is doing what her parents do." }
                    ],
                    correctAnswer: "C",
                    explanation: "She says 'Both of my parents were athletes. Sport is what my family does' — she is following her parents' path."
                }
            ]
        },

        // ============================================================
        //  READING — PART 4: Gap Fill MCQ (Questions 19-24)
        // ============================================================
        {
            id: "r4",
            title: "Reading Part 4 — Gap Fill",
            description: "Choose the correct word for each gap.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px"><strong>The Eden Project</strong></p>
                <p style="margin-bottom:12px">The Eden Project is a(n) <strong>(19)___</strong> tourist destination in Cornwall, England. Inside the two special buildings that have been built are plants that are collected from all <strong>(20)___</strong> the world. These two areas have two different worlds inside them. The first is the Rainforest world and the second is the Mediterranean world. They <strong>(21)___</strong> like two big glass balls.</p>
                <p style="margin-bottom:12px">Inside the Rainforest area you can walk high up in the air on a wooden <strong>(22)___</strong>. From there you are up in the tops of the trees. In the Mediterranean area you can see lots of beautiful and amazing plants.</p>
                <p>The Eden Project also has an outside garden <strong>(23)___</strong> is home to many plants and wildlife found in the UK. Over 850,000 people <strong>(24)___</strong> the Eden Project every year.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) 'The Eden Project is a(n) ___ tourist destination...'",
                    options: [
                        { letter: "A", text: "useful" },
                        { letter: "B", text: "popular" },
                        { letter: "C", text: "helpful" }
                    ],
                    correctAnswer: "B",
                    explanation: "A 'popular' tourist destination means it is liked and visited by many people."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) '...plants that are collected from all ___ the world.'",
                    options: [
                        { letter: "A", text: "over" },
                        { letter: "B", text: "in" },
                        { letter: "C", text: "above" }
                    ],
                    correctAnswer: "A",
                    explanation: "'all over the world' is a fixed phrase meaning everywhere on Earth."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) 'They ___ like two big glass balls.'",
                    options: [
                        { letter: "A", text: "seem" },
                        { letter: "B", text: "look" },
                        { letter: "C", text: "show" }
                    ],
                    correctAnswer: "B",
                    explanation: "'look like' means to have a similar appearance to something."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) '...walk high up in the air on a wooden ___.'",
                    options: [
                        { letter: "A", text: "bridge" },
                        { letter: "B", text: "river" },
                        { letter: "C", text: "ruler" }
                    ],
                    correctAnswer: "A",
                    explanation: "You walk on a 'bridge' high up in the air."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) '...an outside garden ___ is home to many plants...'",
                    options: [
                        { letter: "A", text: "who" },
                        { letter: "B", text: "what" },
                        { letter: "C", text: "which" }
                    ],
                    correctAnswer: "C",
                    explanation: "'which' is used as a relative pronoun for things (a garden)."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) 'Over 850,000 people ___ the Eden Project every year.'",
                    options: [
                        { letter: "A", text: "arrive" },
                        { letter: "B", text: "travel" },
                        { letter: "C", text: "visit" }
                    ],
                    correctAnswer: "C",
                    explanation: "People 'visit' a place or a tourist destination."
                }
            ]
        },

        // ============================================================
        //  READING — PART 5: Gap Fill Write (Questions 25-30)
        // ============================================================
        {
            id: "r5",
            title: "Reading Part 5 — Open Gap Fill",
            description: "Write ONE word for each gap to complete the email.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:8px"><strong>From:</strong> Paul &nbsp;|&nbsp; <strong>To:</strong> Maureen</p>
                <p style="margin-bottom:12px">Hi Maureen,<br>How <strong>(0) about</strong> going to the cinema? <em>Ghostbusters 3</em> is on in the Savoy cinema <strong>(25)___</strong> 7 p.m. this Saturday. Tickets cost £5.00 each.</p>
                <p style="margin-bottom:12px">I was also thinking to invite the new girl in our class, Sarah. She seems very nice, but it must <strong>(26)___</strong> be hard trying to make new friends.</p>
                <p style="margin-bottom:12px"><strong>(27)___</strong> the way, my dad said he could drive us there.</p>
                <p>Write back soon<br>Paul</p>
                <hr style="margin: 12px 0">
                <p style="margin-bottom:8px"><strong>From:</strong> Maureen &nbsp;|&nbsp; <strong>To:</strong> Paul</p>
                <p style="margin-bottom:12px">Hi Paul,<br>Thanks for your email. Yes, let's do it. And <strong>(28)___</strong> why not invite Sarah, too? That's a good idea.</p>
                <p>If your dad can <strong>(29)___</strong> give us a lift then let <strong>(30)___</strong> pay for the tickets.</p>
                <p style="margin-top:8px">Speak soon<br>Maureen</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) '...is on in the Savoy cinema ___ 7 p.m.'",
                    hint: "Preposition used for specific times",
                    acceptableAnswers: ["at"],
                    explanation: "We use 'at' for specific times (at 7 p.m.)."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) '...but it must ___ hard trying to make new friends.'",
                    hint: "Verb 'to be'",
                    acceptableAnswers: ["be"],
                    explanation: "'Must be' + adjective (hard) is used to express certainty."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) '___ the way, my dad said he could drive us there.'",
                    hint: "___ the way = nhân tiện",
                    acceptableAnswers: ["By", "by"],
                    explanation: "'By the way' is a common phrase to introduce a new topic."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'And ___ not invite Sarah, too?'",
                    hint: "Question word used for suggestions",
                    acceptableAnswers: ["why", "Why"],
                    explanation: "'Why not' is used to make a suggestion."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) 'If your dad can ___ us a lift...'",
                    hint: "___ someone a lift = cho ai đó đi nhờ xe",
                    acceptableAnswers: ["give"],
                    explanation: "'give someone a lift' means to drive someone somewhere."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) '...then let ___ pay for the tickets.'",
                    hint: "Pronoun referring to Maureen",
                    acceptableAnswers: ["me"],
                    explanation: "'let me' is used to offer to do something."
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 6: Email (Question 31)
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to Alfie. Write 25 words or more.",
            skill: "writing",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:12px">You are going to move to a new town where your English friend Alfie lives.</p>
                        <p style="margin-bottom:8px"><strong>Write an email to Alfie. In your email:</strong></p>
                        <ul style="padding-left:20px; margin-bottom:8px">
                            <li>tell Alfie that you'll move to his town</li>
                            <li>explain why you'll move there</li>
                            <li>ask Alfie if you can meet</li>
                        </ul>
                        <p><strong>Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Alfie,\n\nCan you believe it? There is good news! I am moving to your town next month because my company has just set up a new office there.\n\nCan we meet at the weekend after I arrive?\n\nSee you then,\n[Your name]"
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 7: Story (Question 32)
        // ============================================================
        {
            id: "w2",
            title: "Writing Part 7 — Story",
            description: "Look at the three pictures and write the story. Write 35 words or more.",
            skill: "writing",
            questions: [
                {
                    id: "w2q32",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:12px"><strong>Write a story based on these three pictures:</strong></p>
                        <div style="display:grid; gap:8px; margin-bottom:8px">
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                🧳 <strong>Picture 1:</strong> A boy is packing clothes into a suitcase in his bedroom.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                📖 <strong>Picture 2:</strong> He is sitting down reading a "FRENCH Phrase Book".
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                🚉 <strong>Picture 3:</strong> He arrives at the station where his friends and a teacher are waiting near a bus/train.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Friday morning, Nick was putting some clothes into a suitcase, preparing for his school trip in the afternoon. \n\nThen, he opened his book to review some French phrases because they were going to France. \n\nAfter that, he got to the station where his friends and teacher were waiting for the train."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 1: Picture Questions (Questions 1-5)
        // ============================================================
        {
            id: "l1",
            title: "Listening Part 1 — Picture Questions",
            description: "For each question, choose the correct answer based on what you hear.",
            skill: "listening",
            questions: [
                {
                    id: "l1q1",
                    type: "listening-mcq",
                    text: "What time does Mary start work today?",
                    audioSrc: "audio/t5p1.mp3",
                    options: [
                        { letter: "A", text: "22:30" },
                        { letter: "B", text: "23:00" },
                        { letter: "C", text: "23:30" }
                    ],
                    correctAnswer: "C",
                    explanation: "Mary starts work at half past eleven (23:30)."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "When is the school play?",
                    audioSrc: "audio/t5p1.mp3",
                    options: [
                        { letter: "A", text: "Friday" },
                        { letter: "B", text: "Saturday" },
                        { letter: "C", text: "Sunday" }
                    ],
                    correctAnswer: "B",
                    explanation: "The school play is on Saturday."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "Where did Shivrang and his friends stay on holiday?",
                    audioSrc: "audio/t5p1.mp3",
                    options: [
                        { letter: "A", text: "A tent (camping)" },
                        { letter: "B", text: "A house in the countryside" },
                        { letter: "C", text: "A large hotel building" }
                    ],
                    correctAnswer: "C",
                    explanation: "They stayed in a large hotel building."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What are they going to do tomorrow?",
                    audioSrc: "audio/t5p1.mp3",
                    options: [
                        { letter: "A", text: "Skateboarding" },
                        { letter: "B", text: "Windsurfing / Sailing" },
                        { letter: "C", text: "Basketball" }
                    ],
                    correctAnswer: "B",
                    explanation: "They are going sailing tomorrow."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "Where was the woman's phone?",
                    audioSrc: "audio/t5p1.mp3",
                    options: [
                        { letter: "A", text: "On the bookcase" },
                        { letter: "B", text: "In the bedroom" },
                        { letter: "C", text: "On the armchair/sofa" }
                    ],
                    correctAnswer: "C",
                    explanation: "The phone was found on the armchair."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 2: Note Completion (Questions 6-10)
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a manager talking to his colleagues about fire practice.",
            skill: "listening",
            passage: `
                <p style="margin-bottom:8px"><strong>🔥 Fire practice</strong></p>
                <p>When: Tomorrow</p>
                <p>Don't: <strong>(6)___</strong></p>
                <p>Go to the closest: fire <strong>(7)___</strong></p>
                <p>Get out of the: <strong>(8)___</strong></p>
                <p>Meeting point for 2nd floor: the <strong>(9)___</strong></p>
                <p>Time practice ends: <strong>(10)___</strong></p>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Don't: ___",
                    hint: "Move fast on your feet",
                    acceptableAnswers: ["run"],
                    explanation: "They are told not to run during the fire practice."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Go to the closest: fire ___",
                    hint: "A way out",
                    acceptableAnswers: ["exit"],
                    explanation: "Go to the closest fire exit."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Get out of the: ___",
                    hint: "A structure with walls and a roof",
                    acceptableAnswers: ["building"],
                    explanation: "They need to get out of the building."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Meeting point for 2nd floor: the ___",
                    hint: "A place for sports/exercise",
                    acceptableAnswers: ["gym", "gymnasium"],
                    explanation: "The meeting point is the gym."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "Time practice ends: ___",
                    hint: "A time format",
                    acceptableAnswers: ["1.15", "1:15", "one fifteen"],
                    explanation: "The practice ends at 1:15."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 3: Conversation MCQ (Questions 11-15)
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Linda talking to her friend Alex about her new job. Choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "How does Linda usually get to the office?",
                    audioSrc: "audio/t5p3.mp3",
                    options: [
                        { letter: "A", text: "on foot" },
                        { letter: "B", text: "by car" },
                        { letter: "C", text: "by bus" }
                    ],
                    correctAnswer: "A",
                    explanation: "Linda usually gets to the office on foot."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "What doesn't Alex like about his job?",
                    audioSrc: "audio/t5p3.mp3",
                    options: [
                        { letter: "A", text: "the money" },
                        { letter: "B", text: "the hours" },
                        { letter: "C", text: "his colleagues" }
                    ],
                    correctAnswer: "C",
                    explanation: "Alex doesn't like his colleagues."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "How much does Linda earn in her new job?",
                    audioSrc: "audio/t5p3.mp3",
                    options: [
                        { letter: "A", text: "£22,500" },
                        { letter: "B", text: "£19,500" },
                        { letter: "C", text: "£25,500" }
                    ],
                    correctAnswer: "A",
                    explanation: "She earns £22,500."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "What does Linda enjoy doing?",
                    audioSrc: "audio/t5p3.mp3",
                    options: [
                        { letter: "A", text: "answering calls" },
                        { letter: "B", text: "writing emails" },
                        { letter: "C", text: "going to meetings" }
                    ],
                    correctAnswer: "C",
                    explanation: "Linda enjoys going to meetings."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "What does Alex decide to do?",
                    audioSrc: "audio/t5p3.mp3",
                    options: [
                        { letter: "A", text: "look for another job" },
                        { letter: "B", text: "talk to his boss" },
                        { letter: "C", text: "work with Linda" }
                    ],
                    correctAnswer: "A",
                    explanation: "Alex decides to look for another job."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 4: Short Conversations MCQ (Questions 16-20)
        // ============================================================
        {
            id: "l4",
            title: "Listening Part 4 — Short Conversations",
            description: "For each question, choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l4q16",
                    type: "listening-mcq",
                    text: "You will hear a man talking about a film. Which part didn't he enjoy?",
                    audioSrc: "audio/t5p4.mp3",
                    options: [
                        { letter: "A", text: "the beginning" },
                        { letter: "B", text: "the middle" },
                        { letter: "C", text: "the end" }
                    ],
                    correctAnswer: "B",
                    explanation: "He didn't enjoy the middle of the film."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear two friends talking about a festival. What did the woman think of it?",
                    audioSrc: "audio/t5p4.mp3",
                    options: [
                        { letter: "A", text: "It was unusual." },
                        { letter: "B", text: "It was boring." },
                        { letter: "C", text: "It was horrible." }
                    ],
                    correctAnswer: "A",
                    explanation: "She thought the festival was unusual."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a couple talking about a trip to town. Why are they going to town?",
                    audioSrc: "audio/t5p4.mp3",
                    options: [
                        { letter: "A", text: "to watch something" },
                        { letter: "B", text: "to buy something" },
                        { letter: "C", text: "to eat something" }
                    ],
                    correctAnswer: "A",
                    explanation: "They are going to town to watch something."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a coach talking to his players. What is he telling them?",
                    audioSrc: "audio/t5p4.mp3",
                    options: [
                        { letter: "A", text: "They are playing against a bad team." },
                        { letter: "B", text: "The time of the match has changed." },
                        { letter: "C", text: "Practice is going to be longer today." }
                    ],
                    correctAnswer: "C",
                    explanation: "He tells them practice is going to be longer today."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear a man talking to his friend about his neighbour. Who is his neighbour going out with?",
                    audioSrc: "audio/t5p4.mp3",
                    options: [
                        { letter: "A", text: "a member of his family" },
                        { letter: "B", text: "a friend from work" },
                        { letter: "C", text: "his assistant" }
                    ],
                    correctAnswer: "A",
                    explanation: "His neighbour is going out with a member of his family."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 5: Matching (Questions 21-25)
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Jennifer talking to Jin about how their friends were feeling this weekend. What problem did each friend have?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>Problems:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">A. broken leg</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">B. cold</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">C. back pain</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">D. tired</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">E. stomach ache</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">F. broken arm</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">G. toothache</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">H. temperature</span>
                </div>
                <p style="font-size:13px; color:var(--text-tertiary)">ℹ️ Example: Jennifer -> D (tired)</p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Sebastian: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["F", "f"],
                    explanation: "Sebastian had a broken arm."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Olivia: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["C", "c"],
                    explanation: "Olivia had back pain."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Matthew: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["B", "b"],
                    explanation: "Matthew had a cold."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Aisha: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["G", "g"],
                    explanation: "Aisha had a toothache."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Jin: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["E", "e"],
                    explanation: "Jin had a stomach ache."
                }
            ]
        }
    ]
};
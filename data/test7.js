/**
 * ============================================================
 * QUIZ DATA — ĐỀ 7: Reading & Writing + Listening
 * A2 Key Level — Clean Data Format
 * ============================================================
 */

const quizData = {
    title: "A2 Key Practice Test — Đề 7",
    theme: "editorial",
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
                    context: "<strong>Notice</strong><br>Please do not leave dirty dishes, plastic bottles or paper on the beach.<br>Place all your rubbish in the rubbish bins when you leave.",
                    options: [
                        { letter: "A", text: "You cannot eat on this beach." },
                        { letter: "B", text: "You must clean the beach before you leave." },
                        { letter: "C", text: "You aren't allowed to use plastic on the beach." }
                    ],
                    correctAnswer: "B",
                    explanation: "'Place all your rubbish in the rubbish bins when you leave' means you must clean up your mess before leaving."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>POP MUSIC CONCERT</strong><br>Next Saturday in the town centre.<br>Everyone is welcome to have fun, dance and sing at the greatest music event in our town.<br>Free entrance for schoolchildren<br>Adult tickets: £10.00",
                    options: [
                        { letter: "A", text: "Only people who sing well can come to the concert." },
                        { letter: "B", text: "Students don't need to pay anything to come to the concert." },
                        { letter: "C", text: "Next Saturday's concert is not an important music event in this town." }
                    ],
                    correctAnswer: "B",
                    explanation: "'Free entrance for schoolchildren' means students don't need to pay."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "Why did Latifa send this email?",
                    context: "<strong>From: Latifa | To: Tim</strong><br>Hi Tim!<br>I hope you're well. Please tell me if you like your new school. Have you made any friends? Write and tell me your news!<br>Latifa",
                    options: [
                        { letter: "A", text: "to check if Tim has changed school" },
                        { letter: "B", text: "to tell Tim her news" },
                        { letter: "C", text: "to ask Tim about his new school" }
                    ],
                    correctAnswer: "C",
                    explanation: "Latifa asks: 'Please tell me if you like your new school. Have you made any friends?'."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Maths teacher</strong><br>John Preston gives lessons in your home.<br>- Only on weekdays after 5 pm.<br>- £15.00 per hour.<br>- All levels: Beginners to Advanced<br>More info: tel: 9089976",
                    options: [
                        { letter: "A", text: "Each 2-hour lesson with John Preston costs £15.00." },
                        { letter: "B", text: "John Preston teaches Maths only to excellent students." },
                        { letter: "C", text: "You can't have a lesson with John Preston at the weekend." }
                    ],
                    correctAnswer: "C",
                    explanation: "'Only on weekdays after 5 pm' means no weekends."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "Emily wants to",
                    context: "<strong>From: Emily | To: Pedro</strong><br>Hi Pedro,<br>Shall we go to the pool party? It sounds good! My brother can take us there by car but we will need to come back by train. Write back soon to let me know.<br>Emily",
                    options: [
                        { letter: "A", text: "go to the pool party with Pedro." },
                        { letter: "B", text: "go to the pool party by train." },
                        { letter: "C", text: "go to the pool party in Pedro's car." }
                    ],
                    correctAnswer: "A",
                    explanation: "'Shall we go to the pool party?' is an invitation for Pedro to go with her."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Come to the School Party</strong><br>- On Friday<br>- At Park School<br>- Starts at 7.00 p.m.<br>- Entrance: £1.50<br>- Included in entrance: food and drinks<br>Interested? Write down your name at Mr. Brown's office from Monday to Wednesday by 3.00 p.m.",
                    options: [
                        { letter: "A", text: "The school party is on Friday afternoon." },
                        { letter: "B", text: "You don't need to pay extra money to eat at the party." },
                        { letter: "C", text: "Wednesday is the only day you can give your name to Mr Brown." }
                    ],
                    correctAnswer: "B",
                    explanation: "'Included in entrance: food and drinks' means the £1.50 covers it, no extra money needed."
                }
            ]
        },

        // ============================================================
        //  READING — PART 2: Matching (Questions 7-13)
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three young people's holiday activities. Match each statement to the correct person.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Sarah:</strong><br>
                    Sarah likes holidays by the sea where she can rest all day. She doesn't like doing sports or going sightseeing. She likes to go to bed early in the evening and wake up late in the morning. When she wakes up, she goes to the beach and stays there all day, until about 5 p.m. She usually travels with her friends, so she spends most of her day talking to them. At lunchtime she only has a sandwich and some orange juice. In the evening she goes back to her hotel to have a shower and change clothes. She then goes into town with her friends where they have supper at a local or a fast food restaurant.
                </div>
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Jane:</strong><br>
                    Jane loves going on holiday to places which have a lot of old buildings. Before each journey, she always likes to buy a guidebook so she knows where she can go and what things to see. She especially likes looking around old castles and learning about how people lived hundreds of years ago. Jane also likes to look around different museums. To eat a meal she will always go to restaurants which cook local food. She hates eating burgers and other unhealthy snacks.
                </div>
                <div>
                    <strong style="color:var(--accent-primary)">Gemma:</strong><br>
                    Gemma is a great fan of dangerous sports. Every time she goes on holiday, she likes doing some very dangerous activities. One of the activities she likes is climbing up the side of a high mountain without any help. She also likes going on a small boat down a very fast and dangerous river. She tries to do a different dangerous activity every day when she's on holiday. She tries to be careful but once she ended her holiday in hospital and was taken home in an ambulance.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Who likes places with a lot of history?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "B",
                    explanation: "Jane loves places with 'old buildings', 'old castles', and learning how people lived hundreds of years ago."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Who likes to do things that are not very safe?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "C",
                    explanation: "Gemma is a fan of 'dangerous sports' (not very safe)."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Who likes to eat a little in the middle of the day?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "A",
                    explanation: "Sarah 'only has a sandwich and some orange juice' at lunchtime."
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Who doesn't like to eat at fast food restaurants?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "B",
                    explanation: "Jane 'hates eating burgers and other unhealthy snacks'."
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Who travels with other people on holiday?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "A",
                    explanation: "Sarah 'usually travels with her friends'."
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Who had a problem when she was on holiday?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "C",
                    explanation: "Gemma once 'ended her holiday in hospital and was taken home in an ambulance'."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Who likes to sleep a lot on holiday?",
                    options: [{ letter: "A", text: "Sarah" }, { letter: "B", text: "Jane" }, { letter: "C", text: "Gemma" }],
                    correctAnswer: "A",
                    explanation: "Sarah 'likes to go to bed early in the evening and wake up late in the morning'."
                }
            ]
        },

        // ============================================================
        //  READING — PART 3: Long Text (Questions 14-18)
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article about Archie Campbell and answer the questions.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px"><strong>Archie Campbell talks about computer games</strong></p>
                <p style="margin-bottom:12px">I started playing computer games when I was seven years old. My parents didn't let me have a computer so I used to go to my cousin's house and play games on his computer when his mum and dad were at work. My parents would have been very angry if they had known that.</p>
                <p style="margin-bottom:12px">My cousin Freddie showed me how to play games that older children usually play and he said that I was much better than most of his friends who were three years older than me. I was going to ask my parents again for a computer but he told me to wait for another year, at least.</p>
                <p style="margin-bottom:12px">Then I started to have computer lessons at school. That was when everything changed. I learned how to make programmes and I started to make my own games with my cousin's help. From that time, I knew that making games was all I would ever want to do.</p>
                <p style="margin-bottom:12px">I didn't say anything to my parents for a long time. Freddie's parents didn't know what we were doing, either. Then one evening it was parents' day at my school and my computer teacher told them that I had a brilliant future making computer games.</p>
                <p>Now I am 20 and I enjoy student life. I have already sold one game to a small computer company but I don't have much time to make games now because I have a lot of exams soon. However, two computer companies have said they want to talk to me as soon as I leave university because they want me on their team.</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "Archie played computer games only at his cousin's house because",
                    options: [
                        { letter: "A", text: "his cousin had two computers in his house." },
                        { letter: "B", text: "his parents hadn't bought him a computer." },
                        { letter: "C", text: "his mum had asked him to do so." }
                    ],
                    correctAnswer: "B",
                    explanation: "The text says 'My parents didn't let me have a computer so I used to go to my cousin's house'."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "What did Freddie say to Archie?",
                    options: [
                        { letter: "A", text: "that he was very clever." },
                        { letter: "B", text: "not to waste his time playing games" },
                        { letter: "C", text: "to ask his parents to buy him a computer" }
                    ],
                    correctAnswer: "A",
                    explanation: "Freddie said Archie was 'much better than most of his friends who were three years older', meaning he thought Archie was very clever/smart at playing games."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "What happened when Archie had computer lessons at school?",
                    options: [
                        { letter: "A", text: "He stopped playing computer games." },
                        { letter: "B", text: "He didn't want to go to his cousin's house anymore." },
                        { letter: "C", text: "He understood what job he wanted to do in the future." }
                    ],
                    correctAnswer: "C",
                    explanation: "Archie said 'I knew that making games was all I would ever want to do' (he found his future career)."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "Archie's parents found out about his computer games from",
                    options: [
                        { letter: "A", text: "his computer teacher." },
                        { letter: "B", text: "Freddie's parents." },
                        { letter: "C", text: "his cousin." }
                    ],
                    correctAnswer: "A",
                    explanation: "At parents' day, 'my computer teacher told them that I had a brilliant future making computer games'."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "What does Archie do now?",
                    options: [
                        { letter: "A", text: "work for a computer company" },
                        { letter: "B", text: "continue to earn money making games" },
                        { letter: "C", text: "study computers at university" }
                    ],
                    correctAnswer: "C",
                    explanation: "Archie says 'Now I am 20 and I enjoy student life' and mentions leaving university soon. He is a student."
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
                <p style="margin-bottom:12px"><strong>The National Railway Museum</strong></p>
                <p style="margin-bottom:12px">The National Railway Museum in York is <strong>(19)___</strong> of the Science Museum Group. The museum <strong>(20)___</strong> the story of rail transport in Britain.</p>
                <p style="margin-bottom:12px">It has a wonderful collection of important railway vehicles, such as <em>Mallard</em> and <em>Duchess of Hamilton</em>. There is also a big collection that <strong>(21)___</strong> furniture and other things from railway buildings, as well as jewellery worn by railway queens and models of planes and boats. There you can also find the Little Play Station which is a <strong>(22)___</strong> especially for children, where they can learn about railways <strong>(23)___</strong> play.</p>
                <p>It is the largest museum of its type in Britain and thousands of people <strong>(24)___</strong> it every year. It is open daily from 10 a.m. to 5 p.m. Entrance is free.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) 'The National Railway Museum in York is ___ of the Science Museum Group.'",
                    options: [{ letter: "A", text: "part" }, { letter: "B", text: "field" }, { letter: "C", text: "flat" }],
                    correctAnswer: "A",
                    explanation: "It is 'part of' (một phần của) the Science Museum Group."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) 'The museum ___ the story of rail transport in Britain.'",
                    options: [{ letter: "A", text: "says" }, { letter: "B", text: "discusses" }, { letter: "C", text: "tells" }],
                    correctAnswer: "C",
                    explanation: "A museum 'tells the story' of something."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) 'There is also a big collection that ___ furniture and other things...'",
                    options: [{ letter: "A", text: "saves" }, { letter: "B", text: "owns" }, { letter: "C", text: "includes" }],
                    correctAnswer: "C",
                    explanation: "A collection 'includes' (bao gồm) various items."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) '...which is a ___ especially for children...'",
                    options: [{ letter: "A", text: "box" }, { letter: "B", text: "space" }, { letter: "C", text: "circus" }],
                    correctAnswer: "B",
                    explanation: "The Little Play Station is a 'space' (không gian) for children."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) '...where they can learn about railways ___ play.'",
                    options: [{ letter: "A", text: "through" }, { letter: "B", text: "against" }, { letter: "C", text: "to" }],
                    correctAnswer: "A",
                    explanation: "Children learn 'through' (thông qua) play."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) '...and thousands of people ___ it every year.'",
                    options: [{ letter: "A", text: "go" }, { letter: "B", text: "visit" }, { letter: "C", text: "arrive" }],
                    correctAnswer: "B",
                    explanation: "People 'visit' a museum."
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
                <p style="margin-bottom:8px"><strong>From:</strong> Tom &nbsp;|&nbsp; <strong>To:</strong> Helen</p>
                <p style="margin-bottom:12px">Hi Helen!<br>I got <strong>(0) some</strong> great news today! You know that exam I was studying so hard for? Well, I passed!<br>My music teacher told <strong>(25)___</strong> this morning.</p>
                <p style="margin-bottom:12px">I'm really happy because now I can go to Herford University to study music. It has <strong>(26)___</strong> best music course in the country.</p>
                <p>How did your exams go?<br>Write back and tell me all <strong>(27)___</strong> news.<br>Love,<br>Tom</p>
                <hr style="margin: 12px 0">
                <p style="margin-bottom:8px"><strong>From:</strong> Helen &nbsp;|&nbsp; <strong>To:</strong> Tom</p>
                <p style="margin-bottom:12px">Hey Tom!<br>Well done! I'm really happy for you. I got my results, too, and you'll never guess <strong>(28)___</strong> happened; I <strong>(29)___</strong> an A in maths!</p>
                <p>That means I can go to Manchester Institute of Technology to study engineering. I can work <strong>(30)___</strong> an engineer, just like my dad.</p>
                <p style="margin-top:8px">Speak soon<br>Helen</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) 'My music teacher told ___ this morning.'",
                    hint: "Who did the teacher tell?",
                    acceptableAnswers: ["me"],
                    explanation: "'told me' — Tom is the person receiving the news."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) 'It has ___ best music course in the country.'",
                    hint: "Article used with superlative adjectives",
                    acceptableAnswers: ["the"],
                    explanation: "We always use 'the' before superlative adjectives like 'best'."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) 'Write back and tell me all ___ news.'",
                    hint: "Possessive adjective",
                    acceptableAnswers: ["your"],
                    explanation: "Tom asks Helen to tell him 'your news'."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) '...and you'll never guess ___ happened;'",
                    hint: "Question word",
                    acceptableAnswers: ["what", "What"],
                    explanation: "'guess what happened' is a very common phrase."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) '...I ___ an A in maths!'",
                    hint: "Past tense verb for receiving a grade",
                    acceptableAnswers: ["got"],
                    explanation: "We say 'got a grade' (đạt điểm nào đó)."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) 'I can work ___ an engineer, just like my dad.'",
                    hint: "Preposition for job roles",
                    acceptableAnswers: ["as"],
                    explanation: "We say 'work as + job title' (làm việc như là...)."
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 6: Email (Question 31)
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to Michael. Write 25 words or more.",
            skill: "writing",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:8px"><strong>Read the email from your English friend Michael.</strong></p>
                        <div style="padding:12px; border:1px solid var(--border-color); margin-bottom:12px; background:var(--bg-accent)">
                            <strong>From:</strong> Michael<br><strong>To:</strong> Tim<br><br>
                            Hi,<br>I'm doing a project about holidays for my college. Where did you go on holiday last year? How did you travel there? Who did you go with?<br>Thanks,<br>Michael
                        </div>
                        <p><strong>Write an email to Michael and answer his questions. Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Michael,\n\nI had a wonderful beach holiday in Da Nang with my parents last summer. We got there by plane and came back by train. It's marvellous.\n\nSee you again,\nTim"
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
                                📖 <strong>Picture 1:</strong> A girl is doing her homework at her desk with a lamp.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                📸 <strong>Picture 2:</strong> She is hanging out with friends in a park, taking photos.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                🎨 <strong>Picture 3:</strong> She is at an art club, painting a portrait of a man on a canvas.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Friday morning, Jill was trying to finish her home work before hanging out with her friends in the park where they took a lot of photos.\n\nAfter that, she rushed to the Art club for her portrait painting lesson. She was tired but very happy."
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
                    text: "What did Anastasia have to do yesterday?",
                    audioSrc: "audio/t7p1.mp3",
                    options: [
                        { letter: "A", text: "Wash clothes" },
                        { letter: "B", text: "Water the plants" },
                        { letter: "C", text: "Wash the car" }
                    ],
                    correctAnswer: "C",
                    explanation: "Anastasia had to wash the car yesterday."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "Where does the woman hurt?",
                    audioSrc: "audio/t7p1.mp3",
                    options: [
                        { letter: "A", text: "Headache (Đau đầu)" },
                        { letter: "B", text: "Stomach ache (Đau bụng)" },
                        { letter: "C", text: "Toothache (Đau răng)" }
                    ],
                    correctAnswer: "C",
                    explanation: "The woman has a toothache."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "When is the event?",
                    audioSrc: "audio/t7p1.mp3",
                    options: [
                        { letter: "A", text: "October 30" },
                        { letter: "B", text: "November 30" },
                        { letter: "C", text: "October 13" }
                    ],
                    correctAnswer: "A",
                    explanation: "The event is on October 30th."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What sport are they going to watch now?",
                    audioSrc: "audio/t7p1.mp3",
                    options: [
                        { letter: "A", text: "Gymnastics / Jumping" },
                        { letter: "B", text: "Basketball" },
                        { letter: "C", text: "Volleyball match" }
                    ],
                    correctAnswer: "C",
                    explanation: "They are going to watch a volleyball match on TV."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "How much did the girl pay for her coffee?",
                    audioSrc: "audio/t7p1.mp3",
                    options: [
                        { letter: "A", text: "£2.00" },
                        { letter: "B", text: "£1.00" },
                        { letter: "C", text: "£2.95" }
                    ],
                    correctAnswer: "C",
                    explanation: "The girl paid £2.95 for her coffee."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 2: Note Completion (Questions 6-10)
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a teacher talking to a group of students about a summer course.",
            skill: "listening",
            passage: `
                <p style="margin-bottom:8px"><strong>☀️ Summer Course</strong></p>
                <p>Study in: Brighton</p>
                <p>Dates of courses: 20th June - 15th <strong>(6)___</strong></p>
                <p>Students must not be older than: <strong>(7)___</strong> years old</p>
                <p>Any student can work as: an <strong>(8)___</strong></p>
                <p>Students have to be good at: <strong>(9)___</strong></p>
                <p>Send an email to: <strong>(10)___</strong>@mail.com</p>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Dates of courses: 20th June - 15th ___",
                    hint: "A summer month",
                    acceptableAnswers: ["August", "august"],
                    explanation: "The course runs until the 15th of August."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Students must not be older than: ___ years old",
                    hint: "A number",
                    acceptableAnswers: ["25"],
                    explanation: "Students must not be older than 25."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Any student can work as: an ___",
                    hint: "A helper / staff member",
                    acceptableAnswers: ["assistant"],
                    explanation: "Students can work as an assistant."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Students have to be good at: ___",
                    hint: "A language",
                    acceptableAnswers: ["English", "english"],
                    explanation: "They have to be good at English."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "Send an email to: ___@mail.com",
                    hint: "A person's name (no spaces)",
                    acceptableAnswers: ["JessyJones", "jessyjones"],
                    explanation: "The email address is JessyJones@mail.com."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 3: Conversation MCQ (Questions 11-15)
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Monica talking to her brother Pierre about a website. Choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "How did Monica find out about the website?",
                    audioSrc: "audio/t7p3.mp3",
                    options: [
                        { letter: "A", text: "from TV" },
                        { letter: "B", text: "from a colleague" },
                        { letter: "C", text: "from the radio" }
                    ],
                    correctAnswer: "A",
                    explanation: "Monica found out about the website from TV."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "Monica thinks the online radio shows are",
                    audioSrc: "audio/t7p3.mp3",
                    options: [
                        { letter: "A", text: "boring." },
                        { letter: "B", text: "funny." },
                        { letter: "C", text: "different." }
                    ],
                    correctAnswer: "C",
                    explanation: "She thinks the online radio shows are different."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "Who does Pierre think the website would be useful for?",
                    audioSrc: "audio/t7p3.mp3",
                    options: [
                        { letter: "A", text: "Monica" },
                        { letter: "B", text: "his English teacher" },
                        { letter: "C", text: "his cousin" }
                    ],
                    correctAnswer: "B",
                    explanation: "Pierre thinks it would be useful for his English teacher."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "How much time did Monica spend on the website yesterday?",
                    audioSrc: "audio/t7p3.mp3",
                    options: [
                        { letter: "A", text: "45 minutes" },
                        { letter: "B", text: "1 hour" },
                        { letter: "C", text: "1 hour and 30 minutes" }
                    ],
                    correctAnswer: "A",
                    explanation: "Monica spent 45 minutes on the website."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "Which part of the website is Pierre less interested in?",
                    audioSrc: "audio/t7p3.mp3",
                    options: [
                        { letter: "A", text: "the articles" },
                        { letter: "B", text: "the videos" },
                        { letter: "C", text: "the online teachers" }
                    ],
                    correctAnswer: "A",
                    explanation: "Pierre is less interested in the articles."
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
                    text: "You will hear two friends talking. Where are they?",
                    audioSrc: "audio/t7p4.mp3",
                    options: [
                        { letter: "A", text: "on a train" },
                        { letter: "B", text: "on a plane" },
                        { letter: "C", text: "on a bus" }
                    ],
                    correctAnswer: "A",
                    explanation: "The sound and conversation indicate they are on a train."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear a woman talking about her friend. What does her friend want?",
                    audioSrc: "audio/t7p4.mp3",
                    options: [
                        { letter: "A", text: "her son to become a doctor" },
                        { letter: "B", text: "her son to stop playing football" },
                        { letter: "C", text: "her son to finish school" }
                    ],
                    correctAnswer: "A",
                    explanation: "The woman's friend wants her son to become a doctor."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a police officer talking to a man. What's the problem?",
                    audioSrc: "audio/t7p4.mp3",
                    options: [
                        { letter: "A", text: "The man should go slower." },
                        { letter: "B", text: "The man had an accident." },
                        { letter: "C", text: "The man is a new driver." }
                    ],
                    correctAnswer: "C",
                    explanation: "The police officer stopped him because he is a new driver making a mistake."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a woman talking to her son about school. What is she telling him?",
                    audioSrc: "audio/t7p4.mp3",
                    options: [
                        { letter: "A", text: "He must try harder at school." },
                        { letter: "B", text: "He may have to stop working." },
                        { letter: "C", text: "He should talk to his teacher." }
                    ],
                    correctAnswer: "B",
                    explanation: "She is telling him he may have to stop his job to focus on school."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear two colleagues talking at the office. Why is the man tired?",
                    audioSrc: "audio/t7p4.mp3",
                    options: [
                        { letter: "A", text: "He had to work on his talk." },
                        { letter: "B", text: "He had trouble getting home." },
                        { letter: "C", text: "He was delayed at the office." }
                    ],
                    correctAnswer: "B",
                    explanation: "He is tired because he had trouble getting home last night."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 5: Matching (Questions 21-25)
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Sophia talking to her friend about the presents that she got on her birthday. What did each person give her?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>🎁 Presents:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">A. laptop</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">B. music lessons</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">C. tablet</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">D. ring</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">E. concert tickets</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">F. necklace</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">G. keyboard</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">H. mobile phone</span>
                </div>
                <p style="font-size:13px; color:var(--text-tertiary)">ℹ️ Example: Mum -> G (keyboard)</p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Dad: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["H", "h"],
                    explanation: "Dad gave her a mobile phone (điện thoại)."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Grandpa: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["C", "c"],
                    explanation: "Grandpa gave her a tablet (Máy tính bảng)."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Sister: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["E", "e"],
                    explanation: "Her sister gave her concert tickets (vé hoà nhạc)."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Lucas: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["F", "f"],
                    explanation: "Lucas gave her a necklace (dây chuyền)."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Aunt: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["D", "d"],
                    explanation: "Her aunt gave her a ring (nhẫn)."
                }
            ]
        }
    ]
};
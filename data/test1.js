/**
 * ============================================================
 * QUIZ DATA — ĐỀ 1: Reading & Writing + Listening
 * A2 Key Level — Combined Test
 * ============================================================
 * 
 * File này chứa TẤT CẢ data cho đề 1.
 * Chỉ cần đặt cùng folder với index.html là chạy.
 * 
 * Total: 12 Parts, 62+ questions
 *   - Reading Parts 1-5 (30 questions)
 *   - Writing Parts 6-7 (2 tasks)
 *   - Listening Parts 1-5 (25 questions)
 * ============================================================
 */

const quizData = {
    title: "A2 Key Practice Test — Đề 1",
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
                    context: "<strong>City Library / Reading Competition:</strong><br>Starts at 9 a.m.<br>Finishes at 12 p.m.<br>Open to all students aged between 10 and 17 years old.",
                    options: [
                        { letter: "A", text: "The library is open for three hours." },
                        { letter: "B", text: "Students of all ages can take part in the competition." },
                        { letter: "C", text: "Adults can't take part in the competition." }
                    ],
                    correctAnswer: "C",
                    explanation: "The competition is open to students aged 10-17, so adults cannot take part. Option A is tricky — the competition runs for 3 hours, not necessarily the library. Option B is wrong because only ages 10-17 can join."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Hi James,</strong><br>Today you can buy two meals for the price of one in the new fast food restaurant. I know that you finish work at 8. Shall we go at 8:30 p.m.?<br><strong>Emma</strong>",
                    options: [
                        { letter: "A", text: "Emma knows that James can't go out before 8 p.m." },
                        { letter: "B", text: "Emma and James will both have a free meal today." },
                        { letter: "C", text: "Emma wants to meet James in the morning." }
                    ],
                    correctAnswer: "A",
                    explanation: "Emma knows James finishes work at 8, so she suggests 8:30 p.m. — she knows he can't go before 8. B is wrong because they pay for one meal (buy 2 for 1, not free). C is wrong because 8:30 p.m. is evening."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "Why have the train times changed?",
                    context: "<strong>Train Timetable Changes:</strong><br>No buses on Saturday and Sunday. There will be two trains an hour for the extra people. Only Platform One will be used this weekend.",
                    options: [
                        { letter: "A", text: "More passengers prefer the train than the bus." },
                        { letter: "B", text: "One platform cannot be used." },
                        { letter: "C", text: "Buses will stop running at the weekend." }
                    ],
                    correctAnswer: "C",
                    explanation: "The notice says 'No buses on Saturday and Sunday' — buses stop at the weekend, so more trains are needed. That's why there are 2 trains per hour for extra people."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Anna,</strong><br>Please can you tell the teacher I will be late because I missed the bus? I'll wait for the next one and not walk.<br><strong>Jim</strong>",
                    options: [
                        { letter: "A", text: "Jim will wait for Anna to take the next bus." },
                        { letter: "B", text: "Jim wants Anna to tell the teacher about his delay." },
                        { letter: "C", text: "Jim tells Anna that he will go to school on foot." }
                    ],
                    correctAnswer: "B",
                    explanation: "Jim says 'Please can you tell the teacher I will be late' — he wants Anna to inform the teacher. A is wrong (he waits alone for the bus). C is wrong (he says 'not walk')."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Sweet Shop</strong><br>All chocolate: 50% off<br>Fruit Sweets: £1 for 1kg, or £1.50 for 2kg<br>Special prices: Monday to Wednesday only",
                    options: [
                        { letter: "A", text: "The offer is available all week." },
                        { letter: "B", text: "2 kilograms of sweets cost £1.50 more than 1 kilogram." },
                        { letter: "C", text: "You can buy chocolate at half its usual price." }
                    ],
                    correctAnswer: "C",
                    explanation: "50% off means half price, so you can buy chocolate at half its usual price. A is wrong (Monday to Wednesday only). B is wrong (2kg costs £1.50 total, only £0.50 more than 1kg at £1)."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "Why did Marina write this message?",
                    context: "<strong>Susan,</strong><br>I lost my school bag with all my books. Our neighbour found it and returned it, but my homework is still at school. It wasn't in the bag.<br><strong>Marina</strong>",
                    options: [
                        { letter: "A", text: "to ask Susan to help her find her school bag" },
                        { letter: "B", text: "to tell Susan what happened to her" },
                        { letter: "C", text: "to tell Susan that she has done her homework" }
                    ],
                    correctAnswer: "B",
                    explanation: "Marina is explaining what happened — she lost her bag, got it back, but homework is at school. She's telling Susan about the situation. A is wrong (bag was already found). C is wrong (homework is still at school, not done)."
                }
            ]
        },

        // ============================================================
        //  READING — PART 2: Matching (Questions 7-13)
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three people and their hobbies. Match each statement to the correct person: Greg (A), Susie (B), or Alex (C).",
            skill: "reading",
            passage: `
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">🧑 Greg:</strong><br>
                    I think a lot of people would say that my hobby is quite unusual these days. I collect stamps from all over the world. My hobby started many years ago when my uncle worked in many different countries. He sent letters and postcards to us with beautiful stamps on them. Also, my grandfather collects stamps and he helps me to make my collection bigger. I learn a lot about different countries because of my stamp collection and it has made me really good at geography. Actually, I am top of my geography class.
                </div>
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">👩 Susie:</strong><br>
                    I only started gardening as a hobby a few months ago. I was watching a TV programme about a family that grow all their own fruit and vegetables and I thought it was a really good idea. I didn't know it but I am really good at growing things. This month we have lots of salad vegetables and strawberries. Actually, we have too much food so I sell some of it to our neighbours. I am saving the money to buy some beautiful flowers for our garden. Sometimes gardening is really hard work but that's a good thing because it means that I don't need to go to the gym.
                </div>
                <div>
                    <strong style="color:var(--accent-primary)">🧑 Alex:</strong><br>
                    My hobby is snowboarding. I started snowboarding when I was very young. We were on holiday in Switzerland but I didn't like skiing with the rest of my family. I tried snowboarding instead and loved it. The big problem is that there isn't much snow where I live so I have to travel a lot and that is very expensive. My parents said I need to save my own money if I want to go snowboarding often, so I think I am going to find a new hobby very soon. But I am a bit sad about that.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Who says their hobby makes them money?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "B",
                    explanation: "Susie says 'I sell some of it to our neighbours' — she makes money from selling extra vegetables and fruit."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Who plans to stop their hobby soon?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "C",
                    explanation: "Alex says 'I think I am going to find a new hobby very soon' — he plans to stop snowboarding because it's too expensive."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Who has just started doing their hobby?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "B",
                    explanation: "Susie says 'I only started gardening as a hobby a few months ago' — she just recently began."
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Who does their hobby with someone in their family?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "A",
                    explanation: "Greg says 'my grandfather collects stamps and he helps me to make my collection bigger' — he does his hobby with his grandfather."
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Who pays a lot of money to do their hobby?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "C",
                    explanation: "Alex says 'I have to travel a lot and that is very expensive' — snowboarding costs him a lot of money."
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Who says their hobby makes them healthier?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "B",
                    explanation: "Susie says 'it means that I don't need to go to the gym' — gardening keeps her fit and healthy."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Who says their hobby helps them with school work?",
                    options: [
                        { letter: "A", text: "Greg" },
                        { letter: "B", text: "Susie" },
                        { letter: "C", text: "Alex" }
                    ],
                    correctAnswer: "A",
                    explanation: "Greg says 'it has made me really good at geography. Actually, I am top of my geography class' — stamps help him with geography at school."
                }
            ]
        },

        // ============================================================
        //  READING — PART 3: Long Text (Questions 14-18)
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article about Tanya Robinson and answer the questions.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px"><strong>My life as an actor by Tanya Robinson</strong></p>
                <p style="margin-bottom:12px">My mother is an actor and my father is a musician. When I was sixteen, I started to work as an ice-cream seller in our local theatre but I always wanted to be an actor. But neither of my parents wanted me to act. They wanted me to go to university and get a job that pays lots of money.</p>
                <p style="margin-bottom:12px">When I started primary school, my school didn't teach drama. My mother didn't have time to teach me and she said that I couldn't have lessons at a drama school for children. What she didn't know was that one of my friends had a drama teacher come to her house and her parents let me do the lessons with her.</p>
                <p style="margin-bottom:12px">When I went to secondary school my drama teacher, Mrs Burton, said: "I have never seen such a good actor at your age. You could be famous one day." It was the first time someone made me believe that I could do what I wanted to do.</p>
                <p style="margin-bottom:12px">After secondary school I went to drama school. My parents were still not happy with my decision. My father said: "In the future you will wish that you had listened to us." This made me feel very sad as I wanted my parents to be happy for me. I almost changed my mind but I knew acting was the right thing for me to do.</p>
                <p>Now of course I am famous, I have worked hard but I have also been lucky. Now my whole family agrees that I made all the right decisions when I was younger and my parents are very happy for me.</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "What did Tanya's parents hope she would do?",
                    options: [
                        { letter: "A", text: "become an actor" },
                        { letter: "B", text: "get a job in a university" },
                        { letter: "C", text: "have a job that would make her rich" }
                    ],
                    correctAnswer: "C",
                    explanation: "The text says 'They wanted me to go to university and get a job that pays lots of money' — they wanted her to have a well-paid job (be rich), not necessarily work at a university."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "Tanya had her first acting lessons",
                    options: [
                        { letter: "A", text: "from her mother." },
                        { letter: "B", text: "with a friend." },
                        { letter: "C", text: "at her primary school." }
                    ],
                    correctAnswer: "B",
                    explanation: "She says 'one of my friends had a drama teacher come to her house and her parents let me do the lessons with her' — she had lessons with a friend at the friend's house."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "Mrs Burton told Tanya",
                    options: [
                        { letter: "A", text: "to believe in herself because she is good." },
                        { letter: "B", text: "that she will never become a good actor." },
                        { letter: "C", text: "that she should only be an actor if her parents agree." }
                    ],
                    correctAnswer: "A",
                    explanation: "Mrs Burton said 'You could be famous one day' and it was 'the first time someone made me believe that I could do what I wanted' — she encouraged Tanya to believe in herself."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "Tanya's father",
                    options: [
                        { letter: "A", text: "made her feel bad about having acting lessons." },
                        { letter: "B", text: "made her change her plans." },
                        { letter: "C", text: "made her feel happy about her decision." }
                    ],
                    correctAnswer: "A",
                    explanation: "Her father said 'you will wish that you had listened to us' which 'made me feel very sad' — he made her feel bad. She almost changed her mind but didn't (so B is wrong). C is clearly wrong."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "What does Tanya say about her family now?",
                    options: [
                        { letter: "A", text: "They don't think she is a good actor." },
                        { letter: "B", text: "They are angry that they were wrong." },
                        { letter: "C", text: "They are pleased that she did what she wanted to do." }
                    ],
                    correctAnswer: "C",
                    explanation: "'My whole family agrees that I made all the right decisions' and 'my parents are very happy for me' — they are pleased she followed her dream."
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
                <p style="margin-bottom:12px"><strong>The Olympic Games</strong></p>
                <p style="margin-bottom:12px">Every four years, 200 or more countries send their best athletes to <strong>(19)___</strong> part in the Olympic Games. Millions of people from all around the world <strong>(20)___</strong> the Olympic Games on television. The Olympic Games began more than 2,000 years <strong>(21)___</strong>. The modern Olympics began in Athens, Greece, in 1896.</p>
                <p style="margin-bottom:12px">The number of sports played at the Olympics <strong>(22)___</strong> from year to year. Some of the most popular Summer Olympic sports are swimming, cycling, volleyball and horse riding. The Winter Olympic sports include ice hockey, <strong>(23)___</strong> and ski jumping.</p>
                <p>Personal and team <strong>(24)___</strong> is the most important part of the Olympics. There is no prize money.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) '...send their best athletes to ___ part in the Olympic Games.'",
                    options: [
                        { letter: "A", text: "try" },
                        { letter: "B", text: "take" },
                        { letter: "C", text: "turn" }
                    ],
                    correctAnswer: "B",
                    explanation: "'Take part in' is the correct collocation meaning to participate in something."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) 'Millions of people... ___ the Olympic Games on television.'",
                    options: [
                        { letter: "A", text: "watch" },
                        { letter: "B", text: "visit" },
                        { letter: "C", text: "look" }
                    ],
                    correctAnswer: "A",
                    explanation: "You 'watch' something on television. 'Visit' is for places, and 'look' needs 'at' (look at)."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) 'The Olympic Games began more than 2,000 years ___.'",
                    options: [
                        { letter: "A", text: "since" },
                        { letter: "B", text: "ago" },
                        { letter: "C", text: "past" }
                    ],
                    correctAnswer: "B",
                    explanation: "'Ago' is used with past simple to indicate a point in the past. '2,000 years ago' is correct. 'Since' needs present perfect."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) 'The number of sports... ___ from year to year.'",
                    options: [
                        { letter: "A", text: "becomes" },
                        { letter: "B", text: "improves" },
                        { letter: "C", text: "changes" }
                    ],
                    correctAnswer: "C",
                    explanation: "'Changes from year to year' means it varies/differs each time. 'Becomes' needs a complement, 'improves' doesn't fit the meaning."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) 'The Winter Olympic sports include ice hockey, ___ and ski jumping.'",
                    options: [
                        { letter: "A", text: "windsurfing" },
                        { letter: "B", text: "snowboarding" },
                        { letter: "C", text: "sailing" }
                    ],
                    correctAnswer: "B",
                    explanation: "Snowboarding is a Winter Olympic sport played on snow. Windsurfing and sailing are water/summer sports."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) 'Personal and team ___ is the most important part of the Olympics.'",
                    options: [
                        { letter: "A", text: "business" },
                        { letter: "B", text: "rest" },
                        { letter: "C", text: "success" }
                    ],
                    correctAnswer: "C",
                    explanation: "'Personal and team success' — the Olympics is about achieving success, not money. 'Business' and 'rest' don't fit the context of competition."
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
                <p style="margin-bottom:8px"><strong>From:</strong> John &nbsp;|&nbsp; <strong>To:</strong> Sally</p>
                <p style="margin-bottom:12px">I'm on holiday with <strong>my</strong> parents in Bali. The weather is great. I'm <strong>(25)___</strong> to play beach volleyball later. It is really nice here. The hotel is big and it <strong>(26)___</strong> got a large swimming pool.</p>
                <p style="margin-bottom:12px">I have taken <strong>(27)___</strong> of photographs which I will show you when I return home. It's such <strong>(28)___</strong> shame you couldn't come with us. I think you'll like this place <strong>(29)___</strong> well.</p>
                <p>Wish you were <strong>(30)___</strong>.</p>
                <p style="margin-top:8px">Love,<br>John</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) 'I'm ___ to play beach volleyball later.'",
                    hint: "Future tense: I'm ___ to + verb",
                    acceptableAnswers: ["going"],
                    explanation: "'I'm going to' is used for future plans. 'Going to play' means he plans/intends to play."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) 'The hotel is big and it ___ got a large swimming pool.'",
                    hint: "it ___ got = it possesses",
                    acceptableAnswers: ["has"],
                    explanation: "'It has got' (it's got) means it possesses/has. 'Has' completes the present perfect structure."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) 'I have taken ___ of photographs...'",
                    hint: "___ of photographs = many photographs",
                    acceptableAnswers: ["lots", "plenty", "hundreds", "thousands"],
                    explanation: "'Lots of' or 'plenty of' means many. 'I have taken lots of photographs.'"
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'It's such ___ shame you couldn't come with us.'",
                    hint: "such ___ shame — which article?",
                    acceptableAnswers: ["a"],
                    explanation: "'Such a shame' — 'shame' is a countable noun here, so it needs the article 'a'. It's a fixed expression."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) 'I think you'll like this place ___ well.'",
                    hint: "___ well = also / too",
                    acceptableAnswers: ["as"],
                    explanation: "'As well' means 'too' or 'also'. 'You'll like this place as well' = you'll also like it."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) 'Wish you were ___.'",
                    hint: "A very common phrase when on holiday 🏖️",
                    acceptableAnswers: ["here"],
                    explanation: "'Wish you were here' is a very common phrase meaning 'I wish you could be here with me right now.'"
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 6: Email (Question 31)
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to your friend. Write 25 words or more.",
            skill: "writing",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:12px">You want to go to the cinema on Saturday with your English friend Adam.</p>
                        <p style="margin-bottom:8px"><strong>Write an email to Adam. In your email:</strong></p>
                        <ul style="padding-left:20px; margin-bottom:8px">
                            <li>ask Adam to go to the cinema with you on Saturday</li>
                            <li>say what film you want to see</li>
                            <li>say how you will get there</li>
                        </ul>
                        <p><strong>Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Adam,\n\nWould you like to go to the cinema with me on Saturday? I really want to see the new Spider-Man film. It looks really exciting!\n\nWe can take the bus from the city centre. The number 15 bus stops right outside the cinema. Let's meet at the bus stop at 2 o'clock.\n\nLet me know if you can come!\n\nSee you soon,\n[Your name]"
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
                                🌧️ <strong>Picture 1:</strong> Two friends are sharing an umbrella in heavy rain outside.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                ♟️ <strong>Picture 2:</strong> They go inside a house and sit down to play chess.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                🏓 <strong>Picture 3:</strong> They stand up holding table tennis paddles, wanting to play table tennis instead.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Saturday, Tom and his friend Lucy were walking home from school when it started raining very heavily. They shared an umbrella but they were still getting wet, so they decided to go to Tom's house.\n\nWhen they arrived, they sat down in the living room and started playing chess. After a few minutes, Lucy said she was bored because chess was too slow.\n\nThen Tom had a great idea. He found two table tennis paddles in the cupboard. They moved the chess board and started playing table tennis on the dining table instead. They had a wonderful time and forgot all about the rain outside!"
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
                    text: "What time is the man's plane leaving?",
                    audioSrc: "audio/l1q1.mp3",
                    options: [
                        { letter: "A", text: "11:00" },
                        { letter: "B", text: "11:30" },
                        { letter: "C", text: "13:00" }
                    ],
                    correctAnswer: "C",
                    explanation: "The man says his plane leaves at 1 p.m. which is 13:00 in 24-hour format."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "How much does their meal cost?",
                    audioSrc: "audio/l1q2.mp3",
                    options: [
                        { letter: "A", text: "£50" },
                        { letter: "B", text: "£35" },
                        { letter: "C", text: "£70" }
                    ],
                    correctAnswer: "A",
                    explanation: "The total cost of the meal is £35."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "What type of house is the woman looking for?",
                    audioSrc: "audio/l1q3.mp3",
                    options: [
                        { letter: "A", text: "An apartment building (tòa chung cư)" },
                        { letter: "B", text: "A standard two-storey house (nhà 2 tầng)" },
                        { letter: "C", text: "A small cottage with fence and trees (nhà nhỏ có hàng rào)" }
                    ],
                    correctAnswer: "C",
                    explanation: "The woman describes wanting a small cottage with a garden, fence and trees."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What does the man need to buy?",
                    audioSrc: "audio/l1q4.mp3",
                    options: [
                        { letter: "A", text: "A sweater/jumper (áo len)" },
                        { letter: "B", text: "Trousers/pants (quần dài)" },
                        { letter: "C", text: "A polo shirt (áo phông có cổ)" }
                    ],
                    correctAnswer: "A",
                    explanation: "The man says he needs to buy new trousers."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "What was the weather like at the weekend?",
                    audioSrc: "audio/l1q5.mp3",
                    options: [
                        { letter: "A", text: "Sunny ☀️ (nắng)" },
                        { letter: "B", text: "Snowy ❄️ (có tuyết)" },
                        { letter: "C", text: "Rainy 🌧️ (mưa)" }
                    ],
                    correctAnswer: "A",
                    explanation: "It was rainy at the weekend."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 2: Note Completion (Questions 6-10)
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a teacher talking to students about a trip. Write ONE word, number, or time for each gap.",
            skill: "listening",
            passage: `
                <p style="margin-bottom:8px"><strong>📋 Class Trip</strong></p>
                <p>When: Tomorrow</p>
                <p>Where: the <strong>(6)___</strong> Museum</p>
                <p>Time we leave: <strong>(7)___</strong> a.m.</p>
                <p>Meet at the: <strong>(8)___</strong></p>
                <p>Bring: <strong>(9)___</strong></p>
                <p>Cost: £<strong>(10)___</strong></p>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Where: the ___ Museum",
                    hint: "What type of museum?",
                    acceptableAnswers: ["Music", "music"],
                    explanation: "The teacher says they will visit the Science Museum."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Time we leave: ___ a.m.",
                    hint: "A time in the morning",
                    acceptableAnswers: ["8.30", ],
                    explanation: "They leave at 9 a.m."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Meet at the: ___",
                    hint: "Where do buses usually park at school?",
                    acceptableAnswers: ["library", "Library"],
                    explanation: "Students should meet at the car park."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Bring: ___",
                    hint: "What do you eat at midday?",
                    acceptableAnswers: ["Snacks", "snacks"],
                    explanation: "Students need to bring their own lunch."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "Cost: £___",
                    hint: "A number",
                    acceptableAnswers: ["6.50"],
                    explanation: "The trip costs £5."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 3: Conversation MCQ (Questions 11-15)
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Lee talking to his friend Paula about going to the cinema. Choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "Who has already been asked to go to the cinema with Lee?",
                    audioSrc: "audio/l3.mp3",
                    options: [
                        { letter: "A", text: "his friend Sarah" },
                        { letter: "B", text: "a member of his family" },
                        { letter: "C", text: "his friends from basketball" }
                    ],
                    correctAnswer: "C",
                    explanation: "Lee has already asked his friends from basketball to come along."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "Where did Lee get the tickets?",
                    audioSrc: "audio/l3.mp3",
                    options: [
                        { letter: "A", text: "A friend from school gave them to him." },
                        { letter: "B", text: "He won them in a competition." },
                        { letter: "C", text: "He got them on the Internet." }
                    ],
                    correctAnswer: "B",
                    explanation: "Lee won the tickets in a competition."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "What do they have to pay for?",
                    audioSrc: "audio/l3.mp3",
                    options: [
                        { letter: "A", text: "snacks" },
                        { letter: "B", text: "fizzy drinks" },
                        { letter: "C", text: "sweets" }
                    ],
                    correctAnswer: "C",
                    explanation: "They need to pay for fizzy drinks — the tickets and snacks are covered."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "They are going to see",
                    audioSrc: "audio/l3.mp3",
                    options: [
                        { letter: "A", text: "a film about two people in love." },
                        { letter: "B", text: "a new film full of action." },
                        { letter: "C", text: "a really funny film." }
                    ],
                    correctAnswer: "C",
                    explanation: "They are going to see a comedy — a really funny film."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "What time does Paula think they should meet?",
                    audioSrc: "audio/l3.mp3",
                    options: [
                        { letter: "A", text: "half an hour before the film" },
                        { letter: "B", text: "an hour before the film" },
                        { letter: "C", text: "one and a half hours before the film" }
                    ],
                    correctAnswer: "B",
                    explanation: "Paula suggests meeting an hour before the film starts so they have time."
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
                    text: "You will hear a woman talking about her new car. Why did she sell her last car?",
                    audioSrc: "audio/l4q16.mp3",
                    options: [
                        { letter: "A", text: "It was old." },
                        { letter: "B", text: "It couldn't be repaired." },
                        { letter: "C", text: "It was slow." }
                    ],
                    correctAnswer: "A",
                    explanation: "The woman sold her car because it couldn't be repaired — the mechanic said it was beyond fixing."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear two friends talking about future plans. What is the man going to do?",
                    audioSrc: "audio/l4q17.mp3",
                    options: [
                        { letter: "A", text: "learn a language" },
                        { letter: "B", text: "do sports" },
                        { letter: "C", text: "get a job" }
                    ],
                    correctAnswer: "A",
                    explanation: "The man is going to learn a new language."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a couple talking about a video. What's the video of?",
                    audioSrc: "audio/l4q18.mp3",
                    options: [
                        { letter: "A", text: "a birthday party" },
                        { letter: "B", text: "a summer holiday" },
                        { letter: "C", text: "a swimming competition" }
                    ],
                    correctAnswer: "A",
                    explanation: "The video is of their summer holiday."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a woman calling a friend. What's her problem?",
                    audioSrc: "audio/l4q19.mp3",
                    options: [
                        { letter: "A", text: "She got lost." },
                        { letter: "B", text: "She didn't call Harry." },
                        { letter: "C", text: "She is going to be late." }
                    ],
                    correctAnswer: "C",
                    explanation: "The woman's problem is that she is going to be late."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear a woman talking about a present. What did she get?",
                    audioSrc: "audio/l4q20.mp3",
                    options: [
                        { letter: "A", text: "shoes" },
                        { letter: "B", text: "clothes" },
                        { letter: "C", text: "jewellery" }
                    ],
                    correctAnswer: "B",
                    explanation: "The woman received jewellery as a present."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 5: Matching (Questions 21-25)
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Sam talking to Paul about a play. Match each person to what they will help with. Sam helps with: C (lights).",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>🎭 Help options:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">A. clothes</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">B. actors</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">C. lights</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">D. dancers</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">E. instruments</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">F. photographs</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">G. tickets</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px; font-weight:600">H. singers</span>
                </div>
                <p style="font-size:13px; color:var(--text-tertiary)">ℹ️ Sam is already assigned: <strong>C. lights</strong></p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Marco will help with: ___ (write the letter A-H)",
                    hint: "One letter from A to H",
                    acceptableAnswers: ["H", "h"],
                    explanation: "Marco will help with tickets (G)."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Mary will help with: ___ (write the letter A-H)",
                    hint: "One letter from A to H",
                    acceptableAnswers: ["A", "a"],
                    explanation: "Mary will help with clothes (A)."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Robert will help with: ___ (write the letter A-H)",
                    hint: "One letter from A to H",
                    acceptableAnswers: ["E", "e"],
                    explanation: "Robert will help with singers (H)."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Ivanna will help with: ___ (write the letter A-H)",
                    hint: "One letter from A to H",
                    acceptableAnswers: ["B", "b"],
                    explanation: "Ivanna will help with instruments (E)."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Diego will help with: ___ (write the letter A-H)",
                    hint: "One letter from A to H",
                    acceptableAnswers: ["G", "g"],
                    explanation: "Diego will help with dancers (D)."
                }
            ]
        }
    ]
};

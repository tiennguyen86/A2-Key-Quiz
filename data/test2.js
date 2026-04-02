/**
 * ============================================================
 * QUIZ DATA — ĐỀ 2: Reading & Writing + Listening
 * A2 Key Level — Combined Test
 * ============================================================
 */

// ============================================================
// ⚠️ PHÉP THUẬT NEUBRUTALISM CHO RIÊNG ĐỀ 2
// ============================================================
(function applyNeubrutalism() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Đè lại toàn bộ CSS mặc định thành Neubrutalism */
        body { background-color: #F4F4F0 !important; color: #000 !important; font-family: 'Space Grotesk', 'Inter', sans-serif !important; }
        
        .card, .passage-box, .audio-player, .bento-cell, .sample-box, .test-card {
            background-color: #FFF !important;
            border: 3px solid #000 !important;
            border-radius: 0 !important;
            box-shadow: 6px 6px 0px #000 !important;
            transition: all 0.1s ease !important;
        }
        
        .card:hover, .bento-cell:hover, .test-card:hover {
            transform: translate(2px, 2px) !important;
            box-shadow: 4px 4px 0px #000 !important;
        }
        
        .btn-primary, .btn-secondary, .option-btn, .audio-btn, .edit-btn, .sample-toggle {
            background: #FFF !important;
            color: #000 !important;
            border: 3px solid #000 !important;
            border-radius: 0 !important;
            box-shadow: 4px 4px 0px #000 !important;
            font-weight: 800 !important;
            text-transform: uppercase !important;
        }
        
        .btn-primary { background: #FF5A5F !important; color: #FFF !important; }
        .btn-secondary { background: #FFF !important; }
        
        .btn-primary:hover, .btn-secondary:hover, .option-btn:hover:not(.locked), .audio-btn:hover {
            transform: translate(2px, 2px) !important;
            box-shadow: 2px 2px 0px #000 !important;
        }
        
        .btn-primary:active, .btn-secondary:active, .option-btn:active:not(.locked), .audio-btn:active {
            transform: translate(4px, 4px) !important;
            box-shadow: 0px 0px 0px #000 !important;
        }

        .option-btn.selected { background: #FFD166 !important; }
        .option-btn.correct { background: #06D6A0 !important; }
        .option-btn.wrong { background: #EF476F !important; color: white !important; }
        
        .option-letter {
            border: 2px solid #000 !important;
            border-radius: 0 !important;
            background: #FFF !important;
            color: #000 !important;
        }

        .quiz-input, .quiz-textarea {
            border: 3px solid #000 !important;
            border-radius: 0 !important;
            box-shadow: 3px 3px 0px #000 !important;
            background: #FFF !important;
        }
        .quiz-input:focus, .quiz-textarea:focus {
            outline: none !important;
            background: #F4F4F0 !important;
            box-shadow: 5px 5px 0px #000 !important;
        }

        .explanation {
            border: 3px solid #000 !important;
            border-radius: 0 !important;
            box-shadow: 4px 4px 0px #000 !important;
            font-weight: bold !important;
            color: #000 !important;
        }
        .explanation.correct-exp { background: #06D6A0 !important; }
        .explanation.wrong-exp { background: #EF476F !important; color: #FFF !important;}

        .part-tab { border: 2px solid #000 !important; border-radius: 0 !important; font-weight: bold !important; }
        .part-tab.active { background: #118AB2 !important; color: #FFF !important; box-shadow: 3px 3px 0px #000 !important; }
        .part-tab.completed { background: #06D6A0 !important; color: #000 !important; }

        /* Tắt mấy cục mờ ảo ambient đi cho hợp style thô rạp */
        .ambient-bg { display: none !important; }
        
        h1, h2, strong { font-family: 'Space Grotesk', 'Inter', sans-serif !important; letter-spacing: -0.5px !important; }
    `;
    document.head.appendChild(style);
})();
// ============================================================


const quizData = {
    title: "A2 Key Practice Test — Đề 2",
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
                    context: "<strong>NEW SMARTPHONE</strong><br>Price: £200<br>10% Discount for students<br>A free phone case with every phone on Saturday.",
                    options: [
                        { letter: "A", text: "The new smartphone has a special price at the weekend." },
                        { letter: "B", text: "People studying have to pay less to buy the new smartphone." },
                        { letter: "C", text: "The free gift is only available on weekdays." }
                    ],
                    correctAnswer: "B",
                    explanation: "Students (people studying) get a 10% discount, so they pay less. A is wrong because the weekend offer is a free case, not a special price. C is wrong because Saturday is the weekend."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "Why did Fred send this email to Jeremy?",
                    context: "<strong>From: Fred | To: Jeremy</strong><br>Hi Jeremy,<br>I'm going to visit a university this Friday. If I pass my exams, I want to be a student at this one. Do you want to come with me?<br>Fred",
                    options: [
                        { letter: "A", text: "to tell Jeremy that he passed his exams" },
                        { letter: "B", text: "to tell Jeremy that he'll visit a university next week" },
                        { letter: "C", text: "to ask Jeremy to join him when he visits a university" }
                    ],
                    correctAnswer: "C",
                    explanation: "'Do you want to come with me?' — Fred is asking Jeremy to join him. A is wrong because he says 'If I pass'. B is wrong because the visit is 'this Friday', not next week."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>MARIO & STELLA'S WEDDING</strong><br>The wedding is at 12 p.m. Please arrive at the church no earlier than 11 a.m. Lunch will be at the restaurant next door. Please leave presents in the hall as you go in for lunch.",
                    options: [
                        { letter: "A", text: "The place guests will have lunch is not far away." },
                        { letter: "B", text: "Guests can arrive at the church before 11 a.m." },
                        { letter: "C", text: "Guests should leave the presents at the church." }
                    ],
                    correctAnswer: "A",
                    explanation: "'The restaurant next door' means it is very close (not far away). B is wrong ('no earlier than 11 a.m.'). C is wrong (leave presents in the hall at lunch, not the church)."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "Priscilla is excited because",
                    context: "<strong>Hi Elvis,</strong><br>I am really excited because we are going to France. I have never flown before. My mum said it's a small plane. Anyway, it's only a one-hour flight.<br>Priscilla",
                    options: [
                        { letter: "A", text: "she has never been on a plane before." },
                        { letter: "B", text: "the flight is a couple of hours long." },
                        { letter: "C", text: "she is travelling in a large plane." }
                    ],
                    correctAnswer: "A",
                    explanation: "Priscilla says 'I have never flown before', which is why she is excited. B is wrong (it's a one-hour flight). C is wrong (it's a small plane)."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>VILLAGE SHOP</strong><br>Opening Hours: 7 a.m. to 7 p.m. (From 1st July we will open at 6 a.m.)<br>Services: Post office, fresh food, newspapers.<br>Sorry, no frozen food.",
                    options: [
                        { letter: "A", text: "You can't post letters at the shop." },
                        { letter: "B", text: "The shop will open an hour earlier in July." },
                        { letter: "C", text: "Frozen food is available all day." }
                    ],
                    correctAnswer: "B",
                    explanation: "Currently opens at 7 a.m., but from 1st July it opens at 6 a.m. (an hour earlier). A is wrong (there is a Post office). C is wrong ('no frozen food')."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>SCHOOL TRIP TO FRANCE</strong><br>When: next month<br>Information: school office, any morning this week except for Wednesday<br>Price: £50 online, or £40 if you pay in cash<br>Please bring your passport!",
                    options: [
                        { letter: "A", text: "Students can ask about the trip any day this week." },
                        { letter: "B", text: "All students need to pay at the school office." },
                        { letter: "C", text: "Some students can pay less for the trip." }
                    ],
                    correctAnswer: "C",
                    explanation: "Students who pay in cash pay £40, which is less than £50 online. A is wrong ('except for Wednesday'). B is wrong (can pay online)."
                }
            ]
        },

        // ============================================================
        //  READING — PART 2: Matching (Questions 7-13)
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three people. Match each statement to the correct person.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:3px solid #000">
                    <strong>Charles:</strong><br>
                    Charles is sixteen and is a very good artist. He is so good that he won a competition that was held for students all over the United Kingdom. Each student had to do a painting on the subject of 'My country'. Most students painted a famous building or a beautiful landscape. Charles, however, surprised everyone by painting a traditional Sunday roast dinner! When he was asked why he chose such a strange subject, he said that eating a roast dinner with his family every Sunday was really important to him and this was the thing that he missed most when he visited other countries.
                </div>
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:3px solid #000">
                    <strong>Maria:</strong><br>
                    Maria was very happy when she won a competition to bake a birthday cake for the headteacher of her school. It was the first time that she had ever cooked anything. She found out on the internet what she needed to buy and what to do. She was going to ask her grandmother to help her because she makes beautiful cakes but then she decided to do it all by herself. Maria's prize was a cooking lesson with a TV chef. She can't wait to meet him!
                </div>
                <div>
                    <strong>Spiros:</strong><br>
                    Spiros won a short story competition. The competition was open to anyone in his city who is under eighteen. Spiros has been writing stories for many years and he loves reading. However, he only reads stories in books and not on the computer or on a tablet. He hates the internet and technology, in general. He has many, many books in his house and never throws them away. Spiros says that he will always write stories and he is sure that he will become a rich and famous writer in the future.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Which person is said to be a beginner at something?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "B",
                    explanation: "Maria: 'It was the first time that she had ever cooked anything' — she is a beginner at cooking."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Which person knows what they want to be in the future?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "C",
                    explanation: "Spiros: 'he is sure that he will become a rich and famous writer in the future.'"
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Which person did something different from other people of their age?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "A",
                    explanation: "Charles: 'Most students painted a famous building... Charles, however, surprised everyone by painting a traditional Sunday roast dinner!'"
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Which person used a computer to win a competition?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "B",
                    explanation: "Maria: 'She found out on the internet what she needed to buy and what to do.'"
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Which person doesn't like the internet?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "C",
                    explanation: "Spiros: 'He hates the internet and technology, in general.'"
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Which person was the best in their country?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "A",
                    explanation: "Charles 'won a competition that was held for students all over the United Kingdom' (the whole country)."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Which person will meet someone famous?",
                    options: [
                        { letter: "A", text: "Charles" },
                        { letter: "B", text: "Maria" },
                        { letter: "C", text: "Spiros" }
                    ],
                    correctAnswer: "B",
                    explanation: "Maria's 'prize was a cooking lesson with a TV chef. She can't wait to meet him!'"
                }
            ]
        },

        // ============================================================
        //  READING — PART 3: Long Text (Questions 14-18)
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article about Sophia Capaldi and answer the questions.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px; font-weight:800; font-size:18px">Sophia Capaldi – Young Businesswoman of the Year</p>
                <p style="margin-bottom:12px">Sophia Capaldi has just won the Young Businesswoman of the Year competition. She is the youngest woman to have ever won it. She comes from quite a poor family and when she was a child her parents couldn't buy her things that her friends had. That is when Sophia started to look on eBay and in shops that sell used or second-hand things at very low prices.</p>
                <p style="margin-bottom:12px">Sophia soon thought that she could buy things very cheaply and sell them again at a higher price. "It started as a hobby" she said. "But then I quickly started to make money and I spent more time buying and selling things until I started to earn a lot of money."</p>
                <p style="margin-bottom:12px">She had always planned to go to university but she was making so much money that she soon changed her plans. She preferred not to spend three years studying to get a good job because she was already earning a lot of money. "I think university life would be fun but I believe there will be enough time for me to have fun in the future" she said.</p>
                <p style="margin-bottom:12px">When she won the competition, she couldn't believe it. She hadn't even heard of the competition before. She was very happy and she felt that she had done something that none of her friends had ever done.</p>
                <p>Now she is planning to find one or two people to work for her in the next few weeks as there is too much for her to do on her own. Also, she thinks it will be good to have some company during the day in the office because it can be a bit boring being her own boss.</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "What problem did Sophia have when she was a child?",
                    options: [
                        { letter: "A", text: "Her family didn't have much money." },
                        { letter: "B", text: "Her parents didn't want her to have nice things." },
                        { letter: "C", text: "Her friends laughed at her because she was poor." }
                    ],
                    correctAnswer: "A",
                    explanation: "The text says 'She comes from quite a poor family and when she was a child her parents couldn't buy her things'."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "What does Sophia say about the first time she sold something?",
                    options: [
                        { letter: "A", text: "It was quite difficult." },
                        { letter: "B", text: "She became rich with the first thing she sold." },
                        { letter: "C", text: "She did it just for fun." }
                    ],
                    correctAnswer: "C",
                    explanation: "Sophia says: 'It started as a hobby' — she did it for fun initially before making a lot of money."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "Sophia believes that she will",
                    options: [
                        { letter: "A", text: "go to university when she is older." },
                        { letter: "B", text: "be sorry that she didn't go to university." },
                        { letter: "C", text: "still enjoy life when she's a bit older." }
                    ],
                    correctAnswer: "C",
                    explanation: "She says: 'I believe there will be enough time for me to have fun in the future' (meaning she will enjoy life later, not necessarily university)."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "What did Sophia think about winning the competition?",
                    options: [
                        { letter: "A", text: "She knew that she was going to win it." },
                        { letter: "B", text: "She felt very special." },
                        { letter: "C", text: "She didn't understand why she had won it." }
                    ],
                    correctAnswer: "B",
                    explanation: "She felt 'she had done something that none of her friends had ever done' — feeling unique/special."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "What is Sophia planning to do next?",
                    options: [
                        { letter: "A", text: "find a new boss" },
                        { letter: "B", text: "look for staff" },
                        { letter: "C", text: "move to a new office" }
                    ],
                    correctAnswer: "B",
                    explanation: "She is planning 'to find one or two people to work for her' — meaning she is looking for staff to help her."
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
                <p style="margin-bottom:12px; font-weight:bold; font-size:18px">Camping</p>
                <p style="margin-bottom:12px">Camping is a great <strong>(19)___</strong> to spend a holiday. You can enjoy nature and have a <strong>(20)___</strong> at the same time. If you go camping far from the city, you must remember to bring everything you need with you.</p>
                <p style="margin-bottom:12px">First, you need a tent and a sleeping bag. Also a small backpack in which you can <strong>(21)___</strong> water, some clothes and something to eat on day trips. Be very careful with things you eat. Don't eat something if you don't know what it is! Finally, it's useful to have a <strong>(22)___</strong> of the area you are going to. It can help you if you get lost.</p>
                <p>When you go camping, there are also some rules you must follow. For example, if you want to make a campfire make <strong>(23)___</strong> that you make your fire well away from tents, grasses or trees. Also always remember to <strong>(24)___</strong> your rubbish in the bins and not leave it behind.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) 'Camping is a great ___ to spend a holiday.'",
                    options: [
                        { letter: "A", text: "plan" },
                        { letter: "B", text: "path" },
                        { letter: "C", text: "way" }
                    ],
                    correctAnswer: "C",
                    explanation: "'A great way to do something' is a common expression meaning a good method or option."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) 'You can enjoy nature and have a ___ at the same time.'",
                    options: [
                        { letter: "A", text: "stuff" },
                        { letter: "B", text: "rest" },
                        { letter: "C", text: "tour" }
                    ],
                    correctAnswer: "B",
                    explanation: "'Have a rest' means to relax. The other options do not fit the verb 'have' in this context."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) '...backpack in which you can ___ water, some clothes...'",
                    options: [
                        { letter: "A", text: "carry" },
                        { letter: "B", text: "move" },
                        { letter: "C", text: "travel" }
                    ],
                    correctAnswer: "A",
                    explanation: "You 'carry' items inside a backpack."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) '...useful to have a ___ of the area you are going to. It can help you if you get lost.'",
                    options: [
                        { letter: "A", text: "menu" },
                        { letter: "B", text: "kit" },
                        { letter: "C", text: "map" }
                    ],
                    correctAnswer: "C",
                    explanation: "A 'map' shows the area and helps you if you are lost."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) '...make ___ that you make your fire well away from tents...'",
                    options: [
                        { letter: "A", text: "safe" },
                        { letter: "B", text: "sure" },
                        { letter: "C", text: "right" }
                    ],
                    correctAnswer: "B",
                    explanation: "'Make sure' is a set phrase meaning to ensure or confirm something."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) 'Also always remember to ___ your rubbish in the bins...'",
                    options: [
                        { letter: "A", text: "let" },
                        { letter: "B", text: "throw" },
                        { letter: "C", text: "fall" }
                    ],
                    correctAnswer: "B",
                    explanation: "You 'throw' rubbish in a bin."
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
                <p style="margin-bottom:8px"><strong>From:</strong> Mark &nbsp;|&nbsp; <strong>To:</strong> Robert</p>
                <p style="margin-bottom:12px">It is my birthday <strong>(0) on</strong> Saturday, and I am having a funny hat party. I have invited a <strong>(25)___</strong> of my friends. Would you like <strong>(26)___</strong> come, too?</p>
                <p style="margin-bottom:12px">My address is 12, Moor Road, Gateshead and my telephone number is 0113 4743812. Call <strong>(27)___</strong> if you can't find the road.</p>
                <p style="margin-bottom:12px">Could you bring some music playlists or CDs <strong>(28)___</strong> you? I know that you love listening to music so you must have a lot. Also, do <strong>(29)___</strong> forget your funny hat!</p>
                <p>I <strong>(30)___</strong> you can come.</p>
                <p style="margin-top:8px">See you soon,<br>Mark</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) 'I have invited a ___ of my friends.'",
                    hint: "a ___ of = some/many",
                    acceptableAnswers: ["lot", "few", "couple", "number"],
                    explanation: "'A lot of' or 'a few of' — meaning some of his friends."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) 'Would you like ___ come, too?'",
                    hint: "would you like ___ + verb",
                    acceptableAnswers: ["to"],
                    explanation: "'Would you like to come' — 'to' before the infinitive verb."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) 'Call ___ if you can't find the road.'",
                    hint: "Who should Robert call?",
                    acceptableAnswers: ["me"],
                    explanation: "'Call me' — Mark is telling Robert to phone him."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'Could you bring some music playlists or CDs ___ you?'",
                    hint: "bring something ___ someone",
                    acceptableAnswers: ["with"],
                    explanation: "'Bring with you' is the correct preposition to use here."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) 'Also, do ___ forget your funny hat!'",
                    hint: "do ___ forget = remember",
                    acceptableAnswers: ["not", "n't"],
                    explanation: "'Do not forget' = please remember. (don't is also acceptable)"
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) 'I ___ you can come.'",
                    hint: "I ___ = I want/expect",
                    acceptableAnswers: ["hope", "wish"],
                    explanation: "'I hope you can come' — expressing a wish for the future."
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 6: Email (Question 31)
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to Avril. Write 25 words or more.",
            skill: "reading",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:8px"><strong>Read the email from your English friend Avril.</strong></p>
                        <div style="padding:12px; border:3px solid #000; margin-bottom:12px; background:#FFF">
                            <strong>From:</strong> Avril<br><strong>To:</strong> Adam<br><br>
                            Hi, I brought your book back but no one was home. When do you need it? Do you want me to come back tonight? Did you finish your homework on time?<br>Avril
                        </div>
                        <p><strong>Write an email to Avril and answer the questions. Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Avril,\n\nThanks for trying to return the book! I actually don't need it until next Monday, so you don't have to come back tonight. I did manage to finish my homework on time, it was quite easy.\n\nSee you at school,\nAdam"
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
            skill: "reading",
            questions: [
                {
                    id: "w2q32",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:12px"><strong>Write a story based on these three pictures:</strong></p>
                        <div style="display:grid; gap:8px; margin-bottom:8px">
                            <div style="padding:12px; border:3px solid #000; background:#FFF">
                                🗑️ <strong>Picture 1:</strong> A boy is picking up rubbish in his garden.
                            </div>
                            <div style="padding:12px; border:3px solid #000; background:#FFF">
                                🦷 <strong>Picture 2:</strong> The same boy is sitting in a dentist's chair having his teeth checked.
                            </div>
                            <div style="padding:12px; border:3px solid #000; background:#FFF">
                                🥘 <strong>Picture 3:</strong> The boy is in the kitchen chopping vegetables while an older woman stirs a pot.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Yesterday morning, Tom decided to help his parents by picking up all the rubbish in their garden. It was hard work but he finished quickly. \n\nIn the afternoon, he had to visit the dentist for a check-up. Luckily, his teeth were perfect. \n\nWhen he got home in the evening, he felt very helpful, so he joined his mother in the kitchen and chopped vegetables for dinner."
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
                    text: "Who is the woman's teacher?",
                    audioSrc: "audio/l2q1.mp3",
                    options: [
                        { letter: "A", text: "A man with a beard and glasses" },
                        { letter: "B", text: "A man with a beard, no glasses" },
                        { letter: "C", text: "A bald man with a beard and glasses" }
                    ],
                    correctAnswer: "A",
                    explanation: "(Need audio to confirm exactly, based on provided marking it's A)"
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "Which pet does the man have?",
                    audioSrc: "audio/l2q2.mp3",
                    options: [
                        { letter: "A", text: "A dog" },
                        { letter: "B", text: "A cat" },
                        { letter: "C", text: "A goldfish in a bowl" }
                    ],
                    correctAnswer: "A",
                    explanation: "(Based on provided marking it's A)"
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "What is the woman going to order?",
                    audioSrc: "audio/l2q3.mp3",
                    options: [
                        { letter: "A", text: "A hamburger" },
                        { letter: "B", text: "A hot dog" },
                        { letter: "C", text: "A bowl of salad" }
                    ],
                    correctAnswer: "A",
                    explanation: "(Based on provided marking it's A)"
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What will the woman buy today?",
                    audioSrc: "audio/l2q4.mp3",
                    options: [
                        { letter: "A", text: "A long-sleeved shirt/jacket with chest pockets" },
                        { letter: "B", text: "A short-sleeved shirt" },
                        { letter: "C", text: "A folded shirt and tie in a package" }
                    ],
                    correctAnswer: "B",
                    explanation: "(Based on provided marking it's B)"
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "When will they go to the festival?",
                    audioSrc: "audio/l2q5.mp3",
                    options: [
                        { letter: "A", text: "Monday" },
                        { letter: "B", text: "Friday" },
                        { letter: "C", text: "Saturday" }
                    ],
                    correctAnswer: "B",
                    explanation: "(Based on provided marking it's B)"
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 2: Note Completion (Questions 6-10)
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a man leaving his friend a message about a car. Write ONE word or number.",
            skill: "listening",
            passage: `
                <div style="border:3px solid #000; padding:16px; background:#FFF">
                    <p style="text-align:center; font-weight:bold; margin-bottom:12px">New Car</p>
                    <p>Meeting place: Cafeteria</p>
                    <p>Price: £<strong>(6)___</strong></p>
                    <p>Bought: 13th <strong>(7)___</strong></p>
                    <p>Phone number: <strong>(8)___</strong></p>
                    <p>Email address: <strong>(9)___</strong>@mail.com</p>
                    <p>When to meet: <strong>(10)___</strong></p>
                </div>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Price: £___",
                    hint: "A number",
                    acceptableAnswers: ["1200"],
                    explanation: "(Based on handwritten notes: 1200)"
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Bought: 13th ___",
                    hint: "A month",
                    acceptableAnswers: ["August"],
                    explanation: "(Based on handwritten notes: August)"
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Phone number: ___",
                    hint: "A string of numbers",
                    acceptableAnswers: ["675509872"],
                    explanation: "(Based on handwritten notes: 675509872)"
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Email address: ___@mail.com",
                    hint: "A name spelled out",
                    acceptableAnswers: ["SOPHIE TURNER", "sophieturner", "sophie turner"],
                    explanation: "(Based on handwritten notes: SOPHIE TURNER)"
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "When to meet: ___",
                    hint: "Time of day",
                    acceptableAnswers: ["evenings", "evening"],
                    explanation: "(Based on handwritten notes: evenings)"
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 3: Conversation MCQ (Questions 11-15)
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Mona talking to her husband Ken about their holiday. Choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "What did Mona and Ken do on their first day?",
                    audioSrc: "audio/l2p3.mp3",
                    options: [
                        { letter: "A", text: "go fishing" },
                        { letter: "B", text: "go windsurfing" },
                        { letter: "C", text: "go swimming" }
                    ],
                    correctAnswer: "C",
                    explanation: "(Based on marking: C)"
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "How did Mona feel at the start about camping?",
                    audioSrc: "audio/l2p3.mp3",
                    options: [
                        { letter: "A", text: "worried" },
                        { letter: "B", text: "excited" },
                        { letter: "C", text: "unhappy" }
                    ],
                    correctAnswer: "A",
                    explanation: "Note the scribbled text in image 'I wasn't sure going to like camping but now I know how exciting it is'. So initially she was unsure/worried."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "What didn't they like eating?",
                    audioSrc: "audio/l2p3.mp3",
                    options: [
                        { letter: "A", text: "grilled sausages" },
                        { letter: "B", text: "boiled eggs" },
                        { letter: "C", text: "fried fish" }
                    ],
                    correctAnswer: "B",
                    explanation: "Scribbled text says 'But having egg for breakfast every day was a bit boring'. (Answer B)"
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "Next time Ken thinks they should take",
                    audioSrc: "audio/l2p3.mp3",
                    options: [
                        { letter: "A", text: "more clothes." },
                        { letter: "B", text: "some medicine." },
                        { letter: "C", text: "less food." }
                    ],
                    correctAnswer: "A",
                    explanation: "Scribbled text: 'And you should remember to pack a jacket and a sweater too' -> more clothes."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "What did Ken like best?",
                    audioSrc: "audio/l2p3.mp3",
                    options: [
                        { letter: "A", text: "singing by the campfire" },
                        { letter: "B", text: "walking in the countryside" },
                        { letter: "C", text: "swimming in the lake" }
                    ],
                    correctAnswer: "A",
                    explanation: "Scribbled text: 'I know but how would you sing when we were around the fire... what a special night' -> singing by the campfire."
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
                    text: "You will hear two friends talking about the weekend. What did the man do on Saturday?",
                    audioSrc: "audio/l2p4.mp3",
                    options: [
                        { letter: "A", text: "He went shopping." },
                        { letter: "B", text: "He spent time with his family." },
                        { letter: "C", text: "He went to work." }
                    ],
                    correctAnswer: "B",
                    explanation: "(Based on marking: B)"
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear a boss talking to an employee about work. Why didn't the man come to the office yesterday?",
                    audioSrc: "audio/l2p4.mp3",
                    options: [
                        { letter: "A", text: "He was sick." },
                        { letter: "B", text: "He was on a business trip." },
                        { letter: "C", text: "He was on holiday." }
                    ],
                    correctAnswer: "B",
                    explanation: "(Based on marking: B)"
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a woman talking about sailing. How did she learn to sail?",
                    audioSrc: "audio/l2p4.mp3",
                    options: [
                        { letter: "A", text: "Her friends taught her." },
                        { letter: "B", text: "She got a sailing teacher." },
                        { letter: "C", text: "She practised a lot." }
                    ],
                    correctAnswer: "C",
                    explanation: "(Based on marking: C)"
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a woman talking about her day at work. What did she like best?",
                    audioSrc: "audio/l2p4.mp3",
                    options: [
                        { letter: "A", text: "the conversation with her boss" },
                        { letter: "B", text: "the new advertisement" },
                        { letter: "C", text: "her new project" }
                    ],
                    correctAnswer: "C",
                    explanation: "(Based on marking: C)"
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear two friends talking about a flight. Why didn't they rest?",
                    audioSrc: "audio/l2p4.mp3",
                    options: [
                        { letter: "A", text: "The flight was too long." },
                        { letter: "B", text: "It was quite noisy." },
                        { letter: "C", text: "The seats were uncomfortable." }
                    ],
                    correctAnswer: "B",
                    explanation: "(Based on marking: B)"
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 5: Matching (Questions 21-25)
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Tyler talking to his sister Sandra about the sports his friends want to try. What sport does each friend want to do?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>🏅 Sports options:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">A. skateboarding</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">B. table tennis</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">C. cycling</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">D. riding</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">E. sailing</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">F. skiing</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">G. snowboarding</span>
                    <span style="padding:4px 10px; border:2px solid #000; font-weight:800; text-transform:uppercase">H. windsurfing</span>
                </div>
                <p style="font-size:13px; font-weight:bold">ℹ️ Tyler already chose: <strong>D. riding</strong></p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Daniel wants to try: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["F", "f"],
                    explanation: "(Based on marking: F - skiing)"
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Barbara wants to try: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["G", "g"],
                    explanation: "(Based on marking: G - snowboarding)"
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Hasan wants to try: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["C", "c"],
                    explanation: "(Based on marking: C - cycling)"
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Ingrid wants to try: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["B", "b"],
                    explanation: "(Based on marking: B - table tennis)"
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Charles wants to try: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["A", "a"],
                    explanation: "(Based on marking: A - skateboarding)"
                }
            ]
        }
    ]
};
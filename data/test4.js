/**
 * ============================================================
 * QUIZ DATA — ĐỀ 4: Reading & Writing + Listening
 * A2 Key Level — Spatial UI (Liquid Glass / Apple VisionOS Vibe)
 * ============================================================
 */

// ============================================================
// 🔮 PHÉP THUẬT LIQUID GLASS CHO RIÊNG ĐỀ 4
// ============================================================
(function applySpatialUI() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Nền Mesh Gradient động */
        body { 
            background: linear-gradient(45deg, #ff9a9e, #fecfef, #a1c4fd, #c2e9fb) !important;
            background-size: 400% 400% !important;
            animation: gradientBG 15s ease infinite !important;
            color: #1d1d1f !important; 
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif !important; 
            min-height: 100vh;
        }
        
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Hiệu ứng kính mờ (Frosted Glass) cho toàn bộ thẻ */
        .card, .passage-box, .audio-player, .sample-box {
            background: rgba(255, 255, 255, 0.4) !important;
            backdrop-filter: blur(24px) saturate(150%) !important;
            -webkit-backdrop-filter: blur(24px) saturate(150%) !important;
            border: 1px solid rgba(255, 255, 255, 0.6) !important;
            border-radius: 24px !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08) !important;
            transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease !important;
        }

        .card:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12) !important;
        }

        /* Nút Option chuẩn phong cách nút nổi của Apple */
        .option-btn {
            background: rgba(255, 255, 255, 0.5) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255, 255, 255, 0.8) !important;
            border-radius: 16px !important;
            margin-bottom: 12px !important;
            color: #1d1d1f !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
            transition: all 0.2s ease !important;
        }

        .option-btn:hover:not(.locked) {
            background: rgba(255, 255, 255, 0.8) !important;
            transform: scale(1.01) !important;
        }

        /* Trạng thái chọn */
        .option-btn.selected { 
            background: rgba(0, 122, 255, 0.15) !important; 
            border-color: rgba(0, 122, 255, 0.5) !important; 
            box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.5) !important;
        }
        
        /* Trạng thái đúng / sai */
        .option-btn.correct { 
            background: rgba(52, 199, 89, 0.2) !important; 
            border-color: rgba(52, 199, 89, 0.6) !important; 
            color: #108137 !important; 
        }
        .option-btn.wrong { 
            background: rgba(255, 59, 48, 0.15) !important; 
            border-color: rgba(255, 59, 48, 0.5) !important; 
            color: #c93429 !important; 
        }

        .option-letter {
            border: none !important;
            background: rgba(255,255,255,0.6) !important;
            border-radius: 10px !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05) !important;
            color: #1d1d1f !important;
        }

        /* Nút Primary (Next) trong suốt ánh kim */
        .btn-primary {
            background: rgba(255, 255, 255, 0.3) !important;
            backdrop-filter: blur(20px) !important;
            color: #000 !important;
            border: 1px solid rgba(255, 255, 255, 0.8) !important;
            border-radius: 20px !important;
            font-weight: 600 !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
        }
        .btn-primary:hover {
            background: rgba(255, 255, 255, 0.6) !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1) !important;
        }

        /* Input / Textarea kính mờ */
        .quiz-input, .quiz-textarea {
            background: rgba(255, 255, 255, 0.5) !important;
            border: 1px solid rgba(255, 255, 255, 0.7) !important;
            border-radius: 16px !important;
            backdrop-filter: blur(10px) !important;
            color: #1d1d1f !important;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.02) !important;
        }
        .quiz-input:focus, .quiz-textarea:focus {
            background: rgba(255, 255, 255, 0.8) !important;
            border-color: #007aff !important;
            box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2) !important;
        }

        /* Tabs */
        .part-tab {
            background: rgba(255,255,255,0.3) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(255,255,255,0.5) !important;
            border-radius: 20px !important;
            color: #1d1d1f !important;
        }
        .part-tab.active { 
            background: rgba(255,255,255,0.8) !important; 
            border-color: #fff !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05) !important;
        }

        h1, h2, strong { font-weight: 700 !important; letter-spacing: -0.02em !important; }
        .ambient-bg { display: none !important; } /* Tắt ambient mặc định để nhường chỗ cho Mesh Gradient */
    `;
    document.head.appendChild(style);
})();
// ============================================================

const quizData = {
    title: "A2 Key Practice Test — Đề 4",
    parts: [
        // ============================================================
        // READING — PART 1
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
                    text: "Why did John send this message?",
                    context: "<strong>To: Ms Smith | From: John</strong><br>Dear Ms Smith,<br>I can't come to work today. I was very ill last night. I had a high temperature, so I need to go to the doctor this morning.<br>John",
                    options: [
                        { letter: "A", text: "John will see the doctor after work today." },
                        { letter: "B", text: "John is too sick to go to work." },
                        { letter: "C", text: "John will go to work in the morning." }
                    ],
                    correctAnswer: "B",
                    explanation: "John says 'I can't come to work today. I was very ill last night' — meaning he is too sick to work."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>NEW TABLET COMPUTERS</strong><br>We are sorry but we sold all the tablets. We will have some more on Friday. Please ask one of the shop assistants for more information or look at our website.",
                    options: [
                        { letter: "A", text: "You can only learn about the new tablets online." },
                        { letter: "B", text: "You can buy a new tablet today." },
                        { letter: "C", text: "There will be more tablets at the end of the week." }
                    ],
                    correctAnswer: "C",
                    explanation: "'We will have some more on Friday'. Friday is near the end of the week. B is wrong because they 'sold all the tablets' today."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>MUSIC FESTIVAL</strong><br>3-day event starting on Friday at Farmer Bob's farm<br>Please bring: your ticket and identification, a tent, lots of water<br>Everyone is welcome!",
                    options: [
                        { letter: "A", text: "There is water available in the festival." },
                        { letter: "B", text: "The festival finishes on Sunday." },
                        { letter: "C", text: "The festival is only for farmers." }
                    ],
                    correctAnswer: "B",
                    explanation: "It's a 3-day event starting on Friday (Friday, Saturday, Sunday). So it finishes on Sunday."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>CITY PARK</strong><br>Please do not give food to the ducks!<br>The lake is very dirty, so please do not swim in it.<br>This park closes at 7 p.m. in the summer.",
                    options: [
                        { letter: "A", text: "There aren't any animals in the park." },
                        { letter: "B", text: "The park is closed during the summer." },
                        { letter: "C", text: "You can't get into the lake." }
                    ],
                    correctAnswer: "C",
                    explanation: "'...please do not swim in it' means you cannot get into the lake. A is wrong (there are ducks). B is wrong (closes at 7pm, not fully closed)."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "Why did Margaret write this email?",
                    context: "<strong>To: Billy | From: Margaret</strong><br>Hi Billy,<br>I am very excited! My uncle is coming to visit us tomorrow for ten days. I haven't seen him since Christmas. I hope he brings me lots of presents.<br>Margaret",
                    options: [
                        { letter: "A", text: "to tell Billy that her uncle is coming for Christmas" },
                        { letter: "B", text: "to tell Billy that she's happy about her uncle's visit" },
                        { letter: "C", text: "to tell Billy that she saw her uncle ten days ago" }
                    ],
                    correctAnswer: "B",
                    explanation: "Margaret says 'I am very excited! My uncle is coming to visit us tomorrow' — she is happy/excited about the visit."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>HOUSE FOR SALE</strong><br>Price: £200,000<br>4 bedrooms and 2 bathrooms<br>Small garden at the back<br>Garage big enough for two small cars<br>5 minutes' walk to get the train",
                    options: [
                        { letter: "A", text: "There is a garden by the front door." },
                        { letter: "B", text: "There are more bathrooms than bedrooms." },
                        { letter: "C", text: "The house is close to the train station." }
                    ],
                    correctAnswer: "C",
                    explanation: "'5 minutes' walk to get the train' means the train station is very close."
                }
            ]
        },

        // ============================================================
        // READING — PART 2
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three people talking about the internet. Match each statement to the correct person.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:12px">
                    <strong style="color:#007aff">Karen:</strong><br>
                    I think the internet is great. My cousins live in Australia and I really miss them. We use Skype to talk once a week and to tell each other our news. Also, my best friend lives in Germany at the moment because she works there so we talk on the internet nearly every day. It would be very expensive if we talked to each other on the phone but it doesn't cost us anything to talk on the internet.
                </div>
                <div style="margin-bottom:12px">
                    <strong style="color:#007aff">Peter:</strong><br>
                    The internet is a great way to have fun. I love playing games on my own and with my friends on the computer. I also play games with people that I have not met in real life. Some of them are even in different countries, which is exciting. Sometimes my friends at work think that I should stop playing because games can make you do bad things in real life. However, I'm clever enough to know the difference between games and real life. I wouldn't do anything bad.
                </div>
                <div>
                    <strong style="color:#007aff">Sue:</strong><br>
                    I'm not really interested in playing games on the internet although most of my friends are. For me the best thing about the internet is that I can find information about everything. When my parents were young, they had to go to the library if they wanted to know about something for a project. I can be comfortable in my office and do all my work. Also, I am learning German on the internet. There is a fun website where you learn words by listening to songs in German. It's much better than my boring French classes when I was a student.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Who says working in an office is easier now?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "C",
                    explanation: "Sue says: 'I can be comfortable in my office and do all my work' (compared to her parents having to go to the library)."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Who says their best friend is in a different country?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "A",
                    explanation: "Karen says: 'my best friend lives in Germany at the moment'."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Who says their colleagues worry about them?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "B",
                    explanation: "Peter says: 'Sometimes my friends at work (colleagues) think that I should stop playing because games can make you do bad things...'"
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Who says they are different from their friends?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "C",
                    explanation: "Sue says: 'I'm not really interested in playing games on the internet although most of my friends are.'"
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Who says they are learning a new language?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "C",
                    explanation: "Sue says: 'Also, I am learning German on the internet.'"
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Who says they have made new friends on the internet?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "B",
                    explanation: "Peter says: 'I also play games with people that I have not met in real life.'"
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Who says the internet saves them money?",
                    options: [{ letter: "A", text: "Karen" }, { letter: "B", text: "Peter" }, { letter: "C", text: "Sue" }],
                    correctAnswer: "A",
                    explanation: "Karen says: 'It would be very expensive if we talked... on the phone but it doesn't cost us anything to talk on the internet.'"
                }
            ]
        },

        // ============================================================
        // READING — PART 3
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article and choose the correct answer.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px; font-weight:bold; font-size:18px">Giving food to poor people</p>
                <p style="margin-bottom:12px">Katie Stagliano was only twelve when she thought of a way to help give food to poor people in her city. Katie had been watching a cooking programme with her mum who works as a waitress in a restaurant. On the programme they were making soups out of different kinds of vegetables and they were showing people how to make lots of food cheaply.</p>
                <p style="margin-bottom:12px">Cabbage was one of the vegetables that they used and so Katie started to grow some. She grew a ten-kilo cabbage in her garden. That cabbage was big enough to make food for 275 people at her local soup cafe where people who are hungry can go and get free food.</p>
                <p style="margin-bottom:12px">Katie said, "When I saw how many hungry people had soup from my cabbage I thought that it doesn't have to be difficult or expensive to help people".</p>
                <p style="margin-bottom:12px">Katie adds, "It also gave me the idea for my business, <em>Katie's Gardens</em>, which builds vegetable gardens so that food can be grown and given to the poor. We don't make any money but everyone working with us takes food for free. We grow lots of fruit and vegetables and take them to places all over the city."</p>
                <p>Katie says that she wants to ask people to open more of these gardens all over the country. "I want them to be looked after by young people like myself. Then they will understand how important it is to help other people."</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "Where did Katie get the idea to help people from?",
                    options: [
                        { letter: "A", text: "the TV" },
                        { letter: "B", text: "her mum" },
                        { letter: "C", text: "a restaurant" }
                    ],
                    correctAnswer: "A",
                    explanation: "She got the idea because she 'had been watching a cooking programme' (on TV)."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "Katie gives food to people who come",
                    options: [
                        { letter: "A", text: "to her kitchen." },
                        { letter: "B", text: "to her garden." },
                        { letter: "C", text: "to a cafe." }
                    ],
                    correctAnswer: "C",
                    explanation: "Her cabbage made food for 275 people 'at her local soup cafe where people who are hungry can go...'"
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "Katie said that she understood",
                    options: [
                        { letter: "A", text: "how to make difficult meals for people." },
                        { letter: "B", text: "how to get free food for her family." },
                        { letter: "C", text: "how she could easily make someone's life better." }
                    ],
                    correctAnswer: "C",
                    explanation: "She thought 'it doesn't have to be difficult or expensive to help people' — meaning it's easy to make someone's life better."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "What does Katie say about her business?",
                    options: [
                        { letter: "A", text: "She is making lots of money." },
                        { letter: "B", text: "The workers get paid with food." },
                        { letter: "C", text: "She grows all the food by herself." }
                    ],
                    correctAnswer: "B",
                    explanation: "She says: 'We don't make any money but everyone working with us takes food for free' (paid with food)."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "What is Katie hoping to do in the future?",
                    options: [
                        { letter: "A", text: "get other people to do what she is doing" },
                        { letter: "B", text: "grow food in her neighbour's garden" },
                        { letter: "C", text: "start a business that sells food to shops" }
                    ],
                    correctAnswer: "A",
                    explanation: "She wants to 'ask people to open more of these gardens all over the country' and have them 'looked after by young people like myself'."
                }
            ]
        },

        // ============================================================
        // READING — PART 4
        // ============================================================
        {
            id: "r4",
            title: "Reading Part 4 — Gap Fill",
            description: "Choose the correct word for each gap.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px; font-weight:bold; font-size:18px">Dr Cicely Williams</p>
                <p style="margin-bottom:12px">Cicely Williams was the first woman from Jamaica to go to university to <strong>(19)___</strong> medicine. She went to Oxford University just after the end of World War I. She was very <strong>(20)___</strong> in health problems that children have and medicines to help with these problems.</p>
                <p>She was working at a time when there were not many women doctors. It was difficult for her to make people <strong>(21)___</strong> to her ideas. In her life she worked in hospitals in America, Europe, Africa and Asia. She <strong>(22)___</strong> famous for her work that showed how important healthy food and education is to stop babies and children from getting <strong>(23)___</strong>. While she was in Africa, she found a <strong>(24)___</strong> to help many babies who were ill by telling their mothers what to do.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) '...to go to university to ___ medicine.'",
                    options: [{ letter: "A", text: "prepare" }, { letter: "B", text: "study" }, { letter: "C", text: "know" }],
                    correctAnswer: "B",
                    explanation: "You 'study medicine' at a university."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) 'She was very ___ in health problems...'",
                    options: [{ letter: "A", text: "interested" }, { letter: "B", text: "sad" }, { letter: "C", text: "worried" }],
                    correctAnswer: "A",
                    explanation: "The preposition 'in' follows 'interested' -> interested in something."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) 'It was difficult for her to make people ___ to her ideas.'",
                    options: [{ letter: "A", text: "hear" }, { letter: "B", text: "listen" }, { letter: "C", text: "believe" }],
                    correctAnswer: "B",
                    explanation: "The preposition 'to' requires 'listen' -> listen to her ideas."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) 'She ___ famous for her work...'",
                    options: [{ letter: "A", text: "began" }, { letter: "B", text: "arrived" }, { letter: "C", text: "became" }],
                    correctAnswer: "C",
                    explanation: "'became famous' means she got fame over time."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) '...to stop babies and children from getting ___.'",
                    options: [{ letter: "A", text: "sick" }, { letter: "B", text: "broken" }, { letter: "C", text: "terrible" }],
                    correctAnswer: "A",
                    explanation: "People get 'sick'. 'Broken' is for objects."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) '...she found a ___ to help many babies...'",
                    options: [{ letter: "A", text: "path" }, { letter: "B", text: "way" }, { letter: "C", text: "road" }],
                    correctAnswer: "B",
                    explanation: "'find a way to do something' means finding a method/solution."
                }
            ]
        },

        // ============================================================
        // READING — PART 5
        // ============================================================
        {
            id: "r5",
            title: "Reading Part 5 — Open Gap Fill",
            description: "Write ONE word for each gap to complete the email.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:8px"><strong>From:</strong> Alexis &nbsp;|&nbsp; <strong>To:</strong> Rachel</p>
                <p style="margin-bottom:12px">I'm having a wonderful holiday in the hotel you told me about. <strong>(0) My</strong> room is very big and has a great view <strong>(25)___</strong> the sea. In the morning, I <strong>(26)___</strong> swimming in the sea. Then, I have lunch at the hotel café. They serve fresh fish that they catch near here. I have a nice big piece of cake, <strong>(27)___</strong>.</p>
                <p style="margin-bottom:12px">Yesterday I went shopping. I bought a beautiful pink dress and a silver ring. I <strong>(28)___</strong> found a present to give to my sister. It's a painting of the island and I'm sure she will love <strong>(29)___</strong>.</p>
                <p>Tomorrow I will visit the local museum and I will <strong>(30)___</strong> lots of photos.</p>
                <p style="margin-top:8px">I hope you and your family are well.<br>Love,<br>Alexis</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) '...has a great view ___ the sea.'",
                    hint: "Preposition for view",
                    acceptableAnswers: ["of"],
                    explanation: "'a view of something' (cảnh nhìn ra đâu đó)."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) 'In the morning, I ___ swimming in the sea.'",
                    hint: "___ swimming",
                    acceptableAnswers: ["go"],
                    explanation: "We use 'go' with V-ing activities -> go swimming."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) 'I have a nice big piece of cake, ___.'",
                    hint: "meaning 'also/as well', used at the end",
                    acceptableAnswers: ["too"],
                    explanation: "'too' goes at the end of a sentence to mean 'also'."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'I ___ found a present to give to my sister.'",
                    hint: "meaning 'too/as well', used before the verb",
                    acceptableAnswers: ["also"],
                    explanation: "'also' is placed before the main verb to show an addition."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) 'It's a painting... and I'm sure she will love ___.'",
                    hint: "Pronoun referring to the painting",
                    acceptableAnswers: ["it"],
                    explanation: "'it' refers back to 'a painting'."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) '...and I will ___ lots of photos.'",
                    hint: "Verb used with photos",
                    acceptableAnswers: ["take"],
                    explanation: "You 'take photos' using a camera."
                }
            ]
        },

        // ============================================================
        // WRITING — PART 6
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to John.",
            skill: "reading",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:8px">You want to go shopping on Monday with your English friend John. Write an email to John.</p>
                        <p><strong>In your email:</strong></p>
                        <ul style="padding-left:20px; margin-bottom:8px">
                            <li>ask John to go shopping with you on Monday</li>
                            <li>say what you want to buy</li>
                            <li>tell John how you will get there</li>
                        </ul>
                        <p><strong>Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi John,\n\nWould you like to go shopping with me on Monday evening? I need to buy a new pair of shoes for school.\n\nWe could meet at the bus stop near our school at 5.00 p.m. and take the bus to the shopping mall together.\n\nSee you,\n[Your name]"
                }
            ]
        },

        // ============================================================
        // WRITING — PART 7
        // ============================================================
        {
            id: "w2",
            title: "Writing Part 7 — Story",
            description: "Look at the three pictures and write the story.",
            skill: "reading",
            questions: [
                {
                    id: "w2q32",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:12px"><strong>Write a story based on these three pictures:</strong></p>
                        <div style="display:grid; gap:8px; margin-bottom:8px">
                            <div style="padding:12px; background:rgba(255,255,255,0.4); border-radius:16px;">
                                👩‍🏫 <strong>Picture 1:</strong> A teacher writes "Research Project" on the board.
                            </div>
                            <div style="padding:12px; background:rgba(255,255,255,0.4); border-radius:16px;">
                                💭 <strong>Picture 2:</strong> A boy and girl sit at their desks, thinking about world landmarks like the Leaning Tower of Pisa and the Sphinx.
                            </div>
                            <div style="padding:12px; background:rgba(255,255,255,0.4); border-radius:16px;">
                                📚 <strong>Picture 3:</strong> The two students walk into a library carrying their backpacks.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Friday afternoon, Judy and Patrick's teacher gave them a new research project about beautiful sights in the world. \n\nThey sat at their desks discussing famous places like the Leaning Tower of Pisa and the Sphinx in Egypt. \n\nAfter that, they decided to go to the school library together to find more information and books for their project."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 1
        // ============================================================
        {
            id: "l1",
            title: "Listening Part 1 — Picture Questions",
            description: "For each question, choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l1q1",
                    type: "listening-mcq",
                    text: "What day will they meet?",
                    audioSrc: "audio/l4q1.mp3",
                    options: [
                        { letter: "A", text: "Tuesday" },
                        { letter: "B", text: "Wednesday" },
                        { letter: "C", text: "Thursday" }
                    ],
                    correctAnswer: "A",
                    explanation: "They will meet on Tuesday."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "How much does the woman pay for the ticket?",
                    audioSrc: "audio/l4q2.mp3",
                    options: [
                        { letter: "A", text: "£104" },
                        { letter: "B", text: "£140" },
                        { letter: "C", text: "£180" }
                    ],
                    correctAnswer: "B",
                    explanation: "The ticket costs £140."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "What job does the man do?",
                    audioSrc: "audio/l4q3.mp3",
                    options: [
                        { letter: "A", text: "A waiter" },
                        { letter: "B", text: "An office worker / computer desk" },
                        { letter: "C", text: "A receptionist" }
                    ],
                    correctAnswer: "B",
                    explanation: "He works at a computer desk in an office."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What are they watching tonight?",
                    audioSrc: "audio/l4q4.mp3",
                    options: [
                        { letter: "A", text: "News / Presenter on TV" },
                        { letter: "B", text: "Dancing on TV" },
                        { letter: "C", text: "Police show on TV" }
                    ],
                    correctAnswer: "B",
                    explanation: "They are watching a dancing show on TV."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "What is the weather like now?",
                    audioSrc: "audio/l4q5.mp3",
                    options: [
                        { letter: "A", text: "Sunny" },
                        { letter: "B", text: "Raining" },
                        { letter: "C", text: "Cloudy" }
                    ],
                    correctAnswer: "C",
                    explanation: "The weather is currently cloudy."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 2
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a tour guide talking to a group of tourists about their plans for the day.",
            skill: "listening",
            passage: `
                <div style="background:rgba(255,255,255,0.4); padding:16px; border-radius:16px; border:1px solid rgba(255,255,255,0.8)">
                    <p style="text-align:center; font-weight:bold; margin-bottom:12px">London City Tours</p>
                    <p>Guide's Name: John</p>
                    <p>Meet at entrance: <strong>(6)___</strong> a.m.</p>
                    <p>Bring: <strong>(7)___</strong></p>
                    <p>Cost of lunch: £<strong>(8)___</strong></p>
                    <p>More information on: www.<strong>(9)___</strong>.com</p>
                    <p>Meet at the end of: <strong>(10)___</strong> Street</p>
                </div>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Meet at entrance: ___ a.m.",
                    hint: "A time before 9",
                    acceptableAnswers: ["8.50", "8:50"],
                    explanation: "They meet at 8.50 a.m."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Bring: ___",
                    hint: "Something to take pictures with",
                    acceptableAnswers: ["cameras", "camera"],
                    explanation: "They need to bring cameras."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Cost of lunch: £___",
                    hint: "A price",
                    acceptableAnswers: ["9.95"],
                    explanation: "Lunch costs £9.95."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "More information on: www.___ .com",
                    hint: "Spelled out in audio",
                    acceptableAnswers: ["shopspots", "Shopspots"],
                    explanation: "The website is shopspots.com."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "Meet at the end of: ___ Street",
                    hint: "A famous street in London",
                    acceptableAnswers: ["Piccadilly", "piccadilly"],
                    explanation: "They meet at the end of Piccadilly Street."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 3
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Amir talking to his colleague Sarah about a company event.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "When is the event?",
                    audioSrc: "audio/l4p3.mp3",
                    options: [
                        { letter: "A", text: "29th May" },
                        { letter: "B", text: "1st June" },
                        { letter: "C", text: "3rd June" }
                    ],
                    correctAnswer: "C",
                    explanation: "The event is on the 3rd of June."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "What does Amir think Sarah should wear at the event?",
                    audioSrc: "audio/l4p3.mp3",
                    options: [
                        { letter: "A", text: "her brown suit" },
                        { letter: "B", text: "her black dress" },
                        { letter: "C", text: "a new blouse and a skirt" }
                    ],
                    correctAnswer: "A",
                    explanation: "He suggests her brown suit."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "What is Sarah excited about?",
                    audioSrc: "audio/l4p3.mp3",
                    options: [
                        { letter: "A", text: "a business appointment" },
                        { letter: "B", text: "free aeroplane tickets" },
                        { letter: "C", text: "a new project at work" }
                    ],
                    correctAnswer: "B",
                    explanation: "She is excited about the free aeroplane tickets."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "Who will Sarah take to the event?",
                    audioSrc: "audio/l4p3.mp3",
                    options: [
                        { letter: "A", text: "her husband" },
                        { letter: "B", text: "her mum" },
                        { letter: "C", text: "her kids" }
                    ],
                    correctAnswer: "A",
                    explanation: "She will take her husband."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "Why does Amir have to be at the event earlier?",
                    audioSrc: "audio/l4p3.mp3",
                    options: [
                        { letter: "A", text: "to take photographs" },
                        { letter: "B", text: "to make some calls" },
                        { letter: "C", text: "to chat with employees" }
                    ],
                    correctAnswer: "C",
                    explanation: "Amir has to be there earlier to chat with employees."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 4
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
                    text: "You will hear a woman talking to a colleague. Who is she waiting for?",
                    audioSrc: "audio/l4p4.mp3",
                    options: [
                        { letter: "A", text: "a colleague" },
                        { letter: "B", text: "a family member" },
                        { letter: "C", text: "a friend" }
                    ],
                    correctAnswer: "B",
                    explanation: "She is waiting for a family member."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear a man phoning his wife. Why is he phoning her?",
                    audioSrc: "audio/l4p4.mp3",
                    options: [
                        { letter: "A", text: "to ask her to cook for him and his colleague" },
                        { letter: "B", text: "to invite her to his colleague's house" },
                        { letter: "C", text: "to say sorry for not coming home" }
                    ],
                    correctAnswer: "B",
                    explanation: "He phones to invite her to his colleague's house."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a couple talking about a new car. How will they find out how much it costs?",
                    audioSrc: "audio/l4p4.mp3",
                    options: [
                        { letter: "A", text: "They'll have a look online." },
                        { letter: "B", text: "They'll ask a friend." },
                        { letter: "C", text: "They'll look at a magazine." }
                    ],
                    correctAnswer: "C",
                    explanation: "They will look at a magazine to find the price."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear two friends talking about a group tour. Why will they book a Monday tour?",
                    audioSrc: "audio/l4p4.mp3",
                    options: [
                        { letter: "A", text: "It's cheaper." },
                        { letter: "B", text: "It's less crowded." },
                        { letter: "C", text: "The weather will be better." }
                    ],
                    correctAnswer: "B",
                    explanation: "They choose Monday because it is less crowded."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear a woman calling her boss. What does she need to do first?",
                    audioSrc: "audio/l4p4.mp3",
                    options: [
                        { letter: "A", text: "meet her boss" },
                        { letter: "B", text: "be with a colleague" },
                        { letter: "C", text: "talk to the secretary" }
                    ],
                    correctAnswer: "B",
                    explanation: "She needs to be with a colleague (the new guy) first."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 5
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Richard talking to Anya about the weather this week. What was the weather like each day?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>🌤️ Weather options:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">A. cloudy</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">B. sunny</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">C. windy</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">D. snow</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">E. rain</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">F. foggy</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">G. storm</span>
                    <span style="padding:6px 12px; background:rgba(255,255,255,0.5); border-radius:12px; font-weight:600">H. too hot</span>
                </div>
                <p style="font-size:13px; font-weight:bold; color:#1d1d1f">ℹ️ Example: Monday -> H</p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Tuesday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["B", "b"],
                    explanation: "Tuesday was sunny."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Wednesday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["C", "c"],
                    explanation: "Wednesday was windy."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Thursday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["G", "g"],
                    explanation: "Thursday had a storm (bão)."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Friday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["F", "f"],
                    explanation: "Friday was foggy (sương mù)."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Weekend: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["D", "d"],
                    explanation: "The weekend had snow."
                }
            ]
        }
    ]
};
/**
 * ============================================================
 * QUIZ DATA — ĐỀ 3: Reading & Writing + Listening
 * A2 Key Level — Gamified Style (Duolingo Vibe)
 * ============================================================
 */

// ============================================================
// 🪄 PHÉP THUẬT GAMIFIED CHO RIÊNG ĐỀ 3
// ============================================================
(function applyGamifiedStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Nền kẹo ngọt, font chữ tròn trịa */
        body { 
            background-color: #F7F7F8 !important; 
            color: #4B4B4B !important; 
            font-family: 'Nunito', 'Quicksand', 'Inter', sans-serif !important; 
        }
        
        /* Thẻ Card béo ngậy */
        .card, .passage-box, .audio-player, .sample-box {
            background-color: #FFFFFF !important;
            border: 2px solid #E5E5E5 !important;
            border-bottom: 6px solid #E5E5E5 !important;
            border-radius: 24px !important;
            box-shadow: none !important;
            transition: all 0.2s ease !important;
        }

        /* Nút Option 3D */
        .option-btn {
            background-color: #FFFFFF !important;
            border: 2px solid #E5E5E5 !important;
            border-bottom: 6px solid #E5E5E5 !important;
            border-radius: 16px !important;
            margin-bottom: 12px !important;
            font-weight: bold !important;
            color: #4B4B4B !important;
            box-shadow: none !important;
        }

        /* Hiệu ứng lún nút khi click */
        .option-btn:active:not(.locked) {
            transform: translateY(4px) !important;
            border-bottom-width: 2px !important;
            margin-bottom: 16px !important; /* Bù lại khoảng trống để thẻ không bị giật */
        }

        /* Trạng thái chọn */
        .option-btn.selected { 
            background: #DDF4FF !important; 
            border-color: #1CB0F6 !important; 
            color: #1899D6 !important;
        }
        
        /* Trạng thái đúng / sai */
        .option-btn.correct { 
            background: #D7FFB8 !important; 
            border-color: #58A700 !important; 
            color: #58A700 !important; 
        }
        .option-btn.wrong { 
            background: #FFDFE0 !important; 
            border-color: #EA2B2B !important; 
            color: #EA2B2B !important; 
        }

        .option-letter {
            border: none !important;
            background: transparent !important;
            font-size: 16px !important;
            color: inherit !important;
        }

        /* Nút Primary (Next) */
        .btn-primary {
            background: #58CC02 !important;
            color: #FFF !important;
            border: none !important;
            border-bottom: 6px solid #58A700 !important;
            border-radius: 16px !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            font-weight: 800 !important;
            box-shadow: none !important;
        }
        .btn-primary:active {
            transform: translateY(4px) !important;
            border-bottom-width: 2px !important;
        }

        /* Input / Textarea */
        .quiz-input, .quiz-textarea {
            background: #F7F7F8 !important;
            border: 2px solid #E5E5E5 !important;
            border-radius: 16px !important;
            font-weight: bold !important;
            box-shadow: none !important;
        }
        .quiz-input:focus, .quiz-textarea:focus {
            border-color: #1CB0F6 !important;
            background: #FFF !important;
        }

        /* Giải thích */
        .explanation {
            border-radius: 16px !important;
            font-weight: bold !important;
            border-width: 2px !important;
        }

        /* Tabs */
        .part-tab {
            border-radius: 100px !important;
            border: 2px solid #E5E5E5 !important;
            font-weight: bold !important;
        }
        .part-tab.active { background: #1CB0F6 !important; color: #FFF !important; border-color: #1899D6 !important; }
        
        h1, h2 { font-family: 'Nunito', sans-serif !important; font-weight: 900 !important; }
    `;
    document.head.appendChild(style);
})();
// ============================================================


const quizData = {
    title: "A2 Key Practice Test — Đề 3",
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
                    text: "",
                    context: "<strong>CITY MUSEUM</strong><br>Every day 10am to 5pm<br>Adults: £10 - Children: £5<br>Visit the special Space Exhibition in Room 2<br>Monday Only: 10am to 2pm<br>Adults: £2 extra - Children: free",
                    options: [
                        { letter: "A", text: "Entrance to the museum is free for children." },
                        { letter: "B", text: "The science exhibition is open all week." },
                        { letter: "C", text: "Adults pay a total of £12 to see the exhibition." }
                    ],
                    correctAnswer: "C",
                    explanation: "Adults pay £10 for the museum + £2 extra for the exhibition = £12 total."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Hi Simon,</strong><br>We are visiting the factory on Monday at 10am to learn about the new toys we are making. After the visit we will go back to the office for lunch.<br>Bob",
                    options: [
                        { letter: "A", text: "Bob and Simon will go to the factory together." },
                        { letter: "B", text: "Bob and Simon will have lunch at the factory." },
                        { letter: "C", text: "Bob and Simon won't go to the office on Monday." }
                    ],
                    correctAnswer: "A",
                    explanation: "Bob says 'We are visiting the factory', implying they will go together. (Lưu ý: Sách in lỗi chữ 'Rob' nhưng ý đồ là đáp án A)."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>ROCK CONCERT</strong><br>Can you play a musical instrument? Do you like rock music?<br>If yes, contact Stuart on 555 1256, or send an email to stuart@roczzz.eu to take part in the best concert next Friday.",
                    options: [
                        { letter: "A", text: "You can only contact Stuart by phone." },
                        { letter: "B", text: "There is a music event next week." },
                        { letter: "C", text: "The event has many types of music." }
                    ],
                    correctAnswer: "B",
                    explanation: "The concert is 'next Friday', which is next week."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Hi Emma,</strong><br>The film I want to see at the cinema isn't on. But there is a film on TV I want to see. Do you want to join me?<br>Helen",
                    options: [
                        { letter: "A", text: "Emma doesn't want to see a film on TV." },
                        { letter: "B", text: "Helen wants Emma to go with her to the cinema." },
                        { letter: "C", text: "Helen will stay at home tonight." }
                    ],
                    correctAnswer: "C",
                    explanation: "Helen is watching a film on TV and asks Emma to join her, meaning Helen will be at home."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>BEACH NOTICE</strong><br>Only swim between the green signs.<br>No swimming between the red signs.<br>If you see someone in trouble, call 999.",
                    options: [
                        { letter: "A", text: "If there are no signs, call 999." },
                        { letter: "B", text: "The green signs show the safe area." },
                        { letter: "C", text: "People aren't allowed to swim on this beach." }
                    ],
                    correctAnswer: "B",
                    explanation: "You can 'Only swim between the green signs', which means it's the safe area."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Jane's birthday party NOTES</strong><br>• invite friends from university<br>• prepare drinks and sandwiches during the afternoon<br>• 6 p.m. buy pizzas<br>• 7 p.m. guests arrive",
                    options: [
                        { letter: "A", text: "There will be no cold food at the party." },
                        { letter: "B", text: "Jane's friends from work are coming." },
                        { letter: "C", text: "Friends will arrive after ordering the hot food." }
                    ],
                    correctAnswer: "C",
                    explanation: "Jane buys pizzas (hot food) at 6 p.m., and guests arrive at 7 p.m."
                }
            ]
        },

        // ============================================================
        // READING — PART 2
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "For each question, choose the correct answer.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:12px">
                    <strong style="color:#1CB0F6">Star City:</strong><br>
                    Star City is a city-building game available for X-box, PlayStation, and Windows PC. Players have to build and look after a city in the future on another world. They have to decide what to do in an ever-changing city and be sure that the city and its people have everything they need to live. There are lots of problems and difficult things for the players to do but this makes the player think carefully so that they can make the best decision. This will probably help them in the real world. Players must be over eighteen years old to play this game.
                </div>
                <div style="margin-bottom:12px">
                    <strong style="color:#1CB0F6">Fast Drive:</strong><br>
                    Fast Drive is a game that has lots of dangerous driving in it. Players are rewarded for driving on the wrong side of the road, driving into other cars or motorbikes, and creating problems all over a city. Parents of new teenage drivers might want to think about the fact that playing some racing games can make their children want to drive in such a way in real life. This game also has an online part that allows for chat, so each player will hear everything that other online players say.
                </div>
                <div>
                    <strong style="color:#1CB0F6">Dinosaurs:</strong><br>
                    What kid hasn't thought about how much fun it would be to have a pet dinosaur as a best friend, or maybe to go for a ride on the back of a fire-eating animal? Dinosaurs is perfect for children aged between 10 and 14. The players work with dinosaurs that they have found. The game is all about becoming friends with your dinosaur and it is like going on an adventure with a loved family pet that has big teeth. Sometimes the player has to repeat some actions too many times, which might be a bit boring, but most of the game is interesting.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Which game allows players to listen to other people?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "B",
                    explanation: "Fast Drive has an online part for chat, 'so each player will hear everything that other online players say'."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Which game is about having a strange friend?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "C",
                    explanation: "Dinosaurs is about having a 'pet dinosaur as a best friend'."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Which game tells players to do bad things?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "B",
                    explanation: "Fast Drive rewards players for 'driving on the wrong side of the road' and 'creating problems'."
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Which game asks players to help someone?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "A",
                    explanation: "In Star City, players must 'be sure that the city and its people have everything they need to live'."
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Which game can be useful for players in their life?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "A",
                    explanation: "Star City makes players think carefully, 'This will probably help them in the real world'."
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Which game is not very exciting sometimes?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "C",
                    explanation: "In Dinosaurs, repeating actions 'might be a bit boring'."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Which game is suitable only for adults?",
                    options: [{ letter: "A", text: "Star City" }, { letter: "B", text: "Fast Drive" }, { letter: "C", text: "Dinosaurs" }],
                    correctAnswer: "A",
                    explanation: "For Star City, 'Players must be over eighteen years old'."
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
                <p style="margin-bottom:12px; font-weight:bold; color:#1CB0F6; font-size:18px">The Three Peaks Challenge</p>
                <p style="margin-bottom:12px">My name is Shaun Perkins, I am seventeen years old and I have just done the famous Three Peaks Challenge. This is a walking challenge which means that you have to walk up three high mountains. I did it to get money for my local children's hospital because they had helped my brother when he was very sick.</p>
                <p style="margin-bottom:12px">I did the walk with a special group because it can be quite dangerous especially if the weather is bad. They have a guide who shows you where to walk. When we started on the first mountain, I was worried that it would be too difficult for me but actually it wasn't as bad as I thought it was going to be.</p>
                <p style="margin-bottom:12px">We did the walk in the summer so that the weather would be good. The first two mountains were lovely as the sun was shining. However, we were half way up the third mountain when a storm suddenly came. It was raining and there was a heavy thunderstorm. I was very afraid. No one was hurt but we did get very wet.</p>
                <p style="margin-bottom:12px">The most important thing about this challenge is the clothes you wear. That means you need good walking boots, trousers and jacket, and a hat for the sun. It doesn't matter what your clothes look like but they must be comfortable. Also, you need a small bag.</p>
                <p>I had a brilliant time on the challenge even though it rained. I didn't really have many people to talk to but the places where we walked were really beautiful and I loved looking all around me, on the mountains.</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "Why did Shaun want to do the Three Peaks Challenge?",
                    options: [
                        { letter: "A", text: "to help his brother get better" },
                        { letter: "B", text: "to help the hospital in his town" },
                        { letter: "C", text: "to pay for his brother's hospital bill" }
                    ],
                    correctAnswer: "B",
                    explanation: "He did it to 'get money for my local children's hospital'."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "What does Shaun say about the first mountain?",
                    options: [
                        { letter: "A", text: "It wasn't as much of a problem as he had thought." },
                        { letter: "B", text: "It was very difficult to walk up." },
                        { letter: "C", text: "The guide helped him when he got lost." }
                    ],
                    correctAnswer: "A",
                    explanation: "He says: 'actually it wasn't as bad as I thought it was going to be'."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "What happened to Shaun on the last mountain?",
                    options: [
                        { letter: "A", text: "He got wet but he wasn't worried." },
                        { letter: "B", text: "He had an accident because the weather was bad." },
                        { letter: "C", text: "He was worried about the weather but it was OK in the end." }
                    ],
                    correctAnswer: "C",
                    explanation: "He says 'I was very afraid' (worried) but 'No one was hurt' (it was OK)."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "Shaun says that",
                    options: [
                        { letter: "A", text: "you should take a big bag with you." },
                        { letter: "B", text: "you need to wear the right clothes." },
                        { letter: "C", text: "you should wear a nice looking hat." }
                    ],
                    correctAnswer: "B",
                    explanation: "He emphasizes 'The most important thing... is the clothes you wear... you need good walking boots...'."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "What did Shaun enjoy most?",
                    options: [
                        { letter: "A", text: "the countryside" },
                        { letter: "B", text: "the weather" },
                        { letter: "C", text: "the people" }
                    ],
                    correctAnswer: "A",
                    explanation: "He says 'the places where we walked were really beautiful and I loved looking all around me' (the countryside)."
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
                <p style="margin-bottom:12px; font-weight:bold; color:#1CB0F6; font-size:18px">Sports</p>
                <p style="margin-bottom:12px">There are many different <strong>(19)___</strong> of sports that people can do. Some people do sport as a job and others only because they enjoy to do so. To do some sports like hockey, you need a lot of <strong>(20)___</strong>. However, there are some other sports that you need very <strong>(21)___</strong> things to play.</p>
                <p>Some people prefer to watch sports on TV or online, or they may even like going to a <strong>(22)___</strong>. One thing is for sure: almost everyone likes sports but in <strong>(23)___</strong> country there are some sports that are more <strong>(24)___</strong> than others. For example, in the UK people prefer to play football or cricket, while in the USA people often play basketball or baseball.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) There are many different ___ of sports...",
                    options: [{ letter: "A", text: "sides" }, { letter: "B", text: "kinds" }, { letter: "C", text: "parts" }],
                    correctAnswer: "B",
                    explanation: "'kinds of sports' means types of sports."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) ...you need a lot of ___.",
                    options: [{ letter: "A", text: "occupation" }, { letter: "B", text: "furniture" }, { letter: "C", text: "equipment" }],
                    correctAnswer: "C",
                    explanation: "Hockey requires 'equipment' (dụng cụ thể thao)."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) ...sports that you need very ___ things to play.",
                    options: [{ letter: "A", text: "less" }, { letter: "B", text: "few" }, { letter: "C", text: "many" }],
                    correctAnswer: "B",
                    explanation: "You need 'few things' (ít đồ) for some other sports."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) ...like going to a ___.",
                    options: [{ letter: "A", text: "station" }, { letter: "B", text: "stage" }, { letter: "C", text: "stadium" }],
                    correctAnswer: "C",
                    explanation: "People watch sports at a 'stadium' (sân vận động)."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) ...but in ___ country there are some sports...",
                    options: [{ letter: "A", text: "each" }, { letter: "B", text: "all" }, { letter: "C", text: "whole" }],
                    correctAnswer: "A",
                    explanation: "'each country' is singular, so we use 'each'."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) ...sports that are more ___ than others.",
                    options: [{ letter: "A", text: "classical" }, { letter: "B", text: "helpful" }, { letter: "C", text: "popular" }],
                    correctAnswer: "C",
                    explanation: "Some sports are more 'popular' (phổ biến) than others."
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
                <p style="margin-bottom:8px"><strong>From:</strong> Jenny &nbsp;|&nbsp; <strong>To:</strong> Kate</p>
                <p style="margin-bottom:12px">Thank you <strong>(0) for</strong> the letter and the photo. Your new house looks really nice. I can't wait <strong>(25)___</strong> come and visit.</p>
                <p style="margin-bottom:12px">My family is going on holiday for two weeks <strong>(26)___</strong> July. We are going to rent a house on an island. There are lots of places to swim and sunbathe.</p>
                <p style="margin-bottom:12px">We will stay near a small town. My mum and I are going to do a lot <strong>(27)___</strong> shopping there. My dad and my brother don't like shopping, but <strong>(28)___</strong> will take a boat out and go fishing!</p>
                <p>Would you <strong>(29)___</strong> to come with us? <strong>(30)___</strong> could go to the beach and swim in the sea, go shopping or to the cinema.</p>
                <p style="margin-top:8px">Please write soon.<br>Love,<br>Jenny</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) 'I can't wait ___ come and visit.'",
                    hint: "wait ___ do something",
                    acceptableAnswers: ["to"],
                    explanation: "can't wait 'to' do something."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) '...for two weeks ___ July.'",
                    hint: "Preposition for months",
                    acceptableAnswers: ["in"],
                    explanation: "We use 'in' for months (in July)."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) '...going to do a lot ___ shopping there.'",
                    hint: "a lot ___",
                    acceptableAnswers: ["of"],
                    explanation: "'a lot of' something."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'My dad and my brother don't like shopping, but ___ will take a boat out...'",
                    hint: "Pronoun referring to dad and brother",
                    acceptableAnswers: ["they"],
                    explanation: "'They' refers to 'My dad and my brother'."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) 'Would you ___ to come with us?'",
                    hint: "A polite invitation",
                    acceptableAnswers: ["like"],
                    explanation: "'Would you like to' is used for invitations."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) '___ could go to the beach...'",
                    hint: "Pronoun for 'you and me/us'",
                    acceptableAnswers: ["We", "we"],
                    explanation: "'We' refers to Jenny and Kate together."
                }
            ]
        },

        // ============================================================
        // WRITING — PART 6
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to Patrick.",
            skill: "reading",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:8px">You want some help from your English friend Patrick. Write an email to Patrick.</p>
                        <p><strong>In your email:</strong></p>
                        <ul style="padding-left:20px; margin-bottom:8px">
                            <li>ask Patrick help you with your Maths homework</li>
                            <li>explain what your problem is</li>
                            <li>suggest where you will meet</li>
                        </ul>
                        <p><strong>Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Patrick,\n\nCould you help me with my Maths homework? I don't understand it because I was absent from class yesterday.\n\nI think we can meet at the ABC café at 4 p.m. Let me know if you are OK.\n\nSee you again,\n[Your name]"
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
                            <div style="padding:12px; background:#F7F7F8; border-radius:16px; border:2px solid #E5E5E5">
                                🚌 <strong>Picture 1:</strong> Students are traveling together on a bus.
                            </div>
                            <div style="padding:12px; background:#F7F7F8; border-radius:16px; border:2px solid #E5E5E5">
                                🗿 <strong>Picture 2:</strong> They are inside a museum looking amazed at a giant Buddha statue.
                            </div>
                            <div style="padding:12px; background:#F7F7F8; border-radius:16px; border:2px solid #E5E5E5">
                                😕 <strong>Picture 3:</strong> One girl is alone in another room looking at a statue bust, realizing she has lost her group.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Friday, Jane and her classmates visited a museum by bus. At the museum, they saw a big statue of Buddha, which surprised everyone.\n\nAfter a while, Jane found herself alone in a room with a statue of a man. Maybe she was lost."
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
                    text: "What did they have for lunch?",
                    audioSrc: "audio/l3q1.mp3",
                    options: [
                        { letter: "A", text: "Pizza 🍕" },
                        { letter: "B", text: "Spaghetti 🍝" },
                        { letter: "C", text: "Fish 🐟" }
                    ],
                    correctAnswer: "A",
                    explanation: "They had pizza for lunch."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "What did the man want to do at the weekend at the start?",
                    audioSrc: "audio/l3q2.mp3",
                    options: [
                        { letter: "A", text: "Go to the cinema" },
                        { letter: "B", text: "Play football ⚽" },
                        { letter: "C", text: "Go to the circus" }
                    ],
                    correctAnswer: "B",
                    explanation: "At the start, he wanted to play football."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "How are they going to travel on holiday?",
                    audioSrc: "audio/l3q3.mp3",
                    options: [
                        { letter: "A", text: "By car 🚗" },
                        { letter: "B", text: "By train 🚆" },
                        { letter: "C", text: "By bus 🚌" }
                    ],
                    correctAnswer: "A",
                    explanation: "They are travelling by car."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What time is the party?",
                    audioSrc: "audio/l3q4.mp3",
                    options: [
                        { letter: "A", text: "12:45" },
                        { letter: "B", text: "13:15" },
                        { letter: "C", text: "13:30" }
                    ],
                    correctAnswer: "C",
                    explanation: "The party is at half past one (13:30)."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "What are they doing today?",
                    audioSrc: "audio/l3q5.mp3",
                    options: [
                        { letter: "A", text: "Playing basketball 🏀" },
                        { letter: "B", text: "Scuba diving / snorkeling 🤿" },
                        { letter: "C", text: "Running 🏃" }
                    ],
                    correctAnswer: "B",
                    explanation: "They are going diving today."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 2
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a woman leaving her husband a message about a competition.",
            skill: "listening",
            passage: `
                <div style="background:#F7F7F8; padding:16px; border-radius:16px; border:2px solid #E5E5E5">
                    <p style="text-align:center; font-weight:bold; color:#1CB0F6; font-size:18px; margin-bottom:12px">Singing competition</p>
                    <p>For: adults and children</p>
                    <p>Date to enter by: <strong>(6)___</strong> December</p>
                    <p>What to send: <strong>(7)___</strong> of birthday</p>
                    <p>Go online at: www.<strong>(8)___</strong>.com</p>
                    <p>Meet at the: West <strong>(9)___</strong></p>
                    <p>First prize: £<strong>(10)___</strong></p>
                </div>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Date to enter by: ___ December",
                    hint: "A date (number + th/st/nd)",
                    acceptableAnswers: ["15th", "15"],
                    explanation: "They must enter by the 15th."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "What to send: ___ of birthday",
                    hint: "A moving picture",
                    acceptableAnswers: ["video", "a video"],
                    explanation: "They need to send a video."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Go online at: www.___ .com",
                    hint: "Spelled out in audio",
                    acceptableAnswers: ["singproc", "Singproc"],
                    explanation: "The website is singproc.com."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Meet at the: West ___",
                    hint: "A place to drink coffee",
                    acceptableAnswers: ["cafe", "café", "cafe'"],
                    explanation: "They will meet at the West cafe."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "First prize: £___",
                    hint: "A number",
                    acceptableAnswers: ["180", "180.00"],
                    explanation: "The prize is £180."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 3
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Mei talking to her friend Haruto about an art exhibition.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "Who did Mei go to the exhibition with?",
                    audioSrc: "audio/l3p3.mp3",
                    options: [
                        { letter: "A", text: "her family" },
                        { letter: "B", text: "her friends from school" },
                        { letter: "C", text: "her neighbours" }
                    ],
                    correctAnswer: "C",
                    explanation: "Mei went with her neighbours."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "What was the weather like?",
                    audioSrc: "audio/l3p3.mp3",
                    options: [
                        { letter: "A", text: "wet" },
                        { letter: "B", text: "sunny" },
                        { letter: "C", text: "cloudy" }
                    ],
                    correctAnswer: "C",
                    explanation: "The weather was cloudy."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "What didn't Mei like about the exhibition?",
                    audioSrc: "audio/l3p3.mp3",
                    options: [
                        { letter: "A", text: "the paintings" },
                        { letter: "B", text: "the photographs" },
                        { letter: "C", text: "the videos" }
                    ],
                    correctAnswer: "B",
                    explanation: "She didn't like the photographs."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "Mei didn't want to go to the art exhibition because",
                    audioSrc: "audio/l3p3.mp3",
                    options: [
                        { letter: "A", text: "she doesn't like modern art." },
                        { letter: "B", text: "she thought it might be boring." },
                        { letter: "C", text: "she had to study." }
                    ],
                    correctAnswer: "B",
                    explanation: "She thought it might be boring initially."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "Where are Mei and Haruto going next week?",
                    audioSrc: "audio/l3p3.mp3",
                    options: [
                        { letter: "A", text: "to a festival" },
                        { letter: "B", text: "to a concert" },
                        { letter: "C", text: "to a competition" }
                    ],
                    correctAnswer: "A",
                    explanation: "They are going to a festival next week."
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
                    text: "You will hear a woman talking to her friend about her holiday. What didn't she like?",
                    audioSrc: "audio/l3p4.mp3",
                    options: [
                        { letter: "A", text: "where the hotel was" },
                        { letter: "B", text: "the meals at the hotel" },
                        { letter: "C", text: "the staff at the car park" }
                    ],
                    correctAnswer: "A",
                    explanation: "She didn't like the location of the hotel."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear a couple talking at a restaurant. Why won't the woman order a drink?",
                    audioSrc: "audio/l3p4.mp3",
                    options: [
                        { letter: "A", text: "Her stomach hurts." },
                        { letter: "B", text: "She's going to have a baby." },
                        { letter: "C", text: "She's taking some medicine." }
                    ],
                    correctAnswer: "B",
                    explanation: "She won't drink because she is pregnant."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear two friends talking outside a shop. Why is the man unhappy?",
                    audioSrc: "audio/l3p4.mp3",
                    options: [
                        { letter: "A", text: "He hasn't got any money with him." },
                        { letter: "B", text: "There wasn't enough information available." },
                        { letter: "C", text: "The shop assistant wasn't polite." }
                    ],
                    correctAnswer: "C",
                    explanation: "He is unhappy because the shop assistant was rude."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a woman talking on the phone. What is wrong with the dress?",
                    audioSrc: "audio/l3p4.mp3",
                    options: [
                        { letter: "A", text: "It wasn't the right colour." },
                        { letter: "B", text: "It doesn't fit the woman." },
                        { letter: "C", text: "It was nothing like the picture." }
                    ],
                    correctAnswer: "B",
                    explanation: "The dress does not fit her."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear a man talking to his wife about her handbag. What is the man's problem?",
                    audioSrc: "audio/l3p4.mp3",
                    options: [
                        { letter: "A", text: "His wife lost his keys." },
                        { letter: "B", text: "His wife is late." },
                        { letter: "C", text: "His wife's bag is too big." }
                    ],
                    correctAnswer: "C",
                    explanation: "He is complaining that her bag is too large."
                }
            ]
        },

        // ============================================================
        // LISTENING — PART 5
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Angela talking to her friend Liam about some films she's watched. What does she say about each film?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>🍿 Opinions:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">A. interesting story</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">B. terrible</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">C. good acting</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">D. good music</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">E. unusual ending</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">F. scary</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">G. boring</span>
                    <span style="padding:6px 12px; background:#DDF4FF; color:#1899D6; border-radius:12px; font-weight:bold">H. funny</span>
                </div>
                <p style="font-size:13px; font-weight:bold; color:#AFAFAF">ℹ️ Example: Lost and Found -> D</p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Happy Place: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["C", "c"],
                    explanation: "Angela thought it had good acting."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Kid's Rock: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["E", "e"],
                    explanation: "It had an unusual ending (kết thúc bất ngờ)."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Dangerous People: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["B", "b"],
                    explanation: "She thought it was terrible (khủng khiếp)."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Sunny Summer: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["H", "h"],
                    explanation: "She thought it was funny."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Pop star: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["A", "a"],
                    explanation: "She thought it had an interesting story."
                }
            ]
        }
    ]
};
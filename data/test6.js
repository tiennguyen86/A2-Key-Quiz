/**
 * ============================================================
 * QUIZ DATA — ĐỀ 6: Reading & Writing + Listening
 * A2 Key Level — Clean Data Format
 * ============================================================
 */

const quizData = {
    title: "A2 Key Practice Test — Đề 6",
    theme: "editorial", // 👈 Theme siêu tối giản, học thuật (Notion style)
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
                    context: "<strong>Summer Job</strong><br>For the months of July and August we are looking for people to work for us.<br>- Monday to Saturday<br>- 8 a.m. to 6 p.m. daily<br>You will take orders and make sandwiches.",
                    options: [
                        { letter: "A", text: "Staff are needed to help in the kitchen only." },
                        { letter: "B", text: "People need to work for the whole summer." },
                        { letter: "C", text: "You have to work 6 days a week in this job." }
                    ],
                    correctAnswer: "C",
                    explanation: "'Monday to Saturday' means 6 days a week. A is wrong (you take orders too). B is wrong (only July and August, not the whole summer)."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "Why did Martin write this message?",
                    context: "<strong>Hi Freddie,</strong><br>Why don't you come to my home and watch the football match tonight? I'll order pizza. You can stay for the night if you want. Call me!<br>Martin",
                    options: [
                        { letter: "A", text: "to ask Freddie what pizza he wants" },
                        { letter: "B", text: "to invite Freddie to his house" },
                        { letter: "C", text: "to tell Freddie to come to his house to play football" }
                    ],
                    correctAnswer: "B",
                    explanation: "Martin says 'Why don't you come to my home...', which is an invitation. C is wrong because they will *watch* football, not play it."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>TEEN SUMMER CAMP</strong><br>➤ 10th - 20th August, or, 20th - 30th August<br>➤ Ages: 12 - 16<br>➤ Activities:<br>• water sports<br>• dance<br>• painting<br>More details on our website: www.sunsouthland.com",
                    options: [
                        { letter: "A", text: "Students aged over 16 years old can't take part in the summer camp." },
                        { letter: "B", text: "There are four different dates that you can choose from to go on the summer camp." },
                        { letter: "C", text: "No sports are included in the summer camp activities." }
                    ],
                    correctAnswer: "A",
                    explanation: "The camp is for 'Ages: 12 - 16', so students over 16 cannot take part."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Running Competition</strong><br>From: Mill School — 10 kilometres<br>On: Saturday 20th May<br>- Entrance: £2.00<br>- Prizes for the first 10 runners<br>All money earned will be given to people who need help.",
                    options: [
                        { letter: "A", text: "Money from the competition will be used to repair Mill School." },
                        { letter: "B", text: "Everyone has to pay £2.00 to take part in the competition." },
                        { letter: "C", text: "The first runner will win £10.00 as a prize." }
                    ],
                    correctAnswer: "B",
                    explanation: "'Entrance: £2.00' means everyone must pay this fee to join."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "Olga has written to",
                    context: "<strong>From: Olga | To: Tommy</strong><br>Hi Tommy,<br>It's my sister's birthday on Sunday. I want to buy her that new magazine, <em>Fashion Buzz</em>. The problem is that I'm too busy at work this week. Can you please buy it for her? I'll give you the money.<br>Olga",
                    options: [
                        { letter: "A", text: "ask Tommy to help her with her sister's birthday present." },
                        { letter: "B", text: "tell Tommy to lend her money to buy a present for her sister." },
                        { letter: "C", text: "invite Tommy to her sister's birthday party on Sunday." }
                    ],
                    correctAnswer: "A",
                    explanation: "Olga is too busy to buy the magazine (the present), so she asks: 'Can you please buy it for her?'."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Helpline:</strong><br>24hours / 7 days a week<br>If you are in danger, please call: 1265<br>Find information for our service on our website: www.helpline.co.uk",
                    options: [
                        { letter: "A", text: "This service is not available at the weekends." },
                        { letter: "B", text: "You can only get information by phoning." },
                        { letter: "C", text: "People can ask for help at this phone number any time." }
                    ],
                    correctAnswer: "C",
                    explanation: "'24hours / 7 days a week' means you can call any time."
                }
            ]
        },

        // ============================================================
        //  READING — PART 2: Matching (Questions 7-13)
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three young people talking about sports. Match each statement to the correct person.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Jack:</strong><br>
                    Jack loves watching football. He goes to see his favourite team play every Saturday. The stadium is very large and can get very noisy with thousands of people shouting and singing. His team is very famous; they are the second best in the country. Sometimes his team play against another team and in another city. This means he has to travel by coach. He never travels on his own because his brother goes with him. Jack wants to be a football player when he finishes school.
                </div>
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Edward:</strong><br>
                    Edward plays cricket for his village club every Saturday during the summer. His team play against teams from other villages and towns. Sometimes the cricket matches can take up to 6 hours to complete. He likes it because it is a nice slow game and the people who watch this game are usually very quiet. If it rains, he goes to his friend's house and plays cricket on the computer. He loves cricket so much that last year he went to India with two friends to watch the World Cricket Games.
                </div>
                <div>
                    <strong style="color:var(--accent-primary)">Phil:</strong><br>
                    Phil's favourite sport is tennis. He watches all the big games on television. He never goes to watch a game outside his city. He might watch a tennis match if it's near to his house. Every Tuesday and Thursday he plays tennis at school with his friends. Next week he will start having classes with a tennis coach because he wants to play better than his friends.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Who plays sport more than once a week?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "C",
                    explanation: "Phil says: 'Every Tuesday and Thursday he plays tennis at school' (twice a week)."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Who went to another country to watch their sport?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "B",
                    explanation: "Edward 'went to India with two friends to watch the World Cricket Games'."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Who never travels to watch a match?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "C",
                    explanation: "Phil 'never goes to watch a game outside his city'."
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Who goes to matches with a member of his family?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "A",
                    explanation: "Jack 'never travels on his own because his brother goes with him'."
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Who plays his favourite sport on his computer?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "B",
                    explanation: "Edward: 'If it rains, he goes to his friend's house and plays cricket on the computer'."
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Who goes to a place that is full of people?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "A",
                    explanation: "Jack goes to a stadium with 'thousands of people shouting and singing'."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Who is having sport lessons?",
                    options: [
                        { letter: "A", text: "Jack" },
                        { letter: "B", text: "Edward" },
                        { letter: "C", text: "Phil" }
                    ],
                    correctAnswer: "C",
                    explanation: "Phil 'will start having classes with a tennis coach'."
                }
            ]
        },

        // ============================================================
        //  READING — PART 3: Long Text (Questions 14-18)
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article about a successful singer and answer the questions.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px; font-weight:bold">A successful singer</p>
                <p style="margin-bottom:12px">Carol is a singer in a pop group. Her story is unusual. Carol is in a group called <em>Girls Together</em>. "I started singing to other people in church when I was eight" she says. "I've always loved singing. I sing all the time at home. Actually, the only time I didn't sing was during my school lessons because my teachers would not have been happy."</p>
                <p style="margin-bottom:12px">When Carol was sixteen, she was in a singing competition on the TV. Her dream was to be a famous singer, like Madonna or Lady Gaga. "I hadn't thought about being in a group. I didn't have any friends who sang or played the guitar or drums," she says.</p>
                <p style="margin-bottom:12px">Carol got a big surprise during the competition because the music teachers wanted to put her in a group with three other girls. She told her parents she wasn't happy because no one would know her as a singer on her own. Carol's parents just wanted her to be happy.</p>
                <p style="margin-bottom:12px">Although Carol wanted to sing on her own, she spent some time with the other girls and saw that she could have lots of fun with them. So she decided to sing with them. The music teachers told her that she had made the most important decision of her life.</p>
                <p>Now the group is famous and all the girls are making a lot of money. However, Carol loves singing in the group for other reasons. Carol says, "We have been to so many wonderful places and different countries. I miss my parents but the other girls are like my new family and this helps me not to feel sad."</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "Where does Carol say she first started to sing in front of people?",
                    options: [
                        { letter: "A", text: "at home" },
                        { letter: "B", text: "in school" },
                        { letter: "C", text: "in church" }
                    ],
                    correctAnswer: "C",
                    explanation: "'I started singing to other people in church when I was eight' she says."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "Carol says that",
                    options: [
                        { letter: "A", text: "she had always wanted to sing on her own." },
                        { letter: "B", text: "none of her friends thought she was a good singer." },
                        { letter: "C", text: "she tried to find some friends to start a band." }
                    ],
                    correctAnswer: "A",
                    explanation: "'Her dream was to be a famous singer, like Madonna... I hadn't thought about being in a group'."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "What did Carol think when the teachers wanted to put her in a group?",
                    options: [
                        { letter: "A", text: "It would be better than singing on her own." },
                        { letter: "B", text: "She wouldn't be known as a solo singer." },
                        { letter: "C", text: "Her parents would be happier." }
                    ],
                    correctAnswer: "B",
                    explanation: "She wasn't happy 'because no one would know her as a singer on her own'."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "Why did Carol finally decide to join the group?",
                    options: [
                        { letter: "A", text: "Her teachers told her she had to." },
                        { letter: "B", text: "She liked the other girls in the group." },
                        { letter: "C", text: "She didn't think she was good enough on her own." }
                    ],
                    correctAnswer: "B",
                    explanation: "She 'saw that she could have lots of fun with them. So she decided to sing with them'."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "What does Carol say she likes most about being in the group?",
                    options: [
                        { letter: "A", text: "travelling" },
                        { letter: "B", text: "the money" },
                        { letter: "C", text: "being away from home" }
                    ],
                    correctAnswer: "A",
                    explanation: "She loves it for other reasons: 'We have been to so many wonderful places and different countries' (travelling)."
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
                <p style="margin-bottom:12px; font-weight:bold">Alexander McQueen</p>
                <p style="margin-bottom:12px">Alexander McQueen is one of the world's most famous clothes designers. He started working in an expensive clothes shop in London <strong>(19)___</strong> he made clothes for people like Prince Charles and the Russian leader Mikhail Gorbachev. In the 1990s he decided to work on his own and he <strong>(20)___</strong> his own fashion business.</p>
                <p>Many rich and famous people became his <strong>(21)___</strong> and the clothes he made for them were often unusual. Magazines and newspapers liked to write <strong>(22)___</strong> about his clothes and about him. However, he wasn't always <strong>(23)___</strong> to journalists so they didn't always write nice things about him. But McQueen never cared what anyone said about him. Unfortunately, he died in 2010 when he was only 41 years <strong>(24)___</strong>.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) '...shop in London ___ he made clothes for people...'",
                    options: [
                        { letter: "A", text: "which" },
                        { letter: "B", text: "who" },
                        { letter: "C", text: "where" }
                    ],
                    correctAnswer: "C",
                    explanation: "'where' is the relative pronoun used for places (the shop in London)."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) '...decided to work on his own and he ___ his own fashion business.'",
                    options: [
                        { letter: "A", text: "closed" },
                        { letter: "B", text: "opened" },
                        { letter: "C", text: "sold" }
                    ],
                    correctAnswer: "B",
                    explanation: "He started his own business, so he 'opened' it."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) 'Many rich and famous people became his ___'",
                    options: [
                        { letter: "A", text: "customers" },
                        { letter: "B", text: "managers" },
                        { letter: "C", text: "workers" }
                    ],
                    correctAnswer: "A",
                    explanation: "People buying his clothes are his 'customers' (khách hàng)."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) 'Magazines and newspapers liked to write ___ about his clothes...'",
                    options: [
                        { letter: "A", text: "books" },
                        { letter: "B", text: "articles" },
                        { letter: "C", text: "films" }
                    ],
                    correctAnswer: "B",
                    explanation: "Magazines and newspapers publish 'articles' (bài báo)."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) 'However, he wasn't always ___ to journalists...'",
                    options: [
                        { letter: "A", text: "angry" },
                        { letter: "B", text: "afraid" },
                        { letter: "C", text: "pleasant" }
                    ],
                    correctAnswer: "C",
                    explanation: "'wasn't always pleasant' means he was sometimes rude or not nice to them."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) '...when he was only 41 years ___.'",
                    options: [
                        { letter: "A", text: "aged" },
                        { letter: "B", text: "old" },
                        { letter: "C", text: "young" }
                    ],
                    correctAnswer: "B",
                    explanation: "The standard phrase for age is 'years old'."
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
                <p style="margin-bottom:8px"><strong>From:</strong> Sandra &nbsp;|&nbsp; <strong>To:</strong> Vicky</p>
                <p style="margin-bottom:12px">Hi Vicky!<br>I missed class today because I had <strong>(0) to</strong> go to my sister's wedding.<br><strong>(25)___</strong> was the lesson? I hope you were there because I am missing the biology notes.</p>
                <p style="margin-bottom:12px">Please can you email them to me? I need them because we have <strong>(26)___</strong> exam the day after tomorrow and I want to make sure <strong>(27)___</strong> I pass.</p>
                <p style="margin-bottom:12px">By the way, did you hear <strong>(28)___</strong> Ralph Mathers, the biology professor? I saw on his Facebook page that he, too, is <strong>(29)___</strong> getting married this weekend!</p>
                <p>Please write back <strong>(30)___</strong> soon as possible!</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) '___ was the lesson?'",
                    hint: "Asking about the condition/quality of the lesson",
                    acceptableAnswers: ["How", "how"],
                    explanation: "'How was the lesson?' asks for a description of how it went."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) '...because we have ___ exam the day after tomorrow...'",
                    hint: "Article before a vowel sound",
                    acceptableAnswers: ["an"],
                    explanation: "We use 'an' before 'exam'."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) '...and I want to make sure ___ I pass.'",
                    hint: "Connecting word",
                    acceptableAnswers: ["that"],
                    explanation: "'make sure that' is a common structure."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'By the way, did you hear ___ Ralph Mathers...'",
                    hint: "Preposition used with 'hear' when talking about news/gossip",
                    acceptableAnswers: ["about"],
                    explanation: "'hear about someone/something' means to receive news regarding them."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) '...that he, too, is ___ married this weekend!'",
                    hint: "Verb used with 'married'",
                    acceptableAnswers: ["getting"],
                    explanation: "'getting married' is the correct collocation."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) 'Please write back ___ soon as possible!'",
                    hint: "Fixed expression",
                    acceptableAnswers: ["as"],
                    explanation: "'as soon as possible' (càng sớm càng tốt)."
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 6: Email (Question 31)
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to Jane. Write 25 words or more.",
            skill: "writing",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:12px">You want to go to the sports centre with your English friend Jane.</p>
                        <p style="margin-bottom:8px"><strong>Write an email to Jane. In your email:</strong></p>
                        <ul style="padding-left:20px; margin-bottom:8px">
                            <li>ask Jane to go with you to the sports centre</li>
                            <li>say what sport you would like to do there</li>
                            <li>explain what you want to do after playing sports</li>
                        </ul>
                        <p><strong>Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Jane,\n\nWould you like to come to the sports centre on Saturday? I thought maybe we could play tennis together. There is a tennis coach too and he is very good.\n\nAfter that, we can go to the cafe there. They make very nice coffee.\n\nSee you,\n[Your name]"
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
                                💭 <strong>Picture 1:</strong> Two boys are talking and thinking about a dog.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                🛍️ <strong>Picture 2:</strong> One of the boys is carrying a large bag of "DOG FOOD" into a building.
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                🐕 <strong>Picture 3:</strong> The two boys are inside an animal shelter, feeding several happy dogs in a cage.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Friday morning, John and Jack were talking about dogs in the abandoned animal centre. They thought the dogs were hungry so they decided to buy some food for them.\n\nAfter that, John and Jack brought the food to the centre and delivered it to the dogs. That made the dogs very happy."
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
                    text: "Where will Murat meet his friends?",
                    audioSrc: "audio/t6p1.mp3",
                    options: [
                        { letter: "A", text: "A swimming pool" },
                        { letter: "B", text: "A cafe or restaurant" },
                        { letter: "C", text: "A living room (at home)" }
                    ],
                    correctAnswer: "C",
                    explanation: "Murat will meet his friends at home (in the living room)."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "What film will they see?",
                    audioSrc: "audio/t6p1.mp3",
                    options: [
                        { letter: "A", text: "A film about a house in the snow" },
                        { letter: "B", text: "A romantic/dancing film" },
                        { letter: "C", text: "A film about a sinking ship" }
                    ],
                    correctAnswer: "A",
                    explanation: "They will see the film about the house in the snow."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "What did the woman buy?",
                    audioSrc: "audio/t6p1.mp3",
                    options: [
                        { letter: "A", text: "Gloves" },
                        { letter: "B", text: "A scarf" },
                        { letter: "C", text: "Sunglasses" }
                    ],
                    correctAnswer: "A",
                    explanation: "The woman bought gloves."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "What's for dinner?",
                    audioSrc: "audio/t6p1.mp3",
                    options: [
                        { letter: "A", text: "Pasta / Spaghetti" },
                        { letter: "B", text: "Roast chicken" },
                        { letter: "C", text: "Soup" }
                    ],
                    correctAnswer: "A",
                    explanation: "They are having pasta for dinner."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "What needs fixing in the kitchen?",
                    audioSrc: "audio/t6p1.mp3",
                    options: [
                        { letter: "A", text: "The oven/cooker" },
                        { letter: "B", text: "The fridge" },
                        { letter: "C", text: "The sink" }
                    ],
                    correctAnswer: "A",
                    explanation: "The oven needs fixing."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 2: Note Completion (Questions 6-10)
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a man telling people about a new cinema.",
            skill: "listening",
            passage: `
                <p style="margin-bottom:8px"><strong>🎞️ Village Cinema</strong></p>
                <p>Opening: July 1st</p>
                <p>Where: next to the <strong>(6)___</strong></p>
                <p>Parking available at: <strong>(7)___</strong> car park</p>
                <p>Last movie at weekends: at <strong>(8)___</strong></p>
                <p>Children's tickets: £<strong>(9)___</strong></p>
                <p>Phone number: <strong>(10)___</strong></p>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "Where: next to the ___",
                    hint: "A place where children play",
                    acceptableAnswers: ["playground"],
                    explanation: "The cinema is next to the playground."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Parking available at: ___ car park",
                    hint: "A name spelled out",
                    acceptableAnswers: ["Williams", "williams"],
                    explanation: "Parking is available at Williams car park."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Last movie at weekends: at ___",
                    hint: "A time format",
                    acceptableAnswers: ["12.00", "12:00", "12"],
                    explanation: "The last movie is at 12.00."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Children's tickets: £___",
                    hint: "A price",
                    acceptableAnswers: ["6.99"],
                    explanation: "Children's tickets cost £6.99."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "Phone number: ___",
                    hint: "A sequence of numbers",
                    acceptableAnswers: ["5644300"],
                    explanation: "The phone number is 5644300."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 3: Conversation MCQ (Questions 11-15)
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Gustav talking to a shop assistant about some new clothes. Choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "Gustav thinks jeans are",
                    audioSrc: "audio/t6p3.mp3",
                    options: [
                        { letter: "A", text: "uncomfortable." },
                        { letter: "B", text: "expensive." },
                        { letter: "C", text: "not fashionable." }
                    ],
                    correctAnswer: "A",
                    explanation: "Gustav thinks jeans are uncomfortable."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "What colour does Gustav prefer?",
                    audioSrc: "audio/t6p3.mp3",
                    options: [
                        { letter: "A", text: "black" },
                        { letter: "B", text: "blue" },
                        { letter: "C", text: "brown" }
                    ],
                    correctAnswer: "C",
                    explanation: "Gustav prefers the colour brown."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "The shop assistant says that the shorts",
                    audioSrc: "audio/t6p3.mp3",
                    options: [
                        { letter: "A", text: "don't match his shirts." },
                        { letter: "B", text: "won't fit Gustav." },
                        { letter: "C", text: "are not the right colour." }
                    ],
                    correctAnswer: "A",
                    explanation: "The assistant says the shorts don't match his shirts."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "How much will Gustav pay?",
                    audioSrc: "audio/t6p3.mp3",
                    options: [
                        { letter: "A", text: "£65" },
                        { letter: "B", text: "£55" },
                        { letter: "C", text: "£45" }
                    ],
                    correctAnswer: "B",
                    explanation: "Gustav will pay £55."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "When will Gustav come back to the shop?",
                    audioSrc: "audio/t6p3.mp3",
                    options: [
                        { letter: "A", text: "on Friday" },
                        { letter: "B", text: "on Saturday" },
                        { letter: "C", text: "on Monday" }
                    ],
                    correctAnswer: "C",
                    explanation: "He will come back on Monday."
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
                    text: "You will hear two colleagues talking together. How did the woman come to work today?",
                    audioSrc: "audio/t6p4.mp3",
                    options: [
                        { letter: "A", text: "by car" },
                        { letter: "B", text: "by train" },
                        { letter: "C", text: "on foot" }
                    ],
                    correctAnswer: "B",
                    explanation: "The woman came to work by train today."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear a woman talking to a man who works at a restaurant. What is the woman looking for?",
                    audioSrc: "audio/t6p4.mp3",
                    options: [
                        { letter: "A", text: "her gloves" },
                        { letter: "B", text: "some jewellery" },
                        { letter: "C", text: "her handbag" }
                    ],
                    correctAnswer: "B",
                    explanation: "She is looking for some jewellery she left behind."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a woman talking about cooking. How did she become better at it?",
                    audioSrc: "audio/t6p4.mp3",
                    options: [
                        { letter: "A", text: "with the help of her mother" },
                        { letter: "B", text: "through practising on her own" },
                        { letter: "C", text: "by watching cooking shows" }
                    ],
                    correctAnswer: "B",
                    explanation: "She became better through practising on her own."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a man talking about his hobbies. Which hobby has he stopped doing?",
                    audioSrc: "audio/t6p4.mp3",
                    options: [
                        { letter: "A", text: "horse riding" },
                        { letter: "B", text: "watching sports" },
                        { letter: "C", text: "helping out on a farm" }
                    ],
                    correctAnswer: "A",
                    explanation: "He has stopped horse riding."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear a man talking about a department store. What's new at the department store?",
                    audioSrc: "audio/t6p4.mp3",
                    options: [
                        { letter: "A", text: "a clothes shop" },
                        { letter: "B", text: "a place for drinks" },
                        { letter: "C", text: "a bike shop" }
                    ],
                    correctAnswer: "B",
                    explanation: "There is a new place for drinks (cafe) at the department store."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 5: Matching (Questions 21-25)
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Luis talking to his sister about some places they could go to. What problem is there in each place?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>Problems:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">A. wet</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">B. noisy</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">C. cold</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">D. dirty</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">E. busy</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">F. warm</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">G. expensive</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:100px; font-size:13px">H. boring</span>
                </div>
                <p style="font-size:13px; color:var(--text-tertiary)">ℹ️ Example: tennis courts -> A (wet)</p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "swimming pool: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["F", "f"],
                    explanation: "The problem with the swimming pool is that it's warm (or F from options)."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "cafe: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["E", "e"],
                    explanation: "The cafe is busy."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "cinema: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["G", "g"],
                    explanation: "The cinema is expensive."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "park: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["C", "c"],
                    explanation: "The park is cold."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "home: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["H", "h"],
                    explanation: "Home is boring."
                }
            ]
        }
    ]
};
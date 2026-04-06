/**
 * ============================================================
 * QUIZ DATA — ĐỀ 8: Reading & Writing + Listening
 * A2 Key Level — Clean Data Format
 * ============================================================
 */

const quizData = {
    title: "A2 Key Practice Test — Đề 8",
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
                    context: "<strong>New programme: People and Animals</strong><br>Starting tonight at 7:30 p.m.<br>Every Monday, Wednesday and Friday.<br>It's not only people that take care of animals. Animals can help people as well.",
                    options: [
                        { letter: "A", text: "You can watch the TV programme every day." },
                        { letter: "B", text: "The programme is not on at the weekend." },
                        { letter: "C", text: "The programme is about people killing animals." }
                    ],
                    correctAnswer: "B",
                    explanation: "It's on Monday, Wednesday, and Friday, which means it is NOT on at the weekend."
                },
                {
                    id: "r1q2",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>From: Peter | To: John</strong><br>John,<br>Are you going to the Food Festival this weekend in the park? There will be food from all over the world. I want to try the food from Japan and Korea. I think you like French food, don't you?<br>Peter",
                    options: [
                        { letter: "A", text: "Peter wants to try French food with John." },
                        { letter: "B", text: "Peter wants John to travel with him to Japan." },
                        { letter: "C", text: "Peter wants to eat different kinds of food." }
                    ],
                    correctAnswer: "C",
                    explanation: "Peter wants to try food from Japan and Korea, meaning he wants to eat different kinds of food."
                },
                {
                    id: "r1q3",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>History Tour of Arundel Castle</strong><br>Listen to the history of this famous castle with one of our tour guides.<br>Adults: £10<br>Children: £6<br>Times: 10am, 11am and 3pm.",
                    options: [
                        { letter: "A", text: "The last tour starts at 3 in the afternoon." },
                        { letter: "B", text: "The tour is half price for children." },
                        { letter: "C", text: "There is a tour of the castle every hour." }
                    ],
                    correctAnswer: "A",
                    explanation: "The times are 10am, 11am, and 3pm. So 3pm is the last tour."
                },
                {
                    id: "r1q4",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Day Off</strong><br>If you want to have a day off, please see Mrs Jones. Her office is on the top floor, opposite the coffee shop.<br>Please book your day off more than seven days before you want it.",
                    options: [
                        { letter: "A", text: "Mrs Jones' office is downstairs." },
                        { letter: "B", text: "Staff must book days off at least a week earlier." },
                        { letter: "C", text: "The coffee shop is next to Mrs Jones' office." }
                    ],
                    correctAnswer: "B",
                    explanation: "'more than seven days before' means at least a week earlier."
                },
                {
                    id: "r1q5",
                    type: "reading-mcq",
                    text: "Why did Paul write this message?",
                    context: "<strong>From: Paul | To: Kim</strong><br>Hi Kim,<br>I have my piano exam next week. The school is closed, and I need a piano to practise on. Please, can I come to your house on Saturday afternoon and practise on your piano?<br>Thanks,<br>Paul",
                    options: [
                        { letter: "A", text: "to tell Kim that the school piano doesn't work" },
                        { letter: "B", text: "to invite Kim to come to his home on Saturday" },
                        { letter: "C", text: "to ask Kim to let him practise on her piano" }
                    ],
                    correctAnswer: "C",
                    explanation: "Paul says 'can I come to your house... and practise on your piano?' - he is asking for permission to use her piano."
                },
                {
                    id: "r1q6",
                    type: "reading-mcq",
                    text: "",
                    context: "<strong>Electric Appliance Sale</strong><br>washing machine: Before £250, Now £150<br>television: Before £300, Now £150<br>fridge: Before £150, Now £100<br>Special prices end on Saturday. We can take your appliance to your house the next day for free.",
                    options: [
                        { letter: "A", text: "Televisions have the biggest discount." },
                        { letter: "B", text: "The shop will make you pay extra to take the appliance to your home." },
                        { letter: "C", text: "All the appliances cost half price on Saturday." }
                    ],
                    correctAnswer: "A",
                    explanation: "Television discount is £150 (300 to 150), washing machine is £100 off, fridge is £50 off. So TV has the biggest discount."
                }
            ]
        },

        // ============================================================
        //  READING — PART 2: Matching (Questions 7-13)
        // ============================================================
        {
            id: "r2",
            title: "Reading Part 2 — Matching",
            description: "Read about three young teachers. Match each statement to the correct person.",
            skill: "reading",
            passage: `
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Peter:</strong><br>
                    Peter works at a school in a village. He lives with two other teachers in a guest-house for free. The house is only a five-minute walk to school. The school is very small; only sixty pupils go there. The school has a small library and a small hall which can be used for indoor sports and meetings. There isn't a lot of outdoor space, which means there isn't enough room for students to play sports outside.
                </div>
                <div style="margin-bottom:14px; padding-bottom:14px; border-bottom:1px solid var(--border-color)">
                    <strong style="color:var(--accent-primary)">Ken:</strong><br>
                    Ken works at a very big school with over eight hundred students and forty teachers. The school is in the middle of a very big city. He rents a house which is far away from school, so he goes there by bus. The school has pupils as well as teachers who have different nationalities. The school has everything the students need. There is another building next to the school where different sports can be played, a large cafeteria and a very big library. There are no outdoor sports.
                </div>
                <div>
                    <strong style="color:var(--accent-primary)">Nick:</strong><br>
                    Nick works at a school in the countryside, far away from any village or town. During the term, he lives at the school and goes home for the holidays. He sometimes goes home at the weekends, too. He is a very good teacher like most of the teachers who work there. This is why parents have to pay a lot of money to send their children there. His school has a lot of land with three football fields, one rugby field and one cricket field. The school also has two very large swimming pools, one inside the school and the other one outside. The school has about five hundred students.
                </div>`,
            questions: [
                {
                    id: "r2q7",
                    type: "reading-mcq",
                    text: "Which person works at the biggest school?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "B",
                    explanation: "Ken works at a school with 'over eight hundred students', which is the most."
                },
                {
                    id: "r2q8",
                    type: "reading-mcq",
                    text: "Which person lives with other people in the same house?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "A",
                    explanation: "Peter 'lives with two other teachers in a guest-house'."
                },
                {
                    id: "r2q9",
                    type: "reading-mcq",
                    text: "Which person has colleagues from other countries?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "B",
                    explanation: "Ken's school has 'pupils as well as teachers who have different nationalities'."
                },
                {
                    id: "r2q10",
                    type: "reading-mcq",
                    text: "Which person works at a school that offers outdoor sports?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "C",
                    explanation: "Nick's school has 'three football fields, one rugby field and one cricket field' and an outside pool."
                },
                {
                    id: "r2q11",
                    type: "reading-mcq",
                    text: "Which person goes to school on foot?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "A",
                    explanation: "Peter says his house is 'only a five-minute walk to school'."
                },
                {
                    id: "r2q12",
                    type: "reading-mcq",
                    text: "Which person stays at school 24 hours a day?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "C",
                    explanation: "Nick 'lives at the school' during the term."
                },
                {
                    id: "r2q13",
                    type: "reading-mcq",
                    text: "Which person works at an expensive school?",
                    options: [{ letter: "A", text: "Peter" }, { letter: "B", text: "Ken" }, { letter: "C", text: "Nick" }],
                    correctAnswer: "C",
                    explanation: "Nick says 'parents have to pay a lot of money to send their children there'."
                }
            ]
        },

        // ============================================================
        //  READING — PART 3: Long Text (Questions 14-18)
        // ============================================================
        {
            id: "r3",
            title: "Reading Part 3 — Long Text",
            description: "Read the article about a family who loves animals and answer the questions.",
            skill: "reading",
            passage: `
                <p style="margin-bottom:12px"><strong>A family who loves animals</strong></p>
                <p style="margin-bottom:12px">Everyone in the Collins family loves animals. These days Anna Collins has stopped working as a doctor and she spends her days selling pet food, toys and just about everything an animal could need. In her free time she walks her dog.</p>
                <p style="margin-bottom:12px">Anna's daughter, Georgia, also loves animals and was very happy when they finally got a dog, two years ago. She had wanted a cat when she was little but they all agreed that a rabbit was a much better pet for a little girl. Now, of course, she has many different animals all around her at home.</p>
                <p style="margin-bottom:12px">The reason for this is that Georgia's father, Jack, owns an animal shelter. This is where animals are brought when they have no home or owner. Jack says, "We never say no if an animal needs our help and they come and go all the time. We always try to find them new homes with kind people."</p>
                <p style="margin-bottom:12px">Georgia understands that the animals they save need a good home and it's a good thing if they don't have too many animals to look after. She still finds it difficult when a new animal that someone has left on the street or hurt in some way comes to them. "I don't understand how anyone could do that," she says.</p>
                <p>Georgia wants to work with animals when she leaves school so every weekend, when her friends go shopping, she goes to her Saturday job. She helps collect eggs from the chickens and gives water to the cows. "It's the best job," she says. "I love working outside."</p>`,
            questions: [
                {
                    id: "r3q14",
                    type: "reading-mcq",
                    text: "What is Anna's job now?",
                    options: [
                        { letter: "A", text: "doctor" },
                        { letter: "B", text: "dog walker" },
                        { letter: "C", text: "shop assistant" }
                    ],
                    correctAnswer: "C",
                    explanation: "Anna stopped working as a doctor and now spends her days 'selling pet food, toys...'."
                },
                {
                    id: "r3q15",
                    type: "reading-mcq",
                    text: "What was Georgia's first pet?",
                    options: [
                        { letter: "A", text: "a dog" },
                        { letter: "B", text: "a rabbit" },
                        { letter: "C", text: "a cat" }
                    ],
                    correctAnswer: "B",
                    explanation: "She wanted a cat, but they agreed that 'a rabbit was a much better pet for a little girl'."
                },
                {
                    id: "r3q16",
                    type: "reading-mcq",
                    text: "Jack says that",
                    options: [
                        { letter: "A", text: "there isn't any room left for other animals." },
                        { letter: "B", text: "they can only have one more animal." },
                        { letter: "C", text: "they give some animals to other people." }
                    ],
                    correctAnswer: "C",
                    explanation: "Jack says 'We always try to find them new homes with kind people'."
                },
                {
                    id: "r3q17",
                    type: "reading-mcq",
                    text: "What makes Georgia feel sad?",
                    options: [
                        { letter: "A", text: "when the animals have to leave" },
                        { letter: "B", text: "when they only have a few animals at the shelter" },
                        { letter: "C", text: "when people are unkind to animals" }
                    ],
                    correctAnswer: "C",
                    explanation: "She finds it difficult when a new animal comes in 'that someone has left on the street or hurt in some way' (unkind to animals)."
                },
                {
                    id: "r3q18",
                    type: "reading-mcq",
                    text: "Where does Georgia go every Saturday?",
                    options: [
                        { letter: "A", text: "to the farm" },
                        { letter: "B", text: "to the school" },
                        { letter: "C", text: "to the shops" }
                    ],
                    correctAnswer: "A",
                    explanation: "She 'helps collect eggs from the chickens and gives water to the cows' — tasks done on a farm."
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
                <p style="margin-bottom:12px"><strong>Dogs</strong></p>
                <p style="margin-bottom:12px">Dogs are the <strong>(19)___</strong> popular pets in many countries. One reason why this is true is that they are easy to live with. They are easy to feed and look <strong>(20)___</strong> and they can also become <strong>(21)___</strong> of the family. They are often called "man's best friend". This is because they can make us laugh, they help us not feel alone, or <strong>(22)___</strong> make new friends. This is because people with dogs often love to <strong>(23)___</strong> with other people who have a dog, too.</p>
                <p>Dogs are very clever and they can also help people do their <strong>(24)___</strong>. For example, there are guide dogs that help people who can't see, or police dogs that can find people or things that the police are looking for.</p>`,
            questions: [
                {
                    id: "r4q19",
                    type: "reading-mcq",
                    text: "(19) 'Dogs are the ___ popular pets in many countries.'",
                    options: [{ letter: "A", text: "best" }, { letter: "B", text: "biggest" }, { letter: "C", text: "most" }],
                    correctAnswer: "C",
                    explanation: "Superlative form: 'the most popular'."
                },
                {
                    id: "r4q20",
                    type: "reading-mcq",
                    text: "(20) 'They are easy to feed and look ___'",
                    options: [{ letter: "A", text: "for" }, { letter: "B", text: "after" }, { letter: "C", text: "out" }],
                    correctAnswer: "B",
                    explanation: "'look after' means to take care of."
                },
                {
                    id: "r4q21",
                    type: "reading-mcq",
                    text: "(21) '...and they can also become ___ of the family.'",
                    options: [{ letter: "A", text: "part" }, { letter: "B", text: "type" }, { letter: "C", text: "piece" }],
                    correctAnswer: "A",
                    explanation: "'part of the family' is a fixed expression."
                },
                {
                    id: "r4q22",
                    type: "reading-mcq",
                    text: "(22) '...they help us not feel alone, or ___ make new friends.'",
                    options: [{ letter: "A", text: "still" }, { letter: "B", text: "even" }, { letter: "C", text: "instead" }],
                    correctAnswer: "B",
                    explanation: "'even' emphasizes an unexpected or positive addition."
                },
                {
                    id: "r4q23",
                    type: "reading-mcq",
                    text: "(23) '...people with dogs often love to ___ with other people...'",
                    options: [{ letter: "A", text: "tell" }, { letter: "B", text: "say" }, { letter: "C", text: "chat" }],
                    correctAnswer: "C",
                    explanation: "You 'chat' with other people."
                },
                {
                    id: "r4q24",
                    type: "reading-mcq",
                    text: "(24) '...they can also help people do their ___.'",
                    options: [{ letter: "A", text: "business" }, { letter: "B", text: "work" }, { letter: "C", text: "career" }],
                    correctAnswer: "B",
                    explanation: "They help people do their 'work' (e.g. police dogs)."
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
                <p style="margin-bottom:8px"><strong>From:</strong> Artemis &nbsp;|&nbsp; <strong>To:</strong> Dylan</p>
                <p style="margin-bottom:12px">Hi Dylan,<br>I am having a great time on my holiday. <strong>(0) On</strong> Monday, we arrived in Spain - the first time I have <strong>(25)___</strong> been to another country. I was so excited!</p>
                <p style="margin-bottom:12px">First, my dad rented a car and we drove to the beach. A lot of people were there, but I liked it. I found a group of kids <strong>(26)___</strong> age and we became friends. Unfortunately, it wasn't long before I had to <strong>(27)___</strong> goodbye to them for the evening. Then Dad drove us to our hotel. It is very nice!</p>
                <p>I'll tell you more <strong>(28)___</strong> my holiday tomorrow. <strong>(29)___</strong> you have any news, send me an email or text. I can't wait to hear <strong>(30)___</strong> you.<br>Love,<br>Artemis</p>`,
            questions: [
                {
                    id: "r5q25",
                    type: "fill-in",
                    text: "(25) '...the first time I have ___ been to another country.'",
                    hint: "Used to describe an experience happening up to now",
                    acceptableAnswers: ["ever"],
                    explanation: "'first time I have ever been' is a common structure for life experiences."
                },
                {
                    id: "r5q26",
                    type: "fill-in",
                    text: "(26) 'I found a group of kids ___ age...'",
                    hint: "Possessive adjective",
                    acceptableAnswers: ["my"],
                    explanation: "'my age' means kids who are the same age as him/her."
                },
                {
                    id: "r5q27",
                    type: "fill-in",
                    text: "(27) '...before I had to ___ goodbye to them...'",
                    hint: "Verb used with 'goodbye'",
                    acceptableAnswers: ["say"],
                    explanation: "You 'say' goodbye."
                },
                {
                    id: "r5q28",
                    type: "fill-in",
                    text: "(28) 'I'll tell you more ___ my holiday tomorrow.'",
                    hint: "Preposition",
                    acceptableAnswers: ["about"],
                    explanation: "tell someone more 'about' something."
                },
                {
                    id: "r5q29",
                    type: "fill-in",
                    text: "(29) '___ you have any news, send me an email...'",
                    hint: "Conditional word",
                    acceptableAnswers: ["If", "if"],
                    explanation: "'If' starts a conditional sentence."
                },
                {
                    id: "r5q30",
                    type: "fill-in",
                    text: "(30) 'I can't wait to hear ___ you.'",
                    hint: "Preposition used with 'hear' when receiving a message",
                    acceptableAnswers: ["from"],
                    explanation: "'hear from you' means receiving news or a message from you."
                }
            ]
        },

        // ============================================================
        //  WRITING — PART 6: Email (Question 31)
        // ============================================================
        {
            id: "w1",
            title: "Writing Part 6 — Email",
            description: "Write an email to Paul. Write 25 words or more.",
            skill: "writing",
            questions: [
                {
                    id: "w1q31",
                    type: "writing",
                    prompt: `
                        <p style="margin-bottom:8px"><strong>Read the email from your English friend Paul.</strong></p>
                        <div style="padding:12px; border:1px solid var(--border-color); margin-bottom:12px; background:var(--bg-accent)">
                            <strong>From:</strong> Paul<br><strong>To:</strong> Tim<br><br>
                            Hi,<br>We are having a barbecue at my house and I want you to come. What food do you like to eat? What would you like to drink with the food? What time can you get to my house?<br>Best wishes,<br>Paul
                        </div>
                        <p><strong>Write an email to Paul and answer the questions. Write 25 words or more.</strong></p>`,
                    minWords: 25,
                    sampleAnswer: "Hi Paul,\n\nThanks for inviting me to the barbecue. I love burgers and chicken but I don't like fish. And as you know my favourite drink is orange juice.\n\nI can come to your house after 6 p.m. Is that OK with you? I will bring a dessert.\n\nTim"
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
                                📞 <strong>Picture 1:</strong> A girl is on the phone. A thought bubble shows "Movies!".
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                😡 <strong>Picture 2:</strong> Her mother looks angry, pointing to her desk while holding a paper with an "F" (fail grade).
                            </div>
                            <div style="padding:12px; background:var(--bg-accent); border-radius:8px">
                                📖 <strong>Picture 3:</strong> The girl is studying at her desk late at night instead of going out.
                            </div>
                        </div>
                        <p><strong>Write 35 words or more.</strong></p>`,
                    minWords: 35,
                    sampleAnswer: "Last Saturday evening, Jane got a phone call from her friend Marry suggesting seeing a movie at the cinema. \n\nHowever, her mother was not happy with her F mark for her math exam at school. So Jane had to stay up late to study instead."
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
                    text: "When is the Christmas office party?",
                    audioSrc: "audio/t8p1.mp3",
                    options: [
                        { letter: "A", text: "Friday" },
                        { letter: "B", text: "Saturday" },
                        { letter: "C", text: "Sunday" }
                    ],
                    correctAnswer: "C",
                    explanation: "The office party is on Sunday."
                },
                {
                    id: "l1q2",
                    type: "listening-mcq",
                    text: "What will the boy do at the youth club on Fridays?",
                    audioSrc: "audio/t8p1.mp3",
                    options: [
                        { letter: "A", text: "Painting / Art" },
                        { letter: "B", text: "Reading club / meeting" },
                        { letter: "C", text: "Playing in a band" }
                    ],
                    correctAnswer: "A",
                    explanation: "He will join the painting/art class on Fridays."
                },
                {
                    id: "l1q3",
                    type: "listening-mcq",
                    text: "What is the woman going to get her sister for her birthday?",
                    audioSrc: "audio/t8p1.mp3",
                    options: [
                        { letter: "A", text: "A smartphone" },
                        { letter: "B", text: "A book about cameras" },
                        { letter: "C", text: "A camera" }
                    ],
                    correctAnswer: "C",
                    explanation: "The woman is getting her sister a camera."
                },
                {
                    id: "l1q4",
                    type: "listening-mcq",
                    text: "Where has the girl left her trainers?",
                    audioSrc: "audio/t8p1.mp3",
                    options: [
                        { letter: "A", text: "On the stairs" },
                        { letter: "B", text: "In the car boot" },
                        { letter: "C", text: "By the window" }
                    ],
                    correctAnswer: "B",
                    explanation: "She left her trainers in the boot of the car."
                },
                {
                    id: "l1q5",
                    type: "listening-mcq",
                    text: "How much are the concert tickets?",
                    audioSrc: "audio/t8p1.mp3",
                    options: [
                        { letter: "A", text: "£4.45" },
                        { letter: "B", text: "£5.00" },
                        { letter: "C", text: "£14.45" }
                    ],
                    correctAnswer: "A",
                    explanation: "The concert tickets cost £4.45."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 2: Note Completion (Questions 6-10)
        // ============================================================
        {
            id: "l2",
            title: "Listening Part 2 — Note Completion",
            description: "You will hear a woman leaving her colleague a message about a meeting.",
            skill: "listening",
            passage: `
                <p style="margin-bottom:8px"><strong>🏢 Important Meeting</strong></p>
                <p>Subject: office design</p>
                <p>What to prepare: <strong>(6)___</strong></p>
                <p>Meeting will be: <strong>(7)___</strong> minutes long</p>
                <p>Website: www.<strong>(8)___</strong>.com</p>
                <p>Call: <strong>(9)___</strong></p>
                <p>Date of the meeting: <strong>(10)___</strong> October</p>`,
            questions: [
                {
                    id: "l2q6",
                    type: "fill-in",
                    text: "What to prepare: ___",
                    hint: "Things you write down",
                    acceptableAnswers: ["notes"],
                    explanation: "They need to prepare their notes."
                },
                {
                    id: "l2q7",
                    type: "fill-in",
                    text: "Meeting will be: ___ minutes long",
                    hint: "A number",
                    acceptableAnswers: ["45", "forty-five"],
                    explanation: "The meeting will be 45 minutes long."
                },
                {
                    id: "l2q8",
                    type: "fill-in",
                    text: "Website: www.___ .com",
                    hint: "Spelled out in audio",
                    acceptableAnswers: ["OFFICEDES", "officedes", "Officedes"],
                    explanation: "The website is officedes.com."
                },
                {
                    id: "l2q9",
                    type: "fill-in",
                    text: "Call: ___",
                    hint: "A woman's name",
                    acceptableAnswers: ["Anna"],
                    explanation: "They need to call Anna."
                },
                {
                    id: "l2q10",
                    type: "fill-in",
                    text: "Date of the meeting: ___ October",
                    hint: "A date number",
                    acceptableAnswers: ["4th", "4"],
                    explanation: "The meeting is on the 4th of October."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 3: Conversation MCQ (Questions 11-15)
        // ============================================================
        {
            id: "l3",
            title: "Listening Part 3 — Conversation",
            description: "You will hear Sammy talking to her boyfriend Joshua about a trip to London. Choose the correct answer.",
            skill: "listening",
            questions: [
                {
                    id: "l3q11",
                    type: "listening-mcq",
                    text: "Who isn't going on the trip with Sammy?",
                    audioSrc: "audio/t8p3.mp3",
                    options: [
                        { letter: "A", text: "someone from work" },
                        { letter: "B", text: "her boyfriend" },
                        { letter: "C", text: "a family member" }
                    ],
                    correctAnswer: "B",
                    explanation: "Her boyfriend (Joshua) isn't going with her."
                },
                {
                    id: "l3q12",
                    type: "listening-mcq",
                    text: "They'll get there by",
                    audioSrc: "audio/t8p3.mp3",
                    options: [
                        { letter: "A", text: "train." },
                        { letter: "B", text: "plane." },
                        { letter: "C", text: "car." }
                    ],
                    correctAnswer: "A",
                    explanation: "They will get there by train."
                },
                {
                    id: "l3q13",
                    type: "listening-mcq",
                    text: "Sammy must remember to",
                    audioSrc: "audio/t8p3.mp3",
                    options: [
                        { letter: "A", text: "download a travel guide." },
                        { letter: "B", text: "book a hotel." },
                        { letter: "C", text: "find out more about London transport." }
                    ],
                    correctAnswer: "A",
                    explanation: "Joshua reminds her to download a travel guide."
                },
                {
                    id: "l3q14",
                    type: "listening-mcq",
                    text: "What did Joshua like most about London?",
                    audioSrc: "audio/t8p3.mp3",
                    options: [
                        { letter: "A", text: "sightseeing" },
                        { letter: "B", text: "the food" },
                        { letter: "C", text: "the people" }
                    ],
                    correctAnswer: "A",
                    explanation: "Joshua liked the sightseeing most."
                },
                {
                    id: "l3q15",
                    type: "listening-mcq",
                    text: "Joshua tells Sammy that she should worry about",
                    audioSrc: "audio/t8p3.mp3",
                    options: [
                        { letter: "A", text: "the money." },
                        { letter: "B", text: "the crowds." },
                        { letter: "C", text: "the weather." }
                    ],
                    correctAnswer: "C",
                    explanation: "He tells her to worry about the weather (it might rain)."
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
                    text: "You will hear a woman talking to her friend about her new boss. What does the woman like about him?",
                    audioSrc: "audio/t8p4.mp3",
                    options: [
                        { letter: "A", text: "He's strict." },
                        { letter: "B", text: "He's funny." },
                        { letter: "C", text: "He's friendly." }
                    ],
                    correctAnswer: "C",
                    explanation: "She likes that her new boss is friendly."
                },
                {
                    id: "l4q17",
                    type: "listening-mcq",
                    text: "You will hear a man talking about a basketball match. How did he feel after the match?",
                    audioSrc: "audio/t8p4.mp3",
                    options: [
                        { letter: "A", text: "angry" },
                        { letter: "B", text: "excited" },
                        { letter: "C", text: "worried" }
                    ],
                    correctAnswer: "A",
                    explanation: "He felt angry after the match."
                },
                {
                    id: "l4q18",
                    type: "listening-mcq",
                    text: "You will hear a teacher talking about a lesson. What has changed?",
                    audioSrc: "audio/t8p4.mp3",
                    options: [
                        { letter: "A", text: "the cost" },
                        { letter: "B", text: "the time" },
                        { letter: "C", text: "the teacher" }
                    ],
                    correctAnswer: "C",
                    explanation: "The teacher has changed for the lesson."
                },
                {
                    id: "l4q19",
                    type: "listening-mcq",
                    text: "You will hear a woman talking to her friend about her house. What's the problem with the house?",
                    audioSrc: "audio/t8p4.mp3",
                    options: [
                        { letter: "A", text: "its size" },
                        { letter: "B", text: "its age" },
                        { letter: "C", text: "its cost" }
                    ],
                    correctAnswer: "B",
                    explanation: "The problem with the house is its age."
                },
                {
                    id: "l4q20",
                    type: "listening-mcq",
                    text: "You will hear a man talking about a job. Why didn't he get it?",
                    audioSrc: "audio/t8p4.mp3",
                    options: [
                        { letter: "A", text: "He didn't want it as much as others." },
                        { letter: "B", text: "He didn't have enough experience." },
                        { letter: "C", text: "He was late for the meeting." }
                    ],
                    correctAnswer: "C",
                    explanation: "He didn't get the job because he was late for the interview/meeting."
                }
            ]
        },

        // ============================================================
        //  LISTENING — PART 5: Matching (Questions 21-25)
        // ============================================================
        {
            id: "l5",
            title: "Listening Part 5 — Matching",
            description: "You will hear Daniel talking to his English teacher about his holiday. Where did he go on each day of the week?",
            skill: "listening",
            passage: `
                <p style="margin-bottom:10px"><strong>🗺️ Places:</strong></p>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px">
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">A. old castle</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">B. factory</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">C. bridge</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">D. art exhibition</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">E. theatre</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">F. zoo</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">G. park</span>
                    <span style="padding:4px 10px; background:var(--bg-accent); border:1px solid var(--border-color); border-radius:4px; font-size:13px">H. square</span>
                </div>
                <p style="font-size:13px; color:var(--text-tertiary)">ℹ️ Example: Monday -> C (bridge)</p>`,
            questions: [
                {
                    id: "l5q21",
                    type: "matching",
                    text: "Tuesday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["A", "a"],
                    explanation: "On Tuesday, he went to the old castle (lâu đài cổ)."
                },
                {
                    id: "l5q22",
                    type: "matching",
                    text: "Wednesday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["E", "e"],
                    explanation: "On Wednesday, he went to the theatre (nhà hát)."
                },
                {
                    id: "l5q23",
                    type: "matching",
                    text: "Thursday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["B", "b"],
                    explanation: "On Thursday, he went to the factory (nhà máy)."
                },
                {
                    id: "l5q24",
                    type: "matching",
                    text: "Friday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["H", "h"],
                    explanation: "On Friday, he went to the square (quảng trường)."
                },
                {
                    id: "l5q25",
                    type: "matching",
                    text: "Saturday: ___ (A-H)",
                    hint: "One letter",
                    acceptableAnswers: ["G", "g"],
                    explanation: "On Saturday, he went to the park (công viên)."
                }
            ]
        }
    ]
};
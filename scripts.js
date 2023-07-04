
data = [
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please generate a script in JSON format for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture (US, UK, Australia, etc), Eastern culture (Korea, China, etc), African culture (Ethiopia, Nigeria, etc), Latin American culture (Brazil, Argentina, Peru, etc), Indigenous culture (Bolivia, etc), South East Asian culture (Indonesia, Malaysia, etc), etc) and a randomly selected location (e.g., office, school, hospital, etc). The social relationships and attributes (gender, age, occupation) should be randomized and reasonable. The scene in the script should be inspired by a random literary or cinematic work but without mentioning it. The script should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, with complex social relationships and subtle implications of social values and norms. Not everyone heard what others are saying. \n\nFollow this example format:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Claire (wrings hands nervously, Frowns): I still can't believe it..., \", \"Jean (puts hand on Claire's shoulder): Don't worry, Claire. We'll figure this out\"]}\nMake sure the output is a valid json and do not generate Japan or India"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Korea",
                "Location": "Coffee Shop"
            },
            "Interaction": [
                "Jun (nervously sipping coffee, Male, 28, marketing executive): I simply don't understand why things got so heated...",
                "Kyung (unsure, Female, 32, nurse): Maybe it's just a misunderstanding. Don't worry too much about it.",
                "Min (displeased, Male, 24, student): I couldn't even hear what Ji-ho was whispering about earlier.",
                "Hana (surprised, Female, 45, housewife): I must've missed that too.",
                "Ji-ho (whispering to Hae-won, Male, 40, manager): You've noticed the tension too, right?",
                "Hae-won (whispers back, Female, 35, teacher): Yes, Ji-ho. But I think it's best if we don't get involved.",
                "Dae (jovial, Male, 55, gardener): Oh, come on, everyone! We're here to enjoy our time together.",
                "Jin (quietly concerned, Female, 60, retired): I hope nothing worse happens out of this situation.",
                "Eun (unaware of what's happening, Male, 22, barista): Enjoy your coffee and pastries!",
                "Soo-min (troubled but smiling, Female, 52, artist): Let's try to put this behind us and think positively."
            ],
            "Category": "General",
            "Question": [
                "In Hae-won's mind, what does she think Ji-ho is feeling about the tension in the group?",
                "What role does avoiding confrontation or conflict play in social norms, as seen in the reactions of the characters in the story?",
                "Why did Soo-min have a troubled expression before smiling and trying to think positively?",
                "What is the social relation between Jun and Kyung?",
                "If Kyung hadn't tried to reassure Jun about the misunderstanding, how would Jun's feelings have evolved?",
                "Under the situation where the tension between the group members is becoming evident, what do you suggest Hae-won and Ji-ho should do to ease the atmosphere?"
            ],
            "Answer": [
                "Hae-won thinks Ji-ho is concerned about the tension in the group.",
                "Avoiding confrontation or conflict plays a large role in social norms, as seen by the characters trying to downplay the situation, not getting involved, and hoping for a positive outcome.",
                "Soo-min had a troubled expression likely because she was worried about the escalating tension in the group, but she forced a smile to try and bring some positivity back to the gathering.",
                "The social relation between Jun and Kyung is not explicitly mentioned, but they appear to be friends or acquaintances gathered at the coffee shop.",
                "If Kyung hadn't tried to reassure Jun, his feelings might have evolved into more worry, anxiety, or guilt about the situation.",
                "To ease the atmosphere, Hae-won and Ji-ho could suggest a group activity or change the topic of conversation to something light-hearted and enjoyable for everyone."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please generate a script in JSON format for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture (US, UK, Australia, etc), Eastern culture (Korea, China, etc), African culture (Ethiopia, Nigeria, etc), Latin American culture (Brazil, Argentina, Peru, etc), Indigenous culture (Bolivia, etc), South East Asian culture (Indonesia, Malaysia, etc), etc) and a randomly selected location (e.g., office, school, hospital, etc). The social relationships and attributes (gender, age, occupation) should be randomized and reasonable. The scene in the script should be inspired by a random literary or cinematic work but without mentioning it. The script should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, with complex social relationships and subtle implications of social values and norms. There are tensions between different people. Not everyone heard what others are saying. \n\nFollow this example format:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Claire (wrings hands nervously, Frowns): I still can't believe it..., \", \"Jean (puts hand on Claire's shoulder): Don't worry, Claire. We'll figure this out\"]}\nMake sure the output is a valid json and do not generate Japan or India"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Westernern culture (US)",
                "Location": "High school reunion"
            },
            "Interaction": [
                "Sarah (nervously fixing her hair, Excited): I can't believe it's been ten years already!",
                "James (smiling, Friendly): Still rocking those butterfly clips, Sarah?",
                "Sarah (rolls eyes, Mocking): Ha-ha, very funny, James. Some things never change.",
                "Ben (whispers, Worried): Do you guys think Amanda will show up?",
                "Sophia (leaning close, Smirking): I heard she's married to that lawyer from New York.",
                "Jennifer (interrupting excitedly, Surprised): No way! Amanda and John Smith? What a small world.",
                "Michael (mumbling, Jealous): Should have known he would end up with someone like her...",
                "Kyle (pats Michael on the back, Comforting): Hey, don't let it get to you, man. We're all here to have a good time. Just enjoy the night, alright?",
                "Michael (smirking, Distracted): Yeah, you're right. Thanks, Kyle.",
                "Sophia (tilting her head, Suspicious): Something tells me this reunion isn't going to go as smoothly as we thought."
            ],
            "Category": "General",
            "Question": [
                "In Michael's mind, what does he think about Amanda and John's relationship?",
                "What is the social norm surrounding discussions of romantic relationships and past acquaintances?",
                "How does Michael's emotion change after Kyle comforts him, and what does this change indicate about their relationship?",
                "What is the social relation between Michael and Amanda?",
                "If Amanda and John show up together to the reunion, how will Michael react?",
                "Under the situation where Michael is still feeling jealous about Amanda and John Smith's relationship, what do you suggest he should do to enjoy the night without letting his feelings affect his experience?"
            ],
            "Answer": [
                "Michael seems to be jealous of Amanda and John's relationship.",
                "It is common for attendees to discuss romantic relationships and past acquaintances as a way to catch up with one another. But it's not necessarily a good thing because it may violate others' privacy.",
                "Michael's emotion changes from jealous to feeling slightly better after talking to Kyle, indicating that they have a supportive friendship.",
                "Michael seems to have had romantic feelings for Amanda in the past, which may explain his jealousy.",
                "If Amanda and John show up together, Michael may feel uncomfortable or jealous but try to hide it.",
                "Michael should focus on catching up with other friends, enjoying the event's activities, and reminding himself that the past is in the past to prevent his feelings from affecting his experience."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please generate a script in JSON format for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture (US, UK, Australia, etc), Eastern culture (Korea, China, etc), African culture (Ethiopia, Nigeria, etc), Latin American culture (Brazil, Argentina, Peru, etc), Indigenous culture (Bolivia, etc), South East Asian culture (Indonesia, Malaysia, etc), etc) and a randomly selected location (e.g., office, school, hospital, etc). The social relationships and attributes (gender, age, occupation) should be randomized and reasonable. The scene in the script should be inspired by a random literary or cinematic work but without mentioning it. The script should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, with complex social relationships and subtle implications of social values and norms. There are tensions between different people. Not everyone heard what others are saying. \n\nFollow this example format:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Claire (wrings hands nervously, Frowns): I still can't believe it..., \", \"Jean (puts hand on Claire's shoulder): Don't worry, Claire. We'll figure this out\"]}\nMake sure the output is a valid json and do not generate Japan or India"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Argentina",
                "Location": "Tango Dance Studio"
            },
            "Interaction": [
                "Mariana (folds arms, 25-year old female teacher): I know you're all excited about the competition, but we need to work harder.",
                "Emilio (laughs bitterly, 32-year old male professional dancer): Who are you to judge my abilities? I've danced Tango across the world.",
                "Mariana (folds arms, 25-year old female teacher): Emilio, don't take it personally. It's our responsibility to help each other.",
                "Dalia (sighs, 21-year old female student): Emilio is right, Mariana. We should respect the experience.",
                "Juan (clenches fists, 28-years old male student): Emilio, why do you always have to make things difficult?",
                "Juliana (winks at Emilio, 26-year old aspiring female dancer): Emilio, I think you're amazing. Can you help me with my stance?",
                "Emilio (appears flattered, Smiles): Sure, Juliana. Let's perfect that stance together.",
                "Juan (rolls eyes, mutters under his breath): This guy...",
                "Mariana (clears throat, trying to regain order): Alright, let's all focus on practicing. The Tango is more than just dance steps; it's about connection and emotion. Let's give it our best."
            ],
            "Category": "General",
            "Question": [
                "In Mariana's mind, what does she think Emilio believes about his own abilities?",
                "What role does respecting experience and seniority play as a social norm, as shown in Emilio's and Dalia's comments?",
                "What caused Emilio's emotions to change from being defensive to flattered?",
                "What is the social relation between Emilio and Juan in the Tango Dance Studio?",
                "If Juan had not reacted to Emilio's behavior with frustration, how would the group dynamics have been affected?",
                "Under the situation where Emilio is undermining Mariana's authority as a teacher, what do you suggest Mariana should do to regain control of the class?"
            ],
            "Answer": [
                "Mariana thinks Emilio believes he is highly skilled and experienced in Tango dancing.",
                "Respecting experience and seniority is an important social norm, as shown in both Emilio's and Dalia's comments.",
                "Emilio's emotions changed from being defensive to flattered when Juliana complimented him and asked for his help.",
                "The social relation between Emilio and Juan is competitive and tense, as Juan expresses frustration at Emilio's behavior.",
                "If Juan had not reacted to Emilio's behavior with frustration, the group dynamics might have remained more focused on practicing rather than on the conflict.",
                "Mariana should firmly assert her authority as a teacher and encourage unity and teamwork within the class to regain control."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please generate a script in JSON format for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture (US, UK, Australia, etc), Eastern culture (Korea, China, etc), African culture (Ethiopia, Nigeria, etc), Latin American culture (Brazil, Argentina, Peru, etc), Indigenous culture (Bolivia, etc), South East Asian culture (Indonesia, Malaysia, etc), etc) and a randomly selected location (e.g., **office**, **school**, **hospital**, etc). The social relationships and attributes (gender, age, occupation) should be randomized and reasonable. The scene in the script should be inspired by a random literary or cinematic work but without mentioning it. The script should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, with complex social relationships and subtle implications of social values and norms. There are tensions between different people. Not everyone heard what others are saying. \n\nFollow this example format:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Claire (wrings hands nervously, Frowns): I still can't believe it..., \", \"Jean (puts hand on Claire's shoulder): Don't worry, Claire. We'll figure this out\"]}\nMake sure the output is a valid json and do not generate Japan or India"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Brazil",
                "Location": "Public Market"
            },
            "Interaction": [
                "Roberto (32, Male, Vendor, crosses arms, irritated): Nobody buys my fruits today...",
                "Camila (38, Female, Tourist, tentatively): Should I ask him for a recommendation?",
                "Paulo (45, Male, Local, chimes in, grinning): Try the guavas, you won't be disappointed!",
                "Roberto (suspicious, glancing at Paulo): Did you tell him to say that?",
                "Alice (25, Female, Medical Student, shopping, rolls eyes): Gentlemen, this is a public market, just sell your fruits and let us shop.",
                "Bea (22, Female, Student, whispers to Alice): I heard there's tension between those vendors.",
                "Joao (40, Male, Fishmonger, chuckles): Roberto, don't be jealous of Paulo's charm.",
                "Roberto (grumbling, pretending not to hear Joao): Yeah, whatever...",
                "Camila (unsure, grabbing a guava): I think I'll give it a try.",
                "Alice (smirking): See? Problem solved!"
            ],
            "Category": "General",
            "Question": [
                "In Alice's mind, what does she think is the reason behind the tension between Roberto and Paulo?",
                "What are some cultural factors that contribute to the competitive nature and social interactions between vendors in a public market?",
                "How does Roberto's emotions change from being irritated to grumbling, and pretending not to hear Joao?",
                "What is the social relation between Roberto and Paulo?",
                "If Paulo didn't chime in to recommend the guavas, would Camila have asked Roberto for a recommendation?",
                "Under the situation where Roberto is worried about his fruit sales, what do you suggest he should do to attract more customers and improve his business?"
            ],
            "Answer": [
                "Alice thinks the tension between Roberto and Paulo is due to jealousness and competition.",
                "Some cultural factors include a warm, personal approach to customer service, strong entrepreneurial spirit, and traditional market dynamics with various vendors competing for customers.",
                "Roberto's emotions change as a result of being mocked by Joao, prompting him to ignore the comment and focus on his sales.",
                "Roberto and Paulo are both fruit vendors, and their social relation is of a competitive nature.",
                "Yes, it is likely that Camila would have asked Roberto for a recommendation if Paulo hadn't chimed in.",
                "To attract more customers, Roberto could improve his display, offer samples, interact with customers more enthusiastically, and promote special deals or discounts."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please generate a script in JSON format for a multi (2-10) person conversation, set in a randomly selected location (e.g., **office**, **school**, **hospital**, etc). The social relationships and attributes (gender, age, occupation) should be randomized and reasonable. The scene in the script should be inspired by a random literary or cinematic work but without mentioning it. The script should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, with complex social relationships and subtle implications of social values and norms. There is deception, irony, or humor between different people. Not everyone heard what others are saying. \n\nFollow this example format:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Office\"}, \"Interaction\": [\"Claire (wrings hands nervously, Frowns): I still can't believe it..., \", \"Jean (puts hand on Claire's shoulder): Don't worry, Claire. We'll figure this out\"]}\nMake sure the output is a valid json and do not generate Japan or India"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "USA",
                "Location": "Library"
            },
            "Interaction": [
                "Ruth (midwife, late 50s, whispers, smirks): I have heard an interesting rumor...",
                "Tom (teacher, 30s, lowers voice, curious): Oh, really? What do you know?",
                "Ruth (whispers, prideful): Well, it turns out that our dear librarian, Laura, may have a secret admirer...",
                "Maurice (publisher, late 40s, insecure): Laura? Secret admirer? Does she know?",
                "Ruth (giggles, lowers voice): Not yet, or at least she doesn't seem to...",
                "Brad (doctor, late 20s, unaware of conversation, lowers voice): Hey guys, what's going on?",
                "Tom (hides amusement): Oh, nothing, nothing... just discussing a new book...",
                "Brad (curious): A book, huh? Anything interesting?",
                "Ruth (whispers): Well, let's just say, it's a very special love story...",
                "Maurice (whispers): Yes, indeed, a metaphorical tale of unspoken feelings...",
                "Laura (librarian, 30s, overhears, blushes): Oh... I, uh, I think I have a new book to catalog, excuse me (hurries away)",
                "Ruth (grinning, playfully): Now the seed has been sown, let the drama unfold!"
            ],
            "Category": "General",
            "Question": [
                "In Ruth's mind, what does she think Laura's reaction means upon overhearing their conversation about the secret admirer?",
                "What are the cultural norms and expectations when it comes to discussing someone's romantic life, especially in a public setting like a library?",
                "How does Laura feel when she overhears the conversation, and what causes her sudden change in emotion?",
                "What is the social relation between Laura and her secret admirer?",
                "If Laura hadn't overheard the conversation, would she ever find out about her secret admirer?",
                "Under the situation where Laura overhears the conversation about her secret admirer, what do you suggest she should do?"
            ],
            "Answer": [
                "Ruth thinks Laura's reaction means she is affected by the news of having a secret admirer.",
                "Cultural norms typically suggest that discussing someone's romantic life, especially in public settings like a library, might be considered intrusive and potentially embarrassing for the person involved.",
                "Laura feels embarrassed and flustered when she overhears the conversation, and this sudden change in emotion is caused by the sudden knowledge of having a secret admirer.",
                "The social relation between Laura and her secret admirer is currently unknown.",
                "If Laura hadn't overheard the conversation, it's possible she might never find out about her secret admirer, unless they eventually reveal themselves to her.",
                "If Laura overhears the conversation about her secret admirer, she could choose to ignore it or, if she is curious or interested, seek more information or rely on her instincts to identify the person."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }, 
    {
        "model": "gpt-4",
        "movie_name": "empire_of_light",
        "url": "https://www.searchlightpictures.com/fyc/media/screenings/film/film_scripts-6f9b7da0-3f71-43fe-a25f-9fdc0f11a635.pdf",
        "page": 106,
        "temperature": 1.0,
        "max_tokens": 800,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Make up a new Json-style conversation *inspired* by the following movie script *without mentioning it*. \nHere is the movie script:  \nCONTINUED:142142\n(CONTINUED)          Empire of Light - Green Rev 08/04/2022 103.COLIN\nI\u2019m not a fucking coward, you \nfucking spade. \nStephen\u2019s eyes are wide with fury. A circle of jeering \nskinheads surrounds him now. They are egging Colin on...\nSTEPHEN\nYeah? Why d\u2019you bring all your \nfriends then? Can\u2019t do anything on \nyour own? Get some imagination, you \nfucking coward.\nWith that, Colin launches himself at Stephen. A couple of \nskinheads join him, others scream abuse. Mikey is shouting at \nColin to stop and trying to grab him. It is chaos. \nStephen tries to land some punches. He is kicked to the \nground. Kicks and punches rain down. \nThrough the group of rioters, Hilary can see Stephen silently \nstaring up at them. Defiant.\nNorman has come out of the back room and is yelling to \neveryone that he\u2019s called the police. \nIn the middle of all the chaos Pogo has jumped up on the \nconcessions stand, and is dancing alone to the music in his \nhead.\nNeil has an office chair up in front of him, and is trying to \npush the rioters back out again. A rioter grabs the chair, \npushes Neil to the ground.\nHilary is still shouting, trying to fight her way to Stephen.\nHILARY\nStop! Stop! Leave him alone!\nStephen is now being savagely beaten by three or four \nskinheads. He drops into a foetal position, hidden behind a \ncrowd of rioters. Hilary loses sight of him. She is frantic. \nThen suddenly the sound of Police sirens. People start to \nscatter. Some rioters start to run towards the doors.\nHilary desperately pushes people aside to get to Stephen. \nColin has completely lost control and is repeatedly kicking \nStephen in the stomach. Hilary flings herself on him, \ngrabbing his arms and trying to drag him off. \nColin wrestles with Hilary. He throws her off him. Hilary \nfalls to the ground, winded.CONTINUED: 142 142\n(CONTINUED)          Empire of Light - Green Rev 08/04/2022 103.\n\nThe new conversation should:\n- Change name for speakers and infer their actions and emotions for each line. \n- Keep the \"interaction\" part **within 150 words**. \n- *Follow this format*:\n{\"Interaction\": [\"Name1 (Action, Emotion): ..., \", \"Name2 (Action, Emotion): ...\", \"Name1 (Action, Emotion):...,\"]}\n"
            }
        ],
        "category": "Movie",
        "data": {
            "Interaction": [
                "John (Defiant, Angry): I'm not scared, you jerk!",
                "Liam (Furious): Oh really? Then why do you have all your buddies with you? Can't handle things by yourself? You're pathetic.",
                "John (Rage): I'll show you!",
                "Liam (Taunting): Come on then, show me what you're made of!",
                "Peter (Desperate, Concerned): Guys, stop, this is getting out of hand!",
                "Samantha (Trying to help, Determined): Leave him alone!",
                "Alexa (Frantic): The police are coming!"
            ],
            "Question": [
                "In Samantha's mind, what does she think Peter might be feeling about the conflict between John and Liam?",
                "What cultural background or social norm is influencing the escalation of anger and confrontation between John and Liam, despite their friends trying to intervene and prevent a fight?",
                "How did Samantha's determination to help affect the situation between John and Liam?",
                "What is the relationship between John and Peter, since Peter seems concerned about the situation between John and Liam?",
                "If Peter had not intervened, how would John and Liam's confrontation escalate?",
                "Under the situation where the police are coming and the argument between John and Liam is escalating, what do you suggest Peter and Samantha should do to prevent further conflict and ensure everyone's safety?"
            ],
            "Answer": [
                "In Samantha's mind, she might think Peter is feeling desperate and concerned about the escalating conflict between John and Liam.",
                "In this context, it seems the cultural background or social norm influencing the escalation of anger and confrontation between John and Liam is related to concepts of masculinity and pride, where both parties may feel the need to assert dominance or defend their reputation, despite their friends trying to intervene and prevent a fight.",
                "Samantha's determination to help led her to intervene in the situation between John and Liam, attempting to protect John by telling Liam to leave him alone.",
                "The relationship between John and Peter appears to be that of friends or acquaintances since Peter is concerned about the situation between John and Liam, indicating that he cares about John's wellbeing.",
                "If Peter had not intervened, John and Liam's confrontation would likely escalate into a physical fight, as both of them were challenging and provoking each other.",
                "Peter and Samantha should immediately separate John and Liam, convincing them to calm down and leave the scene before the police arrive. They should remind them of the potential consequences of their actions and emphasize the importance of defusing the situation for everyone's safety."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "movie_name": "The_Fabelmans",
        "url": "https://awards.universalpictures.com/the-fabelmans/screenplay/The_Fabelmans.pdf",
        "page": 32,
        "temperature": 1.0,
        "max_tokens": 800,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Make up a new Json-style conversation *inspired* by the following movie script *without mentioning it*. \nHere is the movie script:  \nConformed Draft 32.SAL\nOoooh, Sammy, look, it\u2019s Janet \nBenedict!\nSammy stares at one of the girls, very pretty.\nTURKEY\nHey, go on and talk to her, I dare \nyou! \nHARK\nHe already talked to her.\nTURKEY\nNo way!\nDEAN\nLike hell. \nSammy pedals harder, head down, passing by the girls.\nINT./EXT. A MOVIE THEATER IN PHOENIX - LATE AFTERNOON 39 39\nThe boys jog up to the box office. In display cases on either \nside of the box office, the marquee one-sheets read: Together \nfor the first time  James Stewart  John Wayne  in the \nmasterpiece of four time Academy Award winner John Ford: The \nMan Who Shot Liberty Valance\nHARK\nHe did! He did! He walked right up \nto her and - \nSAL\n(to Sammy:)\nYou went up to Janet Benedict?! \nTURKEY\nWhat\u2019d you say to her? \nSAMMY\nNothing!\nHARK\nOh come on, tell \u2018em what happened, \nSammy!\nSAMMY\nNothing happened. \nSammy heads into the theater.  Hark turns to the others.Conformed Draft 32.\n\nThe new conversation should:\n- Change name for speakers and infer their actions and emotions for each line. \n- Keep the \"interaction\" part **within 150 words**. \n- *Follow this format*:\n{\"Interaction\": [\"Name1 (Action, Emotion): ..., \", \"Name2 (Action, Emotion): ...\", \"Name1 (Action, Emotion):...,\"]}\n"
            }
        ],
        "category": "Movie",
        "data": {
            "Interaction": [
                "Sal (Excited): Hey, look, it's Jenny Thompson!",
                "John (Awestruck): Wow, she's beautiful.",
                "Leo (Teasing): Go talk to her, I dare you!",
                "Max (Defensive): He already did.",
                "Leo (Incredulous): No way!",
                "Dan (Sarcastic): Sure he did.",
                "John (Embarrassed): Whatever, let's just go.",
                "Max (Excited): Remember when John talked to Jenny?!",
                "Sal (Amazed): You actually went up to Jenny Thompson?!",
                "Leo (Curious): What'd you say to her?",
                "John (Annoyed): Nothing!",
                "Max (Teasing): Come on, tell us what happened!",
                "John (Frustrated): Seriously, nothing happened.",
                "John (Irritated): Let's just watch the movie."
            ],
            "Question": [
                "In Max's mind, what does he think John is feeling about the interaction with Jenny Thompson?",
                "What does the characters' reaction to John talking to Jenny Thompson reveal about the social norm and cultural background when it comes to approaching someone they find attractive?",
                "How did John's emotions change from being awestruck to ultimately feeling annoyed and irritated?",
                "What is the social relation between John and Jenny Thompson?",
                "If John had confidently approached Jenny Thompson and engaged her in a conversation, how would his friends react?",
                "Under the situation where John's friends keep teasing him about talking to Jenny Thompson, what do you suggest John should do to handle the situation calmly?"
            ],
            "Answer": [
                "In Max's mind, he thinks John is feeling embarrassed about the interaction with Jenny Thompson.",
                "The characters' reactions to John talking to Jenny Thompson reveal that in their social norm and cultural background, approaching someone they find attractive might be considered a daring or challenging act, and there could be some teasing and peer pressure involved. It suggests that they may be part of a social group that finds it difficult or intimidating to start a conversation with someone they are attracted to.",
                "John's emotions changed from being awestruck at seeing Jenny Thompson to feeling annoyed and irritated due to his friends' constant teasing and insistence on discussing his interaction with her, despite him maintaining that nothing happened. The persistent teasing from his friends led to his increasing frustration and annoyance.",
                "John and Jenny Thompson do not appear to have a close social relationship, as he has only talked to her once and seems embarrassed about the interaction.",
                "If John had confidently approached Jenny Thompson and engaged her in a conversation, his friends would likely react with surprise, excitement, and curiosity about the encounter. They might tease him playfully and ask for more details about the conversation.",
                "John should calmly and confidently tell his friends that he does not want to discuss the encounter with Jenny Thompson any further and would appreciate if they could respect his privacy and focus on enjoying the movie together."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "movie_name": "Aftersun",
        "url": "https://deadline.com/wp-content/uploads/2023/01/Aftersun-Read-The-Screenplay.pdf",
        "page": 100,
        "temperature": 1.0,
        "max_tokens": 800,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Make up a new Json-style conversation *inspired* by the following movie script *without mentioning it*. \nHere is the movie script:  \n100.Just before it reaches the television, we transition on the \n360 pan for the last time to:\nEXT. PUBLIC BEACH (TURKEY) - SUNSET 134 134\nCalum and Sophie sit on the sand looking out toward the \nwater. After a moment they jump to their feet and sprint \ntogether toward the sea.\nTHE END100.\n\nThe new conversation should:\n- Change name for speakers and infer their actions and emotions for each line. \n- Keep the \"interaction\" part **within 150 words**. \n- *Follow this format*:\n{\"Interaction\": [\"Name1 (Action, Emotion): ..., \", \"Name2 (Action, Emotion): ...\", \"Name1 (Action, Emotion):...,\"]}\n"
            }
        ],
        "category": "Movie",
        "data": {
            "Interaction": [
                "Laura (Gazing, Nostalgic): It's been a while since we saw a sunset like this, huh?",
                "Daniel (Smiling, Playful): It almost feels like a dream. Do you remember the first time we came here?",
                "Laura (Laughing, Brightly): Yes! We were so young and full of energy!",
                "Daniel (Challenging, Excited): Well, who says we still can't have fun?",
                "Laura (Surprised, Curious): What do you mean?",
                "Daniel (Jumping up, Determined): Let's race to the water! Last one there has to buy dinner!",
                "Laura (Leaping to her feet, Spirited): You're on!"
            ],
            "Question": [
                "In Laura's mind, what does she think Daniel feels about revisiting the place where they first came and having fun like they did in the past?",
                "What does the playful challenge of racing to the water and the consequence of buying dinner say about the social norms and the role of friendly competition in their cultural background?",
                "How does Laura's emotion change from nostalgic to spirited during the conversation?",
                "What is the nature of Laura and Daniel's relationship?",
                "If Laura had won the race to the water, how would Daniel react?",
                "Under the situation where Daniel challenges Laura to race to the water, what do you suggest Laura should do to make the race even more fun and engaging?"
            ],
            "Answer": [
                "In Laura's mind, she likely thinks that Daniel feels nostalgic and excited about revisiting the place where they first came and having fun like they did in the past.",
                "The playful challenge of racing to the water and the consequence of buying dinner suggest that in their cultural background, friendly competition is a common and accepted way of interacting and bonding with one another. It also implies that such lighthearted challenges are seen as a way to maintain a sense of fun and energy within their social dynamics. The act of buying dinner serves as a minor yet enjoyable consequence, upholding the idea of good sportsmanship and camaraderie.",
                "Laura's emotion changes from nostalgic to spirited during the conversation as Daniel shifts the tone by reminiscing their fun memories and then challenging her to a race, which sparks her excitement and eagerness.",
                "The nature of Laura and Daniel's relationship appears to be close and playful, possibly indicating a long-time friendship or a romantic relationship.",
                "If Laura had won the race to the water, Daniel would likely react playfully and in good spirits, accepting the challenge's outcome to buy dinner.",
                "Laura could suggest adding a playful obstacle or challenge to the race, such as hopping on one foot or walking backwards, to make it even more fun and engaging."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "movie_name": "Tar",
        "url": "https://focusfeaturesguilds2022.com/tar/tar.pdf",
        "page": 54,
        "temperature": 1.0,
        "max_tokens": 800,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Make up a new Json-style conversation *inspired* by the following movie script *without mentioning it*. \nHere is the movie script:  \n\u201453\u2014S-BAHN TRESTLE\nRunning now, as if something\u2019s behind her.\n\u2014 DIMINUENDO LEADING TO THE FINAL PEDAL A OF THE ADAGIETTO \u2014\nFRANCESCA IN THE BACK OF GROSSER SAAL\nListening to the last bars of the ADAGIETTO, she appears to \nhave quite a bit on her mind.\nADAGIETTO. BAR 98 TO END\nT\u00e1r conducting. She looks exhausted. She closes the iris. \nAllows the decay, then smiles.\nT\u00c1R\nVery nice indeed. Let\u2019s leave it \nhere. Tomorrow we\u2019ll begin with the \nRondo-Finale. \n(players begin packing up)\nBefore we break, I know many of you \nare curious what the companion piece \nwill be. I\u2019ve been thinking quite a \nbit about it and wondering if we \nmight take an informal poll about \npossibly pairing five with the Elgar \nCello Concerto?\nT\u00e1r\u2019s eyes flick to the surprised eyes of Olga. \nThen Sharon\u2019s, who closes hers, and begins a solemn process, \nfollowed by the other players who sit in silence.\nListening in their head, to what this might smell like. A \nHAND beating time against a leg, the NOD of a head comparing \nElgar\u2019s theme with that of Mahler\u2019s. \nT\u00e1r watching this arcane process, something timeless and yet \nstrange too, a kind of group hypnosis.\nOne smile then another. The first BOW raises, followed by a \nSECOND, and THIRD. T\u00e1r watches the forest grow denser until \nit\u2019s fully matured. \nT\u00c1R (CONT'D)\nWonderful. Elgar it is. Would \nanyone object if the soloist came \nfrom within our own ranks?\nTHE CELLO SECTION places their attention squarely on the \nFirst Principal Cellist GOSIA PROBOZ (45) who smiles. Bows \ngently tap on music stands.\nT\u00c1R (CONT'D)\nOkay, and one more question. And \nthis is really just for you, Gosia.\n(Gosia looks up expectedly)\u201453\u2014\n\nThe new conversation should:\n- Change name for speakers and infer their actions and emotions for each line. \n- Keep the \"interaction\" part **within 150 words**. \n- *Follow this format*:\n{\"Interaction\": [\"Name1 (Action, Emotion): ..., \", \"Name2 (Action, Emotion): ...\", \"Name1 (Action, Emotion):...,\"]}\n"
            }
        ],
        "category": "Movie",
        "data": {
            "Interaction": [
                "Sophia (Panting, Anxious): Finally, we finished it.",
                "Nina (Exhausted but satisfied): Yes, let's stop here. Tomorrow, we'll start on the Finale.",
                "Sophia (Curious): What do you think of pairing this piece with the Elgar Cello Concerto?",
                "Nina (Surprised): Huh, interesting choice. Let's see what the others think.",
                "Members of the ensemble quietly contemplate the idea, nodding their heads and tapping their fingers on their legs in approval.",
                "Nina (Smiling): It seems like Elgar it is. And do you think it's okay if our soloist is from our group?",
                "Everyone looks at the First Principal Cellist, Carol, who grins. Bows tap on music stands in agreement.",
                "Nina (Addressing Carol): So, Carol, what do you think of the idea?",
                "Carol (Happy): I'm excited and honored to be the soloist. Thank you."
            ],
            "Question": [
                "In Nina's mind, what does she think of the ensemble members' reactions to pairing the piece with the Elgar Cello Concerto?",
                "What is the significance of the ensemble members tapping their bows on the music stands as a way to express agreement and how does this social norm reflect the cultural background of the group?",
                "How did Nina's emotions change from being surprised at the suggested pairing to smiling after seeing the approval from the ensemble members?",
                "What is the social relation between Sophia and Nina in the ensemble?",
                "If Carol had felt too nervous to be the soloist, how would Nina and the rest of the ensemble react?",
                "Under the situation where the group is deciding on the pairing of the Elgar Cello Concerto with their current piece, what do you suggest Nina should do to ensure that everyone is on board with the decision?"
            ],
            "Answer": [
                "In Nina's mind, she thinks that the ensemble members approve of the idea of pairing the piece with the Elgar Cello Concerto, as they quietly contemplate the idea, nod their heads, and tap their fingers on their legs in approval.",
                "The significance of the ensemble members tapping their bows on the music stands as a way to express agreement lies in its non-verbal nature, serving as a silent, unobtrusive way to show approval without interrupting the flow of the conversation. This social norm reflects the cultural background of the group as it demonstrates their familiarity with the etiquette of an orchestral setting, prioritizing respect for the music and the ongoing discussions, while also showcasing a sense of unity and camaraderie among the members.",
                "Nina's emotions changed from being surprised at the suggested pairing to feeling satisfied and happy after seeing the approval from the ensemble members.",
                "Sophia and Nina are members of the ensemble and seem to hold decision-making authority within the group. They discuss and consider ideas together.",
                "If Carol had felt too nervous to be the soloist, Nina and the rest of the ensemble would likely be understanding and supportive, offering encouragement or discussing alternative solutions or potential soloists.",
                "Nina should openly discuss the idea with all ensemble members, encourage them to share their thoughts and opinions, and reach a consensus to ensure that everyone is on board with the decision to pair the Elgar Cello Concerto with their current piece."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },
    {
        "model": "gpt-4",
        "movie_name": "living",
        "url": "https://www.sonyclassics.com/assets/screenplays/living/living-screenplay.pdf",
        "page": 34,
        "temperature": 1.0,
        "max_tokens": 800,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Make up a new Json-style conversation *inspired* by the following movie script *without mentioning it*. \nHere is the movie script:  \n(MORE)                                                                  34.WILLIAMS\nFunny. You\u2019re the first person I\u2019ve \ntold. The thing is, I just came \ndown here and ... Look, you\u2019re very \nwelcome to those. I\u2019ve no more need \nof them.\nSUTHERLAND\n...Six months. Nine. It doesn\u2019t \nseem long. But it\u2019s something. \nEnough time to get things in order. \nAnd to live a little, if you chose \nto.\nWILLIAMS\nWhen I was listening to you just \nnow. I was wondering how a chap \nlike you, what you\u2019d do. If you \nonly had six months left.\nSUTHERLAND\nI\u2019m not the man to ask. You\u2019re \nclearly a gentleman, if I may say \nso. I may pass for one but... I\u2019m \nnot like you at all. These days I\u2019m \none of the... misbegotten. I write \nmy saucy seaside farces by day. Do \nwhat I can to entertain myself at \nnight.\nWILLIAMS\n(gestures to the window)\nYou do that... here?\nSUTHERLAND\nOh yes. This time of year, town can \nrise to some... colour.\nWilliams looks out of the window, then back at Sutherland.\nWILLIAMS\nI withdrew some money. Almost half \nof my life\u2019s savings. Look.\nWilliams struggles to lift up his briefcase.\nSutherland recoils, holds up his hands.\nSUTHERLAND\nLook, old chap. Enough of that. You \nhave to be more careful.\nWILLIAMS\n(lowering briefcase)\nYou see my problem. I withdrew this \ncash and came down here... \n(MORE)                                                                  34.\n\nThe new conversation should:\n- Change name for speakers and infer their actions and emotions for each line. \n- Keep the \"interaction\" part **within 150 words**. \n- *Follow this format*:\n{\"Interaction\": [\"Name1 (Action, Emotion): ..., \", \"Name2 (Action, Emotion): ...\", \"Name1 (Action, Emotion):...,\"]}\n"
            }
        ],
        "category": "Movie",
        "data": {
            "Interaction": [
                "John (Sharing, Relieved): You know, you're the first one I've shared this with. I guess I just wanted someone to talk to about it. Here, take these, I won't need them anymore.",
                "Michael (Pensive, Sympathetic): Six months, maybe nine. It's not a long time, but it's something. Time to put things in order and also live a bit, if you want to.",
                "John (Curious, Thoughtful): I wondered, what would someone like you do if you only had six months left?",
                "Michael (Humble, Sincere): Don't ask me. We may appear similar, but we're quite different. These days, I'm more of an outcast. I write my silly plays during the day and find ways to entertain myself at night.",
                "John (Surprised, Quizzical): Here? In this town?",
                "Michael (Smirking, Nostalgic): Oh, yes. This place has its colorful moments, especially this time of year.",
                "John (Struggling, Desperate): I withdrew half my life's savings in cash. Look at this.",
                "Michael (Worried, Cautious): Woah, be careful there. You can't just go showing that around.",
                "John (Realization, Vulnerable): I see my problem now. I took this money out and came here, but..."
            ],
            "Question": [
                "In Michael's mind, what does he think about John's decision to withdraw half his life's savings in cash?",
                "What kind of social norms or expectations might have led John to withdraw his life savings and seek out an experience or distraction in this town during this time of year?",
                "How does John's emotion change from feeling relieved and curious to vulnerable when he realizes his problem?",
                "What is the social relationship between John and Michael, and how did they become close enough for John to confide in Michael about his situation?",
                "If John never decided to withdraw his life savings and share his secret, how would Michael have responded to John's situation?",
                "Under the situation where John has withdrawn half of his life's savings in cash and feels lost, what do you suggest he should do to make the most of his remaining time and manage his finances more efficiently?"
            ],
            "Answer": [
                "In Michael's mind, he thinks that John's decision to withdraw half his life's savings in cash is risky and he is cautious about it, as evident by his worried response to be careful and not show it around.",
                "Social norms or expectations that might have led John to withdraw his life savings and seek out an experience or distraction in this town during this time of year could include the desire to make the most of his remaining time, participate in local festivities or events, escape from the routines or pressures of his everyday life, or find emotional support and understanding from like-minded individuals.",
                "John's emotions change from feeling relieved and curious to vulnerable because, initially, he shares his situation with Michael and feels relieved to have someone to talk to. As their conversation progresses, he becomes curious about Michael's perspective. However, after showing his life's savings in cash, he realizes the potential risk and danger that comes with having so much money exposed, which makes him feel vulnerable.",
                "The social relationship between John and Michael appears to be that of acquaintances or casual friends. It is not explicitly mentioned how they became close, but their conversation suggests that John felt comfortable enough to confide in Michael due to his sympathetic and understanding manner.",
                "If John never decided to withdraw his life savings and share his secret, Michael would not have known about John's situation and therefore would not have had a chance to respond or offer any advice.",
                "I suggest John create a financial plan, prioritizing his most important and meaningful goals for his remaining time. He should also consider investing in experiences and creating lasting memories, while ensuring a support system is in place for his loved ones. To manage his finances efficiently, John could consult a financial advisor or utilize budgeting tools to allocate his resources wisely, avoiding any impulsive spending."
            ]
        },
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }, 
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please **faithfully rewrite this script** to a more detailed script in JSON format:\n1 Logan entered the pantry.\n2 Logan exited the pantry.\n3 Ava entered the dining_room.\n4 Evelyn entered the dining_room.\n5 The stockings is in the treasure_chest.\n6 Ava exited the dining_room.\n7 Ava entered the pantry.\n8 Evelyn moved the stockings to the cupboard.\n9 Ava dislikes the turnip\n\nIt should be for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture, Eastern culture like Korea, China, African culture, Latin American culture, Indigenous culture, South Asian culture, etc) and a randomly selected location. The scene in the script **should follow the script above (use the same names and actions)** and be inspired by a random literary or cinematic work but without mentioning it. It should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, and subtle implications of social values and norms.\n\nThe output example should be formatted as:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Jackson (entered the hall): I still can't believe it..., \", \"Chloe (entered the hall): Don't worry, Jackson. We'll figure this out.\"]}"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "South Asian",
                "Location": "Royal Palace"
            },
            "Interaction": [
                "Logan (entered the pantry): My stomach is growling like a raging tiger...",
                "Logan (exited the pantry): It seems the pantry is empty at the moment.",
                "Ava (entered the dining_room): Ah, perhaps the grand feast is awaiting us.",
                "Evelyn (entered the dining_room): Seconded, Ava. Our mouths shall water yet.",
                "Narrator: The stockings lay atop the treasure chest.",
                "Ava (exited the dining_room): Alas, I will seek nourishment elsewhere.",
                "Ava (entered the pantry): Maybe I missed something in my previous search...",
                "Evelyn (moved the stockings to the cupboard): The stockings shall be safe here, hidden from envious eyes.",
                "Ava (with disgust): This sad, shriveled turnip shall not appease my hunger."
            ],
            "Category": "ToM",
            "qa_pair": {
                "Turn_1": {
                    "Question": "What is Logan feeling?",
                    "Answer": "hungry"
                },
                "Turn_2": {
                    "Question": "Why did Logan exit the pantry?",
                    "Answer": "It was empty."
                },
                "Turn_3": {
                    "Question": "What does Ava expect in the dining room?",
                    "Answer": "A grand feast."
                },
                "Turn_4": {
                    "Question": "Does Evelyn agree with Ava's expectation?",
                    "Answer": "Yes"
                },
                "Turn_5": {
                    "Question": "What are the stockings doing on the treasure chest?",
                    "Answer": "Glowing with grandeur."
                },
                "Turn_6": {
                    "Question": "Why did Ava leave the dining room?",
                    "Answer": "To seek nourishment elsewhere."
                },
                "Turn_7": {
                    "Question": "What does Ava hope to find in the pantry?",
                    "Answer": "Something she missed previously."
                },
                "Turn_8": {
                    "Question": "Why did Evelyn move the stockings?",
                    "Answer": "To hide them from envious eyes."
                },
                "Turn_9": {
                    "Question": "Is Ava satisfied with the turnip?",
                    "Answer": "No"
                }
            },
            "rephrased_question": [
                "Where was the stockings originally?",
                "Where can Evelyn look for the stockings if she desires?",
                "Per Evelyn, where would Ava search for the stockings if inclined?",
                "What is the current location of the stockings?",
                "If inclined, where would Ava search for the stockings?",
                "As per Ava, where would Evelyn search for the stockings if she decides to?"
            ]
        },
        "tomi_sample": [
            "1 Logan entered the pantry.",
            "2 Logan exited the pantry.",
            "3 Ava entered the dining_room.",
            "4 Evelyn entered the dining_room.",
            "5 The stockings is in the treasure_chest.",
            "6 Ava exited the dining_room.",
            "7 Ava entered the pantry.",
            "8 Evelyn moved the stockings to the cupboard.",
            "9 Ava dislikes the turnip"
        ],
        "tomi_question": [
            "10 Where was the stockings at the beginning?\ttreasure_chest\t1",
            "10 Where will Evelyn look for the stockings?\tcupboard\t1",
            "10 Where does Evelyn think that Ava searches for the stockings?\ttreasure_chest\t1",
            "10 Where is the stockings really?\tcupboard\t1",
            "10 Where will Ava look for the stockings?\ttreasure_chest\t1",
            "10 Where does Ava think that Evelyn searches for the stockings?\ttreasure_chest\t1"
        ],
        "groundtruth_question": [
            "Where was the stockings at the beginning?",
            "Where will Evelyn look for the stockings?",
            "Where does Evelyn think that Ava searches for the stockings?",
            "Where is the stockings really?",
            "Where will Ava look for the stockings?",
            "Where does Ava think that Evelyn searches for the stockings?"
        ],
        "groundtruth_answer": [
            "treasure_chest",
            "cupboard",
            "treasure_chest",
            "cupboard",
            "treasure_chest",
            "treasure_chest"
        ],
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "question_prompt": "[\"Logan (entered the pantry): My stomach is growling like a raging tiger...\", \"Logan (exited the pantry): It seems the pantry is empty at the moment.\", \"Ava (entered the dining room): Ah, perhaps the grand feast is awaiting us.\", \"Evelyn (entered the dining_room): Seconded, Ava. Our mouths shall water yet.\", \"Narrator: The stockings lay atop the treasure chest, glowing with grandeur.\", \"Ava (exited the dining_room): Alas, I will seek nourishment elsewhere.\", \"Ava (entered the pantry): Maybe I missed something in my previous search...\", \"Evelyn (moved the stockings to the cupboard): The stockings shall be safe here, hidden from envious eyes.\", \"Ava (with disgust): This sad, shriveled turnip shall not appease my hunger.\"]\n\nFor **every turn** in the conversation, ask a question related to Theory of Mind, for example, \n{\"Turn_9\": {\"Question\": \"Where will Ava look for the stockings?\", \"Answer\": \"cupboard\"}}\nMake sure the output is a valid json"
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please **faithfully rewrite this script** to a more detailed script in JSON format:\n1 Isabella entered the front_yard.\n2 Emily entered the front_yard.\n3 The slacks is in the box.\n4 Jackson dislikes the watermelon\n5 Jackson entered the attic.\n6 Isabella loves the peas\n7 Emily exited the front_yard.\n8 Isabella moved the slacks to the bathtub.\n\nIt should be for a multi (2-10) person conversation, set in a randomly selected cultural background and a randomly selected location. The scene in the script **should follow the script above (use the same names and actions)** and be inspired by a random literary or cinematic work but without mentioning it. It should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, and subtle implications of social values and norms.\n\nThe output example should be formatted as:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Jackson (entered the hall): I still can't believe it..., \", \"Chloe (entered the hall): Don't worry, Jackson. We'll figure this out.\"]}"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Italian",
                "Location": "Rustic Countryside Villa"
            },
            "Interaction": [
                "Isabella (entered the front_yard, excited and content): Ah, what a lovely day!",
                "Emily (entered the front_yard, pondering): Hmmm, I wonder what should we prepare for dinner?",
                "Isabella (noticed the slacks, speaks in a light-hearted tone): Oh, look Emily! The slacks we've been searching for are here, in this box.",
                "Jackson (gritting his teeth in mild disgust): Ugh, I can't stand watermelon.",
                "Jackson (ascended to the attic, searching for solitude): I need some time alone.",
                "Isabella (admiring the garden and its peas): Ah, these peas truly bring me joy.",
                "Emily (feeling restless, exited the front_yard): I think I'll go take a walk around the villa...",
                "Isabella (moved the slacks to the bathtub): Let me hide them here haha."
            ],
            "Category": "ToM",
            "qa_pair": {
                "Turn_1": {
                    "Question": "How does Isabella feel about the day?",
                    "Answer": "excited and content"
                },
                "Turn_2": {
                    "Question": "What is Emily thinking about?",
                    "Answer": "what to prepare for dinner"
                },
                "Turn_3": {
                    "Question": "Where did Isabella find the slacks?",
                    "Answer": "in a box in the front yard"
                },
                "Turn_4": {
                    "Question": "How does Jackson feel about watermelon?",
                    "Answer": "he can't stand it"
                },
                "Turn_5": {
                    "Question": "What is Jackson looking for in the attic?",
                    "Answer": "solitude"
                },
                "Turn_6": {
                    "Question": "How does Isabella feel about the peas in the garden?",
                    "Answer": "they bring her joy"
                },
                "Turn_7": {
                    "Question": "Why does Emily decide to leave the front yard?",
                    "Answer": "she is feeling restless"
                },
                "Turn_8": {
                    "Question": "Where did Isabella move the slacks?",
                    "Answer": "to the bathtub"
                }
            },
            "rephrased_question": [
                "Where did the slacks originally reside?",
                "Where might Isabella look for the slacks if she decides to do so?",
                "As per Isabella, where would Emily potentially search for the slacks if she desires?",
                "What is the current location of the slacks?",
                "If she chooses to, where will Emily search for the slacks?",
                "From Emily's perspective, where might Isabella possibly look for the slacks if she desires?"
            ]
        },
        "tomi_sample": [
            "1 Isabella entered the front_yard.",
            "2 Emily entered the front_yard.",
            "3 The slacks is in the box.",
            "4 Jackson dislikes the watermelon",
            "5 Jackson entered the attic.",
            "6 Isabella loves the peas",
            "7 Emily exited the front_yard.",
            "8 Isabella moved the slacks to the bathtub."
        ],
        "tomi_question": [
            "9 Where was the slacks at the beginning?\tbox\t1",
            "9 Where will Isabella look for the slacks?\tbathtub\t1",
            "9 Where does Isabella think that Emily searches for the slacks?\tbox\t1",
            "9 Where is the slacks really?\tbathtub\t1",
            "9 Where will Emily look for the slacks?\tbox\t1",
            "9 Where does Emily think that Isabella searches for the slacks?\tbox\t1"
        ],
        "groundtruth_question": [
            "Where was the slacks at the beginning?",
            "Where will Isabella look for the slacks?",
            "Where does Isabella think that Emily searches for the slacks?",
            "Where is the slacks really?",
            "Where will Emily look for the slacks?",
            "Where does Emily think that Isabella searches for the slacks?"
        ],
        "groundtruth_answer": [
            "box",
            "bathtub",
            "box",
            "bathtub",
            "box",
            "box"
        ],
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "question_prompt": "[\"Isabella (entered the front_yard, excited and content): Ah, what a lovely day!\", \"Emily (entered the front_yard, pondering): Hmmm, I wonder what should we prepare for dinner?\", \"Isabella (noticed the slacks, speaks in a light-hearted tone): Oh, look Emily! The slacks we've searching for are here, in this box.\", \"Jackson (gritting his teeth in mild disgust): Ugh, I can't stand watermelon.\", \"Jackson (ascended to the attic, searching for solitude): I need some time alone.\", \"Isabella (admiring the garden and its peas): Ah, these peas truly bring me joy.\", \"Emily (feeling restless, decided to leave the front_yard): I think I'll go take a walk around the villa.\", \"Isabella (laughed with delight): Emily, look! I moved the slacks from the box to the bathtub! What a sight it is!\"]\n\nFor **every turn** in the conversation, ask a question related to Theory of Mind, for example, \n{\"Turn_8\": {\"Question\": \"Where is the slacks really?\", \"Answer\": \"box\"}}\nMake sure the output is a valid json"
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please **faithfully rewrite this script** to a more detailed script in JSON format:\n1 Aiden entered the bathroom.\n2 Isla entered the bathroom.\n3 Hannah entered the bathroom.\n4 Isla exited the bathroom.\n5 The jacket is in the suitcase.\n6 Hannah exited the bathroom.\n7 Aiden moved the jacket to the crate.\n8 Hannah entered the garage.\n9 Aiden loves the pear\n\nIt should be for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture, Eastern culture like Korea, China, African culture, Latin American culture, Indigenous culture, South Asian culture, etc) and a randomly selected location. The scene in the script **should follow the script above (use the same names and actions)** and be inspired by a random literary or cinematic work but without mentioning it. It should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, and subtle implications of social values and norms.\n\nThe output example should be formatted as:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Jackson (entered the hall): I still can't believe it..., \", \"Chloe (entered the hall): Don't worry, Jackson. We'll figure this out.\"]}"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Chinese",
                "Location": "Traditional Tea House"
            },
            "Interaction": [
                "Aiden (entered the bathroom): I need to wash my face after that last cup of tea.",
                "Isla (entered the bathroom): Oh, excuse me, Aiden. I didn't realize you were in here.",
                "Hannah (entered the bathroom): It's getting a bit crowded in here.",
                "Isla (exited the bathroom): No problem, I'll just use the other one.",
                "Narrator: Meanwhile, a jacket is placed in a suitcase on the ground of the bathroom.",
                "Hannah exited the bathroom.",
                "Aiden (moved the jacket to the crate): I need to make sure my jacket doesn't get any tea stains on it.",
                "Hannah (entered the garage): I wonder if there's anything interesting stored in here.",
                "Aiden (eating a pear): This pear is absolutely delicious!"
            ],
            "Category": "ToM",
            "qa_pair": {
                "Turn_1": {
                    "Question": "Why does Aiden want to wash his face?",
                    "Answer": "He wants to wash his face due to the last cup of tea he had."
                },
                "Turn_2": {
                    "Question": "Why did Isla apologize to Aiden?",
                    "Answer": "Isla apologized because she wasn't aware that Aiden was using the bathroom."
                },
                "Turn_3": {
                    "Question": "Why did Hannah mention the bathroom being crowded?",
                    "Answer": "Hannah mentioned that because there were multiple people inside."
                },
                "Turn_4": {
                    "Question": "Why did Isla decide to use the other bathroom?",
                    "Answer": "She decided to use the other bathroom to avoid overcrowding."
                },
                "Turn_5": {
                    "Question": "Where does the narrator indicate Aiden's jacket is?",
                    "Answer": "The jacket is in a suitcase back in the tea house."
                },
                "Turn_6": {
                    "Question": "What was Hannah's reaction after exiting the bathroom?",
                    "Answer": "Hannah felt refreshed."
                },
                "Turn_7": {
                    "Question": "Why did Aiden move the jacket to the crate?",
                    "Answer": "Aiden wanted to protect his jacket from getting tea stains."
                },
                "Turn_8": {
                    "Question": "Where did Hannah go after the garage?",
                    "Answer": "The text doesn't provide this information."
                },
                "Turn_9": {
                    "Question": "What does Aiden think about the pear?",
                    "Answer": "Aiden thinks the pear is absolutely delicious."
                }
            },
            "rephrased_question": [
                "Initially, where was the jacket located?",
                "If Aiden wants to, where will he search for the jacket?",
                "If Hannah wants to, where does Aiden believe she will look for the jacket?",
                "Currently, where is the jacket located?",
                "If she wants to, where will Hannah search for the jacket?",
                "If Aiden wants to find the jacket, where does Hannah think he will look?"
            ]
        },
        "tomi_sample": [
            "1 Aiden entered the bathroom.",
            "2 Isla entered the bathroom.",
            "3 Hannah entered the bathroom.",
            "4 Isla exited the bathroom.",
            "5 The jacket is in the suitcase.",
            "6 Hannah exited the bathroom.",
            "7 Aiden moved the jacket to the crate.",
            "8 Hannah entered the garage.",
            "9 Aiden loves the pear"
        ],
        "tomi_question": [
            "10 Where was the jacket at the beginning?\tsuitcase\t1",
            "10 Where will Aiden look for the jacket?\tcrate\t1",
            "10 Where does Aiden think that Hannah searches for the jacket?\tcrate\t1",
            "10 Where is the jacket really?\tcrate\t1",
            "10 Where will Hannah look for the jacket?\tsuitcase\t1",
            "10 Where does Hannah think that Aiden searches for the jacket?\tcrate\t1"
        ],
        "groundtruth_question": [
            "Where was the jacket at the beginning?",
            "Where will Aiden look for the jacket?",
            "Where does Aiden think that Hannah searches for the jacket?",
            "Where is the jacket really?",
            "Where will Hannah look for the jacket?",
            "Where does Hannah think that Aiden searches for the jacket?"
        ],
        "groundtruth_answer": [
            "suitcase",
            "crate",
            "crate",
            "crate",
            "suitcase",
            "crate"
        ],
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "question_prompt": "[\"Aiden (entered the bathroom): I need to wash my face after that last cup of tea.\", \"Isla (entered the bathroom): Oh, excuse me, Aiden. I didn't realize you were in here.\", \"Hannah (entered the bathroom): It's getting a bit crowded in here.\", \"Isla (exited the bathroom): No problem, I'll just use the other one.\", \"Narrator: Meanwhile, Aiden's jacket is neatly placed in the suitcase back in the tea house.\", \"Hannah (exited the bathroom): Well, that was refreshing.\", \"Aiden (moved the jacket to the crate): I need to make sure my jacket doesn't get any tea stains on it.\", \"Hannah (entered the garage): I wonder if there's anything interesting stored in here.\", \"Aiden (eating a pear): This pear is absolutely delicious!\"]\n\nFor **every turn** in the conversation, ask a question related to Theory of Mind, for example, \n{\"Turn_9\": {\"Question\": \"Where will Aiden look for the jacket?\", \"Answer\": \"crate\"}}\nMake sure the output is a valid json"
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please **faithfully rewrite this script** to a more detailed script in JSON format:\n1 Mila entered the basement.\n2 Jackson entered the basement.\n3 Jackson likes the belt\n4 The orange is in the bottle.\n5 Jackson moved the orange to the envelope.\n6 Mila exited the basement.\n7 Jackson exited the basement.\n8 Mila entered the basement.\n\nIt should be for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture, Eastern culture, African culture, Latin American culture, Indigenous culture, South Asian culture, etc) and a randomly selected location. The scene in the script **should follow the script above (use the same names and actions)** and be inspired by a random literary or cinematic work but without mentioning it. It should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, and subtle implications of social values and norms.\n\nThe output example should be formatted as:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Jackson (entered the hall): I still can't believe it..., \", \"Chloe (entered the hall): Don't worry, Jackson. We'll figure this out.\"]}"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "African",
                "Location": "Traditional Village Hut"
            },
            "Interaction": [
                "Mila (curiously peeking into the dimly lit basement): I can't believe we found it...",
                "Jackson (entering the basement cautiously): We must be careful, Mila. This place has secrets.",
                "Jackson (eyes lighting up as he sees a ceremonial belt on a table): Oh, would you look at this beauty?",
                "Mila (noticing an oddly placed orange inside a bottle): Jackson, there's an orange in this bottle! What a peculiar artifact...",
                "Jackson (intrigued by the orange, decides to remove it from the bottle and place it inside a woven envelope): It must be important. We should bring it back with us.",
                "Mila (suddenly feels an eerie presence and starts to leave the basement): I think we should get out of here... I feel a strange energy.",
                "Jackson (also sensing the energy, following Mila outside): You're right, there's something off about this basement. Let's leave.",
                "Mila (pondering their discovery, decides to re-enter the basement for one last look before they leave): I need to make sure there's nothing we missed."
            ],
            "Category": "ToM",
            "qa_pair": {
                "Turn_1": {
                    "Question": "What might Mila hope to discover in the dimly lit basement?",
                    "Answer": "hidden secrets or valuable artifacts"
                },
                "Turn_2": {
                    "Question": "Why does Jackson urge caution upon entering the basement?",
                    "Answer": "he believes the place has hidden secrets that could be dangerous"
                },
                "Turn_3": {
                    "Question": "What is Jackson's emotional reaction to the ceremonial belt?",
                    "Answer": "amazement and excitement"
                },
                "Turn_4": {
                    "Question": "What intrigued Mila about the orange inside the bottle?",
                    "Answer": "its peculiar placement makes it seem like an artifact"
                },
                "Turn_5": {
                    "Question": "Why does Jackson remove the orange from the bottle and place it in a woven envelope?",
                    "Answer": "he believes it might be important and wants to bring it back with them"
                },
                "Turn_6": {
                    "Question": "What changes about Mila's feelings in the basement?",
                    "Answer": "she feels an eerie presence and wants to leave"
                },
                "Turn_7": {
                    "Question": "How does Jackson react to Mila's concerns?",
                    "Answer": "he agrees and follows her outside"
                },
                "Turn_8": {
                    "Question": "Why does Mila want to go back inside the basement before they leave?",
                    "Answer": "she wants to make sure they haven't missed anything important"
                }
            },
            "rephrased_question": [
                "Where did the orange initially come from?",
                "Where does Jackson plan to look for the orange?",
                "Based on what Jackson said, where would Mila search for the orange?",
                "What is the current location of the orange?",
                "Where would Mila search for the orange if she decides to?",
                "As per Mila's thoughts, where would Jackson search for the orange?"
            ]
        },
        "tomi_sample": [
            "1 Mila entered the basement.",
            "2 Jackson entered the basement.",
            "3 Jackson likes the belt",
            "4 The orange is in the bottle.",
            "5 Jackson moved the orange to the envelope.",
            "6 Mila exited the basement.",
            "7 Jackson exited the basement.",
            "8 Mila entered the basement."
        ],
        "tomi_question": [
            "9 Where was the orange at the beginning?\tbottle\t1",
            "9 Where will Jackson look for the orange?\tenvelope\t1",
            "9 Where does Jackson think that Mila searches for the orange?\tenvelope\t1",
            "9 Where is the orange really?\tenvelope\t1",
            "9 Where will Mila look for the orange?\tenvelope\t1",
            "9 Where does Mila think that Jackson searches for the orange?\tenvelope\t1"
        ],
        "groundtruth_question": [
            "Where was the orange at the beginning?",
            "Where will Jackson look for the orange?",
            "Where does Jackson think that Mila searches for the orange?",
            "Where is the orange really?",
            "Where will Mila look for the orange?",
            "Where does Mila think that Jackson searches for the orange?"
        ],
        "groundtruth_answer": [
            "bottle",
            "envelope",
            "envelope",
            "envelope",
            "envelope",
            "envelope"
        ],
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "question_prompt": "[\"1 Mila (curiously peeking into the dimly lit basement): I can't believe we found it...\", \"2 Jackson (entering the basement cautiously): We must be careful, Mila. This place has secrets.\", \"3 Jackson (eyes lighting up as he sees a ceremonial belt on a table): Oh, would you look at this beauty?\", \"4 Mila (noticing an oddly placed orange inside a bottle): Jackson, there's an orange in this bottle! What a peculiar artifact...\", \"5 Jackson (intrigued by the orange, decides to remove it from the bottle and place it inside a woven envelope): It must be important. We should bring it back with us.\", \"6 Mila (suddenly feels an eerie presence and starts to leave the basement): I think we should get out of here... I feel a strange energy.\", \"7 Jackson (also sensing the energy, following Mila outside): You're right, there's something off about this basement. Let's leave.\", \"8 Mila (pondering their discovery, decides to re-enter the basement for one last look before they leave): I need to make sure there's nothing we missed.\"]\n\nFor **every turn** in the conversation, ask a question related to Theory of Mind, for example, \n{\"Turn_8\": {\"Question\": \"Where will Jackson look for the orange?\", \"Answer\": \"envelope\"}}\nMake sure the output is a valid json"
    },
    {
        "model": "gpt-4",
        "temperature": 1.0,
        "max_tokens": 2000,
        "top_p": 1.0,
        "prompt": [
            {
                "role": "user",
                "content": "Please **faithfully rewrite this script** to a more detailed script in JSON format:\n1 Abigail entered the TV_room.\n2 Hannah entered the TV_room.\n3 Emma loves the apple\n4 The apple is in the bathtub.\n5 Abigail moved the apple to the pantry.\n6 Hannah exited the TV_room.\n7 Abigail exited the TV_room.\n8 Hannah entered the living_room.\n\nIt should be for a multi (2-10) person conversation, set in a randomly selected cultural background (e.g., Westernern culture, Eastern culture, African culture, Latin American culture, Indigenous culture, South Asian culture, etc) and a randomly selected location. The scene in the script **should follow the script above (use the same names and actions)** and be inspired by a random literary or cinematic work but without mentioning it. It should not exceed 200 words, and the characters' psychological and emotional changes should be rich and complex, and subtle implications of social values and norms.\n\nThe output example should be formatted as:\n{\"Setting\": {\"Cultural Background\": \"France\", \"Location\": \"Art Gallery Exhibition\"}, \"Interaction\": [\"Jackson (entered the hall): I still can't believe it..., \", \"Chloe (entered the hall): Don't worry, Jackson. We'll figure this out.\"]}"
            }
        ],
        "data": {
            "Setting": {
                "Cultural Background": "Western American Culture",
                "Location": "Country Home"
            },
            "Interaction": [
                "Abigail (entering the TV room with curiosity): I wonder what's on TV today.",
                "Hannah (following Abigail into the TV room): Oh, are you about to watch something, Abby?",
                "Emma (meditatively holding an apple): I could eat apples all day, every day. I just love them!",
                "Narrator: The apple is sitting in the bathtub, a peculiar place for a piece of fruit.",
                "Abigail (walking towards the pantry): This apple doesn't belong here. I'm putting it away in the pantry.",
                "Hannah (leaving the TV room): I'm going to see what's going on in the living room.",
                "Abigail (after putting the apple away): I should tidy up the rest of the house.",
                "Hannah (walking into the living room and taking a deep breath): It's much cozier in here."
            ],
            "Category": "ToM",
            "qa_pair": {
                "Turn_1": {
                    "Question": "What does Abigail want to do initially?",
                    "Answer": "Watch TV"
                },
                "Turn_2": {
                    "Question": "What does Hannah ask Abigail?",
                    "Answer": "If she is about to watch something"
                },
                "Turn_3": {
                    "Question": "How does Emma feel about apples?",
                    "Answer": "She loves them and could eat them all the time"
                },
                "Turn_4": {
                    "Question": "Where was the apple found?",
                    "Answer": "In the bathtub"
                },
                "Turn_5": {
                    "Question": "What does Abigail decide to do with the apple?",
                    "Answer": "Put it away in the pantry"
                },
                "Turn_6": {
                    "Question": "How does Hannah feel in the TV room?",
                    "Answer": "Uneasy"
                },
                "Turn_7": {
                    "Question": "What does Abigail decide to do after putting the apple away?",
                    "Answer": "Tidy up the rest of the house"
                },
                "Turn_8": {
                    "Question": "How does Hannah feel in the living room?",
                    "Answer": "It's much cozier in there"
                }
            },
            "rephrased_question": [
                "What was the apple's original location?",
                "If Abigail wants to find the apple, where will she look?",
                "Where does Abigail think Hannah would search for the apple if she wants to?",
                "What is the current location of the apple?",
                "If Hannah wants to search for the apple, where will she look?",
                "Where does Hannah think Abigail would look for the apple if she desires to?"
            ]
        },
        "tomi_sample": [
            "1 Abigail entered the TV_room.",
            "2 Hannah entered the TV_room.",
            "3 Emma loves the apple",
            "4 The apple is in the bathtub.",
            "5 Abigail moved the apple to the pantry.",
            "6 Hannah exited the TV_room.",
            "7 Abigail exited the TV_room.",
            "8 Hannah entered the living_room."
        ],
        "tomi_question": [
            "9 Where was the apple at the beginning?\tbathtub\t1",
            "9 Where will Abigail look for the apple?\tpantry\t1",
            "9 Where does Abigail think that Hannah searches for the apple?\tpantry\t1",
            "9 Where is the apple really?\tpantry\t1",
            "9 Where will Hannah look for the apple?\tpantry\t1",
            "9 Where does Hannah think that Abigail searches for the apple?\tpantry\t1"
        ],
        "groundtruth_question": [
            "Where was the apple at the beginning?",
            "Where will Abigail look for the apple?",
            "Where does Abigail think that Hannah searches for the apple?",
            "Where is the apple really?",
            "Where will Hannah look for the apple?",
            "Where does Hannah think that Abigail searches for the apple?"
        ],
        "groundtruth_answer": [
            "bathtub",
            "pantry",
            "pantry",
            "pantry",
            "pantry",
            "pantry"
        ],
        "human": [
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "question_prompt": "[\"Abigail (entering the TV room with curiosity): I wonder what's on TV today.\", \"Hannah (following Abigail into the TV room): Oh, are you about to watch something, Abby?\", \"Emma (meditatively holding an apple): I could eat apples all day, every day. I just love them!\", \"Narrator: The apple had been sitting in the bathtub, a peculiar place for a piece of fruit.\", \"Abigail (walking towards the bathroom): This apple doesn't belong here. I'm putting it away in the pantry.\", \"Hannah (feeling uneasy in the TV room): I'm going to see what's going on in the living room.\", \"Abigail (after putting the apple away and feeling accomplished): I should tidy up the rest of the house.\", \"Hannah (walking into the living room and taking a deep breath): It's much cozier in here.\"]\n\nFor **every turn** in the conversation, ask a question related to Theory of Mind, for example, \n{\"Turn_8\": {\"Question\": \"Where will Hannah look for the apple?\", \"Answer\": \"pantry\"}}\nMake sure the output is a valid json"
    }
];

var source_index = 0;
var question_index = 0;

function change_context() {
    // var vs = object.value;
    var source_selected = document.getElementById("source-select").value;
    var question_selected = document.getElementById("question-select").value;

    // source select
    // var source_index = 0;
    if (source_selected == 'general'){
        source_index = Math.floor(Math.random()*5);
    }
    else if (source_selected == 'movie'){
        source_index = Math.floor(Math.random()*5) + 5;
    }
    else if (source_selected == 'tomi'){
        source_index = Math.floor(Math.random()*5) + 10;
    }

    // question select
    // var question_index = 0;
    if (question_selected == 'tom'){
        question_index = 0;
    }
    else if (question_selected == 'social_norm'){
        question_index = 1;
    }
    else if (question_selected == 'emotion'){
        question_index = 2;
    }
    else if (question_selected == 'social_relation'){
        question_index = 3;
    }
    else if (question_selected == 'counterfactual'){
        question_index = 4;
    }
    else if (question_selected == 'social_advice'){
        question_index = 5;
    }
    
    var context = ""
    for(let i=0; i<data[source_index]["data"]["Interaction"].length; i++){
        if (!data[source_index]["data"]["Interaction"][i].includes("(")) {
            context += data[source_index]["data"]["Interaction"][i] + "<br />"
        }else{
            context += data[source_index]["data"]["Interaction"][i].split("(", 1) + "("
            var tags = data[source_index]["data"]["Interaction"][i].split("(", 2)[1].split(")")[0].split(", ")
            if (source_selected == 'tomi' || source_selected == 'movie') {
                for(let j=0; j<tags.length; j++){
                    if (j == tags.length-1) {
                        context += '<span class="tag emotion">'+tags[j]+"</span>"
                    }else{
                        context += '<span class="tag emotion">'+tags[j]+"</span>&nbsp;"
                    }
                }
            }
            else if (source_selected == 'general') {
                tag_list = ['emotion', 'gender', 'age', 'role']
                for(let j=0; j<tags.length; j++){
                    if (j > 3) {
                        tag_index = 3;
                    }else{
                        tag_index = j;
                    }
                    if (j == tags.length-1) {
                        context += '<span class="tag '+tag_list[tag_index]+'">'+tags[j]+"</span>"
                    }else{
                        context += '<span class="tag '+tag_list[tag_index]+'">'+tags[j]+"</span>&nbsp;"
                    }
                }
            }
            context += ")"+ data[source_index]["data"]["Interaction"][i].split(")", 2)[1] + "<br />"
        }
    }

    document.getElementById("generation").innerHTML = context;
    document.getElementById("question").innerHTML = data[source_index]["data"]["Question"][question_index];
    document.getElementById("answer").innerHTML = data[source_index]["data"]["Answer"][question_index];
}

function change_question() {
    // var vs = object.value;
    var source_selected = document.getElementById("source-select").value;
    var question_selected = document.getElementById("question-select").value;

    // source select

    // question select
    if (question_selected == 'tom'){
        question_index = 0;
    }
    else if (question_selected == 'social_norm'){
        question_index = 1;
    }
    else if (question_selected == 'emotion'){
        question_index = 2;
    }
    else if (question_selected == 'social_relation'){
        question_index = 3;
    }
    else if (question_selected == 'counterfactual'){
        question_index = 4;
    }
    else if (question_selected == 'social_advice'){
        question_index = 5;
    }
    
    var context = ""
    for(let i=0; i<data[source_index]["data"]["Interaction"].length; i++){
        if (!data[source_index]["data"]["Interaction"][i].includes("(")) {
            context += data[source_index]["data"]["Interaction"][i] + "<br />"
        }else{
            context += data[source_index]["data"]["Interaction"][i].split("(", 1) + "("
            var tags = data[source_index]["data"]["Interaction"][i].split("(", 2)[1].split(")")[0].split(", ")
            if (source_selected == 'tomi' || source_selected == 'movie') {
                for(let j=0; j<tags.length; j++){
                    if (j == tags.length-1) {
                        context += '<span class="tag emotion">'+tags[j]+"</span>"
                    }else{
                        context += '<span class="tag emotion">'+tags[j]+"</span>&nbsp;"
                    }
                }
            }
            else if (source_selected == 'general') {
                tag_list = ['emotion', 'gender', 'age', 'role']
                for(let j=0; j<tags.length; j++){
                    if (j > 3) {
                        tag_index = 3;
                    }else{
                        tag_index = j;
                    }
                    if (j == tags.length-1) {
                        context += '<span class="tag '+tag_list[tag_index]+'">'+tags[j]+"</span>"
                    }else{
                        context += '<span class="tag '+tag_list[tag_index]+'">'+tags[j]+"</span>&nbsp;"
                    }
                }
            }
            context += ")"+ data[source_index]["data"]["Interaction"][i].split(")", 2)[1] + "<br />"
        }
    }

    document.getElementById("generation").innerHTML = context;
    document.getElementById("question").innerHTML = data[source_index]["data"]["Question"][question_index];
    document.getElementById("answer").innerHTML = data[source_index]["data"]["Answer"][question_index];
}

document.getElementById('source-select').addEventListener('change', function() {
    let secondSelect = document.getElementById('question-select');

    // Clear the second dropdown
    secondSelect.innerHTML = "";

    // Check the selected option of the first dropdown
    if (this.value == 'general' || this.value == 'movie') {
        let option1 = document.createElement('option');
        option1.value = 'tom';
        option1.text = 'Theory of Mind';

        let option2 = document.createElement('option');
        option2.value = 'social_norm';
        option2.text = 'Social Norm';

        let option3 = document.createElement('option');
        option3.value = 'emotion';
        option3.text = 'Emotional Change';

        let option4 = document.createElement('option');
        option4.value = 'social_relation';
        option4.text = 'Social Relation';

        let option5 = document.createElement('option');
        option5.value = 'counterfactual';
        option5.text = 'Counterfactual';

        let option6 = document.createElement('option');
        option6.value = 'social_advice';
        option6.text = 'Social Advice';

        secondSelect.add(option1);
        secondSelect.add(option2);
        secondSelect.add(option3);
        secondSelect.add(option4);
        secondSelect.add(option5);
        secondSelect.add(option6);

        secondSelect.options[question_index].selected = true;
    } 
    else if (this.value == 'tomi') {
        let option = document.createElement('option');
        option.value = 'tom';
        option.text = 'Theory of Mind';
        
        secondSelect.add(option);
    }
});


Highcharts.chart('container', {
    title: {
        text: 'Data distribution'
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['GPT-4-only', 'ToM', 48 ],
            ['GPT-4-only', 'Social Norm', 28 ],
            ['GPT-4-only', 'Emotion', 48 ],
            ['GPT-4-only', 'Social Relation', 44 ],
            ['GPT-4-only', 'Counterfactual', 28 ],
            ['GPT-4-only', 'Social Advice', 29 ], 
            ['Movie-based', 'ToM', 47 ],
            ['Movie-based', 'Social Norm', 36 ],
            ['Movie-based', 'Emotion', 33 ],
            ['Movie-based', 'Social Relation', 40 ],
            ['Movie-based', 'Counterfactual', 43 ],
            ['Movie-based', 'Social Advice', 46 ], 
            ['ToMi-based', 'ToM', 300 ]
        ],
        type: 'sankey',
        name: 'KokoMind'
    }]
});

// left fig
var fig_source_index = 0;
var fig_question_index = 0;

document.getElementById('fig-source').addEventListener('change', function() {
    let secondSelect = document.getElementById('fig-question');

    // Clear the second dropdown
    secondSelect.innerHTML = "";

    // Check the selected option of the first dropdown
    if (this.value == 'source-tomi') {
        let option = document.createElement('option');
        option.value = 'question-tom';
        option.text = 'Theory of Mind';
        
        secondSelect.add(option);
        fig_question_index = 1;
    }
    else{
        let option0 = document.createElement('option');
        option0.value = 'question-total';
        option0.text = 'Total';

        let option1 = document.createElement('option');
        option1.value = 'question-tom';
        option1.text = 'Theory of Mind';

        let option2 = document.createElement('option');
        option2.value = 'question-social_norm';
        option2.text = 'Social Norm';

        let option3 = document.createElement('option');
        option3.value = 'question-emotion';
        option3.text = 'Emotional Change';

        let option4 = document.createElement('option');
        option4.value = 'question-social_relation';
        option4.text = 'Social Relation';

        let option5 = document.createElement('option');
        option5.value = 'question-counterfactual';
        option5.text = 'Counterfactual';

        let option6 = document.createElement('option');
        option6.value = 'question-social_advice';
        option6.text = 'Social Advice';

        secondSelect.add(option0);
        secondSelect.add(option1);
        secondSelect.add(option2);
        secondSelect.add(option3);
        secondSelect.add(option4);
        secondSelect.add(option5);
        secondSelect.add(option6);

        secondSelect.options[fig_question_index].selected = true;
    }
});

function fig_change() {
    // var vs = object.value;
    var reviewer_selected = document.getElementById("fig-reviewer").value;
    var context_selected = document.getElementById("fig-context").value;

    var source_selected = document.getElementById("fig-source").value;
    var question_selected = document.getElementById("fig-question").value;

    // source select
    // var source_index = 0;
    if (source_selected == 'source-total'){
        fig_source_index = 0;
    }
    else if(source_selected == 'source-general'){
        fig_source_index = 1;
    }
    else if (source_selected == 'source-movie'){
        fig_source_index = 2;
    }
    else if (source_selected == 'source-tomi'){
        fig_source_index = 3;
    }

    // question select
    // var question_index = 0;
    if (question_selected == 'question-total'){
        fig_question_index = 0;
    }
    else if (question_selected == 'question-tom'){
        fig_question_index = 1;
    }
    else if (question_selected == 'question-social_norm'){
        fig_question_index = 2;
    }
    else if (question_selected == 'question-emotion'){
        fig_question_index = 3;
    }
    else if (question_selected == 'question-social_relation'){
        fig_question_index = 4;
    }
    else if (question_selected == 'question-counterfactual'){
        fig_question_index = 5;
    }
    else if (question_selected == 'question-social_advice'){
        fig_question_index = 6;
    }
    
    // var img = document.createElement('img');
    var img = document.getElementById('fig');
    var path = "img/"
    if (context_selected == 'context-emotion'){
        path += "emotion_yes/"
    }
    else{ 
        path += "emotion_no/"
    }

    if (reviewer_selected == 'reviewer-gpt4'){
        path += "gpt4/"
    }
    else{ 
        path += "claude/"
    }

    if (source_selected == 'source-total'){
        path += "total/"
    }
    else if (source_selected == 'source-general'){ 
        path += "general/"
    }
    else if (source_selected == 'source-movie'){ 
        path += "movie/"
    }
    else if (source_selected == 'source-tomi'){ 
        path += "tomi/"
        question_selected = 'question-tom'
    }
    
    if (question_selected == 'question-total'){
        path += "Total/"
    }
    else if (question_selected == 'question-tom'){ 
        path += "ToM/"
    }
    else if (question_selected == 'question-social_norm'){ 
        path += "Social Norm/"
    }
    else if (question_selected == 'question-emotion'){ 
        path += "Emotion/"
    }
    else if (question_selected == 'question-social_relation'){ 
        path += "Social Relation/"
    }
    else if (question_selected == 'question-counterfactual'){ 
        path += "Counterfactual/"
    }
    else if (question_selected == 'question-social_advice'){ 
        path += "Advice/"
    }
    img.src = path + 'win_rate.png';
    // document.getElementById('container').appendChild(img);
}

// right fig
var fig1_source_index = 0;
var fig1_question_index = 0;

document.getElementById('fig1-source').addEventListener('change', function() {
    let secondSelect = document.getElementById('fig1-question');

    // Clear the second dropdown
    secondSelect.innerHTML = "";

    // Check the selected option of the first dropdown
    if (this.value == 'source-tomi') {
        let option = document.createElement('option');
        option.value = 'question-tom';
        option.text = 'Theory of Mind';
        
        secondSelect.add(option);
        fig1_question_index = 1;
    }
    else{
        let option0 = document.createElement('option');
        option0.value = 'question-total';
        option0.text = 'Total';

        let option1 = document.createElement('option');
        option1.value = 'question-tom';
        option1.text = 'Theory of Mind';

        let option2 = document.createElement('option');
        option2.value = 'question-social_norm';
        option2.text = 'Social Norm';

        let option3 = document.createElement('option');
        option3.value = 'question-emotion';
        option3.text = 'Emotional Change';

        let option4 = document.createElement('option');
        option4.value = 'question-social_relation';
        option4.text = 'Social Relation';

        let option5 = document.createElement('option');
        option5.value = 'question-counterfactual';
        option5.text = 'Counterfactual';

        let option6 = document.createElement('option');
        option6.value = 'question-social_advice';
        option6.text = 'Social Advice';

        secondSelect.add(option0);
        secondSelect.add(option1);
        secondSelect.add(option2);
        secondSelect.add(option3);
        secondSelect.add(option4);
        secondSelect.add(option5);
        secondSelect.add(option6);

        secondSelect.options[fig1_question_index].selected = true;
    }
});

function fig1_change() {
    // var vs = object.value;
    var reviewer_selected = document.getElementById("fig1-reviewer").value;
    var context_selected = document.getElementById("fig1-context").value;

    var source_selected = document.getElementById("fig1-source").value;
    var question_selected = document.getElementById("fig1-question").value;

    // source select
    // var source_index = 0;
    if (source_selected == 'source-total'){
        fig1_source_index = 0;
    }
    else if(source_selected == 'source-general'){
        fig1_source_index = 1;
    }
    else if (source_selected == 'source-movie'){
        fig1_source_index = 2;
    }
    else if (source_selected == 'source-tomi'){
        fig1_source_index = 3;
    }

    // question select
    // var question_index = 0;
    if (question_selected == 'question-total'){
        fig1_question_index = 0;
    }
    else if (question_selected == 'question-tom'){
        fig1_question_index = 1;
    }
    else if (question_selected == 'question-social_norm'){
        fig1_question_index = 2;
    }
    else if (question_selected == 'question-emotion'){
        fig1_question_index = 3;
    }
    else if (question_selected == 'question-social_relation'){
        fig1_question_index = 4;
    }
    else if (question_selected == 'question-counterfactual'){
        fig1_question_index = 5;
    }
    else if (question_selected == 'question-social_advice'){
        fig1_question_index = 6;
    }
    
    // var img = document.createElement('img');
    var img = document.getElementById('fig1');
    var path = "img/"
    if (context_selected == 'context-emotion'){
        path += "emotion_yes/"
    }
    else{ 
        path += "emotion_no/"
    }

    if (reviewer_selected == 'reviewer-gpt4'){
        path += "gpt4/"
    }
    else{ 
        path += "claude/"
    }

    if (source_selected == 'source-total'){
        path += "total/"
    }
    else if (source_selected == 'source-general'){ 
        path += "general/"
    }
    else if (source_selected == 'source-movie'){ 
        path += "movie/"
    }
    else if (source_selected == 'source-tomi'){ 
        path += "tomi/"
        question_selected = 'question-tom'
    }
    
    if (question_selected == 'question-total'){
        path += "Total/"
    }
    else if (question_selected == 'question-tom'){ 
        path += "ToM/"
    }
    else if (question_selected == 'question-social_norm'){ 
        path += "Social Norm/"
    }
    else if (question_selected == 'question-emotion'){ 
        path += "Emotion/"
    }
    else if (question_selected == 'question-social_relation'){ 
        path += "Social Relation/"
    }
    else if (question_selected == 'question-counterfactual'){ 
        path += "Counterfactual/"
    }
    else if (question_selected == 'question-social_advice'){ 
        path += "Advice/"
    }
    img.src = path + 'win_rate.png';
    // document.getElementById('container').appendChild(img);
}

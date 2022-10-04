const quoteList = [
    [
        "“Be yourself; everyone else is already taken.”",
        "Oscar Wilde"
    ],
    [
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "Marilyn Monroe"
    ],
    [
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "Albert Einstein"
    ],
    [
        "“So many books, so little time.”",
        "Frank Zappa"
    ],
    [
        "“A room without books is like a body without a soul.”",
        "Marcus Tullius Cicero"
    ],
    [
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        "Bernard M. Baruch"
    ],
    [
        "“You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.”",
        "William W. Purkey"
    ],
    [
        "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "Dr. Seuss"
    ],
    [
        "“You only live once, but if you do it right, once is enough.”",
        "Mae West"
    ],
    [
        "“Be the change that you wish to see in the world.”",
        "Mahatma Gandhi"
    ],
    [
        "“In three words I can sum up everything I've learned about life: it goes on.”",
        "Robert Frost"
    ],
    [
        "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        "J.K. Rowling"
    ],
    [
        "“Don’t walk in front of me… I may not follow\nDon’t walk behind me… I may not lead\nWalk beside me… just be my friend”",
        "Albert Camus"
    ],
    [
        "“If you tell the truth, you don't have to remember anything.”",
        "Mark Twain"
    ],
    [
        "“Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .”",
        "C.S. Lewis"
    ],
    [
        "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        "Maya Angelou"
    ],
    [
        "“A friend is someone who knows all about you and still loves you.”",
        "Elbert Hubbard"
    ],
    [
        "“To live is the rarest thing in the world. Most people exist, that is all.”",
        "Oscar Wilde"
    ],
    [
        "“Always forgive your enemies; nothing annoys them so much.”",
        "Oscar Wilde"
    ],
    [
        "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        "Mahatma Gandhi"
    ],
    [
        "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
        "Martin Luther King Jr."
    ],
    [
        "“We accept the love we think we deserve.”",
        "Stephen Chbosky"
    ],
    [
        "“Without music, life would be a mistake.”",
        "Friedrich Nietzsche"
    ],
    [
        "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
        "Oscar Wilde"
    ],
    [
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        "Ralph Waldo Emerson"
    ],
    [
        "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
        "Rob Siltanen"
    ],
    [
        "“Insanity is doing the same thing, over and over again, but expecting different results.”",
        "Narcotics Anonymous"
    ],
    [
        "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",
        "Marilyn Monroe"
    ],
    [
        "“It is better to be hated for what you are than to be loved for what you are not.”",
        "Andre Gide"
    ],
    [
        "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
        "H. Jackson Brown Jr."
    ]
]

const quoteImagesLinks = [
    {   
        name: "Oscar Wilde",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Oscar_Wilde_3g07095u-adjust.jpg/330px-Oscar_Wilde_3g07095u-adjust.jpg"
    },
    {   
        name: "Marilyn Monroe",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Monroecirca1953.jpg/330px-Monroecirca1953.jpg"
    },
    {   
        name: "Albert Einstein",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/330px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
    },
    {   
        name: "Frank Zappa",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Zappa_16011977_01_300.jpg"
    },
    {   
        name: "Marcus Tullius Cicero",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg/345px-Bust_of_Cicero_%281st-cent._BC%29_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"
    },
    {   
        name: "Bernard M. Baruch",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/BARUCH%2C_BERNARD_2.jpg/330px-BARUCH%2C_BERNARD_2.jpg"
    },
    {   
        name: "William W. Purkey",
        imgLink: "https://images.gr-assets.com/authors/1282396130p5/1744830.jpg"
    },
    {   
        name: "Dr. Seuss",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg/330px-Theodor_Seuss_Geisel_%2801037v%29.jpg"
    },
    {   
        name: "Mae West",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mae_West_LAT.jpg/330px-Mae_West_LAT.jpg"
    },
    {   
        name: "Mahatma Gandhi",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/330px-Mahatma-Gandhi%2C_studio%2C_1931.jpg"
    },
    {   
        name: "Robert Frost",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Robert_Frost_NYWTS.jpg/330px-Robert_Frost_NYWTS.jpg"
    },
    {   
        name: "J.K. Rowling",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/330px-J._K._Rowling_2010.jpg"
    },
    {   
        name: "Albert Camus",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/330px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg"
    },
    {   
        name: "Mark Twain",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/330px-Mark_Twain_by_AF_Bradley.jpg"
    },
    {   
        name: "C.S. Lewis",
        imgLink: "https://upload.wikimedia.org/wikipedia/en/1/1e/C.s.lewis3.JPG"
    },
    {   
        name: "Maya Angelou",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg/330px-Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg"
    },
    {   
        name: "Elbert Hubbard",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg/330px-Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg"
    },
    {   
        name: "Martin Luther King Jr.",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/330px-Martin_Luther_King%2C_Jr..jpg"
    },
    {   
        name: "Stephen Chbosky",
        imgLink: "https://www.respectability.org/wp-content/uploads/2020/04/stephenchbosky-color-300x300.jpg"
    },
    {   
        name: "Friedrich Nietzsche",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/330px-Nietzsche187a.jpg"
    },
    {   
        name: "Ralph Waldo Emerson",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg/330px-Ralph_Waldo_Emerson_by_Josiah_Johnson_Hawes_1857.jpg"
    },
    {   
        name: "Rob Siltanen",
        imgLink: "https://steemitimages.com/640x0/https://img.esteem.ws/gbolip6nqp.jpg"
    },
    {   
        name: "Narcotics Anonymous",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/NA_group_logo_Jimmy_K.jpg/330px-NA_group_logo_Jimmy_K.jpg"
    },
    {   
        name: "Andre Gide",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andr%C3%A9_Gide.jpg/330px-Andr%C3%A9_Gide.jpg"
    },
    {   
        name: "H. Jackson Brown Jr.",
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/c/cb/H._Jackson_Brown%2C_Jr..jpg"
    },

]

const getRandomQuote = () => quoteList[Math.floor(Math.random()*(quoteList.length-1))]

const clickQuoteHandler = () => {
    let randomQuote = getRandomQuote()
    let quoteElem = `<div id="quoteText">${randomQuote[0]}</div>`
    let quoterElem = `<div id="quoter"><em>${randomQuote[1]}</em></div>`
    document.querySelector('#quote').innerHTML = quoteElem + quoterElem
}

document.getElementById('show-quote-btn').addEventListener('click', clickQuoteHandler)
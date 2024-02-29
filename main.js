function randomQoute() {

    var qouteList = [
        {
            qoute: "“So many books, so little time.”",
            author: "― Frank Zappa"
        },
        {
            qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            author: "― Bernard M. Baruch"
        },
        {
            qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
            author: "― Dr. Seuss"
        },

        {
            qoute: "“Be the change that you wish to see in the world.”",
            author: "― Mahatma Gandhi"
        },
        {
            qoute: "“In three words I can sum up everything I've learned about life: it goes on.”",
            author: "― Robert Frost"
        },
        {
            qoute: "“If you tell the truth, you don't have to remember anything.”",
            author: "― Mark Twain"
        },
        {
            qoute: "“A friend is someone who knows all about you and still loves you.”",
            author: "― Elbert Hubbard"
        },


        {
            qoute: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
            author: "― Maya Angelou"
        },
        {
            qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
            author: "― Oscar Wilde"
        },
        {
            qoute: "“It is better to be hated for what you are than to be loved for what you are not.”",
            author: "― Andre Gide, Autumn Leaves"
        },
        {
            qoute: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
            author: "― Ralph Waldo Emerson"
        },
    ]
    for (var i = 0; i< qouteList.length; i++) {
        var num = Math.floor(  Math.random() * i )
        var qoute = qouteList[num].qoute
        var author = qouteList[num].author
    
document.getElementById("qoute").innerHTML= qoute;
document.getElementById("author").innerHTML= author;
  } 
    }

   




















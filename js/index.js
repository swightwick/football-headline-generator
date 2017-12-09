var app = new Vue({
  el: '#app',
  data: {
    url: "https://twitter.com/intent/tweet?text=",
    finalUrl: "",
    isActive: false,
    random: 0,
    player: "Your",
    players: [
      "Alexis Sanchez",
      "Zlatan Ibrahimavic",
      "Peter Beardsley",
      "Mesut Özil",
      "Kylian Mbappe",
      "Joey Barton",
      "Emil Heskey",
      "Neymar",
      "Lionel Messi",
      "Nicholas Bedtner",
      "Christiano Ronaldo",
      "Gareth Bale",
      "Gareth Bales counsins brother",
      "Phil Jones",
      "David Luiz",
      "Louis Suarez"
    ],
    action: "Quote",
    actions: [
      "considering move to",
      "rejected contract from",
      "would love a move to",
      "liked a tweet from",
      "followed the instagram page of",
      "seen looking at houses near",
      "cant wait to turn down",
      "flies in for transfer talks at",
      "says agent wont let me move to",
      "doesnt want to live near",
      "cant wait to join",
      "has a world record offer from",
      "cant stand the thought of playing for",
      "turns down record breaking contract from",
      "says he will never play for"
    ],
    club: "here",
    clubs: [
      "Arsenal",
      "Real Madrid",
      "Manchester City",
      "Bayern Munich",
      "Paris Saint German",
      "Shrewsbury Town",
      "Acrrington Stanley",
      "a sunday league pub team",
      "Liverpool",
      "Galatasary",
      "some unpronouncable Chinese team",
      "a brand new league in the desert in Dubai",
      "Chelsea",
      "Huddersfield",
      "Crystal Palace"
    ]
  },
  
 methods:{

  newQuote: function(){ 
    this.isActive = "true";
    this.player = this.players[Math.floor(Math.random() * this.players.length)];
    this.action = this.actions[Math.floor(Math.random() * this.actions.length)];
    this.club = this.clubs[Math.floor(Math.random() * this.clubs.length)];
    this.finalUrl = this.url + this.player + '\xa0' + this.action + '\xa0' + this.club;
    
  }

 }
})
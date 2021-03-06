/* eslint-disable camelcase */
import React from "react";
// If making any initial changes to seed.json make same changes in initialState.js
const initialState = {
  cities: {
    Algiers: {
      name: "Algiers",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Madrid: true,
        Paris: true,
        Istanbul: true,
        Cairo: true
      }
    },
    Atlanta: {
      name: "Atlanta",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: true,
      neighbors: {
        Chicago: true,
        Washington: true,
        Miami: true
      }
    },
    Baghdad: {
      name: "Baghdad",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Istanbul: true,
        Tehran: true,
        Karachi: true,
        Cairo: true,
        Riyada: true
      }
    },
    Bangkok: {
      name: "Bangkok",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Chennai: true,
        Kolkata: true,
        Hong_kong: true,
        Ho_Chi_Minh_City: true,
        Jakarta: true
      }
    },
    Beijing: {
      name: "Beijing",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Seoul: true,
        Shanghai: true
      }
    },
    Bogota: {
      name: "Bogota",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Mexico_City: true,
        Miami: true,
        Lima: true,
        Buenos_Aires: true,
        Sao_Paulo: true
      }
    },
    Buenos_Aires: {
      name: "Buenos_Aires",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Bogota: true,
        Sao_Paulo: true
      }
    },
    Cairo: {
      name: "Cairo",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Algiers: true,
        Istanbul: true,
        Baghdad: true,
        Riyadh: true,
        Khartoum: true
      }
    },
    Chennai: {
      name: "Chennai",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Mumbai: true,
        Delhi: true,
        Kolkata: true,
        Bangkok: true,
        Jakarta: true
      }
    },
    Chicago: {
      name: "Chicago",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        San_Francisco: true,
        Montreal: true,
        Los_Angeles: true,
        Mexico_City: true,
        Atlanta: true
      }
    },
    Delhi: {
      name: "Delhi",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Tehran: true,
        Baghdad: true,
        Karachi: true,
        Kolkata: true,
        Chennai: true
      }
    },
    Essen: {
      name: "Essen",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        London: true,
        Paris: true,
        Milan: true,
        St_Petersburg: true
      }
    },
    Ho_Chi_Minh_City: {
      name: "Ho_Chi_Minh_City",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Jakarta: true,
        Bangkok: true,
        Hong_Kong: true,
        Manila: true
      }
    },
    Hong_Kong: {
      name: "Hong_Kong",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Kolkata: true,
        Shanghai: true,
        Taipei: true,
        Manila: true,
        Ho_Chi_Minh_City: true,
        Bangkok: true
      }
    },
    Istanbul: {
      name: "Istanbul",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        St_Petersburg: true,
        Moscow: true,
        Baghdad: true,
        Cairo: true,
        Algiers: true,
        Milan: true
      }
    },
    Jakarta: {
      name: "Jakarta",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Chennai: true,
        Bangkok: true,
        Ho_Chi_Minh_City: true,
        Sydney: true
      }
    },
    Johannesburg: {
      name: "Johannesburg",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Kinshasa: true,
        Khartoum: true
      }
    },
    Karachi: {
      name: "Karachi",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Baghdad: true,
        Tehran: true,
        Delhi: true,
        Mumbai: true,
        Riyadh: true
      }
    },
    Khartoum: {
      name: "Khartoum",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Johannesburg: true,
        Kinshasa: true,
        Lagos: true,
        Cairo: true
      }
    },
    Kinshasa: {
      name: "Kinshasa",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Lagos: true,
        Khartoum: true,
        Johannesburg: true
      }
    },
    Kolkata: {
      name: "Kolkata",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Delhi: true,
        Chennai: true,
        Bangkok: true,
        Hong_Kong: true
      }
    },
    Lagos: {
      name: "Lagos",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Sao_Paulo: true,
        Kinshasa: true,
        Khartoum: true
      }
    },
    Lima: {
      name: "Lima",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Mexico_City: true,
        Bogota: true,
        Santiago: true
      }
    },
    London: {
      name: "London",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        New_York: true,
        Madrid: true,
        Paris: true,
        Essen: true
      }
    },
    Los_Angeles: {
      name: "Los_Angeles",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        San_Francisco: true,
        Chicago: true,
        Mexico_City: true,
        Sydney: true
      }
    },
    Madrid: {
      name: "Madrid",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        New_York: true,
        Sao_Paulo: true,
        London: true,
        Paris: true,
        Algiers: true
      }
    },
    Manila: {
      name: "Manila",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Ho_Chi_Minh_City: true,
        Hong_Kong: true,
        Taipei: true,
        Sydney: true,
        San_Francisco: true
      }
    },
    Mexico_City: {
      name: "Mexico_City",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Los_Angeles: true,
        Chicago: true,
        Miami: true,
        Bogota: true,
        Lima: true
      }
    },
    Miami: {
      name: "Miami",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Mexico_City: true,
        Atlanta: true,
        Washington: true,
        Bogota: true
      }
    },
    Milan: {
      name: "Milan",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Essen: true,
        Paris: true,
        Istanbul: true
      }
    },
    Montreal: {
      name: "Montreal",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Chicago: true,
        New_York: true,
        Washington: true
      }
    },
    Moscow: {
      name: "Moscow",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        St_Petersburg: true,
        Tehran: true,
        Istanbul: true
      }
    },
    Mumbai: {
      name: "Mumbai",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Karachi: true,
        Delhi: true,
        Chennai: true
      }
    },
    New_York: {
      name: "New_York",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Montreal: true,
        Washington: true,
        London: true,
        Madrid: true
      }
    },
    Osaka: {
      name: "Osaka",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Taipei: true,
        Tokyo: true
      }
    },
    Paris: {
      name: "Paris",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Madrid: true,
        London: true,
        Essen: true,
        Milan: true,
        Algiers: true
      }
    },
    Riyadh: {
      name: "Riyadh",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Cairo: true,
        Baghdad: true,
        Karachi: true
      }
    },
    San_Francisco: {
      name: "San_Francisco",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Tokyo: true,
        Los_Angeles: true,
        Chicago: true,
        Manila: true
      }
    },
    Santiago: {
      name: "Santiago",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Lima: true
      }
    },
    Sao_Paulo: {
      name: "Sao_Paulo",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Buenos_Aires: true,
        Bogota: true,
        Madrid: true,
        Lagos: true
      }
    },
    Seoul: {
      name: "Seoul",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Beijing: true,
        Tokyo: true,
        Shanghai: true
      }
    },
    Shanghai: {
      name: "Shanghai",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Beijing: true,
        Seoul: true,
        Tokyo: true,
        Taipei: true,
        Hong_Kong: true
      }
    },
    St_Petersburg: {
      name: "St_Petersburg",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Essen: true,
        Moscow: true,
        Istanbul: true
      }
    },
    Sydney: {
      name: "Sydney",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Los_Angeles: true,
        Jakarta: true,
        Manila: true
      }
    },
    Taipei: {
      name: "Taipei",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Hong_Kong: true,
        Shanghai: true,
        Manila: true,
        Osaka: true
      }
    },
    Tehran: {
      name: "Tehran",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Moscow: true,
        Delhi: true,
        Baghdad: true,
        Karachi: true
      }
    },
    Tokyo: {
      name: "Tokyo",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        San_Francisco: true,
        Seoul: true,
        Shanghai: true,
        Osaka: true
      }
    },
    Washington: {
      name: "Washington",
      redCount: 0,
      blueCount: 0,
      yellowCount: 0,
      blackCount: 0,
      station: false,
      neighbors: {
        Atlanta: true,
        Miami: true,
        Montreal: true,
        New_York: true
      }
    }
  },
  playerOne: {
    name: "test",
    role: "test",
    location: "Atlanta",
    assigned: false,
    hand: ["empty"],
    translate: "translate(120.18181775792004, 135.68592999457962)"
  },
  playerTwo: {
    name: "test",
    role: "test",
    location: "Atlanta",
    assigned: false,
    hand: ["empty"]
  },
  playerThree: {
    name: "test",
    role: "test",
    location: "Atlanta",
    assigned: false,
    hand: ["empty"]
  },
  playerFour: {
    name: "test",
    role: "test",
    location: "Atlanta",
    assigned: false,
    hand: ["empty"]
  },
  infectionDeck: [
    {
      name: "San_Francisco",
      color: "blue"
    },
    {
      name: "Chicago",
      color: "blue"
    },
    {
      name: "Atlanta",
      color: "blue"
    },
    {
      name: "Montreal",
      color: "blue"
    },
    {
      name: "New_York",
      color: "blue"
    },
    {
      name: "Washington",
      color: "blue"
    },
    {
      name: "London",
      color: "blue"
    },
    {
      name: "Madrid",
      color: "blue"
    },
    {
      name: "Paris",
      color: "blue"
    },
    {
      name: "Essen",
      color: "blue"
    },
    {
      name: "Milan",
      color: "blue"
    },
    {
      name: "St_Petersburg",
      color: "blue"
    },
    {
      name: "Los_Angeles",
      color: "yellow"
    },
    {
      name: "Mexico_City",
      color: "yellow"
    },
    {
      name: "Miami",
      color: "yellow"
    },
    {
      name: "Bogota",
      color: "yellow"
    },
    {
      name: "Lima",
      color: "yellow"
    },
    {
      name: "Santiago",
      color: "yellow"
    },
    {
      name: "Sao_Paulo",
      color: "yellow"
    },
    {
      name: "Buenos_Aires",
      color: "yellow"
    },
    {
      name: "Lagos",
      color: "yellow"
    },
    {
      name: "Kinshasa",
      color: "yellow"
    },
    {
      name: "Khartoum",
      color: "yellow"
    },
    {
      name: "Johannesburg",
      color: "yellow"
    },
    {
      name: "Algiers",
      color: "black"
    },
    {
      name: "Cairo",
      color: "black"
    },
    {
      name: "Istanbul",
      color: "black"
    },
    {
      name: "Moscow",
      color: "black"
    },
    {
      name: "Tehran",
      color: "black"
    },
    {
      name: "Baghdad",
      color: "black"
    },
    {
      name: "Riyadh",
      color: "black"
    },
    {
      name: "Karachi",
      color: "black"
    },
    {
      name: "Mumbai",
      color: "black"
    },
    {
      name: "Delhi",
      color: "black"
    },
    {
      name: "Kolkata",
      color: "black"
    },
    {
      name: "Chennai",
      color: "black"
    },
    {
      name: "Bangkok",
      color: "red"
    },
    {
      name: "Jakarta",
      color: "red"
    },
    {
      name: "Beijing",
      color: "red"
    },
    {
      name: "Shanghai",
      color: "red"
    },
    {
      name: "Hong_Kong",
      color: "red"
    },
    {
      name: "Ho_Chi_Minh_City",
      color: "red"
    },
    {
      name: "Seoul",
      color: "red"
    },
    {
      name: "Taipei",
      color: "red"
    },
    {
      name: "Manila",
      color: "red"
    },
    {
      name: "Sydney",
      color: "red"
    },
    {
      name: "Tokyo",
      color: "red"
    },
    {
      name: "Osaka",
      color: "red"
    }
  ],
  playerDeck: [
    {
      name: "San_Francisco",
      type: "city",
      color: "blue"
    },
    {
      name: "Chicago",
      type: "city",
      color: "blue"
    },
    {
      name: "Atlanta",
      type: "city",
      color: "blue"
    },
    {
      name: "Montreal",
      type: "city",
      color: "blue"
    },
    {
      name: "New_York",
      type: "city",
      color: "blue"
    },
    {
      name: "Washington",
      type: "city",
      color: "blue"
    },
    {
      name: "London",
      type: "city",
      color: "blue"
    },
    {
      name: "Madrid",
      type: "city",
      color: "blue"
    },
    {
      name: "Paris",
      type: "city",
      color: "blue"
    },
    {
      name: "Essen",
      type: "city",
      color: "blue"
    },
    {
      name: "Milan",
      type: "city",
      color: "blue"
    },
    {
      name: "St_Petersburg",
      type: "city",
      color: "blue"
    },
    {
      name: "Los_Angeles",
      type: "city",
      color: "yellow"
    },
    {
      name: "Mexico_City",
      type: "city",
      color: "yellow"
    },
    {
      name: "Miami",
      type: "city",
      color: "yellow"
    },
    {
      name: "Bogota",
      type: "city",
      color: "yellow"
    },
    {
      name: "Lima",
      type: "city",
      color: "yellow"
    },
    {
      name: "Santiago",
      type: "city",
      color: "yellow"
    },
    {
      name: "Sao_Paulo",
      type: "city",
      color: "yellow"
    },
    {
      name: "Buenos_Aires",
      type: "city",
      color: "yellow"
    },
    {
      name: "Lagos",
      type: "city",
      color: "yellow"
    },
    {
      name: "Kinshasa",
      type: "city",
      color: "yellow"
    },
    {
      name: "Khartoum",
      type: "city",
      color: "yellow"
    },
    {
      name: "Johannesburg",
      type: "city",
      color: "yellow"
    },
    {
      name: "Algiers",
      type: "city",
      color: "black"
    },
    {
      name: "Cairo",
      type: "city",
      color: "black"
    },
    {
      name: "Istanbul",
      type: "city",
      color: "black"
    },
    {
      name: "Moscow",
      type: "city",
      color: "black"
    },
    {
      name: "Tehran",
      type: "city",
      color: "black"
    },
    {
      name: "Baghdad",
      type: "city",
      color: "black"
    },
    {
      name: "Riyadh",
      type: "city",
      color: "black"
    },
    {
      name: "Karachi",
      type: "city",
      color: "black"
    },
    {
      name: "Mumbai",
      type: "city",
      color: "black"
    },
    {
      name: "Delhi",
      type: "city",
      color: "black"
    },
    {
      name: "Kolkata",
      type: "city",
      color: "black"
    },
    {
      name: "Chennai",
      type: "city",
      color: "black"
    },
    {
      name: "Bangkok",
      type: "city",
      color: "red"
    },
    {
      name: "Jakarta",
      type: "city",
      color: "red"
    },
    {
      name: "Beijing",
      type: "city",
      color: "red"
    },
    {
      name: "Shanghai",
      type: "city",
      color: "red"
    },
    {
      name: "Hong_Kong",
      type: "city",
      color: "red"
    },
    {
      name: "Ho_Chi_Minh_City",
      type: "city",
      color: "red"
    },
    {
      name: "Seoul",
      type: "city",
      color: "red"
    },
    {
      name: "Taipei",
      type: "city",
      color: "red"
    },
    {
      name: "Manila",
      type: "city",
      color: "red"
    },
    {
      name: "Sydney",
      type: "city",
      color: "red"
    },
    {
      name: "Tokyo",
      type: "city",
      color: "red"
    },
    {
      name: "Osaka",
      type: "city",
      color: "red"
    },
    {
      type: "epidemic"
    },
    {
      type: "epidemic"
    },
    {
      type: "epidemic"
    },
    {
      type: "epidemic"
    },
    {
      type: "epidemic"
    },
    {
      type: "epidemic"
    },
    {
      name: "CoolEvent",
      type: "event",
      description: "cooldescription"
    },
    {
      name: "CoolEvent",
      type: "event",
      description: "cooldescription"
    },
    {
      name: "CoolEvent",
      type: "event",
      description: "cooldescription"
    },
    {
      name: "CoolEvent",
      type: "event",
      description: "cooldescription"
    },
    {
      name: "CoolEvent",
      type: "event",
      description: "cooldescription"
    }
  ],
  redRemaining: 24,
  blueRemaining: 24,
  yellowRemaining: 24,
  blackRemaining: 24,
  redStatus: "active",
  blueStatus: "active",
  yellowStatus: "active",
  blackStatus: "active",
  infectionRate: 2,
  outbreaks: 0,
  playerTurn: "playerOne",
  stationTotal: 1,
  gameStatus: "inProgress",
  selectedAction: "none",
  actionCount: 4,
  players: ["playerOne", "playerTwo", "playerThree", "playerFour"],
  activePlayer: "playerOne",

  drawCount: 2,
  infectionPhase: "complete"
};

export default initialState;

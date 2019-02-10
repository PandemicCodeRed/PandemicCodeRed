const markers = [
  {markerOffset: 0, name: 'Algiers', coordinates: [3.0588, 36.7538] },
  {markerOffset: 0, name: 'Atlanta', coordinates: [-84.3880, 33.7490] },
  {markerOffset: 0, name: 'Baghdad', coordinates: [44.3661, 33.3152] },
  {markerOffset: 0, name: 'Bangkok', coordinates: [100.5018, 13.7563] },
  {markerOffset: 0, name: 'Beijing', coordinates: [116.4074, 39.9042] },
  {markerOffset: 0, name: 'Bogota', coordinates: [-74.0721, 4.7110] },
  {markerOffset: 0, name: 'Buenos_Aires', coordinates: [-58.3816, -34.6037] },
  {markerOffset: 0, name: 'Cairo', coordinates: [31.2357, 30.0444] },
  {markerOffset: 0, name: 'Chennai', coordinates: [80.2707, 13.0827] },
  {markerOffset: 0, name: 'Chicago', coordinates: [-87.6298, 41.8781] },
  {markerOffset: 0, name: 'Dehli', coordinates: [77.1025, 28.7041] },
  {markerOffset: 0, name: 'Essen', coordinates: [7.0116, 51.4556] },
  {markerOffset: 0, name: 'Ho_Chi_Minh_City', coordinates: [106.6297, 10.8231] },
  {markerOffset: 0, name: 'Hong_Kong', coordinates: [114.1095, 22.3964] },
  {markerOffset: 0, name: 'Istanbul', coordinates: [28.9784, 41.0082] },
  {markerOffset: 0, name: 'Jakarta', coordinates: [106.8283, -6.1805] },
  {markerOffset: 0, name: 'Johannesburg', coordinates: [28.0473, -26.2041] },
  {markerOffset: 0, name: 'Karachi', coordinates: [67.0011, 24.8607] },
  {markerOffset: 0, name: 'Khartoum', coordinates: [32.5599, 15.5007] },
  {markerOffset: 0, name: 'Kinshasa', coordinates: [15.2663, -4.4419] },
  {markerOffset: 0, name: 'Kolkata', coordinates: [88.3639, 22.5726] },
  {markerOffset: 0, name: 'Lagos', coordinates: [3.3792, 6.5244] },
  {markerOffset: 0, name: 'Lima', coordinates: [-77.0428, -12.0464] },
  {markerOffset: 0, name: 'London', coordinates: [-0.1278, 51.5074] },
  {markerOffset: 0, name: 'Los_Angeles', coordinates: [-118.2437, 34.0522] },
  {markerOffset: 0, name: "Madrid", coordinates: [-3.7038, 40.4168]},
  {markerOffset: 0, name: "Manila", coordinates: [120.9842, 14.5995]},
  {markerOffset: 0, name: "Mexico_City", coordinates: [-99.1332, 19.4326]},
  {markerOffset: 0, name: "Miami", coordinates: [-80.1918, 25.7617]},
  {markerOffset: 0, name: "Milan", coordinates: [9.1900, 45.4642]},
  {markerOffset: 0, name: "Montreal", coordinates: [-73.5673, 45.5017]},
  {markerOffset: 0, name: "Moscow", coordinates: [37.6173, 55.7558]},
  {markerOffset: 0, name: "Mumbai", coordinates: [72.8777, 19.0760]},
  {markerOffset: 0, name: "New_York", coordinates: [-74.0060, 40.7128]},
  {markerOffset: 0, name: "Osaka", coordinates: [135.5022, 34.6937]},
  {markerOffset: 0, name: "Paris", coordinates: [2.3522, 48.8566]},
  {markerOffset: 0, name: "Riyadh", coordinates: [46.6753, 24.7136]},
  {markerOffset: 0, name: "San_Francisco", coordinates: [-122.4194, 37.7749]},
  {markerOffset: 0, name: "Santiago", coordinates: [-70.6693,-33.4489]},
  {markerOffset: 0, name: "Sao_Paulo", coordinates: [-46.6333, -23.5505]},
  {markerOffset: 0, name: "Seoul", coordinates: [126.9780, 37.5665]},
  {markerOffset: 0, name: "Shanghai", coordinates: [121.4737, 31.2304]},
  {markerOffset: 0, name: "St_Petersburg", coordinates: [-82.6403, 27.7676]},
  {markerOffset: 0, name: "Sydney", coordinates: [151.2093, -33.8688]},
  {markerOffset: 0, name: "Taipei", coordinates: [121.5654, 25.0330]},
  {markerOffset: 0, name: "Tehran", coordinates: [51.3890, 35.6892]},
  {markerOffset: 0, name: "Tokyo", coordinates: [139.6917,35.6895]},
  {markerOffset: 0, name: "Washington", coordinates: [-77.0369,38.9072]}
]

let cities = {
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
      "Hong_kong": true,
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
      Dehli: true,
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
  Dehli: {
    name: "Dehli",
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
      Dehli: true,
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
      Dehli: true,
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
      Dehli: true,
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
      Dehli: true,
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
}

let obj = {}
// loop through city names
markers.map((e)=>{

  // find each coordinate of neighbor associated with starting city and push into array and put in object
  if(cities.hasOwnProperty(e.name)){
    // console.log(e, cities[e.name].neighbors)
    let n = cities[e.name].neighbors
    let end = []
    for(let i in n ){
      markers.find((e)=>{
        if(e.name === i){
          // console.log(e.coordinates)
          end.push(e.coordinates)
          return e.coordinates
        }
      })
    }
    obj[e.name] = end
  }
})
console.log(obj)

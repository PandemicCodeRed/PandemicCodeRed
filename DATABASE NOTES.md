- 1 giant JSON object for every single game

Never going to change:
-- Cities {
  name:
  location:
  neighbors: {

  }
  red
  blue
  yellow
  black
  station: boolean
}

4 copies of player obj
-- Players {
  name: string
  role: string?
  it's location: variable?,
  hand:
}

//each card is an object which contains a name and a type etc
-- Game {
  Infection Deck: [{
    name: string,
    color: string
  },
  {
    name: string,
    color: string
  }],
  Infection Discard Deck: [],
  Player Deck: [{
    type: City Cards
  }, {
    name: string
    type: Epidemic
  },
  {
    name: string,
    type: Event,
    description: string
  }],
  Player Discard Deck: []
}




- choose the city keys to be the name of the city itself (easier to look stuff up)
-
-




Collection:                 Players
  Document:                  playerData
    Field:                      {insert key:value pair here}
  Document:                  anotherDocument
    Field:                      {insert key:value pair here}
Points to Sub-Collections:  "Moves": each type of move that player has performed OR that player CAN perform
THEN, the "Moves" subcollection points to a "History" sub-collection that keeps track of every time the player moves and what actions and events occurred on that move.

Sub-Collection:
Documents:


Collection:                 Events
Documents:
Points to Sub-Collections:  "Moves": each type of move that player has performed OR that player CAN perform
THEN, the "Moves" subcollection points to a "History" sub-collection that keeps track of every time the player moves and what actions and events occurred on that move.

Sub-Collection:
Documents:


Collection:                 Cities
  Document:                  anotherDocument
    Field:                      {insert key:value pair here}
Points to Sub-Collections:  "Moves": each type of move that player has performed OR that player CAN perform
THEN, the "Moves" subcollection points to a "History" sub-collection that keeps track of every time the player moves and what actions and events occurred on that move.

Sub-Collection:
Documents:

import React, { useState } from "react";
import "./styles.css";

var quoteDataBase = {
  Experience: [
    "Experience is everything",
    "Experience comes frome hard work",
    "The future depends on what you do today.",
    "If opportunity doesn’t knock, build a door.",
    "Old folks live on memory, young folks live on hope.",
    "A mature soul filled with scars of life experiences.",
    "I am not a product of my circumstances. I am a product of my decisions.",
    "Every life is different because you passed this way and touched history."
  ],
  Leadership: [
    "All leaders are readers.",
    "Leadership is an inborn quality",
    "Leadership is an art of working ina team",
    "A boss has the title, a leader has the people.",
    "You don’t have to hold a position in order to be a leader.",
    "Innovation distinguishes between a leader and a follower.",
    "Lead from the back — and let others believe they are in front.",
    "Some people want it to happen, some wish it would happen, others make it happen."
  ],
  Motivational: [
    "I am great,i can do anything",
    "Nothing will work unless you do.",
    "Change your thoughts and you change your world.",
    "A person who never made a mistake never tried anything new.",
    "You can’t use up creativity. The more you use, the more you have.",
    "Too many of us are not living our dreams because we are living our fears.",
    "Remember that not getting what you want is sometimes a wonderful stroke of luck."
  ],
  Inspirational: [
    "Inspirational thought",
    "Inspiring every possible way",
    "Believe you can and you’re halfway there. ",
    "Strive not to be a success, but rather to be of value.",
    "Nothing is impossible, the word itself says “I’m possible”",
    "Life is 10 percent what happens to me and 90 percent of how I react to it.",
    "The most common way people give up their power is by thinking they don’t have any."
  ],
  Patience: [
    "Patience is key to success",
    "Everythings is gone be alright",
    "To lose patience is to lose the battle.",
    "At the bottom of patience one finds heaven.",
    "Patience is bitter, but its fruit is sweet.",
    "The two most powerful warriors are patience and time.",
    "Have patience with all things but first of all with yourself."
  ],
  Peace: [
    "Peace is an inner beauty.",
    "Peace can be found in inself.",
    "To be calm is the highest achievement of the self.",
    "Remain calm in every situation because peace equals power.",
    "Service to others is the rent you pay for your room here on earth.",
    "Peace only comes from accepting the inevitable and taming our desires.",
    "The measure of wisdom is how calm you are when facing any given situation."
  ],
  Smile: [
    "Never regret anything that made you smile.",
    "Don't cry because it's over,smile because it happened.",
    "Life is like a mirror. Smile at it and it smiles back at you.",
    "Smiling face is a beautiful face,smiling heart is a happy heart.",
    "Share your smile with the world. It’s a symbol of friendship and peace.",
    "A smile is the best way to get away with trouble even if it’s a fake one.",
    "Use your smile to change the world; don’t let the world change your smile."
  ],
  Life: [
    "Life is meant to live",
    "The trick in life is learning how to deal with it.",
    "Love yourself first and everything else falls into line.",
    "You only live once, but if you do it right, once is enough.",
    "The easiest way to be reborn is to live and feel life everyday.",
    "Life is just like a voyage where the waves of time push us forward.",
    "Sometimes the only way to ever find yourself is to get completely lost.",
    "I love you not because of who you are, but because of who I am when I am with you."
  ]
};

var quoteData = Object.keys(quoteDataBase);

export default function App() {
  const [quote, setQuote] = useState((result) => [result]);
  const [selectedQuote, resetSelectedQuote] = useState("");

  function listClickHandler(item) {
    var newSelectedQuote = item;
    console.log(newSelectedQuote);
    resetSelectedQuote(newSelectedQuote);

    var userInput = quoteDataBase[item];
    setQuote(userInput);
  }

  return (
    <div className="App">
      <h1>QUOTE BOX</h1>
      <h2>Start each day with a positive thought and a grateful heart.!</h2>
      <br />
      <br />
      <br />
      <br />
      {quoteData.map((item) => {
        return (
          <button key={item} onClick={() => listClickHandler(item)}>
            {item}
          </button>
        );
      })}

      <div className="divider"></div>
      <br />
      <br />
      <div>
        <h1 key={selectedQuote} style={{ textTransform: "uppercase" }}>
          {selectedQuote}
        </h1>
        <br />
        {quote.map((item) => {
          return (
            <p key={item} style={{ padding: "0.5rem", fontSize: "larger" }}>
              {item}
            </p>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="qoute-day">
        <p style={{ fontSize: "larger" }}>
          <span
            style={{
              backgroundColor: "gray",
              padding: "10px",
              borderRadius: "5px"
            }}
          >
            Success mantra
          </span>
          <br />
          <br />
          “Where there is righteousness in the heart, there is beauty in the
          character.
          <br /> When there is beauty in the character, there is harmony in the
          home.
          <br /> When there is harmony in the home, there is order in the
          nation.
          <br /> When there is order in the nation, there is peace in the
          world.”
          <br />
          <span style={{ color: "#FFFFFF", float: "center" }}>
            - A. P. J. Abdul Kalam.
          </span>
        </p>
      </div>
    </div>
  );
}

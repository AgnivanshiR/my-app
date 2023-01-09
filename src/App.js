import React, {useState} from 'react';

function App() {
  var [selectedGenre, setSelectedGenre] = useState("rock");

  var musicDB = {
    jazz: [
      {
        name: "My Way- Frank Sinatra",
        rating: "❤️❤️❤️❤️❤️",
        link: "https://music.youtube.com/watch?v=Qp6D71kQRhA"
      },
      {
        name: "What A Wonderful World- Louis Armstrong",
        rating: "❤️❤️❤️❤️❤",
        link: "https://music.youtube.com/watch?v=VqhCQZaH4Vs"
      }
    ],
  
    rock: [
      {
        name: "In the End- linkin park",
        rating: "❤️❤️❤️❤️❤️",
        link: "https://music.youtube.com/watch?v=eVTXPUF4Oz4"
      },
      {
        name: "Boulevard of Broken Dreams- Green Day",
        rating: "❤️❤️❤️❤️❤",
        link: "https://music.youtube.com/watch?v=Soa3gO7tL-c"
      }
    ],
  
    indian: [
      {
        name: "Khamoshiyan- Arjit Singh",
        rating: "❤️❤️❤️❤️❤️",
        link: "https://music.youtube.com/watch?v=Mv3SZDP7QUo"
      },
      {
        name: "Moh Moh ke Dhage- Papon",
        rating: "❤️❤️❤️❤️❤️",
        link: "https://music.youtube.com/watch?v=X4rEsj4z7MY"
      }
    ]
  };

  function onClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1>Awesome Music</h1>
      <small>checkout my favorite music, select a genre to get started</small>
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button onClick={() => onClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />

      <div>
        <ul>
          {musicDB[selectedGenre].map((music) => (
            <li>
              <div>
                <a href="music.link">{music.name}</a>
              </div>
              <div>{music.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

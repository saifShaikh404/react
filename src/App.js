import './App.css';
import Video from './components/Video';
import data from "./data.json";
import PlayButton from './components/PlayButton';

function App() {

  return (
    <>
      <h1 className='main-title'>Image gallary</h1>

      <div className="container" onClick={() => console.log("Parent App")}>
        {
          data.map((ele) => {
            return (
              <Video 
                key={ele.id} 
                title={ele.title}
                channel={ele.channel}
                views={ele.views}
                duration={ele.duration}
                image={ele.image}
                id={ele.id}
                verified={ele.verified}>
                  <PlayButton 
                    value1={() => console.log("Playing... ", ele.title)} 
                    value2={() => console.log("Paused... ", ele.title)} >
                      {ele.title}
                  </PlayButton>
              </Video>
            )
          })
        }

      </div>
    </>
  );
}

export default App;

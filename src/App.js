import twitterPhoto from './components/twitter.jpeg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const getAllPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setData(response.data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className='container'>
      <div className='tweets-section'>
        <div className='tweets-header'>
          <h2>Tweets</h2>
          <div>
            <a
              target='_blank'
              class='twitter-btn'
              title='Follow @DaveAlger on Twitter'
              href='https://twitter.com/intent/follow?screen_name=DaveAlger'
            >
              <i></i>
              <span class='label'>@ThisTwitterUser</span>
            </a>
          </div>
        </div>
        {data.length > 0
          ? data.map((item) => (
              <div key={item.id} className='tweets'>
                <div className='userPhoto'>
                  <img src={twitterPhoto} alt='' />
                </div>
                <div className='tweet'>
                  <div className='tweet-info'>
                    <div className='user'>
                      <h4>{item.name}</h4>
                      <span>@{item.username}</span>
                    </div>
                    <div className='date'>
                      <span>24 July</span>
                    </div>
                  </div>
                  <div className='tweet-content'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officiis, fuga aperiam. Numquam debitis mollitia molestiae.
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;

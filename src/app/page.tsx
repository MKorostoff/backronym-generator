import { NextPage } from 'next';
import hash from 'object-hash';
import f_words from '../data/f.json';
import w_words from '../data/w.json';
import SubmitToLeaderBoard from './components/submit-to-leaderboard';
import LeaderBoard from './components/leaderboard';
const secret = process.env.SECRET;

//New filebased metadata API: https://nextjs.org/docs/app/api-reference/file-conventions/metadata
export const metadata = {
  title: 'FFW Backronym Generator',
}

const Home: NextPage = (props) => {

  //Get two random f_words
  const f_word1 = f_words[Math.floor(Math.random() * f_words.length)];
  const f_word2 = f_words[Math.floor(Math.random() * f_words.length)];

  //Get a randow w_word
  const w_word = w_words[Math.floor(Math.random() * w_words.length)];

  //Generate a hash on the server so malicious users can't submit random values
  const confirmation_hash = hash([f_word1, f_word2, w_word, secret]);

  return (
    <div className="outer">
      <div className="container">
      <h1>The FFW Backronym Generator</h1>
      <div>
        The letters "FFW" can stand for many things: friends from work, fantastic futuristic websites, or even funny floppy walrus. This generator will help you find the perfect backronym for your needs. Once you find a backronym you like, you can submit it to the leaderboard for others to vote on, thus leading us to discover the best backronym for FFW.
      </div>

      <h2>Why does this website exist?</h2>
      <div>

      </div>

      <h2>

      </h2>
      <div>

      </div>
        <div className='word'>
          <span className="dropcap dropcap-f1">F</span>
          <span className='word-chopped'>{f_word1.slice(1)}</span>
        </div>

        <div className='word'>
          <span className="dropcap dropcap-f2">F</span>
          <span className='word-chopped'>{f_word2.slice(1)}</span>
        </div>

        <div className='word'>
          <span className="dropcap dropcap-large dropcap-w">W</span>
          <span className='word-chopped'>{w_word.slice(1)}</span>
        </div>

        {/* Client component in a server component https://nextjs.org/docs/getting-started/react-essentials#client-components */}
        <SubmitToLeaderBoard
          f_word1={f_word1}
          f_word2={f_word2}
          w_word={w_word}
          confirmation_hash={confirmation_hash}
        />
      </div>


      <div className='footer'>
        <div className='leaderboard'>
          <h2>Leader Board</h2>
          {/* @ts-expect-error Server Component */}
          <LeaderBoard/>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({res}) => {
  res && res.setHeader('Cache-Control', 'no-store');
};

export default Home;

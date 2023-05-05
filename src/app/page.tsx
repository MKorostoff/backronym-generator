import { NextPage } from 'next';
import hash from 'object-hash';
import f_words from '../data/f.json';
import w_words from '../data/w.json';
import SubmitToLeaderBoard from './components/submit-to-leaderboard';
import LeaderBoard from './components/leaderboard';
import Intro from './components/intro';
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
      <Intro/>
      <div className="container">
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

import f_words from '../data/f.json';
import w_words from '../data/w.json';

export default function Home() {
  //Get a randow w_word
  const w_word = w_words[Math.floor(Math.random() * w_words.length)];

  //Get two random f_words
  const f_word1 = f_words[Math.floor(Math.random() * f_words.length)];
  const f_word2 = f_words[Math.floor(Math.random() * f_words.length)];

  //Chop off the first letter of each word
  const f_word1_chopped = f_word1.slice(1);
  const f_word2_chopped = f_word2.slice(1);
  const w_word_chopped = w_word.slice(1);


  return (
    //Display the words, with the first letter gigantic
    <div className="container">
      <div className='word'>
        <span className="dropcap">F</span>
        <span className='word-chopped'>{f_word1_chopped}</span>
      </div>

      <div className='word'>
        <span className="dropcap">F</span>
        <span className='word-chopped'>{f_word2_chopped}</span>
      </div>

      <div className='word'>
        <span className="dropcap dropcap-large">W</span>
        <span className='word-chopped'>{w_word_chopped}</span>
      </div>
    </div>
  )
}

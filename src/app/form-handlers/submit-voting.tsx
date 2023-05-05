'use server';
import hash from 'object-hash';
const secret = process.env.SECRET

//Action that will run on the server but callable from the client
export async function submitForVoting(formData: FormData) {

  //Get the values submitted by the user
  const f_word1 = formData.get('f_word1')
  const f_word2 = formData.get('f_word2')
  const w_word = formData.get('w_word')
  const confimration_hash = formData.get('confirmation_hash')

  //Make sure the users submitted hash matches the one generated on the server
  const generated_hash = hash([f_word1, f_word2, w_word, secret]);
  if (confimration_hash !== generated_hash) {
    throw new Error('Invalid data submitted');
  }
  else {
    console.log(f_word1, f_word2, w_word);
  }
}

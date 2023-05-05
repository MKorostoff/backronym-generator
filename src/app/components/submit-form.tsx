'use client';
import { useState } from 'react';
import {submitForVoting} from '../form-handlers/submit-voting';

export default function SubmitForm(props: {
  f_word1: string,
  f_word2: string,
  w_word: string,
  confirmation_hash: string}) {
  const [clicked, setClicked] = useState(false);
  return (
    <form action={submitForVoting} onSubmit={() => setClicked(true)}>
      <input type="hidden" name="confirmation_hash" value={props.confirmation_hash} />
      <input type="hidden" name="f_word1" value={props.f_word1} />
      <input type="hidden" name="f_word2" value={props.f_word2} />
      <input type="hidden" name="w_word" value={props.w_word} />
      {clicked ? <p>Submitted</p> : <button type="submit">Submit For Voting</button>}
    </form>
  )
}

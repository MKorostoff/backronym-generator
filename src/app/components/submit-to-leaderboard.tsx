'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {submitForVoting} from '../form-handlers/submit-to-leaderboard';
import { withRefresh } from '../form-handlers/with-refresh';

//Client component using a server action https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export default function SubmitToLeaderBoard(props: {
  f_word1: string,
  f_word2: string,
  w_word: string,
  confirmation_hash: string}) {
  const router = useRouter();

  return (
    <form className="submit" action={withRefresh(submitForVoting)}>
      <input type="hidden" name="confirmation_hash" value={props.confirmation_hash} />
      <input type="hidden" name="f_word1" value={props.f_word1} />
      <input type="hidden" name="f_word2" value={props.f_word2} />
      <input type="hidden" name="w_word" value={props.w_word} />
      <div className='buttons'>
        <button type="reset" onClick={() => router.refresh()}>Give Me Another!</button>
        <div className='or'>OR</div>
        <button type="submit">Submit to Leaderboard</button>
      </div>
    </form>
  )
}

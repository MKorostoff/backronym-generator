'use client'
import VoteForMeHandler from "../form-handlers/vote-for-me"
import { withRefresh } from "../form-handlers/with-refresh";

export default function VoteForMe(props: {candidate: string}) {
  return (
    <>
      <form action={withRefresh(VoteForMeHandler)}>
        <input type="hidden" name="candidate" value={props.candidate}/>
        <button type="submit">Vote For Me!</button>
      </form>
    </>
  )
}

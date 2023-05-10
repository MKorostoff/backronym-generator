'use client'
import VoteForMeHandler from "../form-handlers/vote-for-me"

export default function VoteForMe(props: {candidate: string}) {
  return (
    <>
      <form action={VoteForMeHandler}>
        <input type="hidden" name="candidate" value={props.candidate}/>
        <button type="submit">Vote For Me!</button>
      </form>
    </>
  )
}

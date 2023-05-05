'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation';
import VoteForMeHandler from "../form-handlers/vote-for-me"

export default function VoteForMe(props: {candidate: string}) {
  const [clicked, setClicked] = useState(false)
  const router = useRouter();

  return (
    <>
    {clicked ?
      <span className="voted">vote recorded</span> :
      <form action={VoteForMeHandler} onSubmit={() => setClicked(true)}>
        <input type="hidden" name="candidate" value={props.candidate}/>
        <button type="submit">Vote For Me!</button>
      </form>
    }
    </>
  )
}

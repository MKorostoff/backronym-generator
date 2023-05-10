'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// Server action to increment the vote count for a backronym. Runs on the server, but callable on the client.
// Learn more: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export async function VoteForMeHandler(formData: FormData) {
  const candidate = formData.get('candidate')

  //make sure the candidate is a string, to please the type checker
  if (typeof candidate !== 'string') {
    return
  }

  //Run a select on the database to make sure the candidate exists. This is just to prevent malicious voting for non-existent candidates
  const { rows } = await sql`SELECT * FROM backronyms WHERE backronym = ${candidate}`
  if (rows.length === 0) {
    return
  }

  //Lookup in the database table if there is a candidate with the name, and increment the votes by 1
  await sql`UPDATE backronyms SET votes = votes + 1 WHERE backronym = ${candidate}`
  revalidatePath('/');
}


export default async function LeaderBoard() {
  const { rows } = await sql`SELECT * FROM backronyms ORDER BY votes DESC LIMIT 1000`
  return (
    //Format the rows as a table, with three columns. The first column is the backronym, the second is the number of votes, and the third is a button to vote for the backronym
    <table>
      <thead>
        <tr>
          <th>Backronym</th>
          <th>Votes</th>
          <th>Vote</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row: any) => (
          <tr key={row.backronym}>
            <td>{row.backronym}</td>
            <td>{row.votes}</td>
            <td className="vote-button">
            <form action={VoteForMeHandler}>
              <input type="hidden" name="candidate" value={row.backronym}/>
              <button type="submit">Vote For Me!</button>
            </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

import { sql } from "@vercel/postgres";
import VoteForMe from "./vote-for-me";

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
              <VoteForMe candidate={row.backronym}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

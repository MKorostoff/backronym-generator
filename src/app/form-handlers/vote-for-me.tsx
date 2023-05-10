'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// Server action to increment the vote count for a backronym. Runs on the server, but callable on the client.
// Learn more: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export default async function VoteForMeHandler(formData: FormData) {
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

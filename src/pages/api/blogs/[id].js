import { sql} from '@vercel/postgres';
 
export default async function handler(req, res) {
    const {id} = {...req.query}
 
  try {
    const {rows} = await sql`SELECT * FROM Posts
    WHERE ID=${id}`
    return res.status(200).json({rows});
  } catch (error) {
    return res.status(500).json({ error });
  }
}
import { sql} from '@vercel/postgres';
 
export default async function handler(req, res) {
    const {title, message, id} = {...req.body}
 
  try {
    const {rows} = await sql`SELECT ID, Name FROM Posts`
    return res.status(200).json({rows});
  } catch (error) {
    return res.status(500).json({ error });
  }
}
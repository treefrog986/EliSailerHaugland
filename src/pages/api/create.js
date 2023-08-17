import { sql} from '@vercel/postgres';
 
export default async function handler(req, res) {
    const {title, message, id} = {...req.body}
 
  try {
    const result = await sql`CREATE TABLE IF NOT EXISTS Posts (ID varchar(8), Name varchar(255), Text TEXT );`;
    const r = sql`INSERT INTO Posts (ID, Name, Text)VALUES (${id}, ${title}, ${message});`
    const {rows} = await sql`SELECT * FROM Posts`
    return res.status(200).json({rows});
  } catch (error) {
    return res.status(500).json({ error });
  }
}
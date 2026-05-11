import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = 1');
    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const { name, email, phone, gov_id, age, sex, address, nationality } = data;
    const result = await pool.query(
      `UPDATE users 
       SET name = $1, email = $2, phone = $3, gov_id = $4, age = $5, sex = $6, address = $7, nationality = $8 
       WHERE id = 1 
       RETURNING *`,
      [name, email, phone, gov_id, age, sex, address, nationality]
    );
    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

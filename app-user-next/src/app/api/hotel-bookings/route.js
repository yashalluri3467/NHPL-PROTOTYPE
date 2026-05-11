import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM hotel_bookings ORDER BY created_at DESC');
    return Response.json(result.rows);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { user_id, guest_name, room_type, check_in, check_out, amount } = data;
    const result = await pool.query(
      'INSERT INTO hotel_bookings (user_id, guest_name, room_type, check_in, check_out, amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id || 1, guest_name, room_type, check_in, check_out, amount]
    );
    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

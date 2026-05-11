import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM restaurant_orders ORDER BY created_at DESC');
    return Response.json(result.rows);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { user_id, restaurant_name, items, total_amount, order_type } = data;
    const result = await pool.query(
      'INSERT INTO restaurant_orders (user_id, restaurant_name, items, total_amount, order_type) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id || 1, restaurant_name, JSON.stringify(items), total_amount, order_type]
    );
    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Device } from './definitions';

export async function addDevice(formData: FormData) {
  const name = formData.get('name');
  const location = formData.get('location');
  const intensity = 50;
  const status = 'off';
  const color = 'yellow'

  try {
    await sql`
    INSERT INTO devices (name, location, intensity, status, color)
    VALUES (${name}, ${location}, ${intensity}, ${status}, ${color})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Add Device.',
    };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function fetchDeviceById(id: string) {
  try {
    const data = await sql<Device>`
      SELECT
        id,
        name,
        location,
        intensity,
        status,
        color
      FROM devices
      WHERE devices.id = ${id};
    `;

    const device = data.rows.map((device) => ({
      ...device,
    }));

    return device[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch device.');
  }
}

export async function updateDevice(id: string, formData: FormData) {
  const name = formData.get('name');
  const location = formData.get('location');
  const intensity = 50;
  const status = 'off';
  const color = 'yellow'

  try {
    await sql`
          UPDATE devices
          SET intensity = ${intensity}, status = ${status}, color = ${color}
          WHERE id = ${id}
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Update Device.',
    };
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}
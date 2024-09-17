'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addDevice(formData: FormData) {
    const name = formData.get('name');
    const location = formData.get('location');
    const intensity = 50;
    const status = 'off';
    const color = 'yellow'

    await sql`
    INSERT INTO devices (name, location, intensity, status, color)
    VALUES (${name}, ${location}, ${intensity}, ${status}, ${color})
  `;

    revalidatePath('/dashboard');
    redirect('/dashboard');
}
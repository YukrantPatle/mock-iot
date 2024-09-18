'use server';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Device } from './definitions';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function addDevice(formData: FormData) {
  const name = formData.get('name');
  const location = formData.get('location');
  const intensity = 0;
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
  const intensity = formData.get('intensity')
  const status = formData.get('status')
  const color = formData.get('color')

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

export async function deleteDevice(id: string) {
  try {
      await sql`DELETE FROM devices WHERE id = ${id}`;
      revalidatePath('/dashboard');
  } catch (error) {
      return {
          message: 'Database Error: Failed to Delete Device.',
      };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
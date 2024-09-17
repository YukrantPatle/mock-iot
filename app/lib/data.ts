import { sql } from '@vercel/postgres';
import { DeviceTable } from '@/app/lib/definitions';

const ITEMS_PER_PAGE = 8;
export async function fetchFilteredDevices(
    query: string,
    currentPage: number,
  ) {
    //const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const devices = await sql<DeviceTable>`
        SELECT
        id,
        name,
        location,
        intensity,
        status,
        color
      FROM devices
      `;
      return devices.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch devices.');
    }
  }

  
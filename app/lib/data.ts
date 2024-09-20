import { sql } from '@vercel/postgres';
import { DeviceTable } from '@/app/lib/definitions';

const ITEMS_PER_PAGE = 8;
export async function fetchFilteredDevices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

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
      WHERE name ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
      `;
    return devices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch devices.');
  }
}




export const plotData = [
  { speed: 0, time: 0 },
  { speed: 1, time: 1000 },
  { speed: 1.2, time: 2000 },
  { speed: 1.5, time: 3000 },
  { speed: 1.7, time: 4000 },
  { speed: 2, time: 5000 },
  { speed: 3, time: 6000 },
  { speed: 4.5, time: 7000 },
  { speed: 5.1, time: 8000 },
  { speed: 6.6, time: 9000 },
  { speed: 7.8, time: 10000 },
  { speed: 9.9, time: 11000 },
  { speed: 6.3, time: 12000 },
  { speed: 8.3, time: 13000 },
  { speed: 11.2, time: 14000 },
  { speed: 15.3, time: 15000 },
  { speed: 18.7, time: 16000 },
  { speed: 22.6, time: 17000 },
  { speed: 27.8, time: 18000 },
  { speed: 12.3, time: 19000 },
  { speed: 3.44, time: 20000 },
  { speed: 9.9, time: 21000 },
  { speed: 16.3, time: 22000 },
  { speed: 18.3, time: 23000 },
  { speed: 31.2, time: 24000 },
  { speed: 35.3, time: 25000 },
  { speed: 18.7, time: 26000 },
]

export const plotData2 = [
  { speed: 10, time: 0 },
  { speed: 11, time: 1000 },
  { speed: 11.2, time: 2000 },
  { speed: 11.5, time: 3000 },
  { speed: 1.7, time: 4000 },
  { speed: 12, time: 5000 },
  { speed: 3, time: 6000 },
  { speed: 4.5, time: 7000 },
  { speed: 15.1, time: 8000 },
  { speed: 6.6, time: 9000 },
  { speed: 7.8, time: 10000 },
  { speed: 19.9, time: 11000 },
  { speed: 6.3, time: 12000 },
  { speed: 18.3, time: 13000 },
  { speed: 11.2, time: 14000 },
  { speed: 15.3, time: 15000 },
  { speed: 118.7, time: 16000 },
  { speed: 22.6, time: 17000 },
  { speed: 27.8, time: 18000 },
  { speed: 12.3, time: 19000 },
  { speed: 33.44, time: 20000 },
  { speed: 9.9, time: 21000 },
  { speed: 16.3, time: 22000 },
  { speed: 8.3, time: 23000 },
  { speed: 31.2, time: 24000 },
  { speed: 5.3, time: 25000 },
  { speed: 8.7, time: 26000 },
]

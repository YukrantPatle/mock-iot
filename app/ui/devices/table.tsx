import { fetchFilteredDevices } from "@/app/lib/data";
import ColorBox from "../color-box";
import Link from "next/link";
import { DeleteDevice } from "./buttons";

export default async function DevicesTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const devices = await fetchFilteredDevices(query, currentPage);
    return (
        <div className="mt-6 flow-root">
            <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-center text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-semibold">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-5 font-semibold">
                            Location
                        </th>
                        <th scope="col" className="px-3 py-5 font-semibold">
                            Intensity
                        </th>
                        <th scope="col" className="px-3 py-5 font-semibold">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-5 font-semibold">
                            Color
                        </th>
                        <th scope="col" className="px-3 py-5 font-semibold">
                            Setting
                        </th>
                        <th scope="col" className="px-3 py-5 font-semibold">
                            Unpair
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {devices?.map((device) => (
                        <tr
                            key={device.id}
                            className="w-full border-b text-center py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap px-3 py-3">
                                {device.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {device.location}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {device.intensity}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {device.status}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                <ColorBox color={device.color} intensity={device.intensity * 10} />
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                <Link
                                    href={`/dashboard/devices/${device.id}/update`}
                                    className="rounded-md border p-2 hover:bg-gray-100"
                                >⚙️</Link>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                <DeleteDevice id={device.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
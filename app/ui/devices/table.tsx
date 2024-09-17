import { fetchFilteredDevices } from "@/app/lib/data";
import ColorBox from "../color-box";

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
                        <th scope="col" className="px-4 py-5 font-medium">
                            Name
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Location
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Intensity
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Color
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
                                <ColorBox color={device.color} intensity={device.intensity *10} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
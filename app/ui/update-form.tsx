import Link from "next/link";
import { updateDevice } from "../lib/actions";
import { Device } from "../lib/definitions";
import { Button } from "./button";

export default function UpdateForm({
    device
}: {
    device: Device;
}) {
    const updateDeviceWithId = updateDevice.bind(null, device.id);
    return (
        <form action={updateDeviceWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-6 text-3xl flex justify-center">
                    Update Device Setting
                </div>
                <div className="mb-4 flex">
                    <div className="mr-3 font-semibold">Device Name:</div>
                    <div>{device.name}</div>
                </div>
                <div className="mb-4 flex">
                    <div className="mr-3 font-semibold">Location:</div>
                    <div>{device.location}</div>
                </div>
                <div className="mb-4 flex">
                    <div className="mr-3 font-semibold">Status:</div>
                    <div>{device.status}</div>
                    {/* Toggle */}
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="intensity" className="font-semibold mr-3 block">
                        Intensity:
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="intensity"
                                name="intensity"
                                type="range"
                                min="0"
                                max="100"
                                defaultValue={device.intensity}
                                className="text-neutral-950"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex">
                    <label htmlFor="color" className="font-semibold mr-3 block">
                        Color:
                    </label>
                    <div>{device.color}</div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard"
                        className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Update</Button>
                </div>
            </div>
        </form>
    )
}
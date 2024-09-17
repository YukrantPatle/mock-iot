import Link from "next/link";
import { Button } from "./button";
import { addDevice } from "../lib/actions";

export default function Form() {
    return (
        <form action={addDevice}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4 text-3xl flex justify-center">
                    Add Device
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Enter Device Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                placeholder="Enter Device Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Choose Location
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="location"
                                name="location"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                            >
                                <option value="" disabled>Select a Location</option>
                                <option value="Hall">Hall</option>
                                <option value="Parking">Parking</option>
                                <option value="Bedroom">Bedroom</option>
                                <option value="Child Room">Child Room</option>
                                <option value="Main Door">Main Door</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard"
                        className="flex h-10 items-center rounded-lg bg-gray-200 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Add Device</Button>
                </div>
            </div>
        </form>
    )
}
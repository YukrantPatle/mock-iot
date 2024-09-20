'use client';
import Link from "next/link";
import { updateDevice } from "../lib/actions";
import { Device } from "../lib/definitions";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { colorAtom, intensityAtom, statusAtom } from "../lib/atoms";

const coloroptions = ["red", "blue", "green", "yellow"]

export default function UpdateForm({
    device
}: {
    device: Device;
}) {
    const [status, setStatus] = useRecoilState<string>(statusAtom)
    const [color, setColor] = useRecoilState<string>(colorAtom)
    const [intensity, setIntensity] = useRecoilState<number>(intensityAtom)
    console.log(status);

     useEffect(() => {
        setStatus(device.status)
        setColor(device.color)
        setIntensity(device.intensity)
     },[])

    const handleIntensity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntensity(Number(e.target.value))
    }
    const handleStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }
    const handleColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(e.target.value)
    }

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
                <div className="mb-4 flex items-center">
                    <div className="mr-3 font-semibold">Status:</div>
                    <div className="flex gap-4 rounded-md border border-gray-200 p-1 ">
                        <div className="flex items-center">
                            <input
                                id="off"
                                name="status"
                                type="radio"
                                value="off"
                                defaultChecked={status === 'off'}
                                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                                htmlFor="pending"
                                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                            >
                                OFF
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="on"
                                name="status"
                                type="radio"
                                value="on"

                                defaultChecked={status === 'on'}
                                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                                htmlFor="paid"
                                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                            >
                                ON
                            </label>
                        </div>
                    </div>
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
                                value={intensity}
                                onChange={handleIntensity}
                                className="text-neutral-950"
                            />
                        </div>
                    </div>
                    <div className="ml-3 font-semibold p-1 rounded-md border border-gray-200">{intensity}</div>
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="color" className="font-semibold mr-3 block">
                        Color:
                    </label>
                    <select
                        id="color"
                        name="color"
                        className="peer block w-80 cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={color}
                        onChange={handleColor}
                    >
                        {coloroptions.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
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
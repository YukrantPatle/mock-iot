import { fetchDeviceById } from "@/app/lib/actions";
import Form from "@/app/ui/update-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [device] = await Promise.all([
        fetchDeviceById(id)
    ]);
    console.log(device)
    return(
        <main>
            <Form device={device}/>
        </main>
    )
}
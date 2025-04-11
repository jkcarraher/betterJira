import Link from "next/link";
import { useRef } from "react";

export default function Ticket({ title, description, dataSwapyItem }: { title: string, description: string, dataSwapyItem: string } ) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const toggleDialog = () => {
        console.log("Toggled")
		if(dialogRef.current?.open) {
			dialogRef.current.close();
		} else {
            dialogRef.current?.showModal();
		}
	};

	return (
        <button className="w-full bg-white rounded p-2 text-black" 
            onClick={toggleDialog} 
            data-swapy-item={dataSwapyItem}>
                <h1 className="">{title}</h1>
                <p>{description}</p>
                <Link href="https://github.com/mkasberg/ghostty-ubuntu/issues/47">Branch Link</Link>
        </button>
	);
};
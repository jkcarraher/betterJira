
// interface ticket {
//     title: string;
//     description: string;
// }

import Link from "next/link";

export default function Ticket({ title, description }: { title: string, description: string } ) {
	return (
		<div className="w-full bg-white rounded p-2 text-black">
            <h1 className="">{title}</h1>
            <p>{description}</p>
            <Link href="https://github.com/mkasberg/ghostty-ubuntu/issues/47">Branch Link</Link>
        </div>
	);
};
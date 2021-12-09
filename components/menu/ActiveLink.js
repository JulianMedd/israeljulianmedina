import React from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

export const ActiveLink = ({link}) => {
    const router = useRouter();
    const isCurrentPath = router.asPath === link.url;

    return (
        <Link href={link.url}>
            <li className="relative">
                <span className="text-xs font-bold absolute top-2 left-0">
                    {link.number}
                </span>
                <a className={`pl-6 ${isCurrentPath && "text-indigo-700"}`}>{link.name}</a>
            </li>
        </Link>
    )
}

export default ActiveLink;
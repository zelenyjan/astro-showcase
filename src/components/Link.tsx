import React from "react";

type Props = {
    target?: string;
    children: React.ReactNode;
    href: string;
}

export const Link = ({ target="_self", children, href }: Props) => {
    return (
        <a target={target} href={href}>
            {children}
        </a>
    );
}
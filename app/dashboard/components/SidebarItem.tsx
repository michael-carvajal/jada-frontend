'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface SidebarItemProps {
    href: string;
    label: string;
    isActive: boolean; // Declare isActive here only
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, label, isActive }) => {
    return (
        <Link href={href} passHref>
            <span className={clsx(
                "py-2 px-4 block cursor-pointer mb-2",
                isActive && "bg-jada-blue-400" // Apply this class if isActive is true
            )}>
                {label}
            </span>
        </Link>
    );
};

export default SidebarItem;
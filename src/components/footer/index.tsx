"use client";

import React from 'react';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/x'
import 'react-social-icons/telegram'
import 'react-social-icons/discord'
import 'react-social-icons/github'
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    © Metacube, 2023. All rights reserved.
                </div>
                <div className="flex space-x-8">
                    <div>
                        <h5 className="font-bold text-lg mb-2">Contact Us</h5>
                        <ul>
                            <li className='my-2'><span className='hover:opacity-75'><SocialIcon url='https://x.com/metacubeGames' bgColor='transparent' style={{ height: 24, width: 24 }}/><Link href="https://x.com/metacubeGames">Twitter</Link></span></li>
                            <li className='my-2'><span className='hover:opacity-75'><SocialIcon url='https://github.com/metacube-games' bgColor='transparent' style={{ height: 24, width: 24 }}/><Link href="https://github.com/metacube-games">GitHub</Link></span></li>
                            <li className='my-2'><span className='hover:opacity-75'><SocialIcon url='https://discord.gg/3mgyq8FN' bgColor='transparent' style={{ height: 24, width: 24 }}/><Link href="https://discord.gg/3mgyq8FN">Discord</Link></span></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-lg mb-2">Info</h5>
                        <ul>
                            <li className='my-2'><Link href="https://metacube-1.gitbook.io/metacube/" className="hover:text-gray-300">Documentation</Link></li>
                            <li className='my-2'><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                    Dominik Stenka
                </h1>
                <p className="py-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                    odit ullam iste repellat consequatur libero reiciendis,
                    blanditiis accusantium.
                </p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <a
                        href="https://www.facebook.com/dominik.stenka/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaFacebookSquare size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/stk.dominik/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://twitter.com/stenka_dominik"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitterSquare size={30} />
                    </a>
                    <a
                        href="https://github.com/dstenka"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithubSquare size={30} />
                    </a>
                </div>
            </div>
            <div className="md:col-span-2 grid md:grid-cols-4 sm:grid-cols-2 mt-6">
                <div>
                    <h6 className="font-medium text-[#00df9a]">Lösungen</h6>
                    <ul>
                        <li className="py-2 text-sm">Webentwicklung</li>
                        <li className="py-2 text-sm">Web Hosting</li>
                        <li className="py-2 text-sm">Server Hosting</li>
                        <li className="py-2 text-sm">Beratung</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-[#00df9a]">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Preise</li>
                        <li className="py-2 text-sm">Dokumentationen</li>
                        <li className="py-2 text-sm">Anleitungen</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-[#00df9a]">Meine Person</h6>
                    <ul>
                        <li className="py-2 text-sm">Über mich</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Meine Karriere</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-[#00df9a]">Datenschutz</h6>
                    <ul>
                        <li className="py-2 text-sm">Datenschutzerklärung</li>
                        <li className="py-2 text-sm">Impressum</li>
                        <li className="py-2 text-sm">AGB`s</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

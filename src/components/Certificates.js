import React from "react";
import { TerminalIcon, UserIcon } from "@heroicons/react/solid";
import {certificates } from "../data"

export default function Certificates() {
    return (
        <section id="certificates">
            <div className="container px-5 py-10 mx-auto text-center">
                <UserIcon className="w-10 inline-block mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Certificates and Excellence
                </h1>
                <div className="flex flex-wrap  m-5">
                    {certificates.map((certificate) => (
                        <div key={certificate} className="p-2">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                                <p className="leading-relaxed mb-6">
                                    {certificate.title}
                                </p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="certificate"
                                        src={certificate.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center" 
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {certificate.name}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

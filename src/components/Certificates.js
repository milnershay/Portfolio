import React from "react";
import { AcademicCapIcon, UserIcon } from "@heroicons/react/solid";
import { certificates } from "../data";

export default function Certificates() {
    return (
        <section id="certificates" className="bg-light-bg">
            <div className="container px-5 py-10 mx-auto text-center">
                <UserIcon className="w-10 inline-block mb-4 text-primary" />
                <h1 className="sm:text-4xl text-3xl font-medium font-heading text-light-text mb-12">
                    Certificates &amp; Credentials
                </h1>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto">
                    {certificates.map((certificate) => (
                        <div key={certificate.title} className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-dark-bg p-8 rounded flex flex-col items-start text-left">
                                <div className="flex items-center mb-4 w-full">
                                    <AcademicCapIcon className="text-primary w-8 h-8 flex-shrink-0 mr-4" />
                                    <h2 className="text-light-text font-heading text-lg">
                                        {certificate.title}
                                    </h2>
                                </div>
                                <div className="flex items-center w-full mt-auto pt-4 border-t border-gray-700">
                                    <img
                                        alt="issuer"
                                        src={certificate.image}
                                        className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="font-medium text-gray-400">
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

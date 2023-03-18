import React from 'react';
import Laptop from '../../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="uppercase text-[#00df9a] font-bold ">
                        Individuelle Webseiten
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Dein Projekt ist meine Aufgabe.
                    </h1>
                    <p>
                        Hallo! Als Gründer und CEO meines Softwareunternehmens
                        arbeite ich eng mit meinem Team zusammen, um
                        maßgeschneiderte Webseiten für unsere Kunden zu
                        erstellen. Wenn du Fragen hast oder an unseren
                        Dienstleistungen interessiert bist, kontaktiere mich
                        gerne persönlich. Wir helfen dir gerne, dein
                        Online-Potenzial voll auszuschöpfen!
                    </p>
                    <a
                        className="bg-black w-[200px] text-[#00df9a] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-center"
                        href="/contact"
                    >
                        Kontaktiere mich
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

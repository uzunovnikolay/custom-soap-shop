"use client";

import { useState } from "react";

const soapTypes = [
    "Hydrating",
    "Deep Cleansing",
    "Gentle",
    "Creamy",
    "Foamy",
    "Exfoliating",
    "Long Lasting",
    "Fresh",
    "Relaxing",
];

const aromas = [
    "Rose",
    "Caramel",
    "Vanilla",
    "Lavender",
    "Lime",
    "Mint",
    "Honey",
    "Coconut",
    "Orange",
    "Eucalyptus",
];

export function SoapConfiguratorSection() {
    const [selectedSoapType, setSelectedSoapType] = useState("");
    const [selectedAromas, setSelectedAromas] = useState<string[]>([]);
    const [initials, setInitials] = useState("");

    const canAddToCart = selectedSoapType && selectedAromas.length > 0;

    function toggleAroma(aroma: string) {
        const isSelected = selectedAromas.includes(aroma);

        if (isSelected) {
            setSelectedAromas(selectedAromas.filter((item) => item !== aroma));
            return;
        }

        if (selectedAromas.length >= 2) {
            return;
        }

        setSelectedAromas([...selectedAromas, aroma]);
    }

    function handleAddToCart() {
        if (!canAddToCart) {
            return;
        }

        alert(
            `Custom soap added:\nType: ${selectedSoapType}\nAromas: ${selectedAromas.join(
                " + ",
            )}\nInitials: ${initials || "None"}`,
        );
    }

    return (
        <section id="create" className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-stone-500">
                    Create your own
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                    Create your soap
                </h2>

                <p className="mt-2 text-stone-600">
                    Choose one soap type, combine up to two aromas, and add initials.
                </p>

                <div className="mt-8 grid gap-6 rounded-3xl border bg-stone-50 p-6 md:grid-cols-3">
                    <div>
                        <label className="text-sm font-semibold">Soap type</label>

                        <select
                            value={selectedSoapType}
                            onChange={(event) => setSelectedSoapType(event.target.value)}
                            className="mt-2 w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-stone-900"
                        >
                            <option value="">Choose type</option>

                            {soapTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-semibold">
                            Aromas{" "}
                            <span className="font-normal text-stone-500">
                ({selectedAromas.length}/2)
              </span>
                        </label>

                        <div className="mt-2 grid grid-cols-2 gap-2">
                            {aromas.map((aroma) => {
                                const checked = selectedAromas.includes(aroma);
                                const disabled = !checked && selectedAromas.length >= 2;

                                return (
                                    <label
                                        key={aroma}
                                        className={`flex items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm ${
                                            disabled
                                                ? "cursor-not-allowed opacity-40"
                                                : "cursor-pointer hover:border-stone-400"
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            disabled={disabled}
                                            onChange={() => toggleAroma(aroma)}
                                        />
                                        {aroma}
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-semibold">Initials</label>

                        <input
                            type="text"
                            value={initials}
                            onChange={(event) => setInitials(event.target.value)}
                            placeholder="Н.У."
                            maxLength={5}
                            className="mt-2 w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-stone-900"
                        />

                        <p className="mt-2 text-xs text-stone-500">
                            Max 5 characters. Example: Н.У. / NU / N.U.
                        </p>

                        <div className="mt-6 rounded-2xl bg-white p-4 text-sm">
                            <p className="font-semibold">Your soap</p>

                            <p className="mt-2 text-stone-600">
                                Type: {selectedSoapType || "Not selected"}
                            </p>

                            <p className="text-stone-600">
                                Aromas:{" "}
                                {selectedAromas.length > 0
                                    ? selectedAromas.join(" + ")
                                    : "Not selected"}
                            </p>

                            <p className="text-stone-600">
                                Initials: {initials || "None"}
                            </p>
                        </div>

                        <button
                            disabled={!canAddToCart}
                            onClick={handleAddToCart}
                            className="mt-6 w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-300"
                        >
                            Add custom soap to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
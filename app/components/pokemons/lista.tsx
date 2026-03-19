"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Customer from "@/public/photo.jpeg"
export default function Home() {

//  const [pokemon, setPokemon] = useState([])
  const [pokemon, setPokemon] = useState<any[]>([])
  useEffect(() => {

    const loadPokemon = async () => {

      const list = []

      for (let i = 1; i <= 151; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await res.json()
        list.push(data)
      }

      setPokemon(list)
    }

    loadPokemon()

  }, [])

  return (

    <main className="bg-gray-100 min-h-screen">

      <header className="072543 text-black text-center py-6 text-2xl md:text-4xl font-bold">
        Mis Pokémons 
      </header>

      <div className="flex justify-center py-6 px-4">
        <div className="w- max-w-xs md:max-w-sm lg:max-w-md">
          <Image
            src={Customer}
            alt="Foto"
            width={100}
            height={100}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* GRID RESPONSIVE */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-10">

        {pokemon.map(p => (

          <div
            key={p.id}
            className="bg-white rounded-xl p-3 md:p-4 text-center shadow-md hover:scale-105 transition"
          >

            {/* IMAGEN RESPONSIVE */}
            <img
              src={p.sprites.front_default}
              alt={p.name}
              className="w-full h-auto max-w-[120px] mx-auto"
            />

            {/* TEXTO RESPONSIVE */}
            <div className="mt-2 font-bold capitalize text-sm sm:text-base md:text-lg text-black">
              {p.name}
            </div>

          </div>

        ))}

      </section>

    </main>

  )
}
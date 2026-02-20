"use client";
import Image from "next/image";
import Link from "next/link";
function Card({ filteredCountries }) {
  return (
    <>
      <div className="px-6 grid grid-cols-1 sm:px-14 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:px-0">
        {filteredCountries.map((countrie, index) => (
          <Link
            key={index}
            href={`/detail/${countrie.cca2}`}
            className="flex flex-col gap-6 bg-element-bg rounded-md shadow pb-4"
          >
            {/*container max 1440px,div=viewport  */}
            <div className="relative w-full aspect-[2/1]">
              <Image
                fill
                src={countrie.flags.png}
                alt="flag"
                sizes="(max-width:767px) 100vw, (max-width:1023px) 33vw, (max-width:1339px) 25vw, 360px"
                className="rounded-t-md"
                loading="eager"
              />
            </div>
            <div className="px-4 flex flex-col gap-4">
              <h1 className="font-bold text-xl md:text-lg">
                {countrie.name.common}
              </h1>
              <div>
                <p className="font-semibold md:text-sm">
                  Pupulation:
                  <span className="font-normal"> {countrie.population}</span>
                </p>
                <p className="font-semibold md:text-sm">
                  Region:<span className="font-normal"> {countrie.region}</span>
                </p>
                <p className="font-semibold md:text-sm">
                  Capital:
                  <span className="font-normal"> {countrie.capital}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {filteredCountries.length === 0 && (
        <div className="text-center">
          <h1 className="text-rose-500 text-xl font-bold">
            No countries found.
            <br />
            Try adjusting your search or filter.
          </h1>
        </div>
      )}
    </>
  );
}

export default Card;

import Image from "next/image";
import { use } from "react";
import BorderCountries from "./BorderCountries";
const DetailCountrie = ({ dataDetailPromise }) => {
  const { success, data, error } = use(dataDetailPromise);

  if (!success) {
    return (
      <div className="p-4 text-red-400 border border-red-400 bg-red-50/5 rounded-md">
        <p className="font-semibold">Failed to load data</p>
        <p className="text-sm opacity-80">{error}</p>
      </div>
    );
  }
  const {
    name,
    capital,
    languages,
    flags,
    tld,
    currencies,
    altSpellings,
    population,
    region,
    subregion,
    borders,
  } = data;
  return (
    <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-2 md:gap-12 md:items-center">
      <div className="relative w-full aspect-[2/1] md:aspect-[3/2]">
        <Image
          fill
          src={flags.png}
          alt="flag"
          sizes="(max-width:767px) 100vw, (max-width:1339px) 50vw, 720px "
          className="rounded-md"
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl">{name.common}</h1>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:w-full">
          <div className="space-y-2">
            <p className="font-semibold md:text-sm">
              Native Name:
              <span className="font-normal ml-1">{altSpellings[1]}</span>
            </p>
            <p className="font-semibold md:text-sm">
              Population:
              <span className="font-normal ml-1">{population}</span>
            </p>
            <p className="font-semibold md:text-sm">
              Region:<span className="font-normal ml-1">{region}</span>
            </p>
            <p className="font-semibold md:text-sm">
              Subregion: <span className="font-normal ml-1">{subregion}</span>
            </p>
            <p className="font-semibold md:text-sm">
              Capital: <span className="font-normal ml-1">{capital[0]}</span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold md:text-sm">
              Top Level Domain:
              <span className="font-normal"> {tld[0]}</span>
            </p>
            <p className="font-semibold md:text-sm">
              Currencies:
              <span className="font-normal ml-1">
                {Object.values(currencies)
                  .map((c) => c.name)
                  .join(", ")}
              </span>
            </p>
            <p className="font-semibold md:text-sm">
              Languages:
              <span className="font-normal ml-1">
                {Object.values(languages).join(", ")}
              </span>
            </p>
          </div>
        </div>
        <BorderCountries borders={borders} />
      </div>
    </div>
  );
};

export default DetailCountrie;

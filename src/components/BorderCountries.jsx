import Link from "next/link";

export default async function BorderCountries({ borders }) {
  if (!borders?.length) return <p>No Borders</p>;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTRIES}/alpha?codes=${borders.join(",")}&fields=name,cca2`,
    );

    if (!res.ok) {
      return <p className="text-sm text-gray-400">Failed to load borders</p>;
    }

    const countries = await res.json();

    return (
      <div className="flex flex-col md:flex-row gap-2 md:items-center md:flex-wrap">
        <h1 className="font-semibold text-base md:text-sm">
          Border Countries :
        </h1>
        <div className="flex flex-row gap-2 flex-wrap">
          {countries.map((c) => (
            <Link
              key={c.cca2}
              href={`/detail/${c.cca2}`}
              className="bg-element-bg text-sm font-semibold px-4 py-2 rounded-md cursor-pointer shadow-element-box"
            >
              {c.name.common}
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <p>Failed to load border countries.</p>;
  }
}

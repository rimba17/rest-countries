export const getDetailCountrieByCCA2 = async (cca2) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTRIES}/alpha/${cca2}?fields=name,capital,languages,flags,tld,currencies,altSpellings,population,region,subregion,borders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      let apiError = "";

      try {
        const errorData = await res.json();
        apiError = errorData?.message || errorData.error || "";
      } catch (error) {}

      return {
        success: false,
        data: null,
        error: apiError || "Failed to fetch detail countrie",
      };
    }

    const json = await res.json();
    return {
      success: true,
      data: json,
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: err.message || "Unknown error",
    };
  }
};

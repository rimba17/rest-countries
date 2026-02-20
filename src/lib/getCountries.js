export async function getCountries() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COUNTRIES}/all?fields=name,population,region,capital,flags,cca2`,
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
        const errData = await res.json();
        apiError = errData?.message || errData?.error || "";
      } catch {}

      return {
        success: false,
        error: apiError || "Failed to fetch countries",
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
}

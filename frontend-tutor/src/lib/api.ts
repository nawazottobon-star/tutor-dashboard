const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";

// 🔍 Debug log (safe, does not affect functionality)
if (typeof window !== "undefined") {
  console.log("API_BASE_URL (resolved at build time):", rawBaseUrl);
}

export const API_BASE_URL = rawBaseUrl.replace(/\/+$/, "");
console.log("VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);
console.log("API_BASE_URL computed:", API_BASE_URL);


export function buildApiUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

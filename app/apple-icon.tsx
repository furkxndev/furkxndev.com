import { ImageResponse } from "next/og";

/**
 * iOS ana ekran ikonu. Safari SVG favicon'u ana ekrana sabitlerken kullanmaz,
 * `apple-touch-icon` olarak 180x180 PNG ister. iOS köşeleri kendi maskeler,
 * bu yüzden görsel tam kanar (şeffaflık ya da yuvarlatma yok).
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c8cff 0%, #35d6c3 100%)",
          color: "#06070a",
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: -6,
        }}
      >
        fc
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.fullName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#070d18",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            background: "#5f8a62",
          }}
        />
        <div
          style={{
            color: "#8a97ab",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Open to work · Pune, India
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#f2eee2",
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: -4,
            lineHeight: 1.05,
          }}
        >
          Shabbir Ezzuddin
        </div>
        <div
          style={{
            color: "#d4af6a",
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: -4,
            lineHeight: 1.05,
          }}
        >
          Malegaonwala
        </div>
        <div style={{ color: "#8a97ab", fontSize: 30, marginTop: 28 }}>
          AI Engineer · LLM Systems · Data Science
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 56,
          borderTop: "1px solid #16243c",
          paddingTop: 32,
        }}
      >
        {[
          ["52,647", "listings engineered"],
          ["13/13", "tests on a merged PR"],
          ["51,532", "records profiled"],
        ].map(([value, label]) => (
          <div key={label} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#d4af6a", fontSize: 38 }}>{value}</div>
            <div style={{ color: "#8a97ab", fontSize: 20, marginTop: 6 }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}

import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const imageData = await fetch(new URL("./Bg.jpg", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          position: "relative",
          color: "white",
        }}
      >
        <img
          width="100%"
          height="100%"
          src={imageData}
          style={{ position: "absolute" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            background: "rgba(2, 15, 8, 0.50)",
          }}
        >
          <h1 style={{ fontSize: "72px" }}>CarpTravel</h1>
          <p>UNCOVER CARPATHIAN'S SECRETS</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

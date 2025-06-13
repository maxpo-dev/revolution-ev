const GOOGLE_SCRIPTS_API_KEY = process.env.GOOGLE_SCRIPTS_API_KEY ?? "";

export const POST = async (request: Request) => {
  try {
    if (!GOOGLE_SCRIPTS_API_KEY) {
      return new Response("Missing Google Scripts API key", { status: 500 });
    }

    const formData = await request.json();

    const scriptResponse = await fetch(GOOGLE_SCRIPTS_API_KEY, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await scriptResponse.json();

    if (result.status === "success") {
      return new Response("OK", { status: 200 });
    } else {
      return new Response(
        `Google Script Error: ${result.message || "Unknown error"}`,
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("POST error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};

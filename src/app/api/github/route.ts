import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const username = "ankitpremiji";
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("GitHub API failed");

    const data = await res.json();
    return NextResponse.json({
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      name: data.name,
    });
  } catch {
    return NextResponse.json({ public_repos: 10, followers: 20, following: 15, name: "Ankit Premi" });
  }
}

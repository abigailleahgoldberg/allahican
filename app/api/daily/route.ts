import { NextResponse } from "next/server";
import { ayahs } from "@/app/data/ayahs";

export async function GET() {
  const now = new Date();
  // Day of year (0-indexed)
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = dayOfYear % ayahs.length;
  const ayah = ayahs[index];

  return NextResponse.json({
    text: ayah.text,
    reference: ayah.reference,
    surah: ayah.surah,
    ayah: ayah.ayahNumber,
    theme: ayah.theme,
  });
}

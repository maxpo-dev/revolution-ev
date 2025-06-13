// app/api/media-partners/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const mediaPartners = await prisma.mediaPartner.findMany();

    const safePartners = mediaPartners.map((partner) => ({
      ...partner,
      priority: Number(partner.priority), // Convert BigInt to Number
      projectId: partner.projectId.toString(), // Ensure ObjectId is string
      createdAt: partner.createdAt.toISOString(), // Convert Date
      updatedAt: partner.updatedAt.toISOString(), // Convert Date
    }));

    return NextResponse.json(safePartners);
  } catch (error) {
    console.error('Error fetching media partners:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media partners' },
      { status: 500 }
    );
  }
}

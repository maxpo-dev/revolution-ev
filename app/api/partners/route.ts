// app/api/partners/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const partners = await prisma.partner.findMany();
    return NextResponse.json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 });
  }
}

// app/api/exhibitors/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../lib/prisma';


const prisma = new PrismaClient();

export async function GET() {
  try {
    const exhibitors = await prisma.exhibitor.findMany();
    return NextResponse.json(exhibitors);
  } catch (error) {
    console.error('Error fetching exhibitors:', error);
    return NextResponse.json({ error: 'Failed to fetch exhibitors' }, { status: 500 });
  }
}

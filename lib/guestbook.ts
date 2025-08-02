import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getGuestbookEntries() {
  try {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc'
      }
    });
    
    return entries.map(entry => ({
      id: entry.id,
      body: entry.body,
      created_by: entry.created_by,
      updated_at: entry.updated_at.toISOString()
    }));
  } catch (error) {
    console.error('Error fetching guestbook entries:', error);
    return [];
  }
}

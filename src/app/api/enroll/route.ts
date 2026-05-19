import { NextResponse } from 'next/server';
import { appendEnrollmentToSheet, validateEnrollmentPayload } from '@/lib/enrollment';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validated = validateEnrollmentPayload(payload);

    if (!validated.valid || !validated.data) {
      return NextResponse.json(
        { ok: false, error: 'Validation failed', details: validated.errors },
        { status: 400 }
      );
    }

    await appendEnrollmentToSheet(validated.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Enrollment submit failed', error);
    return NextResponse.json(
      { ok: false, error: 'Enrollment service unavailable' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import ipRangeCheck from 'ip-range-check';
import { supabase } from 'lib/supabase';

const allowed = ['192.168.1.0/24'];

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    '0.0.0.0';

  if (!ipRangeCheck(ip, allowed)) {
    return NextResponse.json(
      { error: 'Okul ağı dışında' },
      { status: 403 }
    );
  }

  const { name, studentNo, lesson } = await req.json();

  await supabase.from('attendance').insert([
    {
      name,
      student_no: studentNo,
      lesson,
      ip
    }
  ]);

  return NextResponse.json({ success: true });
}

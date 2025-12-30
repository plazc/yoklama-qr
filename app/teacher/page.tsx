'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export default function TeacherPage() {
  const [qr, setQr] = useState('');

  useEffect(() => {
    QRCode.toDataURL(
      'https://yoklama-qr.vercel.app/join'
    ).then(setQr);
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h2>Yoklama QR</h2>
      {qr && <img src={qr} />}
    </main>
  );
}

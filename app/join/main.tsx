'use client';

import { useState } from 'react';

export default function JoinPage() {
  const [name, setName] = useState('');
  const [studentNo, setStudentNo] = useState('');
  const [msg, setMsg] = useState('');

  const submit = async () => {
    const res = await fetch('/api/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        studentNo,
        lesson: 'EE4078'
      })
    });

    const data = await res.json();
    setMsg(data.error || 'Katılım başarılı');
  };

  return (
    <main style={{ padding: 40 }}>
      <h2>Yoklamaya Katıl</h2>

      <input
        placeholder="Ad Soyad"
        onChange={e => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Öğrenci No"
        onChange={e => setStudentNo(e.target.value)}
      />
      <br /><br />

      <button onClick={submit}>Katıl</button>

      <p>{msg}</p>
    </main>
  );
}

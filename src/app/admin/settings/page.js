"use client";
import { useEffect, useState } from 'react';

export default function AdminSettingsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    (async () => {
      try {
        const res = await fetch('/api/admin/settings', { headers: { Authorization: `Bearer ${token}` } });
        if (res.ok) {
          const json = await res.json();
          setEmail(json.email || '');
        }
      } catch {}
    })();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    const token = localStorage.getItem('token');
    if (!token) { setStatus('Not authenticated'); return; }
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ email, password: password || undefined }),
      });
      if (!res.ok) throw new Error('Failed to update');
      setPassword('');
      setStatus('Updated');
    } catch (e) {
      setStatus(e.message);
    }
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-xl font-semibold mb-4">Admin settings</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Superadmin email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">New password (optional)</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Leave blank to keep current" />
        </div>
        <button type="submit" className="bg-[#8ac240] text-white px-4 py-2 rounded hover:bg-[#6ea030]">Save</button>
        {status && <div className="text-sm mt-2">{status}</div>}
      </form>
    </div>
  );
}
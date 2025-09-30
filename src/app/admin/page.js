"use client";
import { useEffect, useMemo, useState } from 'react';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({ totals: { totalUsers: 0, totalQuizzes: 0 }, users: [] });
  const [expanded, setExpanded] = useState({}); // { [userId]: true }
  const [attemptsByUser, setAttemptsByUser] = useState({}); // { [userId]: { attempts, total, loading, error } }
  const [q, setQ] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not authenticated');
      setLoading(false);
      return;
    }
    const run = async () => {
      try {
        const res = await fetch('/api/admin/metrics', { headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error('Failed to load metrics');
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!q) return data.users;
    const s = q.toLowerCase();
    return (data.users || []).filter(u => (u.name || '').toLowerCase().includes(s) || (u.email || '').toLowerCase().includes(s));
  }, [data.users, q]);

  const toggleExpand = async (userId) => {
    setExpanded(prev => ({ ...prev, [userId]: !prev[userId] }));
    if (!attemptsByUser[userId]) {
      const token = localStorage.getItem('token');
      setAttemptsByUser(prev => ({ ...prev, [userId]: { attempts: [], total: 0, loading: true, error: '' } }));
      try {
        const res = await fetch(`/api/admin/user-activity/${userId}?limit=50`, { headers: { Authorization: `Bearer ${token}` } });
        if (!res.ok) throw new Error('Failed to load attempts');
        const json = await res.json();
        setAttemptsByUser(prev => ({ ...prev, [userId]: { ...json, loading: false, error: '' } }));
      } catch (e) {
        setAttemptsByUser(prev => ({ ...prev, [userId]: { attempts: [], total: 0, loading: false, error: e.message } }));
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Users (with activity)" value={data.totals.totalUsers} />
        <StatCard label="Total quizzes" value={data.totals.totalQuizzes} />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between gap-3 flex-wrap">
          <div className="font-semibold">User quiz activity</div>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name or email" className="border rounded px-3 py-1 text-sm w-full sm:w-64"/>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Total attempts</Th>
                <Th>Breakdown</Th>
                <Th></Th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u) => (
                <>
                  <tr key={u.userId} className="border-t hover:bg-gray-50">
                    <Td>
                      <div className="font-medium">{u.name}</div>
                      <div className="text-xs text-gray-500">ID: {u.userId}</div>
                    </Td>
                    <Td>{u.email}</Td>
                    <Td>{u.totalQuizzes}</Td>
                    <Td>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(u.countsByType || {}).map(([k, v]) => (
                          <span key={k} className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">{k}: {v}</span>
                        ))}
                      </div>
                    </Td>
                    <Td>
                      <button onClick={() => toggleExpand(u.userId)} className="text-[#8ac240] border border-[#8ac240] hover:bg-[#8ac240] hover:text-white transition rounded px-3 py-1 text-xs font-semibold">
                        {expanded[u.userId] ? 'Hide attempts' : 'View attempts'}
                      </button>
                    </Td>
                  </tr>
                  {expanded[u.userId] && (
                    <tr className="bg-gray-50/80">
                      <td colSpan={5} className="px-4 py-3">
                        <UserAttempts userId={u.userId} attemptsState={attemptsByUser[u.userId]} />
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function UserAttempts({ userId, attemptsState }) {
  if (!attemptsState || attemptsState.loading) {
    return <div className="text-gray-500 text-sm">Loading attempts…</div>;
  }
  if (attemptsState.error) {
    return <div className="text-red-600 text-sm">{attemptsState.error}</div>;
  }
  const { attempts = [], total = 0 } = attemptsState;
  if (attempts.length === 0) {
    return <div className="text-gray-500 text-sm">No attempts yet.</div>;
  }
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Showing {attempts.length} of {total}</span>
      </div>
      <ul className="divide-y rounded border bg-white">
        {attempts.map((a) => (
          <li key={a._id} className="p-3 flex items-center justify-between gap-3">
            <div>
              <div className="font-medium">{a.title}
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{a.type || '—'}</span>
              </div>
              <div className="text-xs text-gray-500">{new Date(a.createdAt).toLocaleString()}</div>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={`/dashboard/result/${a._id}`} className="text-[#8ac240] hover:underline text-sm font-semibold">View result</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}

function Th({ children }) { return <th className="text-left px-4 py-2 font-medium text-gray-600">{children}</th>; }
function Td({ children }) { return <td className="px-4 py-3 align-top">{children}</td>; }

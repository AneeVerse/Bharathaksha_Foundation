"use client";
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({ totals: { totalUsers: 0, totalQuizzes: 0 }, users: [] });

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Users (with activity)" value={data.totals.totalUsers} />
        <StatCard label="Total quizzes" value={data.totals.totalQuizzes} />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b font-semibold">User quiz activity</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Total</Th>
                <Th>Last quiz</Th>
                <Th>By type</Th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((u) => (
                <tr key={u.userId} className="border-t">
                  <Td>{u.name}</Td>
                  <Td>{u.email}</Td>
                  <Td>{u.totalQuizzes}</Td>
                  <Td>
                    <div className="flex flex-col">
                      <span className="font-medium">{u.lastQuizTitle || '-'}</span>
                      <span className="text-xs text-gray-500">{u.lastQuizType || '-'} · {u.lastQuizAt ? new Date(u.lastQuizAt).toLocaleString() : '-'}</span>
                    </div>
                  </Td>
                  <Td>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(u.countsByType || {}).map(([k, v]) => (
                        <span key={k} className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">{k}: {v}</span>
                      ))}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
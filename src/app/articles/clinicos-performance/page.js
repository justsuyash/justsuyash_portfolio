"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ClinicosPerformancePage = () => {
    return (
        <main style={{ paddingTop: '120px', paddingBottom: '100px', backgroundColor: '#050505' }}>
            <article className="container" style={{ maxWidth: '800px' }}>
                <Link href="/articles" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: '48px',
                    fontSize: '0.9rem', fontWeight: 500
                }}>
                    <ArrowLeft size={16} /> Back to Articles
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <header style={{ marginBottom: '64px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px' }}>
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '4px 12px', background: 'rgba(255,255,255,0.05)',
                                borderRadius: '4px', fontSize: '0.75rem', color: '#bd00ff',
                                fontFamily: 'monospace', border: '1px solid rgba(189, 0, 255, 0.2)'
                            }}>
                                <Tag size={12} /> DEEP DIVE
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Calendar size={12} /> JUN 2026
                            </span>
                            <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace'
                            }}>
                                <Clock size={12} /> 8 MIN READ
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 700,
                            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '24px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            How I Cut ClinicOS Page Load Times by 14× — A Solo Dev's Performance Deep Dive
                        </h1>
                        <p style={{
                            fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
                            fontFamily: 'system-ui, sans-serif', marginTop: '16px'
                        }}>
                            A real-world walkthrough of diagnosing and fixing 5–9 second page loads in a Next.js + Neon PostgreSQL healthcare SaaS — from TCP handshakes to optimistic UI.
                        </p>
                    </header>

                    <div className="article-content" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8, fontFamily: 'Georgia, serif' }}>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Problem</h3>
                        <p style={{ marginBottom: '32px' }}>
                            I built ClinicOS with my brother, who is a doctor. I designed it by sitting in his clinic, observing his workflow, and watching him work. As someone who likes to attack a problem fast, wrap it up, and keep moving, I know exactly how deeply a loading screen kills momentum when you have 500 other things to take care of.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            <Link href="/ventures/clinicos" style={{ color: '#bfff00', textDecoration: 'underline', textUnderlineOffset: '4px' }}>ClinicOS</Link> handles real-time AI transcription of consultations, auto-generated prescriptions, and appointment queuing. The stack is Next.js 14 App Router, PostgreSQL on Neon, Prisma ORM, and TypeScript — deployed on Vercel.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            When I first built it, every page load took <strong>5–9 seconds</strong>. Opening the Appointments page or Inventory meant staring at a blank screen that eventually flashed data in all at once.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            For my brother, waiting on a spinner is worse than an annoyance. There are ailing patients sitting outside; just walking into the exam room gives those patients the assurance that they are finally going to get better. A doctor cannot provide that presence if they are stuck at a desk, staring at a blank screen waiting for a patient's history to load.
                        </p>
                        <p style={{ marginBottom: '32px' }}>
                            In a clinical environment, a 5-second delay isn't a "UX bottleneck" — it is a product-killing problem. This is the story of how I found the root causes and fixed them, ordered by actual impact.
                        </p>
                        
                        <div style={{ margin: '48px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="/images/clinicos/prescriptionGeneration.png" alt="ClinicOS Screen" style={{ width: '100%', display: 'block' }} />
                        </div>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Step 1: Measure Before You Touch Anything</h3>
                        <p style={{ marginBottom: '32px' }}>
                            The first instinct when something is "slow" is to start optimizing. The correct instinct is to <strong>instrument first</strong>.
                        </p>
                        <p style={{ marginBottom: '16px' }}>
                            I dropped some server-side timing into the appointments GET handler:
                        </p>
                        
                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`console.time('[APT] doctor lookup')
const doctor = await getDoctorByUserId(userId)
console.timeEnd('[APT] doctor lookup')

console.time('[APT] appointment query')
const appointments = await db.appointment.findMany({ ... })
console.timeEnd('[APT] appointment query')`}</code>
                        </pre>

                        <p style={{ marginBottom: '16px' }}>
                            The dev server logs told the real story immediately:
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`[APT] auth():                    3ms   ✅
[APT] doctor lookup:          1449ms   🔴
[APT] appointment query:      2765ms   🔴
[APT] total GET:              4220ms`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px' }}>
                            The page navigation itself (<code>GET /tools/appointments</code>) was 19–28ms. Fast. The slow part was entirely the <strong>API data fetch</strong> — and within that, the doctor lookup alone was costing 1,449ms before a single appointment was even queried.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Step 2: The Real Root Cause — TCP Latency</h3>
                        <p style={{ marginBottom: '16px' }}>
                            A direct TCP connect test to the Neon database endpoint revealed the truth:
                        </p>
                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`TCP connect to ep-red-recipe-aqh8so5n-pooler.c-8.us-east-1.aws.neon.tech:5432
→ 1,589ms`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px' }}>
                            The development machine was wherever I happened to be traveling — at the time, India — while the Neon database was sitting in us-east-1, Virginia. Every query was crossing 11,000 km of undersea cable. Twice. This wasn't negligence; it was just the reality of building on the go with a cloud DB you provisioned once and never thought about again.
                        </p>
                        
                        <p style={{ marginBottom: '16px' }}>The full cold connection cost broke down like this:</p>
                        
                        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Step</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>TCP connect (port 5432)</td>
                                        <td style={{ padding: '12px 8px' }}>~1,589ms</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>TLS 1.3 handshake</td>
                                        <td style={{ padding: '12px 8px' }}>~300ms</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>PostgreSQL auth</td>
                                        <td style={{ padding: '12px 8px' }}>~200ms</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px 8px', fontWeight: 'bold', color: '#fff' }}>Total cold connection</td>
                                        <td style={{ padding: '12px 8px', fontWeight: 'bold', color: '#fff' }}>~2,089ms</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            With two sequential DB calls per request (doctor lookup → appointment query), I was paying this penalty <strong>twice</strong>. That alone accounted for 4–5 seconds of the observed latency — before any query execution time.
                        </p>

                        <p style={{ marginBottom: '32px' }}>
                            Your dev environment latency ≠ your production latency, but it absolutely predicts which queries will hurt in production when your users are geographically distant from your DB.
                        </p>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>The Fix Stack</h3>
                        <p style={{ marginBottom: '32px' }}>I implemented nine distinct fixes, ordered here by measured impact.</p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 1: The WebSocket Adapter — Stop Paying for TCP Handshakes</h4>
                        <p style={{ marginBottom: '16px' }}>
                            The root problem was <strong>port 5432 over TCP</strong>. My fix was switching to the Neon serverless WebSocket adapter, which tunnels the PostgreSQL wire protocol over <strong>port 443 (HTTPS)</strong>:
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`// Before: TCP :5432 → 1,589ms cold connect
const db = new PrismaClient()

// After: WebSocket :443 → reuses HTTPS session
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

neonConfig.webSocketConstructor = ws
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaNeon(pool)
const db = new PrismaClient({ adapter })`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px' }}>
                            Port 443 already has an established TLS session from the app itself. The WebSocket upgrade rides on top of it — no new TCP handshake for subsequent queries. This is particularly important for <strong>Vercel serverless functions</strong>, which drop and recreate connections constantly. Every cold-start was paying the full 2,089ms connection tax. Now it doesn't.
                        </p>

                        <p style={{ marginBottom: '16px' }}><strong>Measured result:</strong></p>
                        
                        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Call</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Before</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>After</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Cold (first request)</td>
                                        <td style={{ padding: '12px 8px' }}>4,200–8,800ms</td>
                                        <td style={{ padding: '12px 8px' }}>~600ms</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Warm (subsequent)</td>
                                        <td style={{ padding: '12px 8px' }}>4,200ms</td>
                                        <td style={{ padding: '12px 8px' }}>~298ms</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            <strong>14× faster on warm calls.</strong> This is the single change that moved the needle most.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 2: Database Indexes — Stop Scanning Every Row</h4>
                        <p style={{ marginBottom: '16px' }}>
                            I had no indexes on any of the critical query columns. Every lookup was a full table scan — Postgres reading every row in the table to find a handful of matches.
                        </p>
                        
                        <p style={{ marginBottom: '16px' }}>
                            I wrote a single Prisma migration to add five critical indexes:
                        </p>

                        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Model</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Index</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Query Eliminated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}><code>Appointment</code></td>
                                        <td style={{ padding: '12px 8px' }}><code>(doctorId, scheduledAt)</code></td>
                                        <td style={{ padding: '12px 8px' }}>Full scan on every appointments page load</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}><code>Appointment</code></td>
                                        <td style={{ padding: '12px 8px' }}><code>(doctorId, status)</code></td>
                                        <td style={{ padding: '12px 8px' }}>Queue filter on status</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}><code>Medicine</code></td>
                                        <td style={{ padding: '12px 8px' }}><code>(clinicId)</code></td>
                                        <td style={{ padding: '12px 8px' }}>Full scan on inventory page</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}><code>Encounter</code></td>
                                        <td style={{ padding: '12px 8px' }}><code>(doctorId, createdAt)</code></td>
                                        <td style={{ padding: '12px 8px' }}>Sequential scan on dashboard metrics</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}><code>SalesRecord</code></td>
                                        <td style={{ padding: '12px 8px' }}><code>(dispensedAt)</code></td>
                                        <td style={{ padding: '12px 8px' }}>Sequential scan on velocity queries</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            With indexes in place, once the Neon connection is warm, query execution time dropped from ~500ms to ~30ms.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 3: In-Process Caching — Stop Querying What Doesn't Change</h4>
                        <p style={{ marginBottom: '16px' }}>
                            <code>db.doctor.findUnique({`{ where: { clerkUserId } }`})</code> was being called on <strong>every single API route</strong>. Each call paid the full Neon round-trip.
                        </p>
                        
                        <p style={{ marginBottom: '16px' }}>I fixed this with a module-level <code>Map</code> with a 5-minute TTL:</p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`const doctorCache = new Map<string, { doctor: Doctor; expiresAt: number }>()

export async function getDoctorByUserId(userId: string | null) {
  if (userId) {
    const cached = doctorCache.get(userId)
    if (cached && Date.now() < cached.expiresAt) return cached.doctor // 0ms

    const doctor = await db.doctor.findUnique({ where: { clerkUserId: userId } })
    doctorCache.set(userId, { doctor, expiresAt: Date.now() + 5 * 60_000 })
    return doctor
  }
  return db.doctor.findFirst()
}`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                            Note on Serverless Volatility: Yes, serverless memory is volatile and Vercel containers tear down. But doctors use this app in dense, continuous 4-hour blocks. Once a container warms up for a clinic's burst of traffic, the cache hit rate is near 99% during their shift. A Redis roundtrip would be 30ms; local memory is 0ms. I took the 0ms.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 4: Remove Unbounded AuditLog Queries — The N+1 Trap</h4>
                        <p style={{ marginBottom: '16px' }}>
                            The appointments GET handler was running <strong>two</strong> <code>AuditLog</code> queries on every page load:
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`// No take, no date filter = entire table, grows unboundedly
const auditLogs = await db.auditLog.findMany({
  where: { clinicId, entityType: 'APPOINTMENT' }
})`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px' }}>
                            This first query had no <code>take</code> limit and no date filter. On Day 1, with 10 logs, it took 5ms. On Day 30, with 5,000 logs, it was taking 300ms. By Year 1, dragging all that data into Node.js memory would have started causing Vercel function timeouts or OOM crashes.
                        </p>
                        
                        <p style={{ marginBottom: '32px' }}>
                            <strong>The fix:</strong> I removed both audit queries from the primary GET entirely and created a separate lazy endpoint that only fires when the doctor explicitly opens the audit panel. <strong>Zero audit queries on page load.</strong>
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 5: Nested Prisma Joins — Let Postgres Do the Work</h4>
                        <p style={{ marginBottom: '16px' }}>
                            The dashboard had an artificial 2-batch query pattern. Batch 1 fetched all encounter IDs into Node.js memory. Batch 2 then used those IDs as a Postgres <code>IN</code> filter.
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`// Before: 2 sequential awaits, IDs loaded into memory
const [doctorEncounters] = await Promise.all([
  db.encounter.findMany({ select: { id: true } }),
])
const encounterIds = doctorEncounters.map(e => e.id)

// Batch 2 blocked until batch 1 completes
const [sales] = await Promise.all([
  db.salesRecord.aggregate({ where: { encounterId: { in: encounterIds } } }),
])

// After: single Promise.all, 16 queries in parallel
const [sales] = await Promise.all([
  db.salesRecord.aggregate({
    where: { encounter: { doctorId: doctor.id } }, // Postgres does the join
    _sum: { revenue: true }
  }),
])`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px' }}>
                            One full Neon round-trip eliminated. All 16 queries now fire simultaneously.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 6: Flat Selects — Overfetching is a Silent Killer</h4>
                        <p style={{ marginBottom: '16px' }}>
                            The inventory page was loading a 3-level deep join on every page load — <code>Medicine → DrugProduct → CompositionLinks → Composition</code> — even though the inventory table renders none of that composition data.
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`// After: flat select of exactly what the table renders
db.medicine.findMany({
  select: {
    id: true, name: true, genericName: true, currentStock: true,
    sellingPrice: true, expiryDate: true, status: true,
    drugProductId: true,
  }
})`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px' }}>
                            I cut the data transferred per inventory load by ~80%. Composition details now lazy-load only when a specific medicine is opened for editing.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 7: Optimistic UI on Mutations — Fake It 'Til You Make It</h4>
                        <p style={{ marginBottom: '16px' }}>
                            Dragging a patient's status badge previously triggered a full 5-second re-fetch. My fix was to update local React state immediately, confirm with the server in the background, and roll back on failure.
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`const prev = appointments.find(a => a.id === aptId)

setAppointments(apts =>
  apts.map(a => a.id === aptId ? { ...a, status: newStatus } : a)
)

const res = await fetch(\`/api/tools/appointments/\${aptId}/status\`, {
  method: 'PATCH',
  body: JSON.stringify({ status: newStatus })
})

if (!res.ok) {
  setAppointments(apts =>
    apts.map(a => a.id === aptId ? { ...a, status: prev.status } : a)
  )
}`}</code>
                        </pre>

                        <div style={{ margin: '48px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="/images/clinicos/appointments.png" alt="ClinicOS Drag Drop UI" style={{ width: '100%', display: 'block' }} />
                        </div>

                        <p style={{ marginBottom: '32px' }}>
                            This pattern makes mutations feel instant regardless of network latency.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 8: <code>useRef</code> Cache with Smart Invalidation — Keep It Simple</h4>
                        <p style={{ marginBottom: '16px' }}>
                            Even with optimistic updates, <code>fetchAppointments</code> still fired on date changes. I added a 30-second in-memory cache using <code>useRef</code> to eliminate redundant fetches when navigating back to the same date.
                        </p>

                        <pre style={{ background: '#111', padding: '16px', borderRadius: '8px', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                            <code style={{ color: '#e2e8f0' }}>{`const fetchCache = useRef<Map<string, { data: Appointment[]; ts: number }>>(new Map())
const CACHE_TTL = 30_000

async function fetchAppointments() {
  const key = \`\${format(selectedDate, 'yyyy-MM-dd')}:\${q}\`
  const cached = fetchCache.current.get(key)
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    setAppointments(cached.data) // instant — no network call
    return
  }
  fetchCache.current.set(key, { data: result, ts: Date.now() })
}`}</code>
                        </pre>

                        <p style={{ marginBottom: '32px', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                            Why <code>useRef</code> instead of React Query? I could have brought in SWR or React Query, but it felt like overkill for a single route's caching requirement. A 10-line <code>useRef</code> map solved the problem perfectly with zero bundle-size penalty.
                        </p>

                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#00f3ff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif', marginTop: '40px' }}>Fix 9: Skeleton Loading States — Never Show a Blank Screen</h4>
                        <p style={{ marginBottom: '32px' }}>
                            None of this eliminates the first cold load. For that, I added skeleton screens using Next.js App Router's Suspense boundaries (<code>loading.tsx</code>). These fire automatically before any JavaScript runs, making the perceived wait dramatically shorter.
                        </p>

                        <div style={{ margin: '48px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="/images/clinicos/OverviewDashboard.png" alt="ClinicOS Dashboard Loading State" style={{ width: '100%', display: 'block' }} />
                        </div>

                        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: 'none', margin: '48px 0' }} />

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>Before vs. After</h3>

                        <div style={{ overflowX: 'auto', marginBottom: '48px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Metric</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>Before</th>
                                        <th style={{ padding: '12px 8px', color: '#fff' }}>After</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>API cold call</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>4,200–8,800ms</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>~600ms</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>API warm call</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>4,200ms</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>~298ms</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Doctor lookup (warm)</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>1,449ms</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>0ms (cache)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Dashboard query batches</td>
                                        <td style={{ padding: '12px 8px' }}>2 sequential</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>1 parallel</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Inventory data transferred</td>
                                        <td style={{ padding: '12px 8px' }}>3-level join</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Flat select (~80% less)</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>AuditLog on page load</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>Full table scan</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Removed entirely</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '12px 8px' }}>Empty flash on load</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>Always</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>Never (skeleton)</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px 8px' }}>Status change re-fetch</td>
                                        <td style={{ padding: '12px 8px', color: '#ef4444' }}>5s blocking</td>
                                        <td style={{ padding: '12px 8px', color: '#22c55e' }}>0ms (optimistic)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '16px', fontFamily: 'system-ui, sans-serif' }}>What This Taught Me About Performance</h3>
                        <div style={{
                            padding: '32px', background: 'rgba(34, 197, 94, 0.05)',
                            borderRadius: '8px', borderLeft: '4px solid #22c55e', marginBottom: '40px'
                        }}>
                            <ol style={{ margin: 0, paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '16px' }}><strong>Measure before you optimize.</strong> The instinct to "add indexes" would have saved maybe 500ms. The actual root cause — TCP latency — was worth 10×. You can't guess this. Instrument first.</li>
                                <li style={{ marginBottom: '16px' }}><strong>Every network round-trip is expensive.</strong> In a distributed system, reducing network hops matters more than query optimization when latency is high.</li>
                                <li style={{ marginBottom: '16px' }}><strong>Overfetching is a silent killer.</strong> ORMs make it dangerously easy to drag a 3-level deep object graph across the network. Fetching only what your UI renders saves bandwidth, JSON parsing time, and Node memory.</li>
                                <li style={{ marginBottom: '16px' }}><strong>Perceived performance ≠ actual performance.</strong> Optimistic UI and skeleton screens don't make the app faster — they make it <em>feel</em> faster, which for users is exactly the same thing.</li>
                                <li><strong>Design is often dictated by backend constraints.</strong> Building this completely changed how I look at other products. I don't just see UI elements anymore; I see the backend reasons for them. When I see pagination numbers instead of infinite scroll, I immediately know it's there to keep cache keys predictable and database offsets snappy.</li>
                            </ol>
                        </div>

                        <div style={{ marginTop: '48px', padding: '32px', border: '1px solid #bfff0033', borderRadius: '8px', background: 'rgba(191, 255, 0, 0.03)', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: 'system-ui, sans-serif' }}>Explore ClinicOS</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '0.95rem', fontFamily: 'system-ui, sans-serif' }}>
                                Want to see the final product? Check out the interactive onboarding demo and full feature showcase for ClinicOS.
                            </p>
                            <Link href="/ventures/clinicos" style={{ display: 'inline-block', padding: '10px 24px', background: '#bfff00', color: '#000', fontWeight: 'bold', borderRadius: '6px', textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>
                                View ClinicOS Product Page
                            </Link>
                        </div>

                        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>
                                I'm Suyash — I build ClinicOS, write about software engineering, and teach. When I'm not writing Next.js, I'm a landscape photographer, martial artist, mace instructor, and yoga teacher. If you enjoyed this, <a href="https://x.com/justsuyash" target="_blank" rel="noopener noreferrer" style={{ color: '#bd00ff', textDecoration: 'none' }}>follow me on X/Twitter</a> for tech, or find me on Instagram for the holistic side of things. All my work lives at <a href="https://justsuyash.com" target="_blank" rel="noopener noreferrer" style={{ color: '#bd00ff', textDecoration: 'none' }}>justsuyash.com</a>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </article>
        </main>
    );
};

export default ClinicosPerformancePage;

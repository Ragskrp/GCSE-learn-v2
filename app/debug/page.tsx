"use client"

import { useEffect, useState } from "react"
import { db } from "@/lib/firebase"
import { collection, getDocs, doc, getDoc } from "firebase/firestore"

export default function DebugFirebasePage() {
    const [status, setStatus] = useState("Initializing...")
    const [configCheck, setConfigCheck] = useState<any>({})
    const [collectionData, setCollectionData] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const checkConnection = async () => {
            try {
                // 1. Check Config Existence
                const config = {
                    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "Present" : "Missing",
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID : "Missing",
                    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? "Present" : "Missing",
                }
                setConfigCheck(config)

                // 2. Fetch Subjects
                setStatus("Fetching 'subjects' collection...")
                const subjectsRef = collection(db, "subjects")
                const snapshot = await getDocs(subjectsRef)

                if (snapshot.empty) {
                    setStatus("Connection successful, but collection 'subjects' is EMPTY.")
                } else {
                    const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
                    setCollectionData(docs)
                    setStatus(`Success! Found ${snapshot.size} documents.`)
                }

            } catch (err: any) {
                console.error(err)
                setError(err.message || JSON.stringify(err))
                setStatus("Failed.")
            }
        }

        checkConnection()
    }, [])

    return (
        <div className="p-8 font-mono space-y-6 bg-slate-50 min-h-screen text-slate-800">
            <h1 className="text-2xl font-bold">Firebase Connection Debugger</h1>

            <div className="border p-4 rounded bg-white shadow-sm">
                <h2 className="font-bold mb-2">Environment Config</h2>
                <pre className="text-xs">{JSON.stringify(configCheck, null, 2)}</pre>
            </div>

            <div className={`border p-4 rounded bg-white shadow-sm ${error ? 'border-red-500 bg-red-50' : 'border-green-500'}`}>
                <h2 className="font-bold mb-2">Connection Status</h2>
                <p className="text-lg font-bold">{status}</p>
                {error && <p className="text-red-600 mt-2 break-all">{error}</p>}
            </div>

            {collectionData.length > 0 && (
                <div className="border p-4 rounded bg-white shadow-sm">
                    <h2 className="font-bold mb-2">Data Sample ({collectionData.length})</h2>
                    <div className="max-h-96 overflow-auto">
                        <pre className="text-xs">{JSON.stringify(collectionData, null, 2)}</pre>
                    </div>
                </div>
            )}
        </div>
    )
}

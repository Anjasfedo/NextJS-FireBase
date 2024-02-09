import { app } from "@/lib/config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const db = getFirestore(app);

export async function GET() {
    let data = []
    const q = query(collection(db, "task"), orderBy("createAt", "desc"));

    await onSnapshot(q, (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
            data.push({...doc.data(), id: doc.id})
        });

        console.log(data);
    });

    console.log(data);

    return NextResponse.json({data})
}

export async function POST(request: Request) {
    const { name, title } = await request.json();

    try {
        await addDoc(collection(db, "task"), {
            name,
            title,
            createAt: Timestamp.now(),
        });

        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400 });
    }
}

export async function UPDATE(request: Request, context: any) {
    const { params } = context;
}

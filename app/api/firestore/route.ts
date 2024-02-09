import { app } from "@/lib/config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

const db = getFirestore(app);

export async function GET() {
    const taskCollectionRef = collection(db, 'task');
    const snapshot = await getDocs(taskCollectionRef);

    const tasks = [];
    snapshot.forEach(doc => {
        tasks.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return NextResponse.json({tasks})
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

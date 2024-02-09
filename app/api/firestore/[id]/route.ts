import { Timestamp, doc, updateDoc, deleteDoc,getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "@/lib/config";

export async function GET(request: Request, context: any) {
    const { params } = context;

    const docSnap = await getDoc(doc(db, "task", params.id))

    return NextResponse.json(docSnap.data())
}

export async function PUT(request: Request, context: any) {
    const { name, title } = await request.json();
    const { params } = context;

    await updateDoc(doc(db, "task", params.id), {
        name,
        title,
        updateAt: Timestamp.now()
    })

    return NextResponse.json(params.id)
}

export async function DELETE(request: Request, context: any) {
    const { params } = context;

    await deleteDoc(doc(db, "task", params.id))

    return NextResponse.json(params.id)
}

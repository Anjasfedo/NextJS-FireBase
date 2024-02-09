import { db } from "@/lib/config";
import { collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

type CreateAt = {
    seconds: number;
    nanoseconds: number;
};

type DataType = {
    title: string;
    name: string;
    createAt: CreateAt
};

type TaskData = DataType & {
    id: string;
};

type Doc = {
    id: string
    data: () => any
};


export async function GET() {
    const taskCollectionRef = collection(db, "task");
    
    const snapshot = await getDocs(taskCollectionRef);

    const tasks: TaskData[] = [];
    snapshot.forEach((doc: Doc) => {
        tasks.push({
            id: doc.id,
            ...doc.data(),
        });
    });

    return NextResponse.json({ tasks });
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
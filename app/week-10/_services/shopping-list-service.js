"use client";

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const GetItems = async (userId) => {
    const itemsRef = collection(db, "users", userId, "Items");
    const qSnap = await getDocs(itemsRef);
    const items = [];
    qSnap.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });
}

export const AddItem = async (userId, item) => {
    const itemsRef = collection(db, "users", userId, "Items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
}

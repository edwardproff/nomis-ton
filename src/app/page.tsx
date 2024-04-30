'use client'

import Image from "next/image";
import styles from "./page.module.css";
import {Connect} from "@/app/connect";
import {Score} from "@/app/Score";

export default function Home() {
  return (
    <main>
      <Connect/>
      <Score/>
    </main>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <p style={{width:"50%", backgroundColor:"blue", borderRadius:10, padding:20}}>
        Hello, <br/><br/>
        My name is Eli and I am a software engineer specializating in
        Web Development. I went to the Univertsity of Minnesota
        Duluth. I
      </p>
    </>
  )
}

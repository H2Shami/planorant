import Head from 'next/head'
import Characters from "@/components/Characters";
import Maps from "@/components/Maps";
import Strategies from "@/components/Strategies";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { PrismaClient } from "@prisma/client"


const inter = Inter({ subsets: ['latin'] })

export default function Home({ characters, maps }) {
    return (
    <>
      <Head>
        <title>Planorant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Planorant_Logo.ico" />
      </Head>
      <main className={styles.main}>
          <container style={{display: 'grid', gridTemplateColumns: '18vw 45vw 30vw'}}>
              <Characters characters={characters}/>
              <Strategies/>
              <Maps maps={maps}/>
      </container>
          </main>
    </>
  )
}

/** Calls the PostgreSQL database using prisma from the API folder
 *
 * @returns a json of all the characters
 */
export async function getServerSideProps() {
    const prisma = new PrismaClient();

    //Grab all characters
    const characterResponse = await prisma.Character.findMany();

    //Only grab maps in competitive rotation
    const mapResponse = await prisma.Map.findMany({where: {inRotation: true}});

    return {
        props: {
            characters: characterResponse,
            maps: mapResponse
        },
    };
}

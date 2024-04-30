'use client'

import Image from "next/image";
import yoda from './yoda.png'
import styles from './Score.module.scss'
import useScore from "@/hooks/useScore";
import {useTonConnect} from "@/hooks/useTonConnect";
import {Stats} from "@/app/Stats";
import {useEffect} from "react";
import {Mint} from "@/app/mint";

export function Score() {

  const {connected, wallet} = useTonConnect()
  const {scoreData, isLoading, getScore} = useScore()

  useEffect(() => {
    if (scoreData) return
    getScore()
  }, [wallet])

  if (!connected) return <></>

  if (isLoading) return <>
    <div className={styles.loading}>
      <Image src={yoda} alt="" className={styles.yoda}/>

      <div className={styles.title}>
        We are calculating your Score
      </div>

      <div className={styles.description}>
        Loading...
      </div>
    </div>
  </>

  return <div>

    <div className={styles.card}>

      <div className={styles.body}>
        <div className={styles.icons}>
          <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4544_564)">
              <rect x="2" y="2" width="32" height="32" rx="16" fill="url(#paint0_radial_4544_564)"/>
              <path
                d="M26.2399 12.1733C26.1866 11.6133 25.8933 11.0933 25.4399 10.7467C24.9866 10.4133 24.3999 10.28 23.8399 10.4C23.5866 10.4533 23.3199 10.5867 22.7999 10.84C22.3733 11.0533 22.1599 11.16 21.9466 11.2533C21.0666 11.6 20.1066 11.6667 19.1866 11.4533C18.9599 11.4 18.7333 11.32 18.2799 11.1733L17.5466 10.9333C15.8533 10.3733 15.0133 10.0933 14.1733 10.24C13.3733 10.3867 12.6533 10.8133 12.1599 11.4533C11.6266 12.12 11.4799 13.0133 11.1866 14.76L9.86661 22.72C9.77328 23.3067 9.71994 23.5733 9.74661 23.8267C9.79994 24.3867 10.0933 24.9067 10.5466 25.2533C10.9999 25.5867 11.5866 25.72 12.1333 25.6C12.3866 25.5467 12.6533 25.4133 13.1999 25.1333C13.6133 24.9333 13.8133 24.8267 14.0266 24.7467C14.9066 24.4 15.8666 24.3333 16.7866 24.5467C17.0133 24.6 17.2399 24.68 17.6933 24.8267L18.4266 25.0667C19.8133 25.52 20.6266 25.8 21.3466 25.8C21.5066 25.8 21.6533 25.8 21.8133 25.76C22.6133 25.6133 23.3333 25.1867 23.8266 24.5467C24.3599 23.88 24.5066 23 24.7999 21.24L26.1199 13.2933C26.2133 12.7067 26.2666 12.4267 26.2399 12.1733Z"
                fill="white"/>
            </g>
            <rect x="1" y="1" width="34" height="34" rx="17" stroke="white" strokeWidth="2"/>
            <rect x="25" y="1" width="34" height="34" rx="17" fill="#0098EA"/>
            <rect x="25" y="1" width="34" height="34" rx="17" stroke="white" strokeWidth="2"/>
            <path
              d="M47.4631 10.9301H36.5364C34.5274 10.9301 33.254 13.0973 34.2647 14.8492L41.0083 26.5377C41.4483 27.3009 42.5511 27.3009 42.9912 26.5377L49.7361 14.8492C50.7455 13.1001 49.4721 10.9301 47.4644 10.9301H47.4631ZM41.0028 23.0325L39.5342 20.1901L35.9905 13.8522C35.7567 13.4466 36.0455 12.9267 36.535 12.9267H41.0014V23.0338L41.0028 23.0325ZM48.0062 13.8509L44.4639 20.1915L42.9953 23.0325V12.9254H47.4617C47.9512 12.9254 48.24 13.4452 48.0062 13.8509Z"
              fill="white"/>
            <defs>
              <radialGradient id="paint0_radial_4544_564" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(18 2) rotate(90) scale(32)">
                <stop stopColor="#99EEFF"/>
                <stop offset="0.526042" stopColor="#BB33FF"/>
                <stop offset="0.864583" stopColor="#2200CC"/>
                <stop offset="1" stopColor="#00AACC"/>
              </radialGradient>
              <clipPath id="clip0_4544_564">
                <rect x="2" y="2" width="32" height="32" rx="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={styles.title}>
          TON Score
        </div>

        <div className={styles.address}>
          {wallet?.substr(0, 15)}...{wallet?.slice(-15)}
        </div>
      </div>

      {scoreData?.score && <div className={styles.badge}>
        {Math.round(scoreData.score * 100)}
      </div>}

    </div>

    <Stats/>

    <Mint/>
  </div>
}

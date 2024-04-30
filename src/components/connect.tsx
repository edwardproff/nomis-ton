import styles from './Connect.module.scss'
import {TonConnectButton} from "@tonconnect/ui-react";
import {useTonConnect} from "../hooks/useTonConnect";

export function Connect() {

  const {connected} = useTonConnect()

  if(connected) return <></>

  return <div>

    <div className={styles.header}>
      <div>
        <svg width="358" height="72" viewBox="0 0 358 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4544_194)">
            <rect x="123" y="4" width="64" height="64" rx="32" fill="url(#paint0_radial_4544_194)"/>
            <path
              d="M171.48 24.3467C171.373 23.2267 170.787 22.1867 169.88 21.4933C168.973 20.8267 167.8 20.56 166.68 20.8C166.173 20.9067 165.64 21.1733 164.6 21.68C163.747 22.1067 163.32 22.32 162.893 22.5067C161.133 23.2 159.213 23.3333 157.373 22.9067C156.92 22.8 156.467 22.64 155.56 22.3467L154.093 21.8667C150.707 20.7467 149.027 20.1867 147.347 20.48C145.747 20.7733 144.307 21.6267 143.32 22.9067C142.253 24.24 141.96 26.0267 141.373 29.52L138.733 45.44C138.547 46.6133 138.44 47.1467 138.493 47.6533C138.6 48.7733 139.187 49.8133 140.093 50.5067C141 51.1733 142.173 51.44 143.267 51.2C143.773 51.0933 144.307 50.8267 145.4 50.2667C146.227 49.8667 146.627 49.6533 147.053 49.4933C148.813 48.8 150.733 48.6667 152.573 49.0933C153.027 49.2 153.48 49.36 154.387 49.6533L155.853 50.1333C158.627 51.04 160.253 51.6 161.693 51.6C162.013 51.6 162.307 51.6 162.627 51.52C164.227 51.2267 165.667 50.3733 166.653 49.0933C167.72 47.76 168.013 46 168.6 42.48L171.24 26.5867C171.427 25.4133 171.533 24.8533 171.48 24.3467Z"
              fill="white"/>
          </g>
          <rect x="121" y="2" width="68" height="68" rx="34" stroke="white" strokeWidth="4"/>
          <rect x="169" y="2" width="68" height="68" rx="34" fill="#0098EA"/>
          <rect x="169" y="2" width="68" height="68" rx="34" stroke="white" strokeWidth="4"/>
          <path
            d="M213.926 21.8602H192.073C188.055 21.8602 185.508 26.1945 187.529 29.6984L201.016 53.0753C201.897 54.6017 204.102 54.6017 204.982 53.0753L218.472 29.6984C220.491 26.2001 217.944 21.8602 213.929 21.8602H213.926ZM201.006 46.0649L198.068 40.3802L190.981 27.7045C190.513 26.8931 191.091 25.8535 192.07 25.8535H201.003V46.0677L201.006 46.0649ZM215.012 27.7017L207.928 40.383L204.991 46.0649V25.8507H213.923C214.902 25.8507 215.48 26.8904 215.012 27.7017Z"
            fill="white"/>
          <defs>
            <radialGradient id="paint0_radial_4544_194" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(155 4) rotate(90) scale(64)">
              <stop stopColor="#99EEFF"/>
              <stop offset="0.526042" stopColor="#BB33FF"/>
              <stop offset="0.864583" stopColor="#2200CC"/>
              <stop offset="1" stopColor="#00AACC"/>
            </radialGradient>
            <clipPath id="clip0_4544_194">
              <rect x="123" y="4" width="64" height="64" rx="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.title}>
        Your Web3 Score in Telegram
      </div>

      <div className={styles.description}>
        Powered by Nomis
      </div>
    </div>

    <div className={styles.icons}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#0098EA"/>
            <path
              d="M21.463 8.93011H10.5363C8.5273 8.93011 7.25393 11.0973 8.26467 12.8492L15.0082 24.5377C15.4483 25.3009 16.5511 25.3009 16.9911 24.5377L23.736 12.8492C24.7454 11.1001 23.472 8.93011 21.4644 8.93011H21.463ZM15.0027 21.0325L13.5341 18.1901L9.99044 11.8522C9.75667 11.4466 10.0454 10.9267 10.535 10.9267H15.0014V21.0338L15.0027 21.0325ZM22.0062 11.8509L18.4639 18.1915L16.9952 21.0325V10.9254H21.4616C21.9512 10.9254 22.2399 11.4452 22.0062 11.8509Z"
              fill="white"/>
          </svg>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            Onchain
          </div>
          <div className={styles.description}>
            Posuere etiam adipiscing dui amet enim ut eu consequat.
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#EA9C00"/>
            <path
              d="M20.4167 11.5625L18.75 10.8333C18.6806 10.8056 18.625 10.7569 18.5833 10.6875C18.5556 10.6181 18.5417 10.5486 18.5417 10.4792C18.5417 10.4097 18.5556 10.3472 18.5833 10.2917C18.625 10.2222 18.6806 10.1736 18.75 10.1458L20.4167 9.39583L21.1458 7.75C21.1736 7.68055 21.2222 7.63194 21.2917 7.60417C21.3611 7.5625 21.4306 7.54167 21.5 7.54167C21.5694 7.54167 21.6319 7.5625 21.6875 7.60417C21.7569 7.63194 21.8056 7.68055 21.8333 7.75L22.5833 9.39583L24.2292 10.1458C24.2986 10.1736 24.3472 10.2222 24.375 10.2917C24.4167 10.3472 24.4375 10.4097 24.4375 10.4792C24.4375 10.5486 24.4167 10.6181 24.375 10.6875C24.3472 10.7569 24.2986 10.8056 24.2292 10.8333L22.5833 11.5625L21.8333 13.2292C21.8056 13.2986 21.7569 13.3542 21.6875 13.3958C21.6319 13.4236 21.5694 13.4375 21.5 13.4375C21.4306 13.4375 21.3611 13.4236 21.2917 13.3958C21.2222 13.3542 21.1736 13.2986 21.1458 13.2292L20.4167 11.5625ZM11.4583 18L8.125 16.5C8.01389 16.4444 7.93056 16.375 7.875 16.2917C7.81944 16.1944 7.79167 16.0903 7.79167 15.9792C7.79167 15.8681 7.81944 15.7708 7.875 15.6875C7.93056 15.5903 8.01389 15.5139 8.125 15.4583L11.4583 13.9583L12.9583 10.625C13.0139 10.5139 13.0833 10.4306 13.1667 10.375C13.2639 10.3194 13.3681 10.2917 13.4792 10.2917C13.5903 10.2917 13.6875 10.3194 13.7708 10.375C13.8681 10.4306 13.9444 10.5139 14 10.625L15.5 13.9583L18.8333 15.4583C18.9444 15.5139 19.0278 15.5903 19.0833 15.6875C19.1389 15.7708 19.1667 15.8681 19.1667 15.9792C19.1667 16.0903 19.1389 16.1944 19.0833 16.2917C19.0278 16.375 18.9444 16.4444 18.8333 16.5L15.5 18L14 21.3333C13.9444 21.4444 13.8681 21.5278 13.7708 21.5833C13.6875 21.6389 13.5903 21.6667 13.4792 21.6667C13.3681 21.6667 13.2639 21.6389 13.1667 21.5833C13.0833 21.5278 13.0139 21.4444 12.9583 21.3333L11.4583 18ZM20.4167 22.5625L18.7708 21.8125C18.7014 21.7847 18.6458 21.7431 18.6042 21.6875C18.5625 21.6181 18.5417 21.5486 18.5417 21.4792C18.5417 21.4097 18.5625 21.3472 18.6042 21.2917C18.6458 21.2222 18.7014 21.1736 18.7708 21.1458L20.4167 20.3958L21.1667 18.75C21.1944 18.6806 21.2361 18.625 21.2917 18.5833C21.3611 18.5417 21.4306 18.5208 21.5 18.5208C21.5694 18.5208 21.6319 18.5417 21.6875 18.5833C21.7569 18.625 21.8056 18.6806 21.8333 18.75L22.5833 20.3958L24.2292 21.1458C24.2986 21.1736 24.3542 21.2222 24.3958 21.2917C24.4375 21.3472 24.4583 21.4097 24.4583 21.4792C24.4583 21.5486 24.4375 21.6181 24.3958 21.6875C24.3542 21.7431 24.2986 21.7847 24.2292 21.8125L22.5833 22.5625L21.8333 24.2083C21.8056 24.2778 21.7569 24.3333 21.6875 24.375C21.6319 24.4167 21.5694 24.4375 21.5 24.4375C21.4306 24.4375 21.3611 24.4167 21.2917 24.375C21.2361 24.3333 21.1944 24.2778 21.1667 24.2083L20.4167 22.5625Z"
              fill="white"/>
          </svg>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            AI
          </div>
          <div className={styles.description}>
            Eget ac mauris morbi velit dignissim aliquet duis.
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="url(#paint0_radial_4544_538)"/>
            <path
              d="M10.25 23.5C9.76389 23.5 9.34722 23.3333 9 23C8.66667 22.6528 8.5 22.2361 8.5 21.75V15.2708C8.09722 14.9514 7.83333 14.5486 7.70833 14.0625C7.59722 13.5625 7.61806 13.0694 7.77083 12.5833L8.60417 9.75C8.71528 9.38889 8.90972 9.09028 9.1875 8.85417C9.47917 8.61805 9.8125 8.5 10.1875 8.5H21.8333C22.2083 8.5 22.5347 8.61805 22.8125 8.85417C23.1042 9.07639 23.3056 9.375 23.4167 9.75L24.25 12.5833C24.3889 13.0694 24.3889 13.5486 24.25 14.0208C24.1111 14.4792 23.8611 14.8889 23.5 15.25V21.75C23.5 22.2361 23.3264 22.6528 22.9792 23C22.6458 23.3333 22.2361 23.5 21.75 23.5H10.25ZM17.8333 14.2917C18.1528 14.2917 18.4097 14.1667 18.6042 13.9167C18.8125 13.6667 18.8958 13.3819 18.8542 13.0625L18.4167 10.25H16.875V13.25C16.875 13.5278 16.9653 13.7708 17.1458 13.9792C17.3264 14.1875 17.5556 14.2917 17.8333 14.2917ZM14.1042 14.2917C14.3819 14.2917 14.6181 14.1875 14.8125 13.9792C15.0208 13.7708 15.125 13.5278 15.125 13.25V10.25H13.5833L13.1458 13.0417C13.0903 13.3611 13.1528 13.6528 13.3333 13.9167C13.5278 14.1667 13.7847 14.2917 14.1042 14.2917ZM10.3958 14.2917C10.6319 14.2917 10.8333 14.2014 11 14.0208C11.1806 13.8403 11.2917 13.625 11.3333 13.375L11.8125 10.25H10.2708L9.47917 12.9792C9.38194 13.2986 9.43056 13.5972 9.625 13.875C9.81944 14.1528 10.0764 14.2917 10.3958 14.2917ZM21.6042 14.2917C21.9375 14.2917 22.2014 14.1528 22.3958 13.875C22.5903 13.5972 22.6389 13.2986 22.5417 12.9792L21.7292 10.25H20.1875L20.6667 13.375C20.7083 13.625 20.8125 13.8403 20.9792 14.0208C21.1597 14.2014 21.3681 14.2917 21.6042 14.2917Z"
              fill="white"/>
            <defs>
              <radialGradient id="paint0_radial_4544_538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(16) rotate(90) scale(32)">
                <stop stopColor="#99EEFF"/>
                <stop offset="0.526042" stopColor="#BB33FF"/>
                <stop offset="0.864583" stopColor="#2200CC"/>
                <stop offset="1" stopColor="#00AACC"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            Utility
          </div>
          <div className={styles.description}>
            Sit dignissim proin commodo condimentum ut placerat rhoncus in.
          </div>
        </div>
      </div>
    </div>

    {/*<div>*/}
    {/*  <TonConnectButton/>*/}
    {/*</div>*/}
  </div>
}

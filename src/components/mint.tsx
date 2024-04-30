import {useTonConnect} from "../hooks/useTonConnect";
import {useContract} from "../hooks/useContract";
import {NomisScore, ScoreData} from "../contracts/tact_NomisScore";
import {createContentCellFromURL, getSetScoreParentProps} from "../utils/common-functions";
import {Address, Contract, OpenedContract, toNano} from "ton-core";
import styles from './Mint.module.scss'
import useScore from "../hooks/useScore";
import {UserScoreProxy} from "../contracts/tact_UserScoreProxy";
import {useTonClient} from "../hooks/useTonClient";
import {ScoreItem} from "../contracts/tact_ScoreItem";
import {useEffect, useState} from "react";
import {create} from "zustand";

type ScoreState = {
  data: number
  isLoading: boolean
  isMinted: boolean
  setData: (data: number) => void
  setIsLoading: (data: boolean) => void
  setIsMinted: (data: boolean) => void
}

export const useTokenStore = create<ScoreState>(set => ({
  data: 0,
  isLoading: false,
  isMinted: false,
  setData: data => set({data}),
  setIsLoading: isLoading => set({isLoading}),
  setIsMinted: isMinted => set({isMinted}),
}))


export function Mint() {
  const {wallet, network, sender} = useTonConnect()
  const {contract} = useContract()
  const {scoreData} = useScore()

  const {client} = useTonClient()

  const {isLoading, isMinted, setIsMinted, setIsLoading, setData, data: mintedScore} = useTokenStore()

  useEffect(() => {
    getToken()
  }, [])

  useEffect(() => {
    getToken()
  }, [client, wallet, contract])

  const getToken = async () => {
    if (!client) return
    if (!contract) return
    if (!wallet) return

    const userScoreAddress = await contract.getGetUserScoreAddress(Address.parseRaw(wallet))
    const contractUserScore = new UserScoreProxy(userScoreAddress);
    const userContract = client.open(contractUserScore as Contract) as OpenedContract<UserScoreProxy>
    const itemIndex = await userContract.getScoreItemIndex()
    const itemAddress = await contract.getGetNftAddressByIndex(itemIndex)
    const itemContract = client.open(ScoreItem.fromAddress(itemAddress) as Contract) as OpenedContract<ScoreItem>
    const itemScore = await itemContract.getScore()
    console.log(await itemContract.getGetNftData())
    setData(Number(itemScore))
    console.log(itemScore)
  }

  const mint = async () => {
    if (!wallet) return
    if (!contract) return

    if (!scoreData?.mintData?.mintedScore) return

    setIsLoading(true)

    // get score
    const validatorSeed = 'wild kite chest again dad crowd loan mansion hand foot dizzy hair canoe glue antique employ kite next include tank universe blanket charge bench'
    const seqno = await contract.getSeqno();

    const cellContent = createContentCellFromURL('https://nomis.cc/icon.svg');

    const price = 1000000000n
    // const score = BigInt(scoreData.mintData.mintedScore)
    const score = 40n
    const refAmount = 0n
    const referrer = null

    const data: ScoreData = {
      $$type: 'ScoreData',
      price,
      score,
      user: Address.parseRaw(wallet),
      ref_amount: refAmount,
      referrer,
      content: cellContent,
      is_mint: !!mintedScore,
    }

    const setScoreParentProps = await getSetScoreParentProps({
      validatorSeed,
      seqno,
      data
    });

    const tx = await contract.send(
      sender,
      {value: setScoreParentProps.score_data.price + toNano('0.15')},
      {
        $$type: 'SetScoreParent',
        signature: {
          $$type: 'Signature',
          signed_bytes: setScoreParentProps.signature.signed_bytes,
          valid_until: setScoreParentProps.signature.valid_until,
          seqno,
        },
        score_data: data,
      }
    );

    setTimeout(() => {
      setIsMinted(true)
      setIsLoading(false)
      setData(Number(score))
    }, 10000)
  }

  return <>
    <div>
      <button onClick={mint} className={styles.button}>
        {mintedScore ? 'Update' : 'Mint'}
      </button>
    </div>
  </>
}

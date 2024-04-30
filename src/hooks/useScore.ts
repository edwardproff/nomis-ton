'use client'

import {create} from "zustand";
import {useEffect} from "react";
import {useTonConnect} from "@/hooks/useTonConnect";
import {Address} from "ton-core";

export type TokenBalance = {
  amount: number
  price: number
  lastPriceDateTime: string
  confidence: number
  totalAmountPrice: number
  chainId: number | undefined
  id: string
  symbol: string
  name: string
  decimals: string
  logoUri: string | null | undefined
}

export type ChainStat = {
  nativeToken: string
  nativeBalance: number
  nativeBalanceUSD: number
  turnoverIntervals: TurnoverInterval[]
}

export type CounterpartiesData = {
  chainId: number
  contractName: string
  name: string
  counterpartyTurnoverUSD: number
  contractAddress: string
  counterpartyNFTTransfers: unknown[]
  counterpartyTransactionHashes: string[]
  counterpartyTransactions: number
  counterpartyTransferBalances: { totalAmountPrice: number }[]
  counterpartyTransfers: number
  description: string
  isONFT: boolean
}

export type TurnoverInterval = {
  startDate: string
  endDate: string
  amountSumValue: number
  amountOutSumValue: number
  amountInSumValue: number
  count: number
}

export type TransferToken = {
  transactionHash: string
  isOutcome: boolean
  invocationType: string
  amount: number
  price: number
  lastPriceDateTime: string
  confidence: number
  totalAmountPrice: number
  chainId: number
  source: string
  id: string
  symbol: string
  decimals: string
  logoUri: string
}

export type ScoreData = {
  mintData: {
    calculationModel: number
    chainId: number
    deadline: number
    metadataUrl: string
    mintedScore: number
    signature: string
    referralCode: string
    referrerCode: string
    onftMetadataUrl?: string
  }
  discountedMintFee: bigint
  counterpartyTurnoverUSD: number
  score: number
  stats: {
    noData: unknown
    statsDescriptions: Record<
      string,
      {
        label: string
        description: string
        units: string
      }
    >
    counterpartiesData: CounterpartiesData[] | null
    totalCounterpartiesTransactions: number
    totalCounterpartiesTransfers: number
    totalCounterpartiesTurnoverUSD: number
    totalCounterpartiesUsed: number
    tokenBalances: TokenBalance[]
    chainStats: Record<string, ChainStat>
    walletTurnoverUSD: number
    nativeToken: string
    nativeBalance: number
    nativeBalanceUSD: number
    turnoverIntervals: TurnoverInterval[]
    transferTokens: TransferToken[]
  }
}

type ScoreState = {
  data: ScoreData | null
  isLoading: boolean
  setData: (data: ScoreData) => void
  setIsLoading: (data: boolean) => void
}

export const useScoreStore = create<ScoreState>(set => ({
  data: null,
  isLoading: false,
  setData: data => set({data}),
  setIsLoading: isLoading => set({isLoading}),
}))

export default function useScore() {

  const {data, isLoading, setData, setIsLoading} = useScoreStore()

  const {wallet} = useTonConnect()

  const getScore = async () => {
    setIsLoading(true)

    if(!wallet) return

    const address = Address.parseRaw(wallet).toRawString()

    const params: Record<string, string> = {
      scoreType: '0',
      calculationModel: '11',
      nonce: '0',
      deadline: '0',
      UseTokenLists: 'false',
      GetCyberConnectProtocolData: 'false',
      prepareToMint: 'true',
      mintChain: '0',
      referrerCode: '0',
      GetTokensTransfersBalances: 'true',
      disableCache: 'true',
    }

    const {data: newData} = (await (
      await fetch(`https://bg.nomis.cc/api/proxy/ton/wallet/${address}/score?${new URLSearchParams(params).toString()}`, {})
    ).json()) as { data: ScoreData };

    setData(newData)
    setIsLoading(false)
  }

  return {
    data,
    isLoading,
    scoreData: data,
    getScore
  }

}


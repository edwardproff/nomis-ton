import {useTonConnect} from "../hooks/useTonConnect";
import {useContract} from "../hooks/useContract";
import {ScoreData} from "../contracts/tact_NomisScore";
import {createContentCellFromURL, getSetScoreParentProps} from "../utils/common-functions";
import {Address, toNano} from "ton-core";
import styles from './Mint.module.scss'
import useScore from "../hooks/useScore";

export function Mint() {
  const {wallet, network, sender} = useTonConnect()
  const {contract} = useContract()
  const {scoreData} = useScore()

  const mint = async () => {

    if (!wallet) return
    if(!contract) return

    // if(!scoreData?.mintData?.mintedScore) return

    const validatorSeed = 'wild kite chest again dad crowd loan mansion hand foot dizzy hair canoe glue antique employ kite next include tank universe blanket charge bench'
    const seqno = await contract.getSeqno();

    console.log(seqno)

    const cellContent = createContentCellFromURL('https://nomis.cc/icon.svg');

    //test
    const price = 1000000000n
    // const score = BigInt(scoreData.mintData.mintedScore)
    const score = 40n
    const refAmount = 0n
    const referrer = null
    const isMint = true

    const data: ScoreData = {
      $$type: 'ScoreData',
      price,
      score,
      user: Address.parseRaw(wallet),
      ref_amount: refAmount,
      referrer,
      content: cellContent ,
      is_mint: isMint,
    }

    const setScoreParentProps = await getSetScoreParentProps({
      validatorSeed,
      seqno,
      data
    });

    const itemIndex = await contract.getGetNextIndex();

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
  }

  return <>
    <div>
      <button onClick={mint} className={styles.button}>
        Mint
      </button>
    </div>
  </>
}

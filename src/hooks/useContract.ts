import {Address, OpenedContract} from "ton-core";
import {useTonConnect} from "./useTonConnect";
import {useAsyncInitialize} from "./useAsyncInitialize";
import {NomisScore} from "../contracts/tact_NomisScore";
import {useTonClient} from "./useTonClient";
import {Contract} from "ton-core";

export function useContract() {
  const { wallet } = useTonConnect();
  const { client } = useTonClient();

  const nomisContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const contract = new NomisScore(
      Address.parse("EQAMem3IEmoS5UAvRI0VI8M8uerQaNGFJ0SPIFWcI7YSWLKq")
    );

    return client.open(contract as Contract) as OpenedContract<NomisScore>
  }, [client, wallet]);

  return {
    contract: nomisContract
  }
}

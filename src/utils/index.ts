import { OpenedContract, beginCell } from 'ton-core';
import { KeyPair, mnemonicToPrivateKey } from '@ton/crypto';
import { TonClient, WalletContractV4 } from 'ton';

export const toTons = (amount: bigint) => Number(amount) / 10 ** 9;

export type OpenedWallet = {
    contract: OpenedContract<WalletContractV4>;
    keyPair: KeyPair;
};

export const getWallet = async (
    seed: string,
    network?: 'mainnet' | 'testnet' | 'custom',
): Promise<{ wallet: OpenedWallet; client: TonClient }> => {
    const keyPair = await mnemonicToPrivateKey(seed.split(' '));
    const wallet = WalletContractV4.create({
        publicKey: keyPair.publicKey,
        workchain: 0,
    });

    const endpoint =
        network === 'mainnet' ? 'https://toncenter.com/api/v2/jsonRPC' : 'https://testnet.toncenter.com/api/v2/jsonRPC'; // await getHttpEndpoint({ network });
    const client = new TonClient({
        endpoint,
        apiKey: 'f87c887c2a5bc18543c59d31261ae47da17fb279330da8e92dfa941eec7d8a26',
    });

    const walletContract = client.open(wallet);

    return { wallet: { contract: walletContract, keyPair }, client };
};

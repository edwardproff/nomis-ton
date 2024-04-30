import { mnemonicToPrivateKey, sign } from '@ton/crypto';
import { Address, Builder, Cell, beginCell } from 'ton-core';

type Signature = {
    $$type: 'Signature';
    seqno: bigint;
    valid_until: bigint;
    signed_bytes: Buffer;
};

type SetScoreParent = {
    $$type: 'SetScoreParent';
    signature: Signature;
    score_data: ScoreData;
};

type ScoreData = {
    $$type: 'ScoreData';
    price: bigint;
    user: Address;
    content: Cell;
    score: bigint;
    referrer: Address | null;
    ref_amount: bigint;
    is_mint: boolean;
};

const storeScoreData = (src: ScoreData) => (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.price);
    b_0.storeAddress(src.user);
    b_0.storeRef(src.content);
    b_0.storeUint(src.score, 32);
    b_0.storeAddress(src.referrer);
    b_0.storeCoins(src.ref_amount);
    b_0.storeBit(src.is_mint);
};

export async function getSetScoreParentProps({
    data,
    validatorSeed,
    seqno,
}: {
    data: ScoreData;
    validatorSeed: string;
    seqno: bigint;
}): Promise<SetScoreParent> {
    const keyPair = await mnemonicToPrivateKey(validatorSeed.split(' '));

    const score_data = beginCell().store(storeScoreData(data)).endCell();

    // signature is valid for 15 seconds
    const valid_until = BigInt(Math.floor(Date.now() / 1000) + 15);
    const hash = beginCell().storeUint(seqno, 32).storeUint(valid_until, 32).storeRef(score_data).endCell().hash();

    const sugnature = sign(hash, keyPair.secretKey);

    return {
        $$type: 'SetScoreParent',
        signature: {
            $$type: 'Signature',
            signed_bytes: sugnature,
            valid_until,
            seqno,
        },
        score_data: data,
    };
}

export const publicKeyToBigInt = async (publicKey: Buffer) => BigInt('0x' + publicKey.toString('hex'));

export const getPublicKeyFromSeed = async (seed: string) =>
    publicKeyToBigInt((await mnemonicToPrivateKey(seed.split(' '))).publicKey);

export const createContentCellFromURL = (url: string) => {
    const OFFCHAIN_CONTENT_PREFIX = 0x01;
    const cellContent = beginCell().storeInt(OFFCHAIN_CONTENT_PREFIX, 8).storeStringRefTail(url).endCell();

    return cellContent;
};

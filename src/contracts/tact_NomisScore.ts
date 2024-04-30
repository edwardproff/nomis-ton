import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue
} from 'ton-core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
}

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return {$$type: 'StateInit' as const, code: _code, data: _data};
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return {$$type: 'StateInit' as const, code: _code, data: _data};
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    }
  }
}

export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
}

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {$$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw};
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {$$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw};
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    }
  }
}

export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    }
  }
}

export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
}

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return {$$type: 'Deploy' as const, queryId: _queryId};
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return {$$type: 'Deploy' as const, queryId: _queryId};
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    }
  }
}

export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return {$$type: 'DeployOk' as const, queryId: _queryId};
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return {$$type: 'DeployOk' as const, queryId: _queryId};
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    }
  }
}

export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {$$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback};
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {$$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback};
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    }
  }
}

export type ChangeOwner = {
  $$type: 'ChangeOwner';
  queryId: bigint;
  newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {$$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner};
}

function loadTupleChangeOwner(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {$$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner};
}

function storeTupleChangeOwner(source: ChangeOwner) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    }
  }
}

export type ChangeOwnerOk = {
  $$type: 'ChangeOwnerOk';
  queryId: bigint;
  newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _newOwner = sc_0.loadAddress();
  return {$$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner};
}

function loadTupleChangeOwnerOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _newOwner = source.readAddress();
  return {$$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner};
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
    }
  }
}

export type NftTransfer = {
  $$type: 'NftTransfer';
  query_id: bigint;
  new_owner: Address;
  response_destination: Address;
  custom_payload: Cell | null;
  forward_amount: bigint;
  forward_payload: Cell;
}

export function storeNftTransfer(src: NftTransfer) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1607220500, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.new_owner);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeCoins(src.forward_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadNftTransfer(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1607220500) {
    throw Error('Invalid prefix');
  }
  let _query_id = sc_0.loadUintBig(64);
  let _new_owner = sc_0.loadAddress();
  let _response_destination = sc_0.loadAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_amount = sc_0.loadCoins();
  let _forward_payload = sc_0.asCell();
  return {
    $$type: 'NftTransfer' as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_amount: _forward_amount,
    forward_payload: _forward_payload
  };
}

function loadTupleNftTransfer(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _new_owner = source.readAddress();
  let _response_destination = source.readAddress();
  let _custom_payload = source.readCellOpt();
  let _forward_amount = source.readBigNumber();
  let _forward_payload = source.readCell();
  return {
    $$type: 'NftTransfer' as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_amount: _forward_amount,
    forward_payload: _forward_payload
  };
}

function storeTupleNftTransfer(source: NftTransfer) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeAddress(source.new_owner);
  builder.writeAddress(source.response_destination);
  builder.writeCell(source.custom_payload);
  builder.writeNumber(source.forward_amount);
  builder.writeSlice(source.forward_payload);
  return builder.build();
}

function dictValueParserNftTransfer(): DictionaryValue<NftTransfer> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNftTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadNftTransfer(src.loadRef().beginParse());
    }
  }
}

export type NftExcesses = {
  $$type: 'NftExcesses';
  query_id: bigint;
}

export function storeNftExcesses(src: NftExcesses) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1871312355, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadNftExcesses(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1871312355) {
    throw Error('Invalid prefix');
  }
  let _query_id = sc_0.loadUintBig(64);
  return {$$type: 'NftExcesses' as const, query_id: _query_id};
}

function loadTupleNftExcesses(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return {$$type: 'NftExcesses' as const, query_id: _query_id};
}

function storeTupleNftExcesses(source: NftExcesses) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  return builder.build();
}

function dictValueParserNftExcesses(): DictionaryValue<NftExcesses> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNftExcesses(src)).endCell());
    },
    parse: (src) => {
      return loadNftExcesses(src.loadRef().beginParse());
    }
  }
}

export type NftGetStaticData = {
  $$type: 'NftGetStaticData';
  query_id: bigint;
}

export function storeNftGetStaticData(src: NftGetStaticData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(801842850, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadNftGetStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 801842850) {
    throw Error('Invalid prefix');
  }
  let _query_id = sc_0.loadUintBig(64);
  return {$$type: 'NftGetStaticData' as const, query_id: _query_id};
}

function loadTupleNftGetStaticData(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return {$$type: 'NftGetStaticData' as const, query_id: _query_id};
}

function storeTupleNftGetStaticData(source: NftGetStaticData) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  return builder.build();
}

function dictValueParserNftGetStaticData(): DictionaryValue<NftGetStaticData> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNftGetStaticData(src)).endCell());
    },
    parse: (src) => {
      return loadNftGetStaticData(src.loadRef().beginParse());
    }
  }
}

export type NftReportStaticData = {
  $$type: 'NftReportStaticData';
  query_id: bigint;
  index: bigint;
  collection: Address;
}

export function storeNftReportStaticData(src: NftReportStaticData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2339837749, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeInt(src.index, 257);
    b_0.storeAddress(src.collection);
  };
}

export function loadNftReportStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2339837749) {
    throw Error('Invalid prefix');
  }
  let _query_id = sc_0.loadUintBig(64);
  let _index = sc_0.loadIntBig(257);
  let _collection = sc_0.loadAddress();
  return {$$type: 'NftReportStaticData' as const, query_id: _query_id, index: _index, collection: _collection};
}

function loadTupleNftReportStaticData(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _index = source.readBigNumber();
  let _collection = source.readAddress();
  return {$$type: 'NftReportStaticData' as const, query_id: _query_id, index: _index, collection: _collection};
}

function storeTupleNftReportStaticData(source: NftReportStaticData) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.index);
  builder.writeAddress(source.collection);
  return builder.build();
}

function dictValueParserNftReportStaticData(): DictionaryValue<NftReportStaticData> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNftReportStaticData(src)).endCell());
    },
    parse: (src) => {
      return loadNftReportStaticData(src.loadRef().beginParse());
    }
  }
}

export type SetValidator = {
  $$type: 'SetValidator';
  pub_key: bigint;
}

export function storeSetValidator(src: SetValidator) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(632774787, 32);
    b_0.storeUint(src.pub_key, 256);
  };
}

export function loadSetValidator(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 632774787) {
    throw Error('Invalid prefix');
  }
  let _pub_key = sc_0.loadUintBig(256);
  return {$$type: 'SetValidator' as const, pub_key: _pub_key};
}

function loadTupleSetValidator(source: TupleReader) {
  let _pub_key = source.readBigNumber();
  return {$$type: 'SetValidator' as const, pub_key: _pub_key};
}

function storeTupleSetValidator(source: SetValidator) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.pub_key);
  return builder.build();
}

function dictValueParserSetValidator(): DictionaryValue<SetValidator> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSetValidator(src)).endCell());
    },
    parse: (src) => {
      return loadSetValidator(src.loadRef().beginParse());
    }
  }
}

export type SetContent = {
  $$type: 'SetContent';
  content: Cell;
}

export function storeSetContent(src: SetContent) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4101394504, 32);
    b_0.storeRef(src.content);
  };
}

export function loadSetContent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4101394504) {
    throw Error('Invalid prefix');
  }
  let _content = sc_0.loadRef();
  return {$$type: 'SetContent' as const, content: _content};
}

function loadTupleSetContent(source: TupleReader) {
  let _content = source.readCell();
  return {$$type: 'SetContent' as const, content: _content};
}

function storeTupleSetContent(source: SetContent) {
  let builder = new TupleBuilder();
  builder.writeCell(source.content);
  return builder.build();
}

function dictValueParserSetContent(): DictionaryValue<SetContent> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSetContent(src)).endCell());
    },
    parse: (src) => {
      return loadSetContent(src.loadRef().beginParse());
    }
  }
}

export type Signature = {
  $$type: 'Signature';
  seqno: bigint;
  valid_until: bigint;
  signed_bytes: Buffer;
}

export function storeSignature(src: Signature) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.seqno, 32);
    b_0.storeUint(src.valid_until, 32);
    b_0.storeBuffer(src.signed_bytes);
  };
}

export function loadSignature(slice: Slice) {
  let sc_0 = slice;
  let _seqno = sc_0.loadUintBig(32);
  let _valid_until = sc_0.loadUintBig(32);
  let _signed_bytes = sc_0.loadBuffer(64);
  return {$$type: 'Signature' as const, seqno: _seqno, valid_until: _valid_until, signed_bytes: _signed_bytes};
}

function loadTupleSignature(source: TupleReader) {
  let _seqno = source.readBigNumber();
  let _valid_until = source.readBigNumber();
  let _signed_bytes = source.readBuffer();
  return {$$type: 'Signature' as const, seqno: _seqno, valid_until: _valid_until, signed_bytes: _signed_bytes};
}

function storeTupleSignature(source: Signature) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.seqno);
  builder.writeNumber(source.valid_until);
  builder.writeBuffer(source.signed_bytes);
  return builder.build();
}

function dictValueParserSignature(): DictionaryValue<Signature> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSignature(src)).endCell());
    },
    parse: (src) => {
      return loadSignature(src.loadRef().beginParse());
    }
  }
}

export type ScoreData = {
  $$type: 'ScoreData';
  price: bigint;
  user: Address;
  content: Cell;
  score: bigint;
  referrer: Address | null;
  ref_amount: bigint;
  is_mint: boolean;
}

export function storeScoreData(src: ScoreData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.price);
    b_0.storeAddress(src.user);
    b_0.storeRef(src.content);
    b_0.storeUint(src.score, 32);
    b_0.storeAddress(src.referrer);
    b_0.storeCoins(src.ref_amount);
    b_0.storeBit(src.is_mint);
  };
}

export function loadScoreData(slice: Slice) {
  let sc_0 = slice;
  let _price = sc_0.loadCoins();
  let _user = sc_0.loadAddress();
  let _content = sc_0.loadRef();
  let _score = sc_0.loadUintBig(32);
  let _referrer = sc_0.loadMaybeAddress();
  let _ref_amount = sc_0.loadCoins();
  let _is_mint = sc_0.loadBit();
  return {
    $$type: 'ScoreData' as const,
    price: _price,
    user: _user,
    content: _content,
    score: _score,
    referrer: _referrer,
    ref_amount: _ref_amount,
    is_mint: _is_mint
  };
}

function loadTupleScoreData(source: TupleReader) {
  let _price = source.readBigNumber();
  let _user = source.readAddress();
  let _content = source.readCell();
  let _score = source.readBigNumber();
  let _referrer = source.readAddressOpt();
  let _ref_amount = source.readBigNumber();
  let _is_mint = source.readBoolean();
  return {
    $$type: 'ScoreData' as const,
    price: _price,
    user: _user,
    content: _content,
    score: _score,
    referrer: _referrer,
    ref_amount: _ref_amount,
    is_mint: _is_mint
  };
}

function storeTupleScoreData(source: ScoreData) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.price);
  builder.writeAddress(source.user);
  builder.writeCell(source.content);
  builder.writeNumber(source.score);
  builder.writeAddress(source.referrer);
  builder.writeNumber(source.ref_amount);
  builder.writeBoolean(source.is_mint);
  return builder.build();
}

function dictValueParserScoreData(): DictionaryValue<ScoreData> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeScoreData(src)).endCell());
    },
    parse: (src) => {
      return loadScoreData(src.loadRef().beginParse());
    }
  }
}

export type SetScoreParent = {
  $$type: 'SetScoreParent';
  signature: Signature;
  score_data: ScoreData;
}

export function storeSetScoreParent(src: SetScoreParent) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3899072791, 32);
    b_0.store(storeSignature(src.signature));
    let b_1 = new Builder();
    b_1.store(storeScoreData(src.score_data));
    b_0.storeRef(b_1.endCell());
  };
}

export function loadSetScoreParent(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3899072791) {
    throw Error('Invalid prefix');
  }
  let _signature = loadSignature(sc_0);
  let sc_1 = sc_0.loadRef().beginParse();
  let _score_data = loadScoreData(sc_1);
  return {$$type: 'SetScoreParent' as const, signature: _signature, score_data: _score_data};
}

function loadTupleSetScoreParent(source: TupleReader) {
  const _signature = loadTupleSignature(source.readTuple());
  const _score_data = loadTupleScoreData(source.readTuple());
  return {$$type: 'SetScoreParent' as const, signature: _signature, score_data: _score_data};
}

function storeTupleSetScoreParent(source: SetScoreParent) {
  let builder = new TupleBuilder();
  builder.writeTuple(storeTupleSignature(source.signature));
  builder.writeTuple(storeTupleScoreData(source.score_data));
  return builder.build();
}

function dictValueParserSetScoreParent(): DictionaryValue<SetScoreParent> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSetScoreParent(src)).endCell());
    },
    parse: (src) => {
      return loadSetScoreParent(src.loadRef().beginParse());
    }
  }
}

export type SetUserScore = {
  $$type: 'SetUserScore';
  item_index: bigint;
  score_data: ScoreData;
}

export function storeSetUserScore(src: SetUserScore) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(549834415, 32);
    b_0.storeUint(src.item_index, 64);
    b_0.store(storeScoreData(src.score_data));
  };
}

export function loadSetUserScore(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 549834415) {
    throw Error('Invalid prefix');
  }
  let _item_index = sc_0.loadUintBig(64);
  let _score_data = loadScoreData(sc_0);
  return {$$type: 'SetUserScore' as const, item_index: _item_index, score_data: _score_data};
}

function loadTupleSetUserScore(source: TupleReader) {
  let _item_index = source.readBigNumber();
  const _score_data = loadTupleScoreData(source.readTuple());
  return {$$type: 'SetUserScore' as const, item_index: _item_index, score_data: _score_data};
}

function storeTupleSetUserScore(source: SetUserScore) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.item_index);
  builder.writeTuple(storeTupleScoreData(source.score_data));
  return builder.build();
}

function dictValueParserSetUserScore(): DictionaryValue<SetUserScore> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSetUserScore(src)).endCell());
    },
    parse: (src) => {
      return loadSetUserScore(src.loadRef().beginParse());
    }
  }
}

export type SetScore = {
  $$type: 'SetScore';
  data: ScoreData;
}

export function storeSetScore(src: SetScore) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2312732293, 32);
    b_0.store(storeScoreData(src.data));
  };
}

export function loadSetScore(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2312732293) {
    throw Error('Invalid prefix');
  }
  let _data = loadScoreData(sc_0);
  return {$$type: 'SetScore' as const, data: _data};
}

function loadTupleSetScore(source: TupleReader) {
  const _data = loadTupleScoreData(source.readTuple());
  return {$$type: 'SetScore' as const, data: _data};
}

function storeTupleSetScore(source: SetScore) {
  let builder = new TupleBuilder();
  builder.writeTuple(storeTupleScoreData(source.data));
  return builder.build();
}

function dictValueParserSetScore(): DictionaryValue<SetScore> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSetScore(src)).endCell());
    },
    parse: (src) => {
      return loadSetScore(src.loadRef().beginParse());
    }
  }
}

export type NftData = {
  $$type: 'NftData';
  deployed: boolean;
  index: bigint;
  collection: Address;
  owner: Address;
  content: Cell;
}

export function storeNftData(src: NftData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.deployed);
    b_0.storeInt(src.index, 257);
    b_0.storeAddress(src.collection);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
  };
}

export function loadNftData(slice: Slice) {
  let sc_0 = slice;
  let _deployed = sc_0.loadBit();
  let _index = sc_0.loadIntBig(257);
  let _collection = sc_0.loadAddress();
  let _owner = sc_0.loadAddress();
  let _content = sc_0.loadRef();
  return {
    $$type: 'NftData' as const,
    deployed: _deployed,
    index: _index,
    collection: _collection,
    owner: _owner,
    content: _content
  };
}

function loadTupleNftData(source: TupleReader) {
  let _deployed = source.readBoolean();
  let _index = source.readBigNumber();
  let _collection = source.readAddress();
  let _owner = source.readAddress();
  let _content = source.readCell();
  return {
    $$type: 'NftData' as const,
    deployed: _deployed,
    index: _index,
    collection: _collection,
    owner: _owner,
    content: _content
  };
}

function storeTupleNftData(source: NftData) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.deployed);
  builder.writeNumber(source.index);
  builder.writeAddress(source.collection);
  builder.writeAddress(source.owner);
  builder.writeCell(source.content);
  return builder.build();
}

function dictValueParserNftData(): DictionaryValue<NftData> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeNftData(src)).endCell());
    },
    parse: (src) => {
      return loadNftData(src.loadRef().beginParse());
    }
  }
}

export type CollectionData = {
  $$type: 'CollectionData';
  next_index: bigint;
  content: Cell;
  owner: Address;
}

export function storeCollectionData(src: CollectionData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.next_index, 257);
    b_0.storeRef(src.content);
    b_0.storeAddress(src.owner);
  };
}

export function loadCollectionData(slice: Slice) {
  let sc_0 = slice;
  let _next_index = sc_0.loadIntBig(257);
  let _content = sc_0.loadRef();
  let _owner = sc_0.loadAddress();
  return {$$type: 'CollectionData' as const, next_index: _next_index, content: _content, owner: _owner};
}

function loadTupleCollectionData(source: TupleReader) {
  let _next_index = source.readBigNumber();
  let _content = source.readCell();
  let _owner = source.readAddress();
  return {$$type: 'CollectionData' as const, next_index: _next_index, content: _content, owner: _owner};
}

function storeTupleCollectionData(source: CollectionData) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.next_index);
  builder.writeCell(source.content);
  builder.writeAddress(source.owner);
  return builder.build();
}

function dictValueParserCollectionData(): DictionaryValue<CollectionData> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeCollectionData(src)).endCell());
    },
    parse: (src) => {
      return loadCollectionData(src.loadRef().beginParse());
    }
  }
}

type NomisScore_init_args = {
  $$type: 'NomisScore_init_args';
  owner: Address;
  content: Cell;
  validator_pub_key: bigint;
}

function initNomisScore_init_args(src: NomisScore_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
    b_0.storeInt(src.validator_pub_key, 257);
  };
}

async function NomisScore_init(owner: Address, content: Cell, validator_pub_key: bigint) {
  const __code = Cell.fromBase64('te6ccgECMQEAB7wAART/APSkE/S88sgLAQIBYgIDAujQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFNs88uCCyPhDAcx/AcoAVUBQVCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLLP8wSy//LH8ntVCwEAgEgExQE4AGSMH/gcCHXScIflTAg1wsf3iCCECW3YIO6jpww0x8BghAlt2CDuvLggdP/ATFVQNs8MRA0QTB/4CCCEPR2UEi6jpsw0x8BghD0dlBIuvLggdQBMVVA2zwyEDRDAH/gIIIQ6GchF7rjAoIQlGqYtroFBQYHABL4QlJQxwXy4IQCUDDTHwGCEOhnIRe68uCB0x/TH4MI1xhVIAPUAdDbPDcQelUFbBrbPH8ICQFYjqfTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH/gMHAQAK76APpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB1NMf+kAh1wsBwwCOHQEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIkjFt4gH6ANIAVWAE9IEULfhBbyQTXwMoghAI8NGAoL7y9IIAvRFUephUf6lUe6lTuts88vRUcGCTI8IAkXDikyDCAJFw4o6hgUWSJW6zk1NBu5Fw4vL0JCBu8tCAJHJ/VSBtbW3bPCOh3iDCAI6LVhABf1lwbW1t2zyRMOIgkS6RcOIPERAPChERCwE+CsjLHxnLHxBWEEUQNEE5GMhVYNs8yVADzMn5AFn5EA4Dgg4REA4NERANDBEQDAsREAsKCREQCQgHERAHBgUREAUEAxEQAwIBERAB2zwFkwKkAt4EpIgQRRA0ECP4QgF/bds8DA0QA/Y3Nzf4Q/goJNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEGoQWhBKEDpKmIIQBHhowAjIVXCCECDFzq9QCcsfF8s/BxBWEEUQNEEw2zzJRDAvDg8AIAAAAABTY29yZSBtaW50ZWQArlB2+gJQBCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLMyx8BIG6VMHABywGOHiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFuJY+gLKAAEUEn8FBANwUDPbPBEBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8EQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wASAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgFRYCASAjJAIVuLXds8VRTbPGxRgsFwIBIBgZAAIxAgFIGhsCFbT0e2eKoJtnjYowLCECAVgcHQIRrkvtnm2eNijALCACD6Y7tnm2eNijLB4CD6chtnm2eNijLB8AAiQAAiMAAiABkPhD+ChY2zxwWchwAcsBcwHLAXABywASzMzJ+QDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiCIAogLQ9AQwbQGBef0BgBD0D2+h8uCHAYF5/SICgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFoEBAc8AyQIBICUmAgFIKCkCEbYLe2ebZ42KcCwnALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOE7Lpy1Zp2W5nQdLNsozdFJBOCBnOrTzivzpKFgOsLcTI9lAABlRzJAARsK+7UTQ0gABgAgFYKisAdKm7jQ1aXBmczovL1FtYUF3NXpBNnJGTUc2blN2d2ZldHJBUlFTckFGODlhU1hLOWFkc2lzSFNGNVWACTKvFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiNs8VQTbPGxRLC0B4O1E0NQB+GPSAAGOK/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0z/U0//TH1VAbBXg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdSBAQHXAFUgA9FY2zwuAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgvAAZxWXABiALQ9AQwbSGBLr0BgBD0D2+h8uCHAYEuvSICgBD0FwKBef0BgBD0D2+h8uCHEoF5/QECgBD0F8gByPQAyQHMcAHKAEADMAB+WSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ');
  const __system = Cell.fromBase64('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');
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initNomisScore_init_args({$$type: 'NomisScore_init_args', owner, content, validator_pub_key})(builder);
  const __data = builder.endCell();
  return {code: __code, data: __data};
}

const NomisScore_errors: { [key: number]: { message: string } } = {
  2: {message: `Stack undeflow`},
  3: {message: `Stack overflow`},
  4: {message: `Integer overflow`},
  5: {message: `Integer out of expected range`},
  6: {message: `Invalid opcode`},
  7: {message: `Type check error`},
  8: {message: `Cell overflow`},
  9: {message: `Cell underflow`},
  10: {message: `Dictionary error`},
  13: {message: `Out of gas error`},
  32: {message: `Method ID not found`},
  34: {message: `Action is invalid or not supported`},
  37: {message: `Not enough TON`},
  38: {message: `Not enough extra-currencies`},
  128: {message: `Null reference exception`},
  129: {message: `Invalid serialization prefix`},
  130: {message: `Invalid incoming message`},
  131: {message: `Constraints error`},
  132: {message: `Access denied`},
  133: {message: `Contract stopped`},
  134: {message: `Invalid argument`},
  135: {message: `Code of a contract was not found`},
  136: {message: `Invalid address`},
  137: {message: `Masterchain support is not enabled for this contract`},
  4429: {message: `Invalid sender`},
  5165: {message: `Not enough value`},
  17810: {message: `Invalid referrer addr/amount`},
  48401: {message: `Invalid signature`},
}

const NomisScore_types: ABIType[] = [
  {
    "name": "StateInit",
    "header": null,
    "fields": [{"name": "code", "type": {"kind": "simple", "type": "cell", "optional": false}}, {
      "name": "data",
      "type": {"kind": "simple", "type": "cell", "optional": false}
    }]
  },
  {
    "name": "Context",
    "header": null,
    "fields": [{"name": "bounced", "type": {"kind": "simple", "type": "bool", "optional": false}}, {
      "name": "sender",
      "type": {"kind": "simple", "type": "address", "optional": false}
    }, {"name": "value", "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}}, {
      "name": "raw",
      "type": {"kind": "simple", "type": "slice", "optional": false}
    }]
  },
  {
    "name": "SendParameters",
    "header": null,
    "fields": [{"name": "bounce", "type": {"kind": "simple", "type": "bool", "optional": false}}, {
      "name": "to",
      "type": {"kind": "simple", "type": "address", "optional": false}
    }, {"name": "value", "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}}, {
      "name": "mode",
      "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    }, {"name": "body", "type": {"kind": "simple", "type": "cell", "optional": true}}, {
      "name": "code",
      "type": {"kind": "simple", "type": "cell", "optional": true}
    }, {"name": "data", "type": {"kind": "simple", "type": "cell", "optional": true}}]
  },
  {
    "name": "Deploy",
    "header": 2490013878,
    "fields": [{"name": "queryId", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}}]
  },
  {
    "name": "DeployOk",
    "header": 2952335191,
    "fields": [{"name": "queryId", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}}]
  },
  {
    "name": "FactoryDeploy",
    "header": 1829761339,
    "fields": [{
      "name": "queryId",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
    }, {"name": "cashback", "type": {"kind": "simple", "type": "address", "optional": false}}]
  },
  {
    "name": "ChangeOwner",
    "header": 2174598809,
    "fields": [{
      "name": "queryId",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
    }, {"name": "newOwner", "type": {"kind": "simple", "type": "address", "optional": false}}]
  },
  {
    "name": "ChangeOwnerOk",
    "header": 846932810,
    "fields": [{
      "name": "queryId",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
    }, {"name": "newOwner", "type": {"kind": "simple", "type": "address", "optional": false}}]
  },
  {
    "name": "NftTransfer",
    "header": 1607220500,
    "fields": [{
      "name": "query_id",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
    }, {
      "name": "new_owner",
      "type": {"kind": "simple", "type": "address", "optional": false}
    }, {
      "name": "response_destination",
      "type": {"kind": "simple", "type": "address", "optional": false}
    }, {
      "name": "custom_payload",
      "type": {"kind": "simple", "type": "cell", "optional": true}
    }, {
      "name": "forward_amount",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
    }, {
      "name": "forward_payload",
      "type": {"kind": "simple", "type": "slice", "optional": false, "format": "remainder"}
    }]
  },
  {
    "name": "NftExcesses",
    "header": 1871312355,
    "fields": [{"name": "query_id", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}}]
  },
  {
    "name": "NftGetStaticData",
    "header": 801842850,
    "fields": [{"name": "query_id", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}}]
  },
  {
    "name": "NftReportStaticData",
    "header": 2339837749,
    "fields": [{
      "name": "query_id",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
    }, {
      "name": "index",
      "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    }, {"name": "collection", "type": {"kind": "simple", "type": "address", "optional": false}}]
  },
  {
    "name": "SetValidator",
    "header": 632774787,
    "fields": [{"name": "pub_key", "type": {"kind": "simple", "type": "uint", "optional": false, "format": 256}}]
  },
  {
    "name": "SetContent",
    "header": 4101394504,
    "fields": [{"name": "content", "type": {"kind": "simple", "type": "cell", "optional": false}}]
  },
  {
    "name": "Signature",
    "header": null,
    "fields": [{
      "name": "seqno",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}
    }, {
      "name": "valid_until",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}
    }, {"name": "signed_bytes", "type": {"kind": "simple", "type": "fixed-bytes", "optional": false, "format": 64}}]
  },
  {
    "name": "ScoreData",
    "header": null,
    "fields": [{
      "name": "price",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
    }, {"name": "user", "type": {"kind": "simple", "type": "address", "optional": false}}, {
      "name": "content",
      "type": {"kind": "simple", "type": "cell", "optional": false}
    }, {
      "name": "score",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 32}
    }, {"name": "referrer", "type": {"kind": "simple", "type": "address", "optional": true}}, {
      "name": "ref_amount",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": "coins"}
    }, {"name": "is_mint", "type": {"kind": "simple", "type": "bool", "optional": false}}]
  },
  {
    "name": "SetScoreParent",
    "header": 3899072791,
    "fields": [{
      "name": "signature",
      "type": {"kind": "simple", "type": "Signature", "optional": false}
    }, {"name": "score_data", "type": {"kind": "simple", "type": "ScoreData", "optional": false}}]
  },
  {
    "name": "SetUserScore",
    "header": 549834415,
    "fields": [{
      "name": "item_index",
      "type": {"kind": "simple", "type": "uint", "optional": false, "format": 64}
    }, {"name": "score_data", "type": {"kind": "simple", "type": "ScoreData", "optional": false}}]
  },
  {
    "name": "SetScore",
    "header": 2312732293,
    "fields": [{"name": "data", "type": {"kind": "simple", "type": "ScoreData", "optional": false}}]
  },
  {
    "name": "NftData",
    "header": null,
    "fields": [{"name": "deployed", "type": {"kind": "simple", "type": "bool", "optional": false}}, {
      "name": "index",
      "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    }, {"name": "collection", "type": {"kind": "simple", "type": "address", "optional": false}}, {
      "name": "owner",
      "type": {"kind": "simple", "type": "address", "optional": false}
    }, {"name": "content", "type": {"kind": "simple", "type": "cell", "optional": false}}]
  },
  {
    "name": "CollectionData",
    "header": null,
    "fields": [{
      "name": "next_index",
      "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    }, {"name": "content", "type": {"kind": "simple", "type": "cell", "optional": false}}, {
      "name": "owner",
      "type": {"kind": "simple", "type": "address", "optional": false}
    }]
  },
]

const NomisScore_getters: ABIGetter[] = [
  {"name": "seqno", "arguments": [], "returnType": {"kind": "simple", "type": "int", "optional": false, "format": 257}},
  {
    "name": "get_next_index",
    "arguments": [],
    "returnType": {"kind": "simple", "type": "int", "optional": false, "format": 257}
  },
  {
    "name": "get_user_score_address",
    "arguments": [{"name": "user", "type": {"kind": "simple", "type": "address", "optional": false}}],
    "returnType": {"kind": "simple", "type": "address", "optional": false}
  },
  {
    "name": "get_collection_data",
    "arguments": [],
    "returnType": {"kind": "simple", "type": "CollectionData", "optional": false}
  },
  {
    "name": "get_nft_address_by_index",
    "arguments": [{"name": "index", "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}}],
    "returnType": {"kind": "simple", "type": "address", "optional": false}
  },
  {
    "name": "get_nft_content",
    "arguments": [{
      "name": "index",
      "type": {"kind": "simple", "type": "int", "optional": false, "format": 257}
    }, {"name": "individual_content", "type": {"kind": "simple", "type": "cell", "optional": false}}],
    "returnType": {"kind": "simple", "type": "cell", "optional": false}
  },
  {"name": "owner", "arguments": [], "returnType": {"kind": "simple", "type": "address", "optional": false}},
]

const NomisScore_receivers: ABIReceiver[] = [
  {"receiver": "internal", "message": {"kind": "typed", "type": "SetValidator"}},
  {"receiver": "internal", "message": {"kind": "typed", "type": "SetContent"}},
  {"receiver": "internal", "message": {"kind": "typed", "type": "SetScoreParent"}},
  {"receiver": "internal", "message": {"kind": "typed", "type": "Deploy"}},
]

export class NomisScore implements Contract {

  static async init(owner: Address, content: Cell, validator_pub_key: bigint) {
    return await NomisScore_init(owner, content, validator_pub_key);
  }

  static async fromInit(owner: Address, content: Cell, validator_pub_key: bigint) {
    const init = await NomisScore_init(owner, content, validator_pub_key);
    const address = contractAddress(0, init);
    return new NomisScore(address, init);
  }

  static fromAddress(address: Address) {
    return new NomisScore(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
    types: NomisScore_types,
    getters: NomisScore_getters,
    receivers: NomisScore_receivers,
    errors: NomisScore_errors,
  };

  constructor(address: Address, init?: { code: Cell, data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean | null | undefined }, message: SetValidator | SetContent | SetScoreParent | Deploy) {

    let body: Cell | null = null;
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetValidator') {
      body = beginCell().store(storeSetValidator(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetContent') {
      body = beginCell().store(storeSetContent(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetScoreParent') {
      body = beginCell().store(storeSetScoreParent(message)).endCell();
    }
    if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, {...args, body: body});

  }

  async getSeqno(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('seqno', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getGetNextIndex(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_next_index', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getGetUserScoreAddress(provider: ContractProvider, user: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(user);
    let source = (await provider.get('get_user_score_address', builder.build())).stack;
    let result = source.readAddress();
    return result;
  }

  async getGetCollectionData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_collection_data', builder.build())).stack;
    const result = loadTupleCollectionData(source);
    return result;
  }

  async getGetNftAddressByIndex(provider: ContractProvider, index: bigint) {
    let builder = new TupleBuilder();
    builder.writeNumber(index);
    let source = (await provider.get('get_nft_address_by_index', builder.build())).stack;
    let result = source.readAddress();
    return result;
  }

  async getGetNftContent(provider: ContractProvider, index: bigint, individual_content: Cell) {
    let builder = new TupleBuilder();
    builder.writeNumber(index);
    builder.writeCell(individual_content);
    let source = (await provider.get('get_nft_content', builder.build())).stack;
    let result = source.readCell();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('owner', builder.build())).stack;
    let result = source.readAddress();
    return result;
  }

}

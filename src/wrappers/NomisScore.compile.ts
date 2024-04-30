import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/nomis_score.tact',
    options: {
        debug: false,
    },
};

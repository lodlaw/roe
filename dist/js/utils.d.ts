/// <reference types="react" />
export declare const formatCode: (code: string) => string;
export declare const getHref: (children?: React.ReactNode, href?: string | undefined) => string | undefined;
export declare const resetRandomSeed: () => void;
export declare const generateIpsum: (words: ReadonlyArray<string>) => string;
export declare const shouldNotBeRendered: (children: any) => boolean;
export declare const isValidColumnNumber: (value?: number | undefined) => boolean;
export declare const getScrollOffset: () => {
    x: number;
    y: number;
};

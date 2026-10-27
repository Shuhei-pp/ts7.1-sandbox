// You can write this in a global `.d.ts` file with no import statements.

declare module "*" with { type: 'css' } {
    const content: CSSStyleSheet;
    export default content;
}

declare module "*" with { type: 'text' } {
    const content: string;
    export default content;
}

declare module "*" with { type: 'bytes' } {
    const content: Uint8Array;
    export default content;
}


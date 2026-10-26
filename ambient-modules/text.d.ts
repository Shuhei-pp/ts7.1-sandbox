// You can write this in a global `.d.ts` file with no import statements.

declare module "*.css" {
    const content: CSSStyleSheet;
    export default content;
}

declare module "*.txt" {
    const content: string;
    export default content;
}

declare module "*.md" {
    const content: string;
    export default content;
}

declare module "*.bin" {
    const content: Uint8Array;
    export default content;
}

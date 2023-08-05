type Parts = {
    bg: string;
    body: string;
    accessories: string;
    eyes: string;
    faces: string;
    hairs: string;
    mouths: string;
    outfits: string;
};
export declare function getParts(part: keyof Parts, name?: string | null, itemsAv?: number): string;
export {};

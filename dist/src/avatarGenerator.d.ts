type avatarDetail = {
    bg?: string | null;
    body?: string | null;
    hair?: string | null;
    eye?: string | null;
    mouth?: string | null;
    head?: string | null;
    outfit?: string | null;
    accessory?: string | null;
    facialHair?: string | null;
};
export declare const avatarGenerator: ({ bg, body, hair, eye, mouth, head, outfit, accessory }: avatarDetail) => Promise<string>;
export {};

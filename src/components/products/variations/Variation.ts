export interface VariationItem {
    title: string;
    value: string;
}

export interface Variation {
    hash: string;
    title: string;
    type: string;
    items: VariationItem[];
}
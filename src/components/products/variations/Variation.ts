export interface VariationItem {
    title: string;
    value: string;
}

export interface Variation {
    hash: string;
    title: string;
    name: string;
    type: string;
    items: VariationItem[];
}
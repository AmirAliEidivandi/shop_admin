interface persianNumbers {
    [index: string]: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const persianNumbers: persianNumbers = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
};

export const toPersianNumber = (value: number | string): string => {
    return String(value)
        .split("")
        .map((char: string) => {
            return persianNumbers[char] ? persianNumbers[char] : char;
        })
        .join("");
};

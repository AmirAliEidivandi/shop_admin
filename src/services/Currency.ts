const persianFormatter = new Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
});

export const toPersianCurrency = (value: number) => {
    return persianFormatter.format(value);
};

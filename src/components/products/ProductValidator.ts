export const validateTitle = (title: string): string | null => {
    if (title === "") {
        return "عنوان محصول نمیتواند خالی باشد";
    }
    return null;
};

export const validatePrice = (price: string): string | null => {
    if (price === "") {
        return "قیمت محصول نمیتواند خالی باشد";
    }
    if (parseInt(price) === 0) {
        return "قمیت محصول نمیتواند صفر باشد";
    }
    return null;
};

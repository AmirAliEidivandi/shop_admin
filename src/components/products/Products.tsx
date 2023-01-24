import { useEffect, useState, useMemo } from "react";
import { Color } from "@material-ui/lab/Alert";
import HttpService from "@/services/Http";
import ProductsList from "./list";
import IProduct from "./IProduct";
import Notify from "../partials/Notify";
import Content from "../partials/Content";
import SkeletonTable from "../utils/SkeletonTable";

interface notifyState {
    open: boolean;
    message: string;
    type: Color;
}

const Products = () => {
    const httpService = useMemo(() => new HttpService(), []);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [notifyState, setNotifyState] = useState<notifyState>({
        open: false,
        message: "",
        type: "success",
    });

    useEffect(() => {
        const fetchProduct = () => {
            httpService
                .get("api/v1/products")
                .then((res) => {
                    setProducts(res.data as IProduct[]);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setNotifyState({
                        open: true,
                        message: "دریافت لیست محصولات با خطا مواجه شد",
                        type: "error",
                    });
                });
        };
        fetchProduct();
    }, []);

    return (
        <Content title="لیست محصولات">
            <Notify {...notifyState} />
            {isLoading && <SkeletonTable />}
            {!isLoading && <ProductsList items={products} />}
        </Content>
    );
};

export default Products;

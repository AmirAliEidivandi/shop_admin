import { useState, useEffect } from "react";
import Http from "@/services/Http";
import Table from "../utils/Table";
import Content from "../partials/Content";
import SkeletonTable from "../utils/SkeletonTable";
import CategoryItem from "../contracts/CategoryItem";

const Categories = () => {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const http = new Http();

    useEffect(() => {
        http.get<CategoryItem[]>("api/v1/categories")
            .then((res) => {
                setCategories(res.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <Content title="لیست دسته بندی ها">
            {isLoading && <SkeletonTable />}
            {!isLoading && <Table columns={["عنوان", "اسلاگ"]} data={categories} attributes={["title", "slug"]} />}
        </Content>
    );
};

export default Categories;

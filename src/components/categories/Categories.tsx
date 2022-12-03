import React, { useState, useEffect } from "react";
import { TableContainer, TableHead, TableRow, TableCell, Table, Paper, TableBody } from "@material-ui/core";
import Content from "../partials/Content";
import Http from "../../services/Http";
import SkeletonTable from "../utils/SkeletonTable";

interface CategoryItem {
    hash: string;
    title: string;
    slug: string;
}

const Categories = () => {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const http = new Http();

    useEffect(() => {
        http.get("api/v1/categories")
            .then((res) => {
                setCategories(res.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <Content title="لیست دسته بندی ها">
            {isLoading && <SkeletonTable />}
            {!isLoading && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>عنوان</TableCell>
                                <TableCell>slug</TableCell>
                                <TableCell>عملیات</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories?.map((category) => {
                                return (
                                    <TableRow key={category.hash}>
                                        <TableCell>{category.title}</TableCell>
                                        <TableCell>{category.slug}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Content>
    );
};

export default Categories;

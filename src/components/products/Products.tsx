import Content from "../partials/Content";
import SkeletonTable from "../utils/SkeletonTable";

const Products = () => {
    return (
        <Content title="لیست محصولات">
            <SkeletonTable />
        </Content>
    );
};

export default Products;

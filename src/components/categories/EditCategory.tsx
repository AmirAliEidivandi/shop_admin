import { CategoriesProvider } from "./context";
import CategoriesContent from "./CategoriesContent";

const EditCategory = () => {
    return (
        <CategoriesProvider>
            <CategoriesContent />
        </CategoriesProvider>
    );
};

export default EditCategory;

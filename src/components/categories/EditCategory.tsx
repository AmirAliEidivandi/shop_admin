import CategoriesContent from "./CategoriesContent";
import { CategoriesProvider } from "./context";

const EditCategory = () => {
    return (
        <CategoriesProvider>
            <CategoriesContent />
        </CategoriesProvider>
    );
};

export default EditCategory;

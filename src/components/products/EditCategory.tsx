import Content from "../partials/Content";
import { FormControl, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AttributeGroup from "./attribute/AttributeGroup";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formRow: {
            margin: theme.spacing(2, "auto"),
        },
    })
);

const EditCategory = () => {
    const styles = useStyles();

    return (
        <Content title="ویرایش / اضافه کردن دسته بندی">
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="category_title_fa" label="عنوان دسته بندی - فارسی" />
            </FormControl>
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="category_title_en" label="عنوان دسته بندی - انگلیسی" />
            </FormControl>
            <AttributeGroup title="مشخصات کلی" />
        </Content>
    );
};

export default EditCategory;

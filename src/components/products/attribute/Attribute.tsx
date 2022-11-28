import { TextField, Switch, FormControlLabel } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        attributeItem: {
            margin: theme.spacing(0, 1),
        },
    })
);

const Attribute = () => {
    const styles = useStyles();
    return (
        <>
            <TextField variant="outlined" label="عنوان فارسی" id="attribute_title_fa" className={styles.attributeItem} />
            <TextField variant="outlined" label="عنوان انگلیسی" id="attribute_title_en" className={styles.attributeItem} />
            <FormControlLabel label="استفاده از فیلترها" control={<Switch color="primary" id="attribute_filterable" />} className={styles.attributeItem} />
            <FormControlLabel label="استفاده برای قیمت" control={<Switch color="primary" id="attribute_filterable" />} className={styles.attributeItem} />
        </>
    );
};

export default Attribute;

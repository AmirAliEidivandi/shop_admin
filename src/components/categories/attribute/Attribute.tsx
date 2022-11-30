import { TextField, Switch, FormControlLabel, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AttributeItem from "./AttributeItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        attributeItem: {
            margin: theme.spacing(0, 1),
        },
        box: {
            padding: theme.spacing(2),
        },
    })
);

const Attribute = ({ hash, slug, filterable, title, hasPrice }: AttributeItem) => {
    const styles = useStyles();
    return (
        <Box className={styles.box}>
            <TextField variant="outlined" label="عنوان فارسی" id="title" name="title" className={styles.attributeItem} />
            <TextField variant="outlined" label="عنوان انگلیسی" id="slug" name="slug" className={styles.attributeItem} />
            <FormControlLabel label="استفاده برای فیلتر ها" control={<Switch color="primary" id="filterable" name="filterable" />} className={styles.attributeItem} />
            <FormControlLabel label="استفاده برای قیمت" control={<Switch color="primary" id="hasPrice" name="hasPrice" />} className={styles.attributeItem} />
        </Box>
    );
};

export default Attribute;

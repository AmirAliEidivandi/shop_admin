import { TextField, Switch, FormControlLabel, Box, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        attributeItem: {
            margin: theme.spacing(0, 1),
        },
        box: {
            padding: theme.spacing(2),
        },
        forControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    })
);

const Attribute = () => {
    const styles = useStyles();
    return (
        <Box className={styles.box}>
            <TextField variant="outlined" label="عنوان فارسی" id="attribute_title_fa" className={styles.attributeItem} />
            <TextField variant="outlined" label="عنوان انگلیسی" id="attribute_title_en" className={styles.attributeItem} />
            <FormControl className={styles.forControl}>
                <InputLabel id="attribute_type_label">نوع داده</InputLabel>
                <Select labelId="attribute_type_label" id="attribute_type" variant="outlined">
                    <MenuItem value={1}>عددی</MenuItem>
                    <MenuItem value={2}>متنی</MenuItem>
                    <MenuItem value={3}>متنی چند گزینه ای</MenuItem>
                </Select>
            </FormControl>
            <FormControlLabel label="استفاده از فیلترها" control={<Switch color="primary" id="attribute_filterable" />} className={styles.attributeItem} />
            <FormControlLabel label="استفاده برای قیمت" control={<Switch color="primary" id="attribute_filterable" />} className={styles.attributeItem} />
        </Box>
    );
};

export default Attribute;

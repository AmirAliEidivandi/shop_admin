import React, { useState, useMemo } from "react";
import { Button, Checkbox, createStyles, FormControl, FormControlLabel, Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import HttpService from "src/services/Http";
import Content from "../partials/Content";
import Section from "../partials/Section";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formRow: {
            margin: theme.spacing(2, "auto"),
        },
    })
);

interface CouponRules {
    user: string;
    maxPrice: number;
    minPrice: number;
    firstPurchase: boolean;
}

const NewCoupon = () => {
    const styles = useStyles();
    const httpService = useMemo(() => new HttpService(), []);
    const [code, setCode] = useState<string>("");
    const [percent, setPercent] = useState<number>(0);
    const [limit, setLimit] = useState<number>(0);
    const [expiresAt, setExpiresAt] = useState<string>("");
    const [couponRules, setCouponRules] = useState<CouponRules>({
        user: "",
        maxPrice: 0,
        minPrice: 0,
        firstPurchase: false,
    });

    const updateCouponRulesUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCouponRules((prev) => ({ ...prev, user: e.target.value }));
    };
    const updateCouponRulesMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maxPrice: number = e.target.value as unknown as number;
        setCouponRules((prev) => ({ ...prev, maxPrice }));
    };
    const updateCouponRulesMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const minPrice: number = e.target.value as unknown as number;
        setCouponRules((prev) => ({ ...prev, minPrice }));
    };
    const updateCouponRulesFirstPurchase = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCouponRules((prev) => ({ ...prev, firstPurchase: e.target.checked }));
    };

    const saveCoupon = (e: React.MouseEvent) => {
        httpService
            .post("api/v1/coupons", {
                code,
                percent,
                limit,
                expiresAt,
                constraints: couponRules,
            })
            .then((res) => {})
            .catch((err) => console.log(err));
    };

    return (
        <Content title="?????????? ???????? ">
            <Grid container xs={12} md={6} lg={6}>
                <FormControl fullWidth className={styles.formRow}>
                    <TextField variant="outlined" id="code" name="code" label="???? ??????????" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)} required />
                </FormControl>
                <FormControl fullWidth className={styles.formRow}>
                    <TextField
                        variant="outlined"
                        id="percent"
                        name="percent"
                        label="???????? ??????????"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPercent(e.target.value as unknown as number)}
                        required
                    />
                </FormControl>
                <FormControl fullWidth className={styles.formRow}>
                    <TextField
                        variant="outlined"
                        id="limit"
                        name="limit"
                        label="??????????"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLimit(e.target.value as unknown as number)}
                        defaultValue={0}
                        helperText="?????????? 0 ???? ?????????? ?????????????? ???? ????????"
                    />
                </FormControl>
                <FormControl fullWidth className={styles.formRow}>
                    <TextField
                        type="date"
                        variant="outlined"
                        id="expires_at"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiresAt(e.target.value)}
                        name="expires_at"
                        label="?????????? ????????????"
                        helperText="?????? ?????? ?????????? ???????? ???? ???????? ?????????? ?????? ??????"
                    />
                </FormControl>
            </Grid>
            <Grid container md={12}>
                <Section fullWidth title="?????????? ??????????????">
                    <Grid md={6}>
                        <FormControl fullWidth className={styles.formRow}>
                            <TextField variant="outlined" id="user" name="user" label="??????????" onChange={updateCouponRulesUser} helperText="?????? ?????? ?????????? ???? ?????????? ???? ???? ?????????? ?????????????? ??????" />
                        </FormControl>
                        <FormControl fullWidth className={styles.formRow}>
                            <TextField
                                variant="outlined"
                                id="lower_boundary"
                                name="lower_boundary"
                                label="?????????? ???????? ??????????"
                                onChange={updateCouponRulesMinPrice}
                                helperText="?????????? ???????? ?????????????? ?????? ???? ???????? ?????????? ?????????? ?????????? ???? ?????? ?????????? ????????"
                            />
                        </FormControl>
                        <FormControl fullWidth className={styles.formRow}>
                            <TextField
                                variant="outlined"
                                id="upper_boundary"
                                name="upper_boundary"
                                label="???????????? ???????? ??????????"
                                onChange={updateCouponRulesMaxPrice}
                                helperText="?????????? ???????? ?????????????? ?????? ???? ???????? ?????????? ?????????? ???????? ???? ?????? ?????????? ????????"
                            />
                        </FormControl>
                        <FormControl fullWidth className={styles.formRow}>
                            <FormControlLabel control={<Checkbox onChange={updateCouponRulesFirstPurchase} name="first_purchase" />} label="?????? ???????? ???????? ?????? ??????" />
                        </FormControl>
                    </Grid>
                </Section>
                <Button variant="contained" onClick={saveCoupon} color="primary">
                    ?????? ???? ??????????
                </Button>
            </Grid>
        </Content>
    );
};

export default NewCoupon;

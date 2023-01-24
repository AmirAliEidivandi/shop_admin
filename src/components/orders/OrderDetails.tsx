import React, { useState, useEffect, useMemo } from "react";
import { Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import IOrder from "./IOrder";
import IOrderLines from "./IOrderLines";
import OrderStatus from "./OrderStatus";
import Content from "../partials/Content";
import HttpService from "@/services/Http";

const OrderDetails = () => {
    const { orderID } = useParams();
    const httpService = useMemo(() => new HttpService(), []);
    const [order, setOrder] = useState<IOrder | null>(null);
    const [orderStatus, setOrderStatus] = useState<OrderStatus>(order?.status!);

    useEffect(() => {
        document.title = "جزئیات سفارش";
        const fetchOrder = () => {
            httpService
                .get<IOrder>(`api/v1/orders/${orderID}`)
                .then((res) => {
                    setOrder(res.data as IOrder);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchOrder();
    }, [orderID]);

    const getFinalPrice = (orderLine: IOrderLines): number => {
        if (orderLine.discountedPrice) {
            return orderLine.discountedPrice * orderLine.count;
        }
        return orderLine.price * orderLine.count;
    };
    const changeOrderStatus = (e: React.ChangeEvent<{ value: unknown }>) => {
        setOrderStatus(e.target.value as OrderStatus);
    };
    const updateOrderStatus = () => {
        httpService
            .patch<{ code: string; status: boolean; message: string }>(`api/v1/orders/${orderID}`, {
                orderStatus,
            })
            .then((response) => {})
            .catch((error) => {
                alert(error.response.data.message);
            });
    };

    return (
        <Content title="جزئیات سفارش">
            <Typography>مشخصات مشتری</Typography>
            <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
            <TableContainer>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">نام</TableCell>
                            <TableCell align="center">نام خانوادگی</TableCell>
                            <TableCell align="center">آدرس ایمیل</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{order?.user.firstName}</TableCell>
                            <TableCell align="center">{order?.user.lastName}</TableCell>
                            <TableCell align="center">{order?.user.email}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography style={{ marginTop: "30px" }}>اقلام سفارش</Typography>
            <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
            <TableContainer>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">عنوان محصول</TableCell>
                            <TableCell align="center">قیمت</TableCell>
                            <TableCell align="center">قیمت با تخفیف</TableCell>
                            <TableCell align="center">تعداد</TableCell>
                            <TableCell align="center">قیمت کل</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order?.orderLines.map((orderLine: IOrderLines) => {
                            return (
                                <TableRow>
                                    <TableCell align="center">{orderLine.product.title}</TableCell>
                                    <TableCell align="center">{orderLine.price}</TableCell>
                                    <TableCell align="center">{orderLine.discountedPrice}</TableCell>
                                    <TableCell align="center">{orderLine.count}</TableCell>
                                    <TableCell align="center">{getFinalPrice(orderLine)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item>
                    <FormControl>
                        <InputLabel id="order-status">وضعیت سفارش</InputLabel>
                        <Select value={order?.status} style={{ minWidth: "200px" }} labelId="order-status" id="order-status" onChange={changeOrderStatus}>
                            <MenuItem value={OrderStatus.PENDING}>درحال بررسی</MenuItem>
                            <MenuItem value={OrderStatus.PAID_IN_PROGRESS}>پرداخت شده</MenuItem>
                            <MenuItem value={OrderStatus.DELIVERED}>تحویل شده</MenuItem>
                            <MenuItem value={OrderStatus.CANCELED}>لغو شده</MenuItem>
                            <MenuItem value={OrderStatus.REFUNDED}>مرجوع شده</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <Button onClick={updateOrderStatus} variant="contained" color="primary">
                            به روزرسانی وضعیت
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Content>
    );
};

export default OrderDetails;

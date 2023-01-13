import React, { useEffect } from 'react'
import { Row, Col, Form, Input, Select, Button, Card } from "antd"

function EditProduct() {
    const [form] = Form.useForm();

    useEffect(() => {
        fetchData();
    });

    let DataPro = localStorage.getItem("product")
    const dataProduct = JSON.parse(DataPro)

    const fetchData = () => {
        let DataPro = localStorage.getItem("product")
        const dataProduct = JSON.parse(DataPro)
        console.log(dataProduct)
        form.setFieldsValue(dataProduct[0])
    }


    const onFinish = (values) => {
        const data = [{
            id: 1,
            category_pro: values.category_pro,
            price: values.price,
            pro_description: values.pro_description,
            product_name: values.product_name,
            store_name: values.store_name,
            unit_product: values.unit_product,
            unit: values.unit
        }]
        alert("บันทึกสินค้าสำเร็จ")
        localStorage.setItem("product", JSON.stringify(data))
        window.location.href = "/my-product"
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div>
            <Row justify="center">
                <Col span={24}>
                    <Card className='card-store'>
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="on"
                            form={form}
                        >
                            <Form.Item
                                label="ชื่อร้านค้า"
                                name="store_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรอกชื่อร้านค้า',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ชื่อสินค้า"
                                name="product_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรอกชื่อสินค้า',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="ราคา"
                                name="price"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรอกราคา',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                label="รายละเอียดสินค้า"
                                name="pro_description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรอกรายละเอียดสินค้า',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                label="หน่วยนับสินค้า"
                                name="unit_product"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรอกรายหน่วยนับสินค้า',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="หมวดหมู่สินค้า"
                                name="category_pro"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรอกหน่วยสินค้า',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: '01',
                                            label: 'ผัก',
                                        },
                                        {
                                            value: '02',
                                            label: 'ผลไม้',
                                        },
                                        {
                                            value: '03',
                                            label: 'เครื่องใช่',
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                            >
                                <Button type="primary" htmlType="submit">
                                    {
                                        dataProduct === null || dataProduct.length === 0 ? "สร้างสินค้า" : "อัปเดทสินค้า"
                                    }
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default EditProduct
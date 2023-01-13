import React from 'react'
import { Form, Row, Col, Card, Input, Select, Button } from 'antd'

function CreateProduct() {

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
    console.log('Success:', value);
  };
  const onSearch = (value) => {
    console.log('Failed:', value);
  };

  return (
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
            className=''
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
              label="จำนวนสินค้าในคลัง"
              name="unit"
              rules={[
                {
                  required: true,
                  message: 'จำนวนในคลัง',
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
                placeholder="เลือกหมวดหมู่สินค้า"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'ผัก',
                    label: 'ผัก',
                  },
                  {
                    value: 'ผลไม้',
                    label: 'ผลไม้',
                  },
                  {
                    value: 'ผลไม้',
                    label: 'ผลไม้',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
            >
              <Button type="primary" htmlType="submit">
                สร้างสินค้า
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default CreateProduct
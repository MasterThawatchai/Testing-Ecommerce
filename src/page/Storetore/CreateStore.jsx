import React, { useEffect } from 'react'
import '../../App.css';
import { Button, Form, Input, Row, Col, Card, Select } from 'antd';
import CreateStore from "../../Service/store/createStore.js";

const App = () => {
  const [form] = Form.useForm();
  var test = localStorage.getItem("store")
  const dataStore = JSON.parse(test)

  useEffect(() => {
    getDataStore();
  });

  const getDataStore = () => {

    form.setFieldsValue(dataStore)
  }

  const onFinish = (values) => {
    console.log(values)
    localStorage.setItem("store", JSON.stringify(values))
    alert("บันทึกสำเร็จ")
    window.location.href = "/"
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
    <Row justify="center">
      <Col span={24}>
        <Card className='card-store'>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              label="ชื่อร้านค้า"
              name="store"
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
              label="รายละเอียดร้านค้า"
              name="description"
              rules={[
                {
                  required: true,
                  message: 'กรอกรายละเอียดร้านค้า',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="หมวดหมู่ร้านค้า"
              name="category"
              rules={[
                {
                  required: true,
                  message: 'กรุณาเลือกหมวดหมู่',
                },
              ]}
            >
              <Select
                showSearch
                placeholder="เลือกหมวดหมู่"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  {
                    value: 'ผักผลไม้',
                    label: 'ผักผลไม้',
                  },
                  {
                    value: 'อาหารเครื่องดื่ม',
                    label: 'อาหารเครื่องดื่ม',
                  },
                  {
                    value: 'ของใช้',
                    label: 'ของใช้',
                  },
                ]}
              />
            </Form.Item>


            <Form.Item
            >
              <Button type="primary" htmlType="submit">
                {dataStore === null || dataStore === undefined ? "สร้างร้านค้า" : "อัปเดทร้านค้า"}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default App;
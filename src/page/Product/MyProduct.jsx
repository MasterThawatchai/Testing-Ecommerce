import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button } from 'antd'
import logo from "../../logo.svg";
import "./index.css"
function CreateProduct() {
  const [dataPro, setDataPro] = useState([])
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    let dataProduct = localStorage.getItem("product")
    const data = JSON.parse(dataProduct)
    setDataPro(data)
    console.log(data)
  }

  const editPruct =()=> {
    window.location.href = "/edite-product"
  }

  const deletePruct =()=> {
    localStorage.removeItem("product");
    alert("ลบสินค้าสำเร็จ")
    window.location.reload()
  }


  console.log(dataPro)
  return (
    <Row justify="center">
      <Col span={24}>
        <div className='mb-2'>
          สินค้าของฉัน
        </div>
        {
          dataPro === null || dataPro.length === 0 ? <Card>
            <Row>
              <Col>
                <Button onClick={() => window.location.href = "/create-product"}>
                  สร้างสินค้า
                </Button>
              </Col>
            </Row>
          </Card> : <>
            {
              dataPro.map((item, index) => {
                return <Card key={index}>
                  <Row gutter={[16, 16]}>
                    <Col lg={8} md={8} sm={24} xs={24} className="col-image-product">
                      <img alt="" width={"auto"} src={logo} />
                    </Col>
                    <Col lg={16} md={16} sm={24} xs={24} className="mb-2" >
                      <span>ชื่อร้านค้า : {item.store_name}</span><br />
                      <span>ชื่อสินค้า : {item.product_name}</span><br />
                      <span>ราคาสินค้า : {item.price} บาท</span><br />
                      <span>จำนวนในคลัง : {item.unit} ชิ้น</span><br />
                      <span>หน่วยนับสินค้า : {item.unit_product}</span><br />
                      <span>หมวดหมู่สินค้า : {item.category_pro}</span><br />
                      <span>รายละเอียดสินค้า : {item.pro_description}</span><br />
                    </Col>
                    <Col className='col-manage-prduct' span={24} >
                      <Button onClick={()=> editPruct()} className='btn-edit'>แก้ไขสินค้า</Button>
                      <Button onClick={()=> deletePruct()} className='btn-delete'>ลบสินค้า</Button>
                    </Col>
                  </Row>
                </Card>
              })
            }
          </>

        }

      </Col>
    </Row>
  )
}

export default CreateProduct
import React from 'react'
import Row from "antd/lib/row"
import Col from "antd/lib/col"
import logo from "../../logo.svg";

function MyStore() {
    let dataStore = localStorage.getItem("store")
    const data = JSON.parse(dataStore)
    return (
        <div>
     
            <Row justify="center">
                <Col span={24}>
                    {
                        data === null || data === undefined ? "ยังไม่สร้างร้านค้า" :
                            <Row>
                                <Col xs={24} lg={6} style={{alignItems:" center", display: "flex"}}>
                                    <img alt="" width={250} src={logo} />
                                </Col>
                                <Col xs={24} lg={18}style={{alignSelf:" center"}}>
                                    <div>ร้านค้าของฉันชื่อ: <span style={{fontWeight: "600", color: "blue"}}>{data.store_name}</span></div><br/>
                                    <div>รายละเอียดร้านค้า: <span style={{fontWeight: "600", color: "blue"}}>{data.description_store}</span></div><br/>
                                    <div>หมวดหมู่ร้านค้า: <span style={{fontWeight: "600", color: "blue"}}>{data.category}</span></div>
                                </Col>
                            </Row>
                    }

                </Col>
            </Row>
        </div>
    )
}

export default MyStore
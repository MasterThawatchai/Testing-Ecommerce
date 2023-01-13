import { Breadcrumb, Layout, theme } from 'antd';
import MyStore from "./page/Storetore/MyStore.jsx";
import CreateStore from "./page/Storetore/CreateStore.jsx";
import CreateProduct from "./page/Product/CreateProduct.jsx";
import MyProduct from "./page/Product/MyProduct.jsx";
import EditeProduct from "./page/Product/editProduct"
import { Route, Routes, Link } from 'react-router-dom';
const { Content } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  var test = localStorage.getItem("store")
  const dataStore = JSON.parse(test)


  return (
    <div className='App'>
      <Layout className="layout">
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item><Link to="/">ร้านค้าของฉัน</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/create-store">
              {
                dataStore === null || dataStore.length ? "สร้างร้านค้า" : "อัปเดทร้านค้า"
              }</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="my-product">สินค้าของฉัน</Link></Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/" element={<MyStore />}>
            </Route>
            <Route path="/create-store" element={<CreateStore />}>
            </Route>
            <Route path="/create-product" element={<CreateProduct />}>
            </Route>
            <Route path="/my-product" element={<MyProduct />}>
            </Route>
            <Route path="/edite-product" element={<EditeProduct />}>
            </Route>
          </Routes>
        </div>
      </Layout>

    </div>
  );
};
export default App;
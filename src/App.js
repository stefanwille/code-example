import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button, Space } from "antd";

function App() {
  return (
    <Space style={{ margin: 50 }}>
      <Button type="primary">Button</Button>
      <Button>Confirm</Button>
    </Space>
  );
}

export default App;

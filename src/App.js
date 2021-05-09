import "./antd-theme/antd-customized.css";
import { Button, Space } from "antd";

function App() {
  return (
    <Space style={{ margin: 50 }}>
      <Button type="primary">Button</Button>
      <Button>Another Button</Button>
    </Space>
  );
}

export default App;

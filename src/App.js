import "./antd-theme/antd-customized.css";
import { Button, Input, Switch, Space } from "antd";

function App() {
  return (
    <Space style={{ margin: 50 }}>
      <Button type="primary">Button</Button>
      <Input.Search placeholder="Input search text" />
      <Switch defaultChecked />
    </Space>
  );
}

export default App;

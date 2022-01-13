import React from "react";
import { Form, Button } from "antd";

interface SearchProps {
  onSearch: () => void;
  onClear: () => void;
  children: any;
  createBtnTitle?: string;
  createBtnFunc?: () => any;
  style?: object;
}

interface SearchItemProps {
  name: string;
  label: string;
  children: any;
  br?: boolean;
  style?: object;
}

function Search({
  onSearch,
  onClear,
  children,
  createBtnTitle,
  createBtnFunc,
  style,
}: SearchProps) {
  const [searchForm] = Form.useForm();
  const clear = () => {
    onClear();
    searchForm.resetFields();
  };
  return (
    <div style={{ padding: 12, clear: "both", ...style }}>
      <Form form={searchForm} name="searchForm" labelAlign="left">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 1200,
            float: "left",
          }}
        >
          {children}
        </div>
        <div style={{ float: "left" }}>
          <Button type="primary" onClick={onSearch}>
            查询
          </Button>
          <Button style={{ marginLeft: 10 }} onClick={clear}>
            重置
          </Button>
        </div>
        <div style={{ float: "right" }}>
          <Button type="primary" onClick={createBtnFunc}>
            {createBtnTitle}
          </Button>
        </div>
      </Form>
    </div>
  );
}

Search.Item = function ({ name, label, children, br, style }: SearchItemProps) {
  return (
    <>
      {br && <br />}
      <div style={{ width: 400, marginRight: 10, ...style }}>
        <Form.Item label={label} name={name}>
          {children}
        </Form.Item>
      </div>
    </>
  );
};

export default Search;

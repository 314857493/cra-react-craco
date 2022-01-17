import type { MutableRefObject } from "react";
import React, { useRef } from "react";
import { Form, Button } from "antd";

interface SearchProps {
  onSearch: () => void;
  onClear: () => void;
  children: any;
  createBtnTitle?: string;
  createBtnFunc?: () => any;
  form: SearchForm;
}

interface SearchForm {
  getValue: () => MutableRefObject<any>;
  setForm: (value: any) => any;
  clearForm: () => any;
}

interface SearchItemProps {
  name: string;
  label: string;
  children: any;
  br?: boolean;
}

const Search = ({
  onSearch,
  onClear,
  children,
  createBtnTitle,
  createBtnFunc,
  form,
}: SearchProps) => {
  const [searchForm] = Form.useForm();
  const clear = () => {
    searchForm.resetFields();
    form.clearForm();
    onClear();
  };
  const submit = () => {
    form.setForm(searchForm.getFieldsValue());
    onSearch();
  };
  return (
    <div style={{ padding: 12, clear: "both" }}>
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
          <Button type="primary" onClick={submit}>
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
};

Search.Item = ({ name, label, children, br }: SearchItemProps) => {
  return (
    <>
      {br && <br />}
      <div style={{ width: 400, marginRight: 10 }}>
        <Form.Item label={label} name={name}>
          {children}
        </Form.Item>
      </div>
    </>
  );
};

Search.useSearchForm = (): SearchForm => {
  const formValue: MutableRefObject<any> = useRef({});
  const getValue = () => formValue.current;
  const setForm = (value: any) => (formValue.current = value);
  const clearForm = () => (formValue.current = {});
  const searchForm = {
    getValue,
    setForm,
    clearForm,
  };
  return searchForm;
};

export default Search;

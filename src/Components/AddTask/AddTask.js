import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import IntegerStep from '../Slider/Slider';
import './AddTask.css';


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const AddTask = () => {
  const [task, setTask] = useState({title: null, description: null, urgency: 0})
  const [form] = Form.useForm();


const onFinish = values => {
    setTask(values)
    console.log(task)
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
      <div className="task-form">
          <p className="add-task"> Add New Task </p>
    <Form {...layout} form={form} labelAlign="left" name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="Title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
          <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="Urgency"
        label="Urgency"
        rules={[
          {
            required: false,
          },
        ]}
      >
          <IntegerStep />
      </Form.Item>
      <Form.Item {...tailLayout}>
          <div className="button-container">
      <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        </div>
      </Form.Item>
    </Form>
    </div>
  );
};



export default AddTask
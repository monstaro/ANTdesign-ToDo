import React, { useState, useContext } from 'react';
import { Form, Input, Button, Select } from 'antd';
import IntegerStep from '../Slider/Slider';
import './AddTask.css';
import {TasksContext} from '../../TasksContext.js'

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
  const [task, setTask] = useState({title: null, description: null})
  const [form] = Form.useForm();
    const [tasks, setTasks] = useContext(TasksContext)

const onFinish = values => {
    setTask(values)
    console.log(values)
    setTasks(prevTasks => [...prevTasks, {title: values.title, description: values.description}])
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
      <div className="task-form">
          <p className="add-task"> Add New Task </p>
    <Form {...layout} form={form} labelAlign="left" name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="title"
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
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
          <Input.TextArea />
      </Form.Item>
      {/* <Form.Item
        name="Urgency"
        label="Urgency"
        rules={[
          {
            required: false,
          },
        ]}
      >
          <IntegerStep />
      </Form.Item> */}
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
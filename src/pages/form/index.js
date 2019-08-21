import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const handleChangeFields = (props, changedFields, allFields) => {
  console.log(props, changedFields, allFields);
};

const handleFieldsChange = (props, changedValues, allValues) => {
  console.log(props, changedValues, allValues);
};

class FormTest extends Component {
  handleEnsure = () => {
    const {
      form: { validateFieldsAndScroll, isFieldsTouched, getFieldsError, isFieldValidating },
    } = this.props;
    const errs = getFieldsError();
    // console.log(isFieldValidating('password'));
    // console.log(isFieldsTouched(['password']));
    // console.log(errs);
    validateFieldsAndScroll((errs, values) => {
      console.log(values);
    });
  };
  handleReset = () => {
    const { form: { resetFields } } = this.props;
    resetFields();
  }
  handleSetFields = () => {
    const { form: { setFields } } = this.props;
    setFields({name: { value: '黄斌', errors: [new Error('forbid ha')], }})
  }
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form layout="inline">
        <FormItem label="用户名" colon={false} required={true}>
          {getFieldDecorator('name', {
            // rules: [
            //   {
            //     required: true,
            //     message: '请输入用户名',
            //   },
            // ],
          })(<Input />)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入用户名',
              },
            ],
          })(<Input />)}
        </FormItem>
        <Button htmlType="submit" onClick={this.handleReset}>
          重置
        </Button>
        <Button htmlType="submit" onClick={this.handleEnsure}>
          确定
        </Button>
        <Button htmlType="submit" onClick={this.handleSetFields}>
          setFields
        </Button>
      </Form>
    );
  }
}

export default Form.create({
  name: 'test',
  // onFieldsChange: handleChangeFields,
  // onValuesChange: handleFieldsChange,
})(FormTest);

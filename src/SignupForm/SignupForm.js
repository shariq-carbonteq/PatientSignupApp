import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  DatePicker,
  Upload,
  Divider,
  Space,
  Row,
  Col,
} from "antd";
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import FamilyMemberModal from "./FamilyMemberModal";

function SignupForm(props) {
  const [insuranceStatus, setInsuranceStatus] = useState(false);
  const [checkedList, setCheckedList] = useState(["No"]);

  const handleInsuranceStatus = (checkedValue) => {
    console.log("checked value: ", checkedValue);
    checkedValue[0] === "Yes" && setInsuranceStatus(true);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle initialValue="+92">
      <Select style={{ width: 70 }}>
        <Select.Option value="92">+92</Select.Option>
        <Select.Option value="94">+94</Select.Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <Row>
        <Col span={24}>
          <Form>
            <Divider>Perosnal Information</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  label="First name"
                  labelCol={{ span: 8 }}
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your first name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Last name"
                  labelCol={{ span: 8 }}
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your last name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  label="Email"
                  labelCol={{ span: 8 }}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  labelCol={{ span: 8 }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  label="DOB"
                  labelCol={{ span: 8 }}
                  name="dob"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  labelCol={{ span: 8 }}
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select your gender" allowClear>
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  name="address"
                  label="Address"
                  labelCol={{ span: 8 }}
                  rules={[
                    { required: true, message: "Please enter your address" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="city"
                  label="City"
                  labelCol={{ span: 8 }}
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select your city" allowClear></Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  name="state"
                  label="State"
                  labelCol={{ span: 8 }}
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select your state" allowClear></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="zipCode"
                  label="Zipcode"
                  labelCol={{ span: 8 }}
                  rules={[
                    { required: true, message: "Please enter your zip code" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  name="idSnapshot"
                  label="ID Snapshot"
                  labelCol={{ span: 8 }}
                  rules={[
                    {
                      required: true,
                      message: "Please upload the snapshot of your ID",
                    },
                  ]}
                >
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <Divider>Insurance Details</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Form.Item
                  name="insuranceStatus"
                  label="Medical Insurance"
                  labelCol={{ span: 12 }}
                  rules={[
                    {
                      required: true,
                      message: "Insurance details are required",
                    },
                  ]}
                >
                  <Checkbox.Group options={["Yes", "No"]} value={["No"]} />
                </Form.Item>
              </Col>
            </Row>
            {true && (
              <>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col span={8}>
                    <Form.Item
                      name="insuranceDocFront"
                      label="Insurance Card Front"
                      labelCol={{ span: 12 }}
                      rules={[
                        {
                          required: true,
                          message:
                            "Please upload the snapshot of your insurance document form front side",
                        },
                      ]}
                    >
                      <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="insuranceDocBack"
                      label="Insurance Card Back"
                      labelCol={{ span: 12 }}
                      rules={[
                        {
                          required: true,
                          message:
                            "Please upload the snapshot of your insurance document form back side",
                        },
                      ]}
                    >
                      <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col span={8}>
                    <Form.Item
                      name="insuranceCompany"
                      label="Insurance Company"
                      labelCol={{ span: 12 }}
                      rules={[{ required: true }]}
                    >
                      <Select
                        placeholder="Select your insurance company"
                        allowClear
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      name="insuranceNumber"
                      label="Insurance Number"
                      labelCol={{ span: 12 }}
                      rules={[
                        {
                          required: true,
                          message: "Please enter your insurance number",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            )}
            <Divider>Family Information</Divider>
            {/* <FamilyMemberModal patientInsurance={insuranceStatus} /> */}
            <Form.List name="familyMembers">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space key={field.key} align="baseline">
                      {/* <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.area !== curValues.area ||
                  prevValues.sights !== curValues.sights
                }
              >
                {() => (
                  <Form.Item
                    {...field}
                    label="Sight"
                    name={[field.name, "sight"]}
                    fieldKey={[field.fieldKey, "sight"]}
                    rules={[{ required: true, message: "Missing sight" }]}
                  >
                    <Select
                      disabled={!form.getFieldValue("area")}
                      style={{ width: 130 }}
                    >
                      {(sights[form.getFieldValue("area")] || []).map(
                        (item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        )
                      )}
                    </Select>
                  </Form.Item>
                )}
              </Form.Item> */}
                      <Form.Item
                        {...field}
                        label="First Name"
                        name={[field.name, "firstName"]}
                        fieldKey={[field.fieldKey, "firstName"]}
                        rules={[
                          { required: true, message: "First name is required" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Last Name"
                        name={[field.name, "lastName"]}
                        fieldKey={[field.fieldKey, "lastName"]}
                        rules={[
                          { required: true, message: "Last name is required" },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="DOB"
                        name={[field.name, "dob"]}
                        fieldKey={[field.fieldKey, "dob"]}
                        rules={[
                          {
                            required: true,
                            message: "Date of birth is required",
                          },
                        ]}
                      >
                        <DatePicker />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Insurance Status"
                        name={[field.name, "insuranceStatus"]}
                        fieldKey={[field.fieldKey, "insuranceStatus"]}
                        rules={[
                          {
                            required: true,
                            message: "insurance Status is required",
                          },
                        ]}
                      >
                        <Select placeholder="Insurance status" allowClear>
                          <Select.Option value="same">Same</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                          <Select.Option value="none">None</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        {...field}
                        name={[field.name, "insuranceAttestation"]}
                        fieldKey={[field.fieldKey, "insuranceAttestation"]}
                        rules={[
                          {
                            required: true,
                            message: "Please agree to the insurance policy",
                          },
                        ]}
                      >
                        <Checkbox>
                          I verify that I want to apply for medical insurance
                        </Checkbox>
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}
                  <Row>
                    <Col span={8} offset={8}>
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Add family member
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </>
              )}
            </Form.List>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default SignupForm;

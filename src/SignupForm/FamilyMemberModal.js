import React, { useState } from "react";
import { Modal, Button, Form, Input, DatePicker, Select, Checkbox } from "antd";

function FamilyMemberModal(props) {
  const { patientInsurance } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [insuranceStatus, setInsuranceStatus] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInsuranceStatus = (selectedOption) => {
    setInsuranceStatus(selectedOption);
    console.log("This is selected option", selectedOption);
  };

  const renderInsuranceAttestation = () => {
    return (
      insuranceStatus === "other" && (
        <Checkbox>I verify that I want to apply for medical insurance</Checkbox>
      )
    );
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Family Member
      </Button>
      <Modal
        title="Family Member Details"
        visible={isModalVisible}
        onOk={handleAdd}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="First name"
            name="memberFirstName"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="memberLastName"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="DOB"
            name="memberDob"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="insuranceStatus"
            label="Insurance Status"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Insurance status"
              allowClear
              onChange={handleInsuranceStatus}
            >
              <Select.Option value="same" disabled={!patientInsurance}>
                Same
              </Select.Option>
              <Select.Option value="other">Other</Select.Option>
              <Select.Option value="none">None</Select.Option>
            </Select>
          </Form.Item>
        </Form>
        {renderInsuranceAttestation()}
      </Modal>
    </>
  );
}

export default FamilyMemberModal;

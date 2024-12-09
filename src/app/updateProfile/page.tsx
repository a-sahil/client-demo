"use client";
import React from "react";
import { Form, Input, Button } from "antd";

const ProfileForm = () => {
  const [form] = Form.useForm();

  // Helper function to render the label with a red asterisk for required fields
  const renderLabel = (label, isRequired = false) => (
    <span className="text-white">
      {label}
      {isRequired && <span className="text-red-500 ml-1">*</span>}
    </span>
  );

  return (
    <div className="min-h-screen bg-[#121212] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Create Your Profile
          </h1>
          <p className="text-gray-400">Start Contributing to crypto projects</p>
        </div>
        <Form form={form} layout="vertical" className="space-y-6" requiredMark={false}>
          <Form.Item
            name="X"
            label={renderLabel("X", true)}
            rules={[{ required: true }]}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name="LinkedIn"
            label={renderLabel("LinkedIn", true)}
            rules={[{ required: true }]}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name="Github"
            label={renderLabel("Github", true)}
            rules={[{ required: true }]}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name="Portfolio"
            label={renderLabel("Portfolio", true)}
            rules={[{ required: true }]}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 border-none text-lg"
              style={{
                background: "linear-gradient(to right, #1FBF4A, #22CC77)",
                borderColor: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "linear-gradient(to right, #22CC77, #1FBF4A)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "linear-gradient(to right, #1FBF4A, #22CC77)")
              }
            >
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;

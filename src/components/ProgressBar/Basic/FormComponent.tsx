"use client";
import React, { FC, useEffect } from "react";
import { Form, Input, Select, DatePicker, Switch, Button, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;


const FormComponent: FC<{ onValidate: (isValid: boolean) => void }> = ({
  onValidate,
}) => {
  const [form] = useForm();


  const quickDateSelect = (weeks: number) => {
    const date = dayjs().add(weeks, "week");
    form.setFieldsValue({ deadline: date });
  };

  // Typing the parameters of onFieldsChange
  const onFieldsChange = (
    // changedFields: any[], // Typing changedFields as an array of form field changes
    // allFields: any[] // Typing allFields as an array, even if it's not used
  ) => {
    // Validate all fields and notify parent of the validation status
    form
      .validateFields()
      .then(() => onValidate(true))
      .catch(() => onValidate(false));
  };

   // Use useEffect to monitor form validation status and enable/disable the button
   useEffect(() => {
    const checkFormCompletion = async () => {
      try {
        // Validate the form fields
        // const values = await form.validateFields();

     
      } catch (err) {
    
        console.log(err)
      }
    };

    // Monitor form changes to enable/disable the button
    checkFormCompletion();
  }, [form]);


  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        className="space-y-6"
        initialValues={{
          listingGeography: "Global",
        }}
        onFieldsChange={onFieldsChange} // Attach event handler here
      >
        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Listing Title
                <span className="text-red-500">*</span>
                <Tooltip title="Enter a descriptive title for your listing">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="listingTitle"
        >
          <Input
            placeholder="Develop a new landing page"
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Listing Slug
                <span className="text-red-500">*</span>
                <Tooltip title="This field can't be edited after listing has been published">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="listingSlug"
        >
          <Input placeholder="develop-a-new-landing-page" disabled />
        </Form.Item>
        <span className="text-xs text-[#94A3B8] mt-1 block">
          This field can&apos;t be edited after a listing has been published
        </span>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Skills Needed
                <span className="text-red-500">*</span>
                <Tooltip title="Select primary skills required for this task">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="skillsNeeded"
        >
          <Select className="custom-select" placeholder="Select...">
            <Option value="design">Design</Option>
            <Option value="development">Development</Option>
            <Option value="marketing">Marketing</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Sub Skills Needed
                <span className="text-red-500">*</span>
                <Tooltip title="Select any specific sub-skills required">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="subSkills"
        >
          <Select className="custom-select" placeholder="Select...">
            <Option value="ui">UI Design</Option>
            <Option value="frontend">Frontend Development</Option>
            <Option value="backend">Backend Development</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Listing Geography
                <span className="text-red-500">*</span>
                <Tooltip title="Select the geographical scope of your listing">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="listingGeography"
        >
          <Select className="custom-select" placeholder="Select...">
            <Option value="Global">Global</Option>
            <Option value="Regional">Regional</Option>
            <Option value="Local">Local</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Point of Contact (TG / X / Email)
                <span className="text-red-500">*</span>
                <Tooltip title="Enter your preferred contact method">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="pointOfContact"
        >
          <Input placeholder="https://x.com/elonmusk" />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Deadline (in Asia/Calcutta)
                <span className="text-red-500">*</span>
                <Tooltip title="Select the deadline for this task">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="deadline"
        >
          <div className="space-y-2">
            <DatePicker
              className="w-full text-[#64748B]"
              format="MM/DD/YYYY HH:mm:ss"
              showTime
            />
            <div className="flex space-x-2">
              <Button
                size="small"
                onClick={() => quickDateSelect(1)}
                className="bg-[#C6F6D5] text-[#38A169] border-transparent rounded-2xl text-xs"
              >
                1 Week
              </Button>
              <Button
                size="small"
                onClick={() => quickDateSelect(2)}
                className="bg-[#C6F6D5] text-[#38A169] border-transparent rounded-2xl text-xs"
              >
                2 Weeks
              </Button>
              <Button
                size="small"
                onClick={() => quickDateSelect(3)}
                className="bg-[#C6F6D5] text-[#38A169] border-transparent rounded-2xl text-xs"
              >
                3 Weeks
              </Button>
            </div>
          </div>
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Referred By
                <Tooltip title="Select who referred you (optional)">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="referredBy"
        >
          <Select placeholder="Select">
            <Option value="team">Team Member</Option>
            <Option value="partner">Partner</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <div className="flex items-center justify-between w-full">
              <span className="flex items-center text-[#64748B]">
                Private Listing
                <Tooltip title="Toggle to make this listing private">
                  <InfoCircleOutlined className="ml-2 text-gray-400" />
                </Tooltip>
              </span>
            </div>
          }
          name="privateListing"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;

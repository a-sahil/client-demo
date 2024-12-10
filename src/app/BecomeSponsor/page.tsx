"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Upload, Button, message, UploadProps, Tooltip, Select } from "antd";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const { Dragger } = Upload;
const { Option } = Select;

const BecomeSponsor = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [subSkillsLength, setSubSkillsLength] = useState(0);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [companyLogo, setCompanyLogo] = useState<string | null>(null);


  const handleProfilePictureUpload: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e?.target?.result as string);
      };
      reader.readAsDataURL(file);
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} profile picture uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} profile picture upload failed.`);
      }
    },
  };


  const handleCompanyLogoUpload: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyLogo(e?.target?.result as string);
      };
      reader.readAsDataURL(file);
      return false;
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} company logo uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} company logo upload failed.`);
      }
    },
  };

  const handleRemoveMedia = (type: "profilePicture" | "companyLogo") => {
    if (type === "profilePicture") {
      setProfilePicture(null);
      message.info("Profile picture removed successfully.");
    } else if (type === "companyLogo") {
      setCompanyLogo(null);
      message.info("Company logo removed successfully.");
    }
  };

  const handleSubSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubSkillsLength(e.target.value.length);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-sm md:text-xl font-bold text-[#2D3748] mb-2">
            Welcome to BuildWith Ton
          </h1>
          <p className="text-[#A0AEC0] text-xl">Lets starts with some basic information about your Company</p>
        </div>
        <p className="text-lg mb-6 text-[#475569]">About you</p>
        <Form form={form} layout="vertical" className="space-y-2" requiredMark={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mb-4">
            <Form.Item
              name="firstName"
              label={
                <span className="text-[#64748B]">
                  First Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-[#1A202C]" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label={
                <span className="text-[#64748B]">
                  Last Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-[#1A202C]" />
            </Form.Item>
          </div>

          <Form.Item
            name="username"
            label={
              <span className="text-[#64748B]">
                Username<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="bg-white text-black" />
          </Form.Item>

          <Form.Item
            name="profilePicture"
            label={
              <span className="text-[#64748B] flex items-center">
                Profile Picture<span className="text-red-500 ml-1">*</span>
              </span>
            }
          >
            <div className="relative w-auto h-28">
              <Dragger {...handleProfilePictureUpload}>
                <div className="flex items-center">
                  {profilePicture ? (
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={profilePicture}
                        alt="uploaded profile picture"
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <LogOut className="-rotate-90 mr-4 h-8 w-8" />
                  )}
                  <div className="flex flex-col">
                    <p className="text-lg text-[#64748B]">Choose or drag and drop media</p>
                    <p className="text-sm text-[#94A3B8] text-left">Maximum size 5 MB</p>
                  </div>
                </div>
              </Dragger>
              {profilePicture && (
                <Button
                  type="text"
                  shape="circle"
                  icon={<Image src="/Vector.png" alt="remove" width={10} height={10} />}
                  className="absolute top-5 -translate-y-1/2 right-2 p-0"
                  onClick={() => handleRemoveMedia("profilePicture")}
                />
              )}
            </div>
          </Form.Item>

          <hr className="h-px my-4 bg-[#94A3B8] border-2 "></hr>

          <p className="text-[#475569] text-xl pt-4">About Your Company</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mb-8">
            <Form.Item
              name="Company Name"
              label={
                <span className="text-[#64748B]">
                  Company Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-black" />
            </Form.Item>

            <Form.Item
              name="companyusername"
              label={
                <span className="text-[#64748B]">
                  Company Username<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-black" />
            </Form.Item>

            <Form.Item
              name="Company URL"
              label={
                <span className="text-[#64748B]">
                  Company URL<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-black" />
            </Form.Item>

            <Form.Item
              name="Company Twitter"
              label={
                <span className="text-[#64748B]">
                  Company Twitter<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-black" />
            </Form.Item>
          </div>

          <Form.Item
            name="entity"
            label={
              <span className="text-[#64748B]">
                Entity Name<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="bg-white text-black" placeholder="Separated by commas" />
          </Form.Item>
          <Form.Item
            name="companyLogo"
            label={
              <span className="text-[#64748B] flex items-center">
                Company Logo<span className="text-red-500 ml-1">*</span>
              </span>
            }
          >
            <div className="relative w-96 h-28">
              <Dragger {...handleCompanyLogoUpload}>
                <div className="flex items-center">
                  {companyLogo ? (
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={companyLogo}
                        alt="uploaded company logo"
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <LogOut className="-rotate-90 mr-4 h-8 w-8" />
                  )}
                  <div className="flex flex-col">
                    <p className="text-lg text-[#64748B]">Choose or drag and drop media</p>
                    <p className="text-sm text-[#94A3B8] text-left">Maximum size 5 MB</p>
                  </div>
                </div>
              </Dragger>
              {companyLogo && (
                <Button
                  type="text"
                  shape="circle"
                  icon={<Image src="/Vector.png" alt="remove" width={10} height={10} />}
                  className="absolute top-5 -translate-y-1/2 right-2 p-0"
                  onClick={() => handleRemoveMedia("companyLogo")}
                />
              )}
            </div>
          </Form.Item>

          <Form.Item
  label={
    <div className="flex items-center justify-between w-full">
      <span className="flex items-center text-[#64748B]">
        Industry
        <span className="text-red-500">*</span>
        <Tooltip title="Select primary skills required for this task"></Tooltip>
      </span>
    </div>
  }
  name="industry"
>
  <Select className="custom-select" placeholder="Select...">
    <Option value="design">Design</Option>
    <Option value="development">Development</Option>
    <Option value="marketing">Marketing</Option>
  </Select>
</Form.Item>


<div className="py-1"></div> 

<Form.Item
  name="Bio"
  label={
    <span className="text-[#64748B]">
      Company Short Bio<span className="text-red-500">*</span>
    </span>
  }
  rules={[{ required: true, message: "Required" }]}
>
  <Input.TextArea
    className="bg-white text-black"
    placeholder="Separated by commas"
    onChange={handleSubSkillsChange}
    maxLength={180}
  />
</Form.Item>

          <div className="text-right text-gray-400 -mt-4">
            {180 - subSkillsLength} characters left
          </div>

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
                (e.currentTarget.style.background =
                  "linear-gradient(to right, #22CC77, #1FBF4A)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(to right, #1FBF4A, #22CC77)")
              }
              onClick={() => router.push('/BountyDashboard')}
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BecomeSponsor;

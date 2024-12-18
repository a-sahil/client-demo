"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Upload, Button, message, UploadProps, Tooltip, Select } from "antd";
import { LogOut } from "lucide-react";

const { Dragger } = Upload;
const { Option } = Select

const EditProfile = () => {
  const [form] = Form.useForm();
  const [subSkillsLength, setSubSkillsLength] = useState(0);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

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



  const handleRemoveMedia = (type: "profilePicture" | "companyLogo") => {
    if (type === "profilePicture") {
      setProfilePicture(null);
      message.info("Profile picture removed successfully.");
    } else if (type === "companyLogo") {
      // setCompanyLogo(null);
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
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Edit Profile
          </h1>
          <p className="text-black">Edit some basic information about your profile</p>
        </div>
        <Form form={form} layout="vertical" className="space-y-2" requiredMark={false}>
        <Form.Item
            name="profilePicture"
            label={
              <span className="text-black flex items-center">
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
                    <p className="text-lg text-black">Choose or drag and drop media</p>
                    <p className="text-sm text-gray-400 text-left">Maximum size 5 MB</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mb-4">
            <Form.Item
              name="firstName"
              label={
                <span className="text-black">
                  First Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-black" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label={
                <span className="text-black">
                  Last Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="bg-white text-black" />
            </Form.Item>
          </div>

          <Form.Item
            name="username"
            label={
              <span className="text-black">
                Username<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="bg-white text-black" />
          </Form.Item>


          <Form.Item
            name="Bio"
            label={
              <span className="text-Black">
                You One Line Bio
              </span>
            }
           
          >
            <Input className=" py-5" />
          </Form.Item>


          <Form.Item
            name="walletAddress"
            label={
              <span className="text-Black">
                Your TON Wallet Address<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="" />
          </Form.Item>

          <hr className="h-px my-4 bg-[#94A3B8] border-2 "></hr>

          <p className="text-[#475569] text-xl pt-4">About Your Company</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mb-8">
            <Form.Item
              name="Company Name"
              label={
                <span className="text-black">
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
                <span className="text-black">
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
                <span className="text-black">
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
                <span className="text-black">
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
              <span className="text-black">
                Entity Name<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="bg-white text-black" placeholder="Separated by commas" />
          </Form.Item>
  

          <Form.Item
            name="Location"
            label={
              <span className="text-black">
                Location<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="bg-white text-black" placeholder="Separated by commas" />
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


          <Form.Item
            name="Bio"
            label={
              <span className="text-black">
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
            >
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;

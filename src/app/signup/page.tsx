"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { Form, Input, Upload, Button, Tooltip, message, UploadProps } from "antd";
import { InboxOutlined, QuestionCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const { Dragger } = Upload;

const ProfileForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [subSkillsLength, setSubSkillsLength] = useState(0);
  const [uploadedMedia, setUploadedMedia] = useState<string | null>(null); // To store base64 or URL of uploaded image

  const handleSubmit = async (values: { firstName: any; lastName: any; username: any; Bio: any; walletAddress: any; skills: string; subSkills: string; }) => {
    // Create a formatted user data object
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      bio: values.Bio,
      walletAddress: values.walletAddress,
      profilePicture: uploadedMedia,
      skills: values.skills.split(',').map(skill => skill.trim()),
      subSkills: values.subSkills.split(',').map(skill => skill.trim())
    };

    // Store the data (you can use localStorage temporarily or your preferred state management)
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Navigate to profile page
    router.push('/Profile');
  };

  const handleRemoveMedia = (p0: string) => {
    setUploadedMedia(null); // Remove the uploaded media
    message.info("Media removed successfully.");
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedMedia(e?.target?.result as string); // Set uploaded media as base64 URL
      };
      reader.readAsDataURL(file);
      return false; // Prevent automatic upload
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };


  
  

  const handleSubSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubSkillsLength(e.target.value.length);
  };

  return (
    <div className="min-h-screen bg-[#121212] p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Create Your Profile
          </h1>
          <p className="text-gray-400">Start Contributing to crypto projects</p>
        </div>
        <p className="text-lg mb-6 text-white">About you</p>
        <Form form={form} layout="vertical" className="space-y-6" requiredMark={false} onFinish={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mb-8">
            <Form.Item
              name="firstName"
              label={
                <span className="text-white">
                  First Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="custom-input" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label={
                <span className="text-white">
                  Last Name<span className="text-red-500">*</span>
                </span>
              }
              rules={[{ required: true, message: "Required" }]}
            >
              <Input className="custom-input" />
            </Form.Item>
          </div>

          <Form.Item
            name="username"
            label={
              <span className="text-white">
                Username<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="custom-input" />
          </Form.Item>

          <Form.Item
            name="Bio"
            label={
              <span className="text-white">
                You One Line Bio
              </span>
            }
           
          >
            <Input className="custom-input py-5" />
          </Form.Item>

          <Form.Item
            name="walletAddress"
            label={
              <span className="text-white">
                Your TON Wallet Address<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="custom-input" />
          </Form.Item>

{/* upcd */}

<Form.Item
            name="profilePicture"
            label={
              <span className="text-white flex items-center">
                Profile Picture<span className="text-red-500 ml-1">*</span>
              </span>
            }
          >
            <div className="relative w-auto h-28">
            <Dragger {...props} className="custom-dragger">
                <div className="flex items-center">
                  {uploadedMedia ? (
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={uploadedMedia}
                        alt="uploaded profile picture"
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <LogOut className="-rotate-90 mr-4 h-8 w-8" />
                  )}
                  <div className="flex flex-col">
                    <p className="text-lg ">Choose or drag and drop media</p>
                    <p className="text-sm text-gray-400 text-left">Maximum size 5 MB</p>
                  </div>
                </div>
              </Dragger>
              {uploadedMedia && (
                <Button
                  type="text"
                  shape="circle"
                  icon={<Image src="/Vector.png" alt="remove" width={14} height={14} />}
                  className="absolute top-10 -translate-y-1/2 right-2 p-0"
                  onClick={() => handleRemoveMedia("uploadedMedia")}
                />
              )}
            </div>
          </Form.Item>


<hr className="h-px my-8 bg-[#94A3B8] border-1 "></hr>

<Form.Item
            name="skills"
            label={
              <span className="text-white">
                Your Skills<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="custom-input" placeholder="Separated by commas" />
          </Form.Item>
<Form.Item
            name="skills"
            label={
              <span className="text-white">
                Your Skills<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input className="custom-input" placeholder="Separated by commas" />
          </Form.Item>

          <Form.Item
            name="subSkills"
            label={
              <span className="text-white">
                Your Sub Skills<span className="text-red-500">*</span>
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
          >
            <Input.TextArea
              className="custom-input"
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
                (e.currentTarget.style.background = "linear-gradient(to right, #22CC77, #1FBF4A)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "linear-gradient(to right, #1FBF4A, #22CC77)")
              }
              onClick={() => router.push('/updateProfile')}
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
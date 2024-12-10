"use client";
import React from "react";
import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/navigation";

const ProfileForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values: { X: string; LinkedIn: string; Github: string; Portfolio: string; }) => {
    try {
      
      const existingData = localStorage.getItem('userData');
      const existingUserData = existingData ? JSON.parse(existingData) : {};

      const userData = {
        ...existingUserData,
        socialLinks: {
          x: values.X,
          linkedin: values.LinkedIn,
          github: values.Github,
          portfolio: values.Portfolio
        }
      };

   
      localStorage.setItem('userData', JSON.stringify(userData));
      
      message.success('Profile updated successfully!');
      router.push('/Profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      message.error('Failed to update profile. Please try again.');
    }
  };

  
  const renderLabel = (label: string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined, isRequired = false) => (
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
            Update Your Profile
          </h1>
          <p className="text-gray-400">Add your social media links</p>
        </div>
        <Form 
          form={form} 
          layout="vertical" 
          className="space-y-6" 
          requiredMark={false} 
          onFinish={handleSubmit}
          initialValues={{
            X: '',
            LinkedIn: '',
            Github: '',
            Portfolio: ''
          }}
        >
          <Form.Item
            name="X"
            label={renderLabel("X (Twitter)", true)}
            rules={[
              { required: true, message: 'Please enter your X (Twitter) profile URL' },
              { type: 'url', message: 'Please enter a valid URL' }
            ]}
          >
            <Input 
              className="custom-input" 
              placeholder="https://x.com/yourusername"
            />
          </Form.Item>
          
          <Form.Item
            name="LinkedIn"
            label={renderLabel("LinkedIn", true)}
            rules={[
              { required: true, message: 'Please enter your LinkedIn profile URL' },
              { type: 'url', message: 'Please enter a valid URL' }
            ]}
          >
            <Input 
              className="custom-input" 
              placeholder="https://linkedin.com/in/yourusername"
            />
          </Form.Item>
          
          <Form.Item
            name="Github"
            label={renderLabel("Github", true)}
            rules={[
              { required: true, message: 'Please enter your Github profile URL' },
              { type: 'url', message: 'Please enter a valid URL' }
            ]}
          >
            <Input 
              className="custom-input" 
              placeholder="https://github.com/yourusername"
            />
          </Form.Item>
          
          <Form.Item
            name="Portfolio"
            label={renderLabel("Portfolio", true)}
            rules={[
              { required: true, message: 'Please enter your portfolio URL' },
              { type: 'url', message: 'Please enter a valid URL' }
            ]}
          >
            <Input 
              className="custom-input" 
              placeholder="https://yourportfolio.com"
            />
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
// components/ProjectForm.tsx
import React from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import styles from './ProjectForm.module.css';

interface ProjectFormValues {
  projectTitle: string;
  projectDescription: string;
  skillsUsed: string[];
  dateOfCompletion: Date;
  projectLink: string;
  projectGithub: string;
}

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Java',
  'HTML/CSS',
  'Docker',
  'AWS',
  'MongoDB',
];

const ProjectProofForm: React.FC = () => {
  const [form] = Form.useForm();


  const onFinish = (values: ProjectFormValues) => {
    console.log('Success:', values);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#131313] flex items-center justify-center p-3">
      <div className="max-w-md w-full bg-[#131313] rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-left">Add Project</h2>
        <hr className="h-px my-8 bg-[#18212E] border-0" />
        
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          className={`space-y-4 ${styles.formWrapper}`}
        >
          <Form.Item
            name="projectTitle"
            label={<span className="text-white">Project Title</span>}
            rules={[{ required: true, message: 'Please enter project title' }]}
          >
            <Input 
              className={`${styles.customInput} bg-[#131313] border-[#252525] text-white`}
              placeholder="Enter project title"
            />
          </Form.Item>

          <Form.Item
            name="projectDescription"
            label={<span className="text-white">Project Description</span>}
            rules={[{ required: true, message: 'Please enter project description' }]}
          >
            <Input
              className={`${styles.customInput} bg-[#131313] border-[#252525] text-white`}
              placeholder="Enter project description"
            />
          </Form.Item>

          <Form.Item
            name="skillsUsed"
            label={<span className="text-white">Skills Used</span>}
            rules={[{ required: true, message: 'Please select skills used' }]}
          >
            <Select
              mode="multiple"
              placeholder="Select skills"
              className={`${styles.customSelect} ${styles.selectDropdown} bg-[#131313] text-white`}
              options={skills.map(skill => ({ label: skill, value: skill }))}
              dropdownStyle={{ backgroundColor: '#131313' }}
            />
          </Form.Item>

          <Form.Item
            name="dateOfCompletion"
            label={<span className="text-white">Date of Completion</span>}
            rules={[{ required: true, message: 'Please select completion date' }]}
          >
            <DatePicker 
              className={`${styles.customInput} ${styles.datePicker} w-full bg-[#131313] border-[#252525] text-white`}
            />
          </Form.Item>

          <Form.Item
            name="projectLink"
            label={<span className="text-white">Project Link</span>}
            rules={[
              { required: true, message: 'Please enter project link' },
              { type: 'url', message: 'Please enter a valid URL' }
            ]}
          >
            <Input 
              prefix={<LinkOutlined className="text-gray-400" />}
              className={`${styles.customInput} bg-[#131313] border-[#252525] text-white`}
              placeholder="https://your-project.com"
            />
          </Form.Item>

          <Form.Item
            name="projectGithub"
            label={<span className="text-white">Projects Github</span>}
            rules={[
              { required: true, message: 'Please enter GitHub link' },
              { type: 'url', message: 'Please enter a valid URL' }
            ]}
          >
            <Input 
              prefix={<GithubOutlined className="text-gray-400" />}
              className={`${styles.customInput} bg-[#131313] border-[#252525] text-white`}
              placeholder="https://github.com/username/repo"
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProjectProofForm;
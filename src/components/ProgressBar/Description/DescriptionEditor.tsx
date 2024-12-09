import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Italic, Underline, Link as LinkIcon, Link2 } from 'lucide-react';
import { FC, useEffect } from 'react';
import { Tooltip } from 'antd';

interface DescriptionEditorProps {
  onChange?: (content: string) => void;
  onValidate?: (isValid: boolean) => void; // Validation prop
}

const DescriptionEditor: FC<DescriptionEditorProps> = ({ onChange, onValidate }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: 'Write down description for your bounty',
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose max-w-none min-h-[200px] focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      onChange?.(content);

      // Validation logic
      const isValid = content.trim().length > 0 && !editor.isEmpty;
      onValidate?.(isValid);
    },
  });

  const toggleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const toggleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const toggleUnderline = () => {
    editor?.chain().focus().toggleUnderline().run();
  };

  const setLink = () => {
    const url = window.prompt('URL');
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  useEffect(() => {
    if (onValidate) {
      const initialValidity = editor?.getHTML().trim().length > 0;
      onValidate(initialValidity || false);
    }
  }, [editor, onValidate]);

  return (
    <div className="w-full">
      <div className="flex items-center mb-2">
        <label className="text-sm text-[#334155] font-medium flex items-center">
          Description
          <span className="text-red-500 ml-1">*</span>
          <Tooltip title="Write down a detailed description of the bounty">
            <span className="ml-2 text-gray-400 cursor-help">ⓘ</span>
          </Tooltip>
        </label>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="bg-[#D9D9D966] border-b px-3 py-2 flex items-center space-x-3">
          <button
            onClick={toggleBold}
            className={`p-1 rounded text-[#252525] ${
              editor?.isActive('bold') ? 'bg-gray-200' : ''
            }`}
            aria-label="Bold"
          >
            <Bold size={16} />
          </button>

          <button
            onClick={toggleItalic}
            className={`p-1 rounded text-[#252525] ${
              editor?.isActive('italic') ? 'bg-gray-200' : ''
            }`}
            aria-label="Italic"
          >
            <Italic size={16} />
          </button>

          <button
            onClick={toggleUnderline}
            className={`p-1 rounded text-[#252525] ${
              editor?.isActive('underline') ? 'bg-gray-200' : ''
            }`}
            aria-label="Underline"
          >
            <Underline size={16} />
          </button>

          <div className="h-6 w-px bg-[#BEBEBE]"></div>

          <button
            onClick={setLink}
            className={`p-1 rounded text-[#1E1E1E] ${
              editor?.isActive('link') ? 'bg-gray-200' : ''
            }`}
            aria-label="Add Link"
          >
            <Link2 size={18} />
          </button>

          <select
            className="ml-2  px-3 py-1  bg-[#FFFFFF] border rounded-md hover:bg-gray-50 text-[#8C8C8C] text-xs"
            defaultValue="paragraph"
            onChange={(e) => {
              if (e.target.value === 'paragraph') {
                editor?.chain().focus().setParagraph().run();
              } else if (e.target.value.startsWith('heading')) {
                editor?.chain().focus().toggleHeading({
                  level: parseInt(e.target.value.split('-')[1]) as 1 | 2 | 3,
                }).run();
              }
            }}
          >
            <option value="paragraph">Block Type</option>
            <option value="heading-1">Heading 1</option>
            <option value="heading-2">Heading 2</option>
            <option value="heading-3">Heading 3</option>
          </select>
        </div>

        <EditorContent editor={editor} className="p-3 text-black" />
      </div>
    </div>
  );
};

export default DescriptionEditor;

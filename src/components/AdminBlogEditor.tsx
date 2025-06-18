"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import DOMPurify from "dompurify"; // ✅ جديد

import {
  Bold, Italic, Underline as UnderlineIcon, List, ListOrdered,
  Link as LinkIcon, Image as ImageIcon, Eraser, Type, Eye
} from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function AdminBlogEditor({ value, onChange }: Props) {
  const [linkInput, setLinkInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2] },
      }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      handleDOMEvents: {
        paste: (view, event) => {
          const html = event.clipboardData?.getData("text/html");
          const text = event.clipboardData?.getData("text/plain");

          if (html) {
            const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
            editor?.commands.insertContent(clean);
            event.preventDefault();
            return true;
          }

          if (text) {
            editor?.commands.insertContent(text);
            event.preventDefault();
            return true;
          }

          return false;
        },
      },
      attributes: {
        class:
          "min-h-[350px] border rounded-xl p-4 bg-white focus:outline-none text-right leading-relaxed prose prose-sm prose-h1:text-2xl prose-h2:text-xl prose-headings:text-text prose-a:text-blue-600 prose-ul:list-disc prose-ol:list-decimal",
        dir: "rtl",
      },
    },
        immediatelyRender: false,
    
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const iconBtnClass =
    "p-2 rounded-md border hover:bg-gray-100 transition flex items-center";
  const iconColor = (active: boolean) =>
    active ? "text-primary" : "text-gray-500";

  if (!editor) return null;

  return (
    <div className="space-y-2">
      {/* شريط الأدوات */}
      <div className="flex flex-wrap gap-2 bg-gray-50 p-2 rounded-md border justify-start">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={iconBtnClass}>
          <Bold className={iconColor(editor.isActive("bold"))} size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={iconBtnClass}>
          <Italic className={iconColor(editor.isActive("italic"))} size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={iconBtnClass}>
          <UnderlineIcon className={iconColor(editor.isActive("underline"))} size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={iconBtnClass}>
          <List className={iconColor(editor.isActive("bulletList"))} size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={iconBtnClass}>
          <ListOrdered className={iconColor(editor.isActive("orderedList"))} size={18} />
        </button>
        <button onClick={() => setShowLinkInput(!showLinkInput)} className={iconBtnClass}>
          <LinkIcon className="text-gray-500" size={18} />
        </button>
        <button onClick={() => setShowImageInput(!showImageInput)} className={iconBtnClass}>
          <ImageIcon className="text-gray-500" size={18} />
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()} className={iconBtnClass}>
          <Eraser className="text-gray-500" size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={iconBtnClass}>
          <Type className={iconColor(editor.isActive("heading", { level: 1 }))} size={18} />
          <span className="text-xs ml-1">H1</span>
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={iconBtnClass}>
          <Type className={iconColor(editor.isActive("heading", { level: 2 }))} size={18} />
          <span className="text-xs ml-1">H2</span>
        </button>
        <button
          type="button"
          onClick={() => setShowPreview(true)}
          className={iconBtnClass + " ml-auto"}
        >
          <Eye className="text-gray-500" size={18} />
          <span className="text-xs ml-1">معاينة</span>
        </button>
      </div>

      {/* إدخال رابط */}
      {showLinkInput && (
        <div className="flex gap-2 items-center mt-1">
          <input
            type="text"
            placeholder="أدخل الرابط هنا..."
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            className="flex-1 p-2 border min-w-0 rounded text-sm"
          />
          <button
            type="button"
            className="bg-primary text-white px-3 py-1 rounded text-sm"
            onClick={() => {
              if (linkInput.trim()) {
                const selection = editor.state.selection;
                const selectedText = editor.state.doc.textBetween(selection.from, selection.to, " ");
                if (selectedText) {
                  editor.chain().focus().setLink({ href: linkInput.trim() }).run();
                } else {
                  editor.chain().focus().insertContent(`<a href="${linkInput.trim()}" target="_blank" rel="noopener noreferrer">${linkInput.trim()}</a>`).run();
                }
                setLinkInput("");
                setShowLinkInput(false);
              }
            }}
          >
            إدراج
          </button>
        </div>
      )}

      {/* إدخال صورة */}
      {showImageInput && (
        <div className="flex gap-2 items-center mt-1">
          <input
            type="text"
            placeholder="أدخل رابط الصورة..."
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
            className="flex-1 p-2 border min-w-0 rounded text-sm"
          />
          <button
            type="button"
            className="bg-primary text-white px-3 py-1 rounded text-sm"
            onClick={() => {
              if (imageInput.trim()) {
                editor.chain().focus().setImage({ src: imageInput.trim() }).run();
                setImageInput("");
                setShowImageInput(false);
              }
            }}
          >
            إدراج صورة
          </button>
        </div>
      )}

      {/* المحرر */}
      <EditorContent editor={editor} />
      <div className="text-xs text-gray-400 mt-1">
        ⏎ لإنشاء سطر جديد داخل الفقرة استخدم <strong>Shift + Enter</strong>
      </div>

      {/* المعاينة */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto p-4 shadow-xl relative">
            <button
              className="absolute top-2 left-2 text-gray-500 hover:text-black"
              onClick={() => setShowPreview(false)}
            >
              ✕
            </button>
            <div
              className="prose max-w-none rtl text-right"
              dir="rtl"
              dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

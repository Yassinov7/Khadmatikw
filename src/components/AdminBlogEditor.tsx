"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import {
  Bold, Italic, Underline as UnderlineIcon, List, ListOrdered,
  Link as LinkIcon, Image as ImageIcon, Eraser, Type
} from "lucide-react";
import { useState, useRef } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function AdminBlogEditor({ value, onChange }: Props) {
  const [linkInput, setLinkInput] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      Heading.configure({ levels: [1, 2] }),
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "min-h-[350px] border rounded-xl p-4 bg-white focus:outline-none text-right leading-relaxed",
        dir: "rtl",
      },
    },
  });

  const iconBtnClass =
    "p-2 rounded-md border hover:bg-gray-100 transition flex items-center";
  const iconColor = (active: boolean) =>
    active ? "text-primary" : "text-gray-500";

  async function handleImageUpload(file: File) {
    const fileName = `cover_${Date.now()}_${file.name}`;
    const { error } = await supabase.storage.from("blog-covers").upload(fileName, file);
    if (!error) {
      const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-covers/${fileName}`;
      editor?.chain().focus().setImage({ src: url }).run();
    } else {
      alert("فشل رفع الصورة!");
    }
  }

  if (!editor) return null;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 bg-gray-50 p-2 rounded-md border justify-start">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={iconBtnClass}><Bold className={iconColor(editor.isActive("bold"))} size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={iconBtnClass}><Italic className={iconColor(editor.isActive("italic"))} size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={iconBtnClass}><UnderlineIcon className={iconColor(editor.isActive("underline"))} size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={iconBtnClass}><List className={iconColor(editor.isActive("bulletList"))} size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={iconBtnClass}><ListOrdered className={iconColor(editor.isActive("orderedList"))} size={18} /></button>
        <button onClick={() => setShowLinkInput((v) => !v)} className={iconBtnClass}><LinkIcon className="text-gray-500" size={18} /></button>
        <button onClick={() => fileInputRef.current?.click()} className={iconBtnClass}><ImageIcon className="text-gray-500" size={18} /></button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()} className={iconBtnClass}><Eraser className="text-gray-500" size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={iconBtnClass}><Type className={iconColor(editor.isActive("heading", { level: 1 }))} size={18} /><span className="text-xs ml-1">H1</span></button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={iconBtnClass}><Type className={iconColor(editor.isActive("heading", { level: 2 }))} size={18} /><span className="text-xs ml-1">H2</span></button>
      </div>

      {showLinkInput && (
        <div className="flex gap-2 items-center mt-1">
          <input
            type="text"
            placeholder="أدخل الرابط هنا..."
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            className="flex-1 p-2 border rounded text-sm"
          />
          <button
            type="button"
            className="bg-primary text-white px-3 py-1 rounded text-sm"
            onClick={() => {
              if (linkInput.trim()) {
                editor.chain().focus().setLink({ href: linkInput }).run();
                setLinkInput("");
                setShowLinkInput(false);
              }
            }}
          >
            إدراج
          </button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageUpload(file);
        }}
      />

      <EditorContent editor={editor} />
      <div className="text-xs text-gray-400 mt-1">
        ⏎ لإنشاء سطر جديد داخل الفقرة استخدم <strong>Shift + Enter</strong>
      </div>
    </div>
  );
}

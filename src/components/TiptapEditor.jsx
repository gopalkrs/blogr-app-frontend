import React from "react";
import {
  EditorProvider,
  FloatingMenu,
  BubbleMenu,
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenu from "./EditorMenu";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";


const TiptapEditor = ({content, onChange}) => {

  

  const extensions = [
    StarterKit.configure({
      bulletList : {
        HTMLAttributes: {
          class: "list-disc pl-5",
        },
      },
      orderedList: {
        HTMLAttributes: {
          class: "list-decimal pl-5",
        },
      },
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Highlight
  ];
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: "bg-slate-50 w-full min-h-[150px] px-3 py-2 rounded-md border",
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      //console.log(editor.getHTML());
      onChange?.(html);
    }
  });

  return (
    <div>
      <EditorContent editor={editor} />
      <EditorMenu editor={editor} />
    </div>
  );
};

export default TiptapEditor;

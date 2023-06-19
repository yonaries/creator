"use client";

import { RichTextEditor } from "@mantine/tiptap";
import { Editor } from "@tiptap/react";
import { cn } from "@/lib/utils";

type Props = {
  onUpdate?: (e: Editor) => void;
  editor: Editor | null;
  className?: string;
};
export default function CustomRichTextEditor({
  className,
  editor,
  onUpdate,
}: Props) {
  if (!editor) return null;

  editor.on("update", (e) => {
    if (onUpdate) onUpdate(e.editor as Editor);
  });

  return (
    <RichTextEditor editor={editor} className={cn("", className)}>
      <RichTextEditor.Toolbar sticky stickyOffset={0} className="dark:bg-muted">
        <RichTextEditor.ControlsGroup className="px-0">
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 color="red" />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content className="dark:text-white" bg={"transparent"} />
    </RichTextEditor>
  );
}

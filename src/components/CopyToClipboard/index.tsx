import React, { useCallback, useRef, useState } from "react";
import { BiCopy } from "react-icons/bi";

interface CopyToClipboardProps {
  title?: string;
  content: string;
  canCopy?: boolean;
}

export const copyText = (text: string, cb?: () => void) => {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(text).then(cb);
  } else if (document.queryCommandSupported("copy")) {
    const ele = document.createElement("textarea");
    ele.value = text;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand("copy");
    document.body.removeChild(ele);
    cb?.();
  }
};

export default function CopyToClipboard({
  title,
  content,
  canCopy = true,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);
  const codeElement = useRef<HTMLElement>(null);

  const copyHandler = useCallback(() => {
    canCopy &&
      copyText(content, () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      });
  }, [content]);

  return (
    <div className="relative bg-gray-50 p-2 border max-w-lg flex mx-auto items-center">
      <pre className="overflow-x-auto flex-1">
        {title && `${title}:`}{" "}
        <code ref={codeElement} onClick={copyHandler}>
          {content}
        </code>
      </pre>
      {canCopy && (
        <button className="ml-1 p-1 flex-none rounded" onClick={copyHandler}>
          <BiCopy className="h-5 w-5 fill-gray-600" />
        </button>
      )}
      {copied && (
        <span className="absolute bg-dark p-2 bg-white rounded-md border right-6 text-sm font-medium">
          Copied!
        </span>
      )}
    </div>
  );
}

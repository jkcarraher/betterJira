"use client"; // Ensure client-side rendering

import React, { forwardRef, ReactNode } from "react";

interface DialogProps{
    children: ReactNode;
  toggleDialog: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, toggleDialog }, ref) => {
  return (
    <dialog
      ref={ref}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          toggleDialog();
        }
      }}
      className="relative rounded-lg bg-white w-[500px]"
    >
      <div className="w-full h-full py-6 pl-6 pr-9">
        <button
          onClick={toggleDialog}
          className="absolute text-sm top-3 right-3 text-zinc-600 hover:text-black rounded-md px-1 transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex flex-col">
          <h1 className="font-medium text-lg text-gray-900">Add Category</h1>
          <p className="font-light text-sm text-zinc-400 mb-2">Enter category name and upload an image</p>
          {children}
        </div>
      </div>
    </dialog>
  );
});

Dialog.displayName = "Dialog";

export default Dialog;
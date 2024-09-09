"use client";

import Image from "next/image";

interface PopupProps {
  imageUrl: string;
  onClose: () => void;
}

export function Popup({ imageUrl, onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-transparent p-2 rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <Image
          src={imageUrl}
          alt="Popup content"
          className="max-w-md max-h-90"
          width={600}
          height={400}
          layout="intrinsic"
        />
      </div>
    </div>
  );
}

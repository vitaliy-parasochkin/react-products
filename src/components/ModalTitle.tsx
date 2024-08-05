import { DialogTitle } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import IconButton from "./IconButton.tsx";

export default function ModalTitle({ closeModal, children }) {
  return (
    <DialogTitle className="flex items-center justify-between">
      <h3 className="text-lg font-medium text-gray-900">{children}</h3>
      <IconButton variant="light" onClick={closeModal}>
        <IoClose className="w-6 h-6" />
      </IconButton>
    </DialogTitle>
  );
}

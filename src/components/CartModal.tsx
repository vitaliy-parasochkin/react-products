import Modal from "./Modal.tsx";
import ModalTitle from "./ModalTitle.tsx";
import CartProducts from "./CartProducts.tsx";
import ButtonItem from "./ButtonItem.tsx";
import CartTotal from "./CartTotal.tsx";
import EmptyCart from "./EmptyCart.tsx";
import { CartModalProps } from "../types";

export default function CartModal({
  cartProducts,
  isOpen,
  closeModal,
}: CartModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <ModalTitle closeModal={closeModal}>Cart</ModalTitle>
      {cartProducts?.length > 0 ? (
        <div className="flex flex-col gap-y-4 pt-4">
          <CartProducts />
          <div className="flex items-start justify-between gap-x-5">
            <ButtonItem
              onClick={closeModal}
              className="px-3"
              variant="secondary-outline"
            >
              Continue shopping
            </ButtonItem>
            <CartTotal />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Modal>
  );
}

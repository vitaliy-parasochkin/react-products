import Modal from "./Modal.tsx";
import ModalTitle from "./ModalTitle.tsx";
import CartProducts from "./CartProducts.tsx";
import ButtonItem from "./ButtonItem.tsx";
import CartTotal from "./CartTotal.tsx";
import imgEmptyCart from "../assets/emptyCart.jpg";
import EmptyCart from "./EmptyCart.tsx";

export default function CartModal({ cartProducts, isOpen, closeModal }) {
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

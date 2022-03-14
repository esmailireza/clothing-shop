export const CheckInCart = (cart, product) => {
  return cart.find((p) => p.id === product.id);
};

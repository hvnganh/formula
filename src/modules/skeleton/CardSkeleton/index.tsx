const CartSkeleton = () => (
  <div className="tw-w-full">
    <div className="tw-flex tw-justify-between tw-w-full">
      <div className="tw-h-4 tw-w-1/3 tw-bg-gray-300 tw-animate-pulse tw-rounded-lg" />
      <div className="tw-h-4 tw-w-1/3 tw-bg-gray-300 tw-animate-pulse tw-rounded-lg" />
    </div>
    <div className="tw-flex tw-justify-between tw-w-full tw-my-2">
      <div className="tw-h-4 tw-w-1/3 tw-bg-gray-300 tw-animate-pulse tw-rounded-lg" />
      <div className="tw-h-4 tw-w-1/3 tw-bg-gray-300 tw-animate-pulse tw-rounded-lg" />
    </div>
    <div className="tw-h-[200px] tw-bg-gray-300 tw-animate-pulse tw-rounded-lg" />
  </div>
  );

export default CartSkeleton;

const CartItem = () => {
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="w-[95%]">
        <h1 className="text-center text-[40px] pt-[30px] pb-[50px]">
          Cart Totals
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Size
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="w-12 h-12 object-cover"
                  />
                </th>
                <td className="px-6 py-4">LV</td>
                <td className="px-6 py-4">$200</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">L</td>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4">$123123</td>
                <td className="pl-6 py-4">
                  <button className="bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border hover:bg-red-400 rounded">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">$15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end py-5">
          <button className="bg-[#D6763C] hover:bg-[#D6763C] hover:opacity-80 text-white font-bold py-4 px-20 ">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
        <div className="mx-7">
      <div className="max-w-6xl mx-auto p-10 text-gray-800 text-center border m-10 rounded-md ">
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold mb-2">Investment Successful</h1>
          <h2 className="text-lg">You successfully Invested</h2>
  
          <div className="bg-white p-2 rounded-md text-black mt-5 text-lg font-bold">
            ${amount}
          </div>
        </div>
      </div>
      </div>
    );
  }
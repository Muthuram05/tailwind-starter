import "./App.css";

function App() {
  return (
    <div class="flex w-full bg-white p-5 rounded-xl">
      <div className="w-1/3 flex flex-col items-center justify-ontent-center">
        <img
          src="https://pixlr.com/images/index/product-image-one.webp"
          alt="logo"
          className="rounded-full w-50 h-50 border-2 border-emerald-600"
        />
        <div className="pt-2 pb-4 flex gap-1">
          <div className="w-4 h-1 bg-green-600"></div>
          <div className="w-4 h-1 bg-green-600"></div>
          <div className="w-4 h-1 bg-green-600"></div>
          <div className="w-4 h-1 bg-green-600"></div>
          <div className="w-4 h-1 bg-green-600"></div>
          <div className="w-4 h-1 bg-green-600"></div>
          <div className="w-4 h-1 bg-gray-300"></div>
          <div className="w-4 h-1 bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-evenly w-full">
          <div>
            <h3>RATINGS</h3>
            <h3 className="text-green-600 text-2xl">******</h3>
          </div>
          <div>
            <h3>ACTIVITY</h3>
            <h3>90%</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start w-full p-8 pb-0">
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-2xl">Muthu Raman</h3>
            <p>Tvl, Tamil Nadu</p>
          </div>
          <button className="w-20 bg-green-700 cursor-pointer hover:bg-blue-700">Follow</button>
        </div>
        <div className="w-full pt-12">
          <table className="w-full text-start text-xl">
            <tr>
              <td className="p-2">Email</td>
              <td>mr032495@gmail.com</td>
            </tr>
            <tr>
              <td className="p-2">City</td>
              <td>Tirunelveli</td>
            </tr>
            <tr>
              <td className="p-2">State</td>
              <td>Tamil Nadu</td>
            </tr>
            <tr>
              <td className="p-2">Contry</td>
              <td>India</td>
            </tr>
            <tr>
              <td className="p-2">Phone</td>
              <td>1234567890</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

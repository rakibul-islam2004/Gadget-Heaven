import React, { useEffect, useState } from "react";

const PurchaseHistory = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
    setPurchaseHistory(history);

    // Calculate total cost
    const cost = history.reduce((acc, item) => acc + item.price, 0);
    setTotalCost(cost);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Purchase History</h2>
      <p className="font-bold text-xl mb-4">
        Total Cost: ${totalCost.toFixed(2)}
      </p>

      {purchaseHistory.length > 0 ? (
        <div>
          {purchaseHistory.map((item, index) => (
            <div
              key={`${item.product_id}-${index}`}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4"
            >
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
                <div>
                  <h3 className="font-bold">{item.product_title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="font-bold">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No purchase history available.</p>
      )}
    </div>
  );
};

export default PurchaseHistory;
